# react-study

## s1 simple

### 代码结构

- index.html

----------

最简单的react示例，只有一个html页面，相关的js都是直接在html里直接引入的

jsx代码也是写在html里，用`<script src="text/babel"></script>`标识

引入的js文件有：

- react.js
- react-dom.js
- babel-core/5.8.23/browser.min.js

## s2 独立js文件

### 代码结构

- app.js
- index.html

----

将js代码分离出来，在html代码中引入该分离的js文件，引入方式为：`<script type="text/babel" src="./app.js"/>`

其实这种方式并不能运行成功，因为(chrome)浏览器不会加载type为text/babel的本地文件，只能在服务器环境下运行成功

## s3 引入webpack

### 代码结构

- build
  - js
    - app.entry.js
    - common.js
- src
  - js
    - app.js
- index.html
- package.json
- webpack.config.js

---

### npm

npm是个好东西，用他来引入各种js资源，自己感觉类似于java中的maven，定义了项目的生命周期。配置文件：package.json。

### webpack

webpack是个好东西，它负责**打包**源文件，引入webpack插件后能使webpack在打包时做到如下工作：

1. 解决模块依赖（下个示例会有用到）
2. 转换jsx语法（在html页面中只需引用转换后的普通js文件）
3. 转换es6（可以顺畅使用es6的新特性了）
4. 代码混淆（一定程度上可以提高代码安全性，详见公司安全组第47期的分享链接：<可信前端之路> http://www.freebuf.com/articles/web/102269.html）
5. 打包成一个(或多个)js文件

## s4 模块化

### 1. package.json中引入babel相关的包

```javascript
"devDependencies" : {
	"babel-core" : "^6.7.4",
	"babel-loader" : "^6.2.4",
	"babel-preset-es2015" : "^6.3.13",
	"babel-preset-react" : "^6.3.13"
}
```
### 2. webpack.config.js指定源文件和打包文件

```javascript
entry : {
	app : './src/js/app.js'
},
output : {
	path : __dirname + "/build/js/",
	filename : '[name].entry.js'
},
```

### 3. 配置es6和jax转化，webpack.config.js中配置babel-loader

```javascript
{
	test : /.js?$/,
	loader : 'babel-loader',
	exclude : /node_modules/,
	query : {
		presets : ['es2015', 'react']
	}
}
```
### 4. webpack打包命令

`webpack --config webpack.config.js`

## s4 模块化（es6）

### 1. 模块操作

- 新建模块：export

```javascript
export var sss;
export {sss};
export default sss;
```
- 引入其他模块：import

```javascript
import d, {a, b} from mod;
```
> es6相关参考：http://es6.ruanyifeng.com/

### 2. React-Bootstrap

- 安装

  ```
  npm install react-bootstrap --save
  ```

- 使用

  ```javascript
  import Button from 'react-bootstrap/lib/Button';
  // or
  import { Button } from 'react-bootstrap';
  ```

- Bootstrap组件使用说明参考:
  > https://react-bootstrap.github.io/components.html


## s4 交互：props与state

### 1. 说明

reactjs 数据流

thinking in react

1. 根据页面内容划分组件的嵌套关系
2. 自顶向下，完成每个组件，组件的数据通过props传递
3. 在代码中区分state与props
4. 添加事件，调用父模块的回调函数，改变父模块的state，从而引起组件的刷新

### 2. 如何正确使用state与props

对于你的应用里每一个数据块：

- 确定哪些组件要基于 state 来渲染内容。
- 找到一个共同的拥有者组件（在所有需要这个state组件的层次之上，找出共有的单一组件）。
- 要么是共同拥有者，要么是其他在层级里更高级的组件应该拥有这个state。
- 如果你不能找到一个组件让其可以有意义地拥有这个 state，可以简单地创建一个新的组件 hold 住这个state，并把它添加到比共同拥有者组件更高的层级上。

让我们使用这个策略浏览一遍我们的应用：

- `ProductTable` 需要基于 state 过滤产品列表，`SearchBar` 需要显示搜索文本和选择状态。
- 共同拥有者组件是 `FilterableProductTable`。
- 对于过滤文本和选择框值存在于 `FilterableProductTable`，从概念上讲是有意义的。

### 3. 示例

```javascript
var FilterableProductTable = React.createClass({
  getInitialState(){
	  return {
		filterText: '',
		inStockOnly: false
	  };
  },
  render(){
	// 传递回调函数onUserInput给子组件SearchBar，
	// 当子组件的文本框发生变化时执行在父组件中设置的回调函数以更新父组件的state
	return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
		  onUserInput={(filterText, inStockOnly) => {
			this.setState({
			  filterText: filterText,
			  inStockOnly: inStockOnly
			});
		  }}
		/>
        <ProductTable
		  products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
		/>
      </div>
    )
  }
});
```



## s5 Redux

### 1. 概述

- action

  - **「预处理函数」**：负责将脏数据筛选掉
  - 事件 => 数据or状态变化 => dom变化
  - event => action

  ```javascript
  //actions.js
  //添加 item 只需要一个 text 字符串数据
  export function addItem(text) {
      return {
          type: 'ADD_ITEM',
          text
      }
  }
  //删除 item 只需要拿到它的 id
  export function deleteItem(id) {
      return {
          type: 'DELETE_ITEM',
          id
      }
  }

  //删除所有已完成事项，不需要额外数据，只需要线索，线索就是 type
  export function clearCompleted() {
      return {
          type: 'CLEAR_COMPLETED'
      }
  }
  ```

- reducer

  - **「数据再处理函数」**：迎接 action 函数返回的线索
  - 将各种action各种情况汇总成一个全局的state对象
  - 由于state是全局的，所以handle方法中操作数据很不方便：使用combineReducers

  ```javascript
  //reducer 接受两个参数，全局数据对象 state 以及 action 函数返回的 action 对象
  //返回新的全局数据对象 new state
  export default (state, action) => {
      switch (action.type) {
          case A:
          return handleA(state)
          case B:
          return handleB(state)
          case C:
          return handleC(state)
          default:
          return state //如果没有匹配上就直接返回原 state
      }
  }
  ```


- combineReducers

  - 可以避免在handle方法中处理全局的state对象，使每个reducer只处理一部分数据
  - combineReducers接收一个包含很多小reducer的json对象，每个小reducer根据key值获取它所需要的数据
  - combineReducers得到一个大的**reducer函数**
  ```javascript
  var reducers = {
      todos: (state, action) => { //预期此处的 state 参数是全局 state.todos 属性
          switch (action.type) {...} //返回的 new state 更新到全局 state.todos 属性中
      },
      activeFilter: (state, action) => { //预期拿到 state.activeFilter 作为此处的 state
          switch (action.type) {...} //new state 更新到全局 state.activeFilter 属性中
      }
  }

  //返回一个 rootReducer 函数
  //在内部将 reducers.todos 函数的返回值，挂到 state.todos 中
  //在内部将 reducers.activeFilter 函数的返回值，挂到 state.activeFilter 中
  var rootReducer = combineReducers(reducers)	
  ```


> 目前 redux 并没有提供简便的映射到 state.a.b 一级以上深度的 state 的方法。三种处理方案：
> http://div.io/topic/1309

- createStore

  - createStore(reducer, initialState)

  - 返回结果是一堆函数，最主要的是dispatch, subscribe, getState：

    ```javascript
    //此处为示意，不是 redux 的源码本身
    export default createStore(reducer, initialState) {
        //闭包私有变量 
        let currentState = initialState
        let currentReducer = reducer
        let listeners = []

        //返回一个包含可访问闭包变量的公有方法
        return {
            getState() {
                return currentState //返回当前 state
            },
            subscribe(listener) {
                let index = listeners.length
                listeners.push(listener) //缓存 listener
                return () => listeners.splice(i, 1) //返回删除该 listener 的函数
            },
            dispatch(action) {
                //更新 currentState
                currentState = currentReducer(currentState, action)
                listeners.slice().forEach(listener => listener())
                return action //返回 action 对象
            }
        }
    }
    ```

    ​



- bindActionCreators

  - 传入actionCreator函数和store.dispatch函数，包装了dispatch函数的调用

  - 解决dispatch函数调用比较复杂的问题：需要的是json，但提供的是函数，中间用bindActionCreators转换了一下

  - 实现方式

    - 处理单个stateCreator：bindActionCreator

      ```javascript
      //将 actionCreator 跟 dispatch 绑定在一起
      let bindActionCreator => (actionCreator, dispatch) {
        return (...args) => dispatch(actionCreator(...args));
      }

      //普通工厂函数，返回一个对象
      let addItem = text => ({
          type: 'ADD_ITEM',
          text
      })

      //跟 store.dispatch 绑定起来，成为真正可以改变 currentState 的 action 函数
      let addItem = bindActionCreator(addItem, store.dispatch)
      ```

    - 处理多个stateCreator：**bindActionCreators**

      ```javascript
      export default function bindActionCreators(actionCreators, dispatch) {
        if (typeof actionCreators === 'function') { //如果是单个 actionCreator，绑定一词
          return bindActionCreator(actionCreators, dispatch);
        }
        //返回一个改造过的「函数组合」
        return mapValues(actionCreators, actionCreator =>
          bindActionCreator(actionCreator, dispatch)
        )
      }
      ```






### 2. 代码示例

> http://div.io/topic/1309

###  3. mixin

http://es6.ruanyifeng.com/#docs/decorator

## 其他说明

1. 浏览器调试插件：React Developer Tools
2. 前端获取数据的新方式`graphql` + `relay`
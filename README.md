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


## s5 交互：props与state

### 1. 说明

reactjs 数据流

thinking with react

1. 根据页面内容划分组件的嵌套关系
2. 自顶向下，完成每个组件，组件的数据通过props传递
3. 在代码中区分state与props
4. 添加事件，调用父模块的回调函数，改变父模块的state，从而引起组件的刷新

### 2. 示例



## s6 Redux

###  1. mixin

http://es6.ruanyifeng.com/#docs/decorator


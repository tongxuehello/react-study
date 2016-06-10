# react-study

## s1 simple
## s2 独立js文件
## s3 引入webpack

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

### 2. 示例



## s6 Redux

###  1. mixin

http://es6.ruanyifeng.com/#docs/decorator
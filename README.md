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

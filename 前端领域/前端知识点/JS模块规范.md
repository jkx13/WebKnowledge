## CommonJS
>特性：
- (1)可以加载多次，加载完成第一次后运行一次结果会被缓存以后加载读缓存，要再次运行需清除缓存
- (2)模块加载方式是加载完成后才会执行之后代码，同步加载
- (3)导入模块: require('路径')
- (4)导出模块: module.exports 和 exports （exports是module.exports的一个引用)
- (5)主要应用于服务器环境，nodejs模块规范参照Commonjs实现

```javascript
test.js:
const test = 'hello'
exports = test

test01.js:
const {test} = require('./test.js')
console.log(test)

```

## AMD
>特性：
- (1)异步加载方式
- (2)管理模块之前的依赖性
- (3)主要应用于浏览器环境，requireJS主要参照AMD规范
- (4)导入模块：require(['模块路径'],function(模块使用变量){})
- (5)导出模块：define(function(){return '导出值'})

```javascript
test.js
define(function{
	return {
		name:'jk'
	}
})

test01.js
require(['./test.js'],function(curModule){
	console.log(curModule.name)//'jk'
})
```

## CMD
>特性：
- (1)CMD是在AMD基础上的改进，不同是对依赖模块执行时机，AMD是依赖前置，CMD是就近原则
- (2)主要应用于浏览器环境 seajs是参照CMD规范实现
- (3)导入模块：define(function(require,exports,module){var value = require('路径')})
- (4)导出模块：define(function(require,exports,module){ exports = '值'})

```
test.js
define(function(require,exports,module){
	exports = {
		name:'jk'
	}
})

test01.js
define(function(require,exports,module){
	var curModule = require('./test.js')
	console.log(curModule.name)//'jk'
})
```

## UMD
>特性：
- (1)兼容AMD和commonJS规范的同时，还兼容全局引用的方式
- (2)浏览器或服务器环境

```javascript
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        //AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        //Node, CommonJS之类的
        module.exports = factory(require('jquery'));
    } else {
        //浏览器全局变量(root 即 window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {
    //方法
    function myFunc(){};
    //暴露公共方法
    return myFunc;
}));
```

## ES6 Module
>特性：
- (1)按需加载（编译时加载）（import是异步加载，有一个独立的模块依赖的解析阶段）
- (2)import和export命令声明在文件的最顶部，不能在代码块之中（如：if语句中）,import()语句可以在代码块中实现异步动态按需动态加载
- (3)应用于浏览器或服务器环境
- (4)导入模块：import {模块名} from '模块路径' 和 import('模块路径').then()
- (5)export和export default 

```javascript
export const name = 'jk';
let age = 18;
export {
	age
}
export default {
	fn(){},
	weight:'68kg'
}

//导入
import {name} from './index.js';

import * as all from './index.js';

import {default as all} from './index.js';
```

##  jsonp的解释
	jsonp表示在回调执行函数中的参数填充json数据
	script标签是不受同源策略限制的
	1.通过访问另外非同源下的js文件（js内容包含jsonpCallback({content:'jk'}))
	2.访问服务端传回调函数名称，返回回调填充json数据的函数并执行
```js
function createJsonpTag(url,callbackName,successCB){
	let script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	script.async = true;
	
	window[callbackName] = function(data){
		successCB && successCB(data);
	}
	
	document.body.appendChild(script);
}

window.onload = function(){
	createJsonpTag('http://xxx','jsonpCallback',(data)=>{
		console.log(data);
	})
}
```

##  script 两个关键属性(deter,async)
	deter:defer属性告诉浏览器要等整个页面载入以后、解析完毕才执行该<script.../>中的脚本
	async:指定async属性的的<script.../>的脚本会启动新的线程，异步执行<script.../>导入的脚本文件
	
```js
<script src='test.js' type='text/javascript' deter></script>
```

## Generator原理
	ES6新语法,异步编程函数方法
	1.使用function*表示一个generator函数
	2.内部通过yield暂停代码
	3.通过调用生成器赋值对象的next方法

```js
var promise = function () {
    return new Promise((resolve, reject) => {
        resolve('ok')
    })
}
function* test() {
    yield promise();
}
var g = test();
var obj =  g.next();//{value:"promise",done:"boolean"}
obj.value.then((res) => {
    console.log('res=='+res);//ok
})
g.next();
```
## 严格模式 ("use strict")[访问](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)
可以在任何地方声明包括函数体内；
```
消除Javascript语法的一些不合理、不严谨之处，减少一些错误行为;
消除代码运行的一些不安全之处，保证代码运行的安全；
提高编译器效率，增加运行速度；
为未来新版本的Javascript做好铺垫。
```
- 在严格模式下，可以直接声明一个全局变量，而必须用 var、let 或 const 关键字，否则报错:

```javascript

// 不允许意外创建全局变量
message = "Hello JavaScript! "; //  这一行代码就会抛出 ReferenceError

//不能使用 delete 操作符删除声明变量
var x;
delete x; // !!! 语法错误

eval("var y; delete y;"); // !!! 语法错误

//不用使用保留字（例如 ：implements、interface、let、package、 private、protected、public、static 和 yield 标识符）作为变量名
var private = 123; // !!! 语法错误
var public = 'hello'; // !!! 语法错误


```

- 严格模式的对象

```javascript
// 1.给只读属性赋值
var obj2 = { get x() { return 17; } };
obj2.x = 5; // 抛出TypeError错误

// 给不可写属性赋值
// 2.对不可配置的（nonconfigurable）的属性使用 delete 操作符会抛出TypeError
var obj1 = {};
Object.defineProperty(obj1, "x", { value: 42, writable: false });
obj1.x = 9; // 抛出TypeError错误

delete Object.prototype; // 抛出TypeError错误

//3. 给不可扩展对象的新属性赋值
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = "ohai"; // 抛出TypeError错误

var o = { p: 1, p: 2 }; // !!! 语法错误(使用对象字面量时, 属性名必须唯一)
```

- 严格模式的函数

```javascript
// 1. 要求命名函数的参数必须唯一
function sum(a, a, c) { // !!! 语法错误
  return a + a + c; // 代码运行到这里会出错
}

```

- eval与arguments

```javascript
// 1. eval不在为上下文中创建变量或函数
function doSomething(){
  eval("var x=10");
  alert(x); // 抛出TypeError错误
}

// 2. eval 和 arguments 不能通过程序语法被绑定(be bound)或赋值
eval = 17;
arguments++;
++eval;
var obj = { set p(arguments) { } };
var eval;
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function("arguments", "'use strict'; return 17;");

// 3. 参数的值不会随 arguments 对象的值的改变而变化和禁止使用arguments.callee
var f = function() { 
  return arguments.callee; 
};
f(); // 抛出类型错误


```

- 禁止在函数内部遍历调用栈

```javascript
function restricted() {
  restricted.caller;    // 抛出类型错误
  restricted.arguments; // 抛出类型错误
}

```

- 静态绑定

```javascript
var x = 17;
with (obj) { // !!! 语法错误
  // 如果没有开启严格模式，with中的这个x会指向with上面的那个x，还是obj.x？
  // 如果不运行代码，我们无法知道，因此，这种代码让引擎无法进行优化，速度也就会变慢。
  x;
}

var result = eval("var x=10, y=11; x+y");
alert(result); //21

```

- this

```javascript
// 全局作用域的函数中的this不再指向全局而是undefined。
// 如果使用构造函数时，如果忘了加new，this不再指向全局对象，而是undefined报错

// 规则1
function bar() {
  console.log(this)
}
bar() // undefined


// 规则2
function Person() {
  this.name = "Vincent" // Uncaught TypeError: Cannot set property 'name' of undefined
}

Person() // 报错，使用构造函数时，如果忘了加new，this不再指向全局对象，而是undefined.name。

```
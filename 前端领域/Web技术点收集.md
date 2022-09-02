### 理解JavaScript 中的执行上下文和执行栈
**执行上下文三种类型**
1. **全局执行上下文**：只有一个，浏览器中的全局对象就是 window 对象，this 指向这个全局对象
2. **函数执行上下文**：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文
3. Eval 函数执行上下文： 指的是运行在 eval 函数中的代码，很少用而且不建议使用

#### 执行栈
执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文。

- 首次运行JS代码时，会创建一个全**局执行上下文**并Push到当前的执行栈中。每当发生函数调用，引擎都会为该函数创建一个首次运行JS代码时，会创建一个全局执行上下文并Push到当前的执行栈中。每当发生函数调用，引擎都会为该函数创建一个**新的函数执行上下文**并Push到当前执行栈的栈顶。并Push到当前执行栈的栈顶。
- 根据执行栈LIFO规则，当栈顶函数运行完成后，其对应的函数执行上下文将会**从执行栈中Pop出**，上下文控制权将移到当前执行栈的**下一个执行上下文**。

```javascript
var a = 'Hello World!';

function first() {  
  console.log('Inside first function');  
  second();  
  console.log('Again inside first function');  
}

function second() {  
  console.log('Inside second function');  
}

first();  
console.log('Inside Global Execution Context');

// Inside first function
// Inside second function
// Again inside first function
// Inside Global Execution Context
```
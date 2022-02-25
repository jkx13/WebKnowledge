## 获取浏览器Cookie的值
```javascript

const cookie = name => `;${document.cookie}`.split(`;${name}=`).pop().split(';').shift();

cookie('name')
```

## JS实现网页内容禁止复制和粘贴，另存为
```javascript
1. 使右键复制失效
方法一:
<script>
	document.oncontextmenu = new Function("event.returnValue=false")
	document.onselectstart = new Function("event.returnValue=false")
</script>
方法二:
<body oncontextmenu="return false" onselectstart="return false">
或
<body oncontextmenu="event.returnValue=false" onselectstart="event.returnValue=false">

方法三:
<body oncopy="alert('禁止复制！');return false;">


2.防止文件 另存为 
<body>
<noscript>
<iframe src="*.htm"></iframe>
</noscript>

</body>

或
document.oncontextmenu = (e)=>{e.preventDefault()}
document.onselectstart = (e)=>{e.preventDefault()}

3.允许复制
document.oncontextmenu = ""
document.onselectstart = true
```

## for...of 与for ... in 区别
```javascript
1. for(let i of [Array])不能遍历object
2. for(let i in [Object/Array]) 遍历的i是对应的key值 而for...of遍历数组的value值
3. for...in 能遍历自定义的属性（var arr= ['a','b'];arr.name='jk'),for...of 不能
```

## js中substr与substring(slice)区别
```
语法：substr(start [，length]) 第一个字符的索引是0，start必选 length可选

　　　substring(start [, end]) 第一个字符的索引是0，start必选 end可选

注意:slice()这里第二位数字如果是负数是加完字符串长度后的数字：length=11;slice(7,-6);-6+11=5 => slice(7,5)第二位小于第一位为空字符
slice(-2)取倒数两位
```

##  箭头函数
箭头函数不具备this，arguments；自己没有this就找上一级的this
#### 改变this指向的常用方法
1. apply/call/bind
2. var that=this
3. 箭头函数 如何确定this是谁：看谁调用的，.点前面是谁this就是谁
```javascript
let func = a=>b=>a+b;
let sum = func(1)(2);
console.log(sum)// 3
```

## this绑定问题
```
1. 使用new 绑定
this绑定的是新创建的实例对象(var obj = new func();)

2. 使用call,apply,bind显式绑定
this绑定是原生绑定方法call,apply,bind的第一参数;如 func.call(obj);func中的this是obj

3.函数是在对象object里的属性
this绑定就是那个上下文对象;如let obj = {func:func}; obj.func(); func中的this就是obj,隐性绑定

4.以上都不是就是默认绑定
在严格模式下默认绑定就是undefined;不然就是window
```

## 0.1+0.2精度丢失问题
1. 采用浮点算法的结果
2. 二进制只能精准表达2除尽的数字1/2, 1/4, 1/8，例如0.1(1/10)和0.2(1/5)，在二进制中都无法精准表示时，需要根据精度舍入。
3. 熟悉的十进制运算系统，可以精准表达2和5除尽的数字，例如1/2, 1/4, 1/5(0.2), 1/8, 1/10(0.1)。当然十进制也有无法除尽的地方，例如1/3, 1/7，也需要根据精度舍入
4. 引入Decimal 10进制。

## Symobl 类型
ES6 引入了一种新的原始数据类型 Symbol，表示独一无二的值。
它是 JavaScript 语言的第七种数据类型，是一种类似于字符串的数据类型。
回顾一下，JavaScript有number,string,boolean,null,undefined,object六种数据类型，加上symbol就是七种基本数据类型。

### 特点
- Symbol 的值是唯一的，用来解决命名冲突的问题
- Symbol 值不能与其他数据进行运算
- Symbol 定义 的 对象属 性 不能 使 用 for…in /of循 环遍 历 ，但 是可 以 使 用 Reflect.ownKeys或Object.getOwnPropertySymbols 来获取对象的所有键名

```
var s = Symbol();
var b = Symbol();
a === b // false

var c = Symbol.for("c");
var cc = Symbol.for("cc");
c === cc; // true

var obj = {
	a:1,
	[Symbol()]:'jk'
}

Reflect.ownKeys(obj) // ['a', Symbol()]

Object.getOwnPropertySymbols(obj) // [Symbol()]


```

### Symbol内置值
ES6 还提供了 11 个内置的 Symbol 值，指向语言内部使用的方 法。可以称这些方法为魔术方法，因为它们会在特定的场景下自动执行。

|内置Symbol的值 |调用时机|
|-|-|
|Symbol.hasInstance|当其他对象使用 instanceof 运算符，判断是否为该对象的实例时，会调用这个方法|
|Symbol.isConcatSpreadable|对象的 Symbol.isConcatSpreadable 属性等于的是一个 布尔值，表示该对象用于 Array.prototype.concat()时， 是否可以展开。|
|Symbol.species |创建衍生对象时，会使用该属性Symbol.match当执行 str.match(myObject) 时，如果该属性存在，会 调用它，返回该方法的返回值。|
|Symbol.replace|当该对象被 str.replace(myObject)方法调用时，会返回 该方法的返回值。|
|Symbol.search |当该对象被 str.search (myObject)方法调用时，会返回 该方法的返回值。|
|Symbol.split | 当该对象被 str.split(myObject)方法调用时，会返回该 方法的返回值。|
|Symbol.iterator | 对象进行 for...of 循环时，会调用 Symbol.iterator 方法， 返回该对象的默认遍历器Symbol.toPrimitive该对象被转为原始类型的值时，会调用这个方法，返 回该对象对应的原始类型值。|
|Symbol. toStringTag |在该对象上面调用 toString 方法时，返回该方法的返 回值|
|Symbol. unscopables|该对象指定了使用 with 关键字时，哪些属性会被 with 环境排除。|

```javascript
// 检测类型
class Person{
    static [Symbol.hasInstance](param){
	console.log(param);
	console.log("我检测类型了");
	return false;
    }
}
let o = {};
console.log(o instanceof Person);

// 合并数组：false数组不可展开，true可展开
const arr = [1,2,3];
const arr2 = [4,5,6];
arr2[Symbol.isConcatSpreadable] = false;
console.log(arr.concat(arr2));

```

## Interator 迭代器
迭代器（Iterator）就是一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数 据结构只要部署 Iterator 接口，就可以完成遍历操作;
ES6 创造了一种新的遍历命令 for...of 循环，Iterator 接口主要供 for...of 消费。

### 原生具备 iterator 接口的数据(可用 for of 遍历):
```
Array

Arguments

Set

Map

String

TypedArray

NodeLists
```

## 特点
- 创建一个指针对象，指向当前数据结构的起始位置
- 第一次调用对象的 next 方法，指针自动指向数据结构的第一个成员
- 接下来不断调用 next 方法，指针一直往后移动，直到指向最后一个成员
- 每调用 next 方法返回一个包含 value 和 done 属性的对象

```javascript
const arr = ["red", "green", "blue","yellow"]

// 使用 for...of 遍历数组
for(let v of arr){
  console.log(v)
}

let iterator = arr[Symbol.iterator]()

// 调用对象的next方法
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// 重新初始化对象，指针也会重新回到最前面
let iterator1 = arr[Symbol.iterator]();
console.log(iterator1.next());


```

### 自定义iterator（使得object 对象也可以使用for...of...）
```javascript
var obj = {
	a: 1,
	b: 2,
	[Symbol.iterator]() {
		let index = 0;
		return {
			next: () => {
				let value = this[Object.keys(this)[index++]]
				if (value) {
					return {
						value,
						done: false //注意使用 done:false
					}
				} else {
					return {
						value: undefined,
						done: true
					}
				}
			}
		}
	}
}
```

## 生成器(Generator)
生成器Generator函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。

### 特点
- 函数的声明带一个*号
- 函数不能直接执行，用yield分割执行区域，next()依次执行，每次返回一个对象
- next()方法是可以传入参数的，传入的参数作为上一条yield的返回结果

```javascript
function* gen(){
	console.log(1)
	yield '代码1'
	console.log(2)
	yield '代码2'
	console.log(3)
	yield '代码3'
}

let iterator = gen();
iterator.next('11');

```

### 参数传递
```javascript
function* gen(arg){
    console.log('arg',arg);
    let one = yield 1;
    console.log('one',one);
    let two = yield 2;
    console.log('two',two);
    let three = yield 3;
    console.log('three',three);
}
let iterator = gen("A");
console.log(iterator.next()); // 会执行yield 1;

// next()方法是可以传入参数的，传入的参数作为第一条yield的返回结果
console.log(iterator.next("B")); // 会执行yield 2;
console.log(iterator.next("C")); // 会执行yield 3;
console.log(iterator.next("D")); // 继续往后走，未定义;
```

### 异步获取数据
```javascript
// 模拟获取: 用户数据 订单数据 商品数据

function getUsers(){
    setTimeout(()=>{
	let data = "用户数据";
	iterator.next(data); // 这里将data传入
    },1000);
}
function getOrders(){
    setTimeout(()=>{
	let data = "订单数据";
	iterator.next(data); // 这里将data传入
    },1000);
}
function getGoods(){
    setTimeout(()=>{
	let data = "商品数据";
	iterator.next(data); // 这里将data传入
    },1000);
}
function* gen(){
    let users = yield getUsers();
    console.log(users);
    let orders = yield getOrders();
    console.log(orders);
    let goods = yield getGoods();
    console.log(goods); 
}


let iterator = gen();
iterator.next()

```

## Promise 
Promise 是 ES6 引入的异步编程的新解决方案。语法上 Promise 是一个构造函数，用来封装异步操作 并可以获取其成功或失败的结果。

### 特点
- Promise是一个构造函数，并且一创建就会执行


- Promise的三种状态：pending(等待态)，fulfiled(成功态)，rejected(失败态)


- Promise接收一个参数：函数，并且这个函数需要传入两个参数resolve,reject,也是函数


- Promise.prototype上的.then()：预先指定成功和失败的回调函数


- Promise.prototype上的.catch()：捕获异步操作中的错误


- Promise.finally()、Promise.all()、Promise.race()等

```javascript

let promise = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log('异步 执行开始...')
		// resolve('success') // 执行成功
		
		reject('fail') // 执行失败
	},1000)
})

promise.then((res)=>{
	console.log('Success:',res)
},(err)=>{
	console.log('Fail: ',err)
}).catch((err)=>{// 如果then中参数已有reject回调函数，则不会执行catch
	console.log('Catch: ',err)
})
```

## async和await
ES8引入了async和await，更近一步地简化了Promise异步操作，可以让异步代码看起来像同步代码一样;

- await，则函数必须被async所修饰，async函数的返回值为Promise对象
- await右侧表达式一般为Promise对象

```javascript
//
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = "数据"
    resolve(data)
  }, 2000)
})

async function getData() {
  const res1 = await p1
  console.log(res1)
}

getData()

p1.then(res2 => console.log(res2)) // 执行后，可以发现res1的值和res2一样


```
用async修饰后可以得到Promise对象的成功回调的值，不需要再用.then()链式调用，从而简化了Promise的异步操作。


## let关键字
使用let 关键字用来声明变量，具有以下几个特性：

- 不允许重复声明
- 块级作用域
- 不存在变量提升
- 不影响作用域链

```javascript
// 1.不允许重复声明
let a = 1;
let a = 2;// 不允许，会报错，但var不会

// 2.块级作用域
{
  let d = "d";
  console.log(d);
}
console.log(d);// 报错，但var声明不会，因为var没有块级作用域

// 3.不存在变量提升
console.log(d1);// 不报错
console.log(d2);// 报错
var d1 = "1";
let d2 = "2";

// 4.不影响作用域链
{
  let p = "jk";
	function fn(){
		console.log(p); // 这里是可以使用的
	}
  fn();
}

```

## const关键字

使用const 关键字用来声明常量，具有以下几个特性：
注意：const关键字具有let关键字的所有特性，意思是上面let所列举的特性const都有。
- 声明必须赋初始值
- 标识符一般为大写（潜规则，看场景）
- 值不允许修改（注意数组、对象等引用数据类型

```javascript

const person = "jk"
person = "name" //报错

//数组和对象存的是引用地址，下列操作未改变地址，所以是可行的
const p = {
  name:"jk",
  age:18,
}
p.age = 20// 没有问题

const arr = ["1","2"]
arr.push("3")// 没有问题

arr = ["1","2"]// 改变了地址，报错

```

## 解构赋值
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。
```javascript
// 数组的解构赋值
const arr = ['1', '2', '3', '4'];
let [a, b, c, d] = arr;

// 对象的解构赋值
let obj = {
  name:"jk",
  age:17,
  say(){
    console.log("hello world")
  }
}
let {name,age,say} = obj // 一定要对应key名，顺序无所谓，少了也没关系

```


## 模板字符串
模板字符串（template string）是增强版的字符串，本质还是字符串，用反引号（`）标识，具有以下特性：

- 字符串中可以出现换行
- 可以使用 ${xxx} 形式输出变量
```javascript
let str = 'jk'
let a = `my name is ${str}`
```

## 简化对象写法
ES6 允许在大括号里面，直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。

```javascript
let name = 'jk';
let hello = function(){
  console.log('hello');
}

const obj = {
  name,// 触发同名简写规则
  age:18,
  hello,// 触发同名简写规则
  get:function(){
    return this.name;
  },
  set(val){
    this.name = val;
  }// 函数简写
}


```

## Set
ES6 提供了新的数据结构 Set（集合）;
它类似于数组，但成员的值都是唯一的，集合实现了 iterator 接口，所以可以使用『扩展运算符』和『for…of…』进 行遍历，Set的常用的属性和方法有：

- size 返回集合的元素个数
- add 增加一个新元素，返回当前集合
- delete 删除元素，返回 boolean 值
- has 检测集合中是否包含某个元素，返回 boolean 值
- clear 清空集合，返回 undefined

```javascript
//创建一个空集合
let s = new Set();
//创建一个非空集合
let s1 = new Set([1,2,3,1,2,3]); // [1,2,3],会自动去重

console.log(s1.size);
console.log(s1.add(4));
console.log(s1.delete(1));
console.log(s1.has(2));
console.log(s1.clear());// undefined

```

## Map 
ES6 提供了 Map 数据结构。
它类似于对象，也是键值对的集合。但是“键”的范围不限于字符串，各种类 型的值（包括对象）都可以当作键，差不多就是对象的加强版。
Map 也实现了iterator 接口，所以可以使用『扩展运算符』和 『for…of…』进行遍历。

Map常用的属性和方法：
- size 返回 Map 的元素个数
- set 增加一个新元素，返回当前 Map
- get 返回键名对象的键值
- has 检测 Map 中是否包含某个元素，返回 boolean 值
- clear 清空集合，返回 undefined

```javascript
// 创建一个空 map
let map = new Map();
// 创建一个非空 map
let map2 = new Map([
  ['name','jk'],
  ['age','18']
]);//{'name' => 'jk','age'=>'18'}

console.log(map2.size);//2

// set 更新/增加一个新元素，返回当前 Map；
map2.set('age',18);

// “键”的范围不限于字符串
let fn = function(){
  console.log("函数")
}
map2.set('fn',fn)

// get 返回键名对象的键值
map2.get('age')

// has 检测 Map 中是否包含某个元素，返回 boolean 值
console.log(map2.has("name"));// true

// clear 清空集合，返回 undefined
map2.clear();

```

## ES6中函数参数的默认值
形参初始值 具有默认值的参数, 一般位置要靠后
```javascript
function sum(a,b,c=3) {
	return a + b + c;
}
sum(1,2)//结果6
```

## 箭头函数
ES6允许使用箭头（=>）定义函数，箭头函数提供了一种更加简洁的函数书写方式，并且箭头函数在开发中的使用是非常广泛的。
箭头函数具有以下特性：

- 如果形参只有一个，则小括号可以省略
- 函数体如果只有一条语句，则花括号可以省略，函数的返回值为该条语句的执行结果
- 箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值
- 箭头函数不能作为构造函数实例化
- 不能使用 arguments

```javascript
// 1. 通用写法
let fn = (a, b) => {
  return a + b;
};
// 2. 省略小括号的情况，只有一个参数，无参数不能省略小括号
let fn2 = num => {
  return num;
};
// 3. 省略花括号的情况，只有一条return语句
let fn3 = num => num * 20;


// 在浏览器模式下， 箭头函数的this是静态的，始终指向函数声明时所在作用域下的this的值
console.log(this)// windows
let obj = {
	name: "jk",
  getThis: () => {
    console.log(this);
  },
  getThis2(){
    console.log(this);
  }
};
obj.getThis();// windows
obj.getThis2();// obj


```

## rest参数（...args）
ES6 引入 rest 参数，用于获取函数的实参，作用与 arguments 类似，用来代替 arguments，rest参数非常适合不定个数参数函数的场景
- rest 参数必须是参数列表中最后一个形参
```javascript
function sum(...args) {
  console.log(args);
}
let add = (...args) => args.reduce((cur,next)=>cur+next,1);
sum(1, 2, 3);// [1, 2, 3]
console.log(add(4, 5, 6));// 1+4+5+6 = 16

//rest 参数必须是最后一个形参
function sum2(a,b,...args){
  console.log(args);
}
sum2(1,2,3,4,5) // [3,4,5]

```

## spread 扩展运算符（...）
扩展运算符（spread）也是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列，对数组进行解包。
扩展运算符的常用应用场景：
- 数组的合并
- 数组的克隆
- 将伪数组转为真正的数组

```javascript
var arr = [1,2,3]

function fn(){console.log(arguments)}

fn(...arr);// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

let obj1 = {a:1}
let obj2 = {b:2}

let obj = {...obj1,...obj2}//{a: 1, b: 2}
```




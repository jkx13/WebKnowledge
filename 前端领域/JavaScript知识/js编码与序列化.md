## window.btoa方法
btoa() 方法用于创建一个 base-64 编码的字符串。

该方法使用 "A-Z", "a-z", "0-9", "+", "/" 和 "=" 字符来编码字符串。

base-64 解码使用方法是 atob() 。

## unescape
unescape() 函数可对通过 escape() 编码的字符串进行解码。

提示： 使用函数escape() 对字符串进行编码。

注意：unescape() 函数已经从 Web 标准中删除，所以尽量不使用该函数，可以使用 decodeURI 或 decodeURIComponent 代替。

## 序列化
JSON的全称是”JavaScript Object Notation“——JavaScript对象表示法。ECMAScript 5中提供了内置函数JSON.stringify()和JSON.parse()用来序列化和还原JavaScript对象。它们使用起来也很简单：

- 对于JavaScript中的五种原始类型，JSON语法支持数字、字符串、布尔值、null四种，**不支持undefined**；

- NaN、Infinity和-Infinity序列化的结果是null；

- JSON语法不支持函数；

- 除了RegExp、Error对象，JSON语法支持其他所有对象；

- 日期对象序列化的结果是ISO格式的字符串，但JSON.parse()依然保留它们字符串形态，并不会将其还原为日期对象；

- JSON.stringify()只能序列化对象的可枚举的自有属性

## 反序列化
- 即js中JSON字符串转化为Object
```
var obj=eval("("+data+")");
```
原因在于：eval本身的问题。 由于json是以”{}”的方式来开始以及结束的，在JS中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。

- 使用JSON.parse

### 使用场景
- 1.向后台传递参数、接收后台返回值
	如果后台返回的是一个String（Object序列化后返回），那么需要在js中使用eval或者parse等转化为Object再使用；
	如果返回时传递了类型，比如就是Object，那么直接使用就好

- 2.在页面间传递数据，特别是数组时
	需要使用序列化，否则IE会报错：不能执行已经释放Script的代码

- 3.在进行本地存储时
	存储在本地window.localStorage.setItem(key,value)存储的value是json序列化的字符串；获取得到的window.localSorage.getItem(key)也是json序列化的字符串，需要经过json的反序列化进行使用（常见json序列化数组）
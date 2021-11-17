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
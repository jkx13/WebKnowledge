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
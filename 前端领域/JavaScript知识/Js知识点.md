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
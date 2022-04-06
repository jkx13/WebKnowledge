## react页面中引用本地图片的方法

### require
```
<img src={require('../img/xx.png')} alt="" />
```
### 绝对路径http
```
<img src="http://xxx" />
```

### 引入
```
import search form  '../image/search.png'

<img src={search} />
```

### 背景图片引入
```
const divStyle = {
	color:'red',
	backgorundImage: 'url('+search+')',
	// background:`url${require('../image/search.png')}`
	
}

function hello(){
	return <div style={divStyle}>hello</div>
}
```
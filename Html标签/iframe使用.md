## iframe使用说明




## iframe监听事件（加载完成)
```javascript
注: curIframe为实例对象
if (curIframe.attachEvent) {
      curIframe.attachEvent('onload', () => {
       //用于适配IE浏览器事件触发
      });
    } else {
      curIframe.onload = () => {
       //用于适配Chrome/safari浏览器等
      };
    }
```


##  iframe实现自适应
```html
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<style>
		.iframe-container {
		  overflow: hidden;
		  padding-bottom: 90%; /* 16:9*/
		  position: relative;
		  border: 3px solid #008000;
		}
		
		.iframe-container iframe {
		   border: 0;
		   height: 100%;
		   left: 0;
		   position: absolute;
		   top: 0;
		   width: 100%;
		}
		</style>
	</head>
	<body>
		<div class="iframe-container">
		  <iframe src="https://dvajs.com/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" loading="lazy" allowfullscreen></iframe>
		</div>
	</body>
</html>

```

## 去除iframe中滚动条
```

#app {
  -ms-overflow-style: none; /* IE 和 Edge 浏览器隐藏滚动条 */
  scrollbar-width: none; /* FireFox隐藏浏览器滚动条 */
}
/* Chrome浏览器隐藏滚动条 */
#app::-webkit-scrollbar {
  display: none;
}
```

## iframe父子容器交互
```javascript
//在iframe中页面，调用父容器的方法
window.parent.setUpdate();
function getInfo(){};


//在父容器中调用iframe中页面
var curIframe = window.iframes('iframe-id');
curIframe.getInfo();
```
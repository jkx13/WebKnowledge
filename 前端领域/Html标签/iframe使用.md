## iframe使用说明

```html
<iframe name="myiframe" src="./index.html"></iframe>

//与a标签组合使用

<a href="./src/index.html" target="myiframe"></a>
```


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

##  window对象的postMessage方法
#### 允许来自不同源的脚本采用异步方法进行有限的通信
	可以实现跨文本文档，多窗口，跨域消息传递

#### 示例
```javascript

targetWindow.postMessage(message,targetOrigin,[transfer])
1. targetWindow: 目标窗口（发送跨域消息的那个窗口），例如：iframe.contentWindow

2. message: 将要发送的数据

3. targetOrigin: 目标窗口的地址( * 表示任何URL 都可以发送)
4. transfer: 是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权
```

#### 例子
1. 父页面通过iframe引入子页面
```html
<body>
<h1>父页面</h1>
<iframe id="curIframe" src="http://www.test.com"
</body
```

2. 父页面向子页面发送一条消息
```
//获取子页面的iframe实例
const curIframe = document.getElement.ById('curIframe')

//在需要等到iframe中的子页面加载完成
curIframe.onload = function(){
	curIframe.contentWindow.postMessage({msg:'信息'},'http://xxx')
}
```

2. 子iframe页面监听message
```
window.addEventListener('message',function(event){
	console.log('event',event)
	console.log('event.origin',event.origin)// http://xxx
	console.log('event.data',event.data) // {msg:'信息'}
})
```

## 网站页面允许被第三方以iframe形式嵌入
1. 设置nginx来允许网站页面被第三方嵌入
2. 在nginx'http', 'server' 或者 'location' 的配置中加上这句
```
add_header X-Frame-Options ALLOW-FROM url

注: url是指代调用页面的第三方网站的服务器地址
```
3. 或在响应头上加上这句话
```
response.setHeader("X-Frame-Options","ALLOW-FROM uri ")。

注: url是指代调用页面的第三方网站的服务器地址

```

## iframe 自适应

- iframe内容未知，高度可预测
```html
<iframe src="backtop.html" frameborder="0" scrolling="no" id="external-frame" onload="setIframeHeight(this)"></iframe>
```
脚本
```javascript
 //document.domain = "xxx.com";
 function setIframeHeight(iframe) {
	 if (iframe) {
		 var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
		 if (iframeWin.document.body) {
				iframe.height = iframeWin.document.documentElement.scrollHeight || iframeWin.document.body.scrollHeight;
		}
	}
};

window.onload = function () {setIframeHeight(document.getElementById('external-frame'));};

```

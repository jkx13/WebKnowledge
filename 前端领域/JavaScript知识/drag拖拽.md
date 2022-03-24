## drag拖拽

### HTML draggable 属性
兼容：Internet Explorer 9+, Firefox, Opera, Chrome, 和 Safari 浏览器支持 draggable 属性。

```html
<p draggable="true">这是一段可移动的段落。请把该段落拖入上面的矩形。</p>
```
属性：
- true	规定元素是可拖动的。
- false	规定元素是不可拖动的。
- auto	使用浏览器的默认特性。

> 提示： 链接和图片默认是可拖动的，不需要 draggable 属性。


### drag事件

> 1. 在拖动目标上触发事件 (源元素):
- ondragstart - 用户开始拖动元素时触发
- ondrag - 元素正在拖动时触发
- ondragend - 用户完成元素拖动后触发

> 2. 释放目标时触发的事件:
- ondragenter - 当被鼠标拖动的对象**进入其容器范围内**时触发此事件
- ondragover - 当某被拖动的对象在另一对象**容器范围内拖动时**触发此事件（注意： 在拖动元素时，每隔 350 毫秒会触发 ondragover 事件。）
- ondragleave - 当被鼠标拖动的对象**离开其容器范围内**时触发此事件
- ondrop - 在一个拖动过程中，**释放鼠标键时**触发此事件

#### 实例1
```html
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<style type="text/css">
			#div1 {
				width: 350px;
				height: 70px;
				padding: 10px;
				border: 1px solid #aaaaaa;
			}
		</style>
		<script>
			function allowDrop(ev) {
				//容器范围内拖动时
				ev.preventDefault();
				// 调用 preventDefault() 来避免浏览器对数据的默认处理（drop 事件的默认行为是以链接形式打开）

			}

			function dragstart(ev) {
				// 开始拖拽元素
				ev.dataTransfer.setData("Text", ev.target.id);
				//通过 dataTransfer.getData("Text") 方法获得被拖的数据。该方法将返回在 setData() 方法中设置为相同类型的任何数据。

			}

			function dropEnd(ev) {
				ev.preventDefault();
				// 释放鼠标键时
				var data = ev.dataTransfer.getData("Text");
				ev.target.appendChild(document.getElementById(data));
			}
		</script>
	</head>
	<body>

		<p>拖动图片到矩形框中:</p>
		<!--放置容器-->
		<div id="div1" ondrop="dropEnd(event)" ondragover="allowDrop(event)"></div>
		<br>
		<!--拖动目标元素-->
		<img loading="lazy" id="drag1" src="/images/logo.png" draggable="true" ondragstart="dragstart(event)" width="336"
			height="69">
	</body>
</html>

```


### 实例
```javascript
/* 拖动时触发*/
document.addEventListener("dragstart", function(event) {
    //dataTransfer.setData()方法设置数据类型和拖动的数据
    event.dataTransfer.setData("Text", event.target.id);
    // 拖动 p 元素时输出一些文本
    document.getElementById("demo").innerHTML = "开始拖动 p 元素.";
    //修改拖动元素的透明度
    event.target.style.opacity = "0.4";
});
//在拖动p元素的同时,改变输出文本的颜色
document.addEventListener("drag", function(event) {
    document.getElementById("demo").style.color = "red";
});
// 当拖完p元素输出一些文本元素和重置透明度
document.addEventListener("dragend", function(event) {
    document.getElementById("demo").innerHTML = "完成 p 元素的拖动";
    event.target.style.opacity = "1";
});
/* 拖动完成后触发 */
// 当p元素完成拖动进入droptarget,改变div的边框样式
document.addEventListener("dragenter", function(event) {
    if ( event.target.className == "droptarget" ) {
        event.target.style.border = "3px dotted red";
    }
});
// 默认情况下,数据/元素不能在其他元素中被拖放。对于drop我们必须防止元素的默认处理
document.addEventListener("dragover", function(event) {
    event.preventDefault();
});
// 当可拖放的p元素离开droptarget，重置div的边框样式
document.addEventListener("dragleave", function(event) {
    if ( event.target.className == "droptarget" ) {
        event.target.style.border = "";
    }
});
/*对于drop,防止浏览器的默认处理数据(在drop中链接是默认打开)
复位输出文本的颜色和DIV的边框颜色
利用dataTransfer.getData()方法获得拖放数据
拖拖的数据元素id("drag1")
拖拽元素附加到drop元素*/
document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
        document.getElementById("demo").style.color = "";
        event.target.style.border = "";
        var data = event.dataTransfer.getData("Text");
        event.target.appendChild(document.getElementById(data));
    }
});
```
## js禁止复制
1. <body οncοntextmenu="return false">禁用网页右键菜单，但是仍然可以使用快捷键复制。
```javascript
document.body.onselectstart=document.body.οncοntextmenu=function(){ return false;}
```
注意这段代码必须放在body元素后面，放在前面或者放在head里面都不起作用。 

- document.body.onselectstart 页面选中功能。
- document.body.oncontextmenu页面右键菜单。
- document.body.ondragstart页面内容拖拽功能，拖拽是可以实现复制的。禁止复制时需要将其禁用。
- document.body.oncopy页面内容复制功能，当禁用时，即使你点击了复制或使用了快捷键但是你剪切板中的内容不是你刚复制的内容而是你以前放在剪切板中的内容或为空。
- document.body.oncut页面内容剪切功能，禁用和效果和禁用复制功能类似

```javascript
<body οncοntextmenu="return false" onselectstart="return false" 
οndragstart="return false" οncοpy="return false" 
oncut="return false; 
leftMargin=0 
topMargin=0 style="width: 100%;height: 100%;" >
```

```javascript
//******************** 屏蔽右键 ***********************
	function click(e) {
		if (document.all) {
			if (event.button==1||event.button==2||event.button==3) {
				οncοntextmenu='return false';
			}
		}
		if (document.layers) {
			if (e.which == 3) {
				οncοntextmenu='return false';
			}
		}
	}

	if (document.layers) {
		document.captureEvents(Event.MOUSEDOWN);
	}
	document.οnmοusedοwn=click;
	document.oncontextmenu = new Function("return false;")
//*******************************************
	document.οnkeydοwn=function(evt){
		if(document.selection.createRange().parentElement().type == "file"){
			return false;
		}
		if ((event.keyCode==116)|| //屏蔽 F5 刷新键
			(event.ctrlKey && event.keyCode==82)){ //Ctrl + R
			event.keyCode=0;
			event.returnValue=false;
		}
		if ((window.event.altKey)&&(window.event.keyCode==115)){ //屏蔽Alt+F4
			return false;
		}
	}
```
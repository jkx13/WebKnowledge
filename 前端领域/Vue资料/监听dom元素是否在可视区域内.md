## 监听dom元素是否在可视区域内
- Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置。
- 如果是标准盒子模型，元素的尺寸等于width/height + padding + border-width的总和。
- 如果box-sizing: border-box，元素的的尺寸等于 width/height。

```javascript
// vue
mounted(){
	window.addEventListener("scroll", this.scrollHandle, true); // 监听 监听元素是否进入/移出可视区域
}

method(){
	scrollHandle() {
		const offset = this.$el(对应dom).getBoundingClientRect(); 
		const offsetTop = offset.top; 
		const offsetBottom = offset.bottom; 
		// 进入可视区域 
		// console.log(offsetTop,offsetBottom) 
		if (offsetTop <= window.innerHeight && offsetBottom >= 0) { 
			// console.log('进入可视区域'); 
		} else { 
			// console.log('移出可视区域'); 
		} 
	}
}

destory(){
	window.removeEventListener('scroll', this.scrollHandle, true);
}



```

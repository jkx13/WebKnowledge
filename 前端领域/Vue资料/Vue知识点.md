## Vue.$nextTick()
```javascript
1.$nextTick回调延迟到下次DOM更新循环之后执行，执行后等待Dom更新。

getValue(){
	console.log(this.value);//hello
	this.value = 'jk';
	console.log(this.$refs['curText'].innerText);//hello
	
	this.$nextTick(()=>{
		console.log(this.$refs['curText'].innerText);//jk
	})
}
```
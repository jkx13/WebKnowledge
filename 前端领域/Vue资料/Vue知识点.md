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

## slot插槽
插槽，也就是slot，是组件的一块HTML模板，这块模板显示不显示、以及怎样显示由父组件来决定。
### 匿名slot(默认插槽)
子组件
```html
// name: childComponent
<template>
	<div class="child">
		<h3>这里是子组件</h3>
		<slot></slot> // 默认插槽
	</div>
</template>
```
父组件
```html
<template>
	<div class="father">
		<h3>这里是父组件</h3>
		<child-component> 
		//这里就将下边的div 显示到了slot插槽中 
			<div>插入内容</div>
		</child-component>
	</div>
</template>

转换展示如下：

<template>
	<div class="father">
		<h3>这里是父组件</h3>
		<div class="child">
			<h3>这里是子组件</h3>
			<div>插入内容</div> // 替换slot
		</div>
	</div>
</template>

```

### 具名插槽
使用<slot name="xxxx"></slot> 和 <div slot="xxxx">指定</div>
子组件
```html
// name: childComponent
<template>
	<div class="child">
		<h3>这里是子组件</h3>
		<slot name="info"></slot> // 默认插槽
	</div>
</template>
```
父组件
```html
<template>
	<div class="father">
		<h3>这里是父组件</h3>
		<child-component> 
		//这里就将下边的div 显示到了slot插槽中 
			<div slot="info">插入内容</div>
		</child-component>
	</div>
</template>

转换展示如下：

<template>
	<div class="father">
		<h3>这里是父组件</h3>
		<div class="child">
			<h3>这里是子组件</h3>
			<div>插入内容</div> // 替换slot
		</div>
	</div>
</template>

```

### 作用域插槽
带数据的插槽(使用绑定数据v-bind 与 slot-scope="scope"获得数据)

子组件
```javascript
// name: childComponent
<template>
	<div class="child">
		<h3>这里是子组件</h3>
		<slot name="info" :mydata="data"></slot> // 默认插槽
	</div>
	
</template>

export default {
	data(){
		return {
			data:{
				name:'jk'
			}
		}
	}
}
```
父组件
```html
<template>
	<div class="father">
		<h3>这里是父组件</h3>
		<child-component> 
		//这里就将下边的div 显示到了slot插槽中 
			<div slot="info" slot-scope="scope">插入内容 name : {{scope.mydata.name}}</div>
		</child-component>
	</div>
</template>

转换展示如下：

<template>
	<div class="father">
		<h3>这里是父组件</h3>
		<div class="child">
			<h3>这里是子组件</h3>
			<div>插入内容</div> // 替换slot
		</div>
	</div>
</template>

```
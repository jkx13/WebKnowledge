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

## vue-router 传参方式
### 1、通过params方式传参
- 刷新页面后参数不会丢失
```javascript
// 配置routers
{ 
   path: '/detail/:id',  //若id后面加?代表这个参数是可选的，即使不传id也不会导致页面无法访问
   name: 'detail', 
   component: Detail 
}

// 跳转
this.$router.push({
   path:`/detail/${id}` 
})

// 详情页获取参数
this.$route.params.id

// 这种方式参数是以/:id跟在url后，刷新页面后参数不会丢失

```
- 刷新页面后参数会丢失
```javascript
// 跳转
this.$router.push({
   name:'detail',
   params:{
       id:id     
   }
})


// 详情页获取参数
this.$route.params.id

// 必须使用name进行跳转，未在路由配置:id，url后不会显示id，刷新页面后参数会丢失
```

### 2、通过query方式传参
- 这种方式的参数以?id跟在url后，类似get传参，并且，query必须使用path进行传参。刷新页面后参数不会丢失。
```javascript
// 路由配置
{ 
    path: '/detail',
    name: 'detail', 
    component: Detail 
}

// 列表中跳转
this.$router.push({
   path:'/detail',
   query:{
       id:id
   }
})

// 详情页获取参数
this.$route.query.id

```
- 传递的参数是对象或数组
1. 通过JSON.stringify()方法将参数转换为字符串，在获取参数时通过JSON.parse转换成对象
```
let parObj = JSON.stringify(obj)
// 路由跳转
this.$router.push({
   path:'/detail',
   query:{
       obj:parObj
   }
})

// 详情页获取参数
JSON.parse(this.$route.query.obj)
```

### 3、使用props配合组件路由解耦
- 路由配置指定参数:id
```
{
   path:'/detail/:id',
   name:'detail',
   component:Detail,
   props:true             // 如果props设置为true，$route.params将被设置为组件属性  
}

// 路由跳转
this.$router.push({
   path:`/detail/${id}`
})

// 详情页获取参数
export default {
  props:['id'],      // 将路由中传递的参数id解耦到组件的props属性上
  mounted(){
    console.log("id",this.id);  
  }
}

```

- 路由配置中未指定参数:id

```
{
   path:'/detail',
   name:'detail',
   component:Detail,
   props:true             // 如果props设置为true，$route.params将被设置为组件属性  
}

// 路由跳转
this.$router.push({
   name:'detail',
   params:{
       order:{
         id:'123456789',
         name:'商品名称'  
       }
   }
})

// 详情页获取参数
export default {
  props:['order'],      // 将路由中传递的参数order解耦到组件的props属性上
  mounted(){
    console.log("order",this.order);  
  }
}

```

#### 可以使用sessionStorage或localStorage来进行存储参数来解决页面刷新参数丢失的问题
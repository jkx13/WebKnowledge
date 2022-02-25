## 改变了数组内的值，但是页面没有重新渲染(this.array[0] = value)

### 通过Vue.$set(this.$set)
	this.$set(target,name/index,value)
	target:为响应式对象或数组
	name/index:为新增属性或数组修改索引
	value:为新增值
	
### 使用Vue.$delete
	删除对象或数组中元素，通过key或数组索引，可以触发视图更新

### 数组对象直接修改属性，可以触发视图更新
	array[0].name = 'jk',修改数组中对象属性值
	
### splice方法修改数组，可以触发视图更新
	this.array.splice(index,num, newElement)
	index: 开始索引位置
	num: 数量
	newElement: 插入值或 ...array

### 数组赋值为新数组，可以触发视图更新
	this.array = this.array.filter(...)
	this.array = this.array.concat(...)
	
### 用Object.assign或lodash.assign可以为对象添加响应式属性，可以触发视图更新
	//Object.assign的单层的覆盖前面的属性，不会递归的合并属性
	this.obj = Object.assign({},this.obj,{a:1, b:2})
	
	//assign与Object.assign一样
	this.obj = _.assign({},this.obj,{a:1, b:2})
	
	//merge会递归的合并属性
	this.obj = _.merge({},this.obj,{a:1, b:2})
	
### Vue提供了如下操作数组覆盖的方法，可以触发视图更新
	push()
	pop()
	shift()
	unshift()
	splice()  
	sort()
	reverse()
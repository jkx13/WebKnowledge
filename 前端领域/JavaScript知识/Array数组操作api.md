## 数组操作方法
1. 可改变原数组
pop push unshift shift splice reverse sort
2. 不可改变原数组
slice indexOf lastIndexof concat

### for遍历
// 支持 break;跳出 与continue;跳出当前继续
```javascript
let arr = [1];
for(let i=0,len=arr.length;i<len,i++){
	continue;
}

```

### forEach遍历
// 不支持break;continue;注意要跳出循环使用try{}catch(){} 与 throw new Error();
```javascript
let arr = [1,2];
arr.forEach((item,index)=>{
	console.log(item)
})
```

### for in 遍历
1. key会变成字符串类型（key为索引）
2. 会将数组的私有属性也遍历出来（下面b为数组的私有属性，使用for in也会遍历出来）
```javascript

let arr = [1,2,3]
arr.b = 4;
for(let key in arr){
	console.log(typeof key)
	console.log(key)//0，1，2，b
}
```

### for of 遍历
1. 支持break与continue;
2. val是值 of 数组 格式（不能遍历对象），不会将私有属性遍历出来
```javascript
let arr = [1,2,3]
arr.b = 4;
for(let val of arr){
	if(val == 2){
		continue;
	}
	console.log(typeof val)
	console.log(val)// 1,2,3
}

// 遍历对象
let obj = {a:1,b:2}
for(let val of Object.keys(obj)){
	console.log(obj[val]);
}
```

### filter过滤器
1. 回调函数返回true则将这一项放入新数组中
2. 一般用于删除数组中某些内容
```javascript
let arr = [1,2,3]
let newArr = arr.filter(i=>i>2);
console.log(newArr)// 新数组为深拷贝
```

### map遍历
1. 回调函数中返回什么这一项就是什么
2. 更新数组中的内容

```javascript
let arr = [1,2,3]
let newArr = arr.map(item=>{
	return item+'name'
})
console.log(newArr)// 新数组为深拷贝
```

### includes判断是否有这个值
```javascript
let arr = [1,2,3]
console.log(arr.includes(3)) // true;
```

### find
1. 返回找到的那一项
2. 回调函数中返回true表示找到了，找到后停止循环。找不到返回undefined
3. 找到具体的某一项使用find

```javascript
let arr = [1,2,3]

let val = arr.find(i=>i==2);
console.log(val)// 2
```

### some
1. 返回true
2. 回调函数中找到后停止循环，返回true
3. 找不到返回false

```javascript
let arr = [1,2,3]

let val = arr.some(i=>i==2);
console.log(val)// true
```

### every
1. 返回false
2. 回调函数找false，找到false后停止

```javascript
let arr = [1,2,3]

let val = arr.every(i=>i==2);
console.log(val)// false
```

### reduce
1. 返回的是叠加后的结果
2. 给定第一项的默认值

```javascript
let arr = ['a','b','c']

let sum = arr.reduce((pre,next,index,item)=>{
	console.log('pre=='+pre) // 前一次返回的结果
	console.log('next=='+next)// 下一个值
	console.log('index=='+index)// 索引是从 1 开始
	console.log('item=='+item)// 当前数组
	return pre+next;
},'1');//'1'为默认给定的值
console.log(sum)

// 二维数组变一维数组
let newArr = [[1,2,3],[4,5,6]].reduce((pre,next)=>{
	return pre.concat(next);
})
console.log(newArr)// [1,2,3,4,5,6]
```

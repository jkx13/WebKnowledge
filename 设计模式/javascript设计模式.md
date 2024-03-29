## 单例模式
	保证一个类只有一个实例，并提供一个全局访问变量，比如线程池/全局缓存/浏览器window对象等。
例如弹窗实现(createSingle管理单例对象，闭包存储实例只创建一个弹窗实例)
```javascript
var createSingle = (function () {
    let instance = {};
    return function (fn) {
        if (!instance[fn.name]) {
            instance[fn.name] = fn.apply(this, arguments);
        }

        return instance[fn.name];
    }
})();
var createLoginLarger = () => {
    let div = document.createElement('div');
    div.innerHTML = '弹窗';
    div.style.display = 'none';

    document.body.appendChild(div);

    return div;
};

document.getElementById('btn').onclick = () => {
    const loginlayer = createSingle(createLoginLarger);
    loginlayer.style.display = 'block';
}
```

## 策略模式
	将一个一个的策略方法分别封装起来(具体算法和计算过程及算法的实现和算法的使用是分离的，代码清晰职责明确)，可以相互替换
例如计算不同业绩水平的年终奖励(分不同业绩水平A/B/C为工资的多少倍)
```javascript
const strategies = {
	A:(salary)=>salary*3,
	B:(salary)=>salary*2,
	C:(salary)=>salary*1
}

const calculateBonus = (level,salary)=>{
	return strategies[level](salary);
}

calculateBonus('A',19000);
```

## 代理模式
	就是实现一个对象的代理对象，用户访问对象实际访问的是代理对象。
例如外卖送花
```javascript
const Flower = function(){return '花🌹'};

//男孩
const goodBoy = {
	sendFlower:function(target){
		const flower = Flower();
		target.receiveFlower(flower);
	}
}

//女孩
const goodGirl = {
	receiveFlower:function(flower){
		console.log(`收到${flower}哇～`);
	},
	myAddress:function(){
		return new Promise((resovle,reject)=>{
			resovle('女孩地址是XXX')
		})
	}
}

//外卖小哥
const takeMan = {
	receiveFlower:function(flower){
		goodGirl.myAddress().then((address)=>{
			console.log(address);
			goodGirl.receiveFlower(flower);
		})
	}
}

goodBoy.sendFlower(takeMan);

```
大图片加载空白使用代理加载
```javascript
const imgNode = (function () {
    const img = document.createElement('img');
    document.body.appendChild(img);
    return {
        setSrc: function (src) {
            img.src = src;
        }
    }
})();

const loadingImg = './loading.gif'//加载图片
const imageSrc = 'http://www.xxx.com/j.png'//原图访问

const proxyImg = (function () {
    const image = new Image();
    image.onload = function () {
        imgNode.setSrc(image.src);
    }
    return {
        setSrc: function (src) {
            imgNode.setSrc(loadingImg);
            image.src = src;
        }
    }
})();

proxyImg.setSrc(imgageSrc);
```

## 发布订阅模式（观察者模式)
	当对象是1对多的依赖关系时，一个对象的改变就会通知其他依赖对象。
```javascript
const PubFn = {
	subscribe:function(type,callback){
		this.allCallback && this.allCallback={};
		(this.allCallback[type] || this.allCallback[type] = []).push(callback);
	},
	publish:function(){
		const args = [...arguments];
		const type = args.shift();
		
		if(!this.allCallback[type]) return;
		
		this.allCallback[type].forEach(callback=>{
			if(typeof(callback) === 'function' && callback)
			callback(...args);
		})
	}
}
```

## 装饰器模式
	给对象动态增加功能(在不修改现有对象新增功能)
```javascript
const before = function(fn,beforeFn){
	return function(){
		beforeFn.apply(this,arguments);
		return fn.apply(this,arguments);
	}
}
const after = function(fn,afterFn){
	return function(){
		const __ = fn.apply(this,arguments);
		afterFn.apply(this,arguments);
		return __;
	}
}

const ajax = function () {
    console.log('ajax==');
    console.log(arguments);
}

const changeFn = function (type,url,params) {
    params.token = 'sdfds';
}

before(ajax,changeFn)('text','https://wwww',{name:'jk'})

```

## 职责链模式
	解耦多个执行对象，直到找到相应要求的对象
```javascript
const Chain = function (fn) {
    this.fn = fn;
    this.successor = null;
}

Chain.prototype.setNextSuccessor = function (successor) {
    return this.successor = successor;
}

Chain.prototype.passRequest = function () {
    const ret = this.fn.apply(this, arguments);
    if (ret === 'nextSuccessor') {
        return this.successor && this.successor.passRequest.apply(this.successor, arguments);
    }
    return ret;
}


const order500 = function (orderType) {
    if (orderType === 500) {
        console.log('已付款500定金得100优惠券');
    } else {
        console.log('不是该500定金==');
        return 'nextSuccessor';
    }
}

const order200 = function (orderType) {
    if (orderType === 200) {
        console.log('已付款200定金得50优惠券');
    } else {
        console.log('不是该200定金==');
        return 'nextSuccessor';
    }
}

const chainOrder500 = new Chain(order500);

const chainOrder200 = new Chain(order200);

chainOrder500.setNextSuccessor(chainOrder200);

chainOrder500.passRequest(500);

```

## 原型模式
```
是一种创建型设计模式，就是从一个样板对象中复制出一个内部属性一致的对象,是实现了保护性拷贝的原型模式.
java语言中，Object类实现了Cloneable接口(标识接口表示可以被拷贝没有Clone方法),可以通过调用Clone()方法生成对象.
```
## 盒子模型
1. 标准的W3C盒子模型
chrome,firefox,IE9,IE10,IE11的盒模型为标准盒模型
实际宽/高 = width/height + 2*padding + 2*border;

2. IE6-8盒子模型(怪异盒子模型)
实际宽/高 = with/height(包含padding和border在内)
可以使用doctype声明<!doctype html>，让浏览器使用标准模式。

3. 样式修改模型
```css
box-sizing属性
box-sizing:content-box;//采用标准模式解析计算，默认模式；
box-sizing:border-box;//采用怪异模式解析计算；
```

## IE9 以下浏览器不能使用 opacity
```css
 opacity: 0.5;// 透明度属性
 
// IE6-IE8我们习惯使用filter滤镜属性来进行实现
 filter: alpha(opacity = 50);
 
//IE4-IE9都支持滤镜写法progid:DXImageTransform.Microsoft.Alpha(Opacity=xx)
 filter: progid:DXImageTransform.Microsoft.Alpha(style = 0, opacity = 50); 

```

## new Date('2019-2-18') IE不兼容
题目: 获取val= '2019-2-18' 想要获取下一天的日期 也要返回该格式
```javascript
var dd = new Date(val);
dd.setDate(dd.getDate()+1);//获取AddDayCount天后的日期
let Y = dd.getFullYear() + '-';
let M = (dd.getMonth() + 1 < 10 ? '0' + (dd.getMonth() + 1) : dd.getMonth() + 1) + '-';
let D = (dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()) + ' ';
return (Y + M + D + '00:00:00');

```

IE中会报NAN的错误 因为IE无法识别new Date('2019-4-18')
解决方法一：new Date('2019/4/18')
解决方法二： val 转换为 Thu Apr 18 2019 15:33:55 GMT+0800 (中国标准时间) 原始格式
```
val.setMinutes(val.getMinutes() - val.getTimezoneOffset() + 24 * 60); //获取明天 需要多加24小时*60分钟
return val.toJSON().slice(0, 10) + ' 00:00:00'

```

## IE8以下console.log兼容
```
if(window.console && consolw.log){
	console.log('msg')
}
```

[](https://juejin.cn/post/6844903825854185480)
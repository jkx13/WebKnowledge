## 视口宽高
浏览器视口（viewport）宽度（单位：像素），如果存在滚动条则包括它。
window.innerWidth和window.innerHeight是只读属性，无默认值。

```
let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

```

### 在html中添加如下：移动端视口宽高始终与逻辑分辨率一致
无添加: 移动端浏览器会在一个通常比屏幕更宽的虚拟”窗口“（视口）中渲染页面。
```
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />

```

## 浏览器宽高
整个浏览器窗口的高度（单位：像素），包括侧边栏（如果存在）、窗口镶边（window chrome）和窗口调正边框（window resizing borders/handles）。
- window.outerWidth和window.outerHeight是只读属性，无默认值。
- 在使用桌面端浏览器的模拟移动设备查看网页时，这两个属性，依然指的是桌面端浏览器窗口的宽高
```
let outerWidth = window.outerWidth;
let outerHeight = window.outerHeight;

```

## 元素内部的宽高
元素内部宽 = width + padding-left + padding-right - 竖直滚动条宽度
元素内部高 = height + padding-top + padding-bottom - 横向滚动条高度

```
let clientWidth = element.clientWidth;
let clientHeight = element.clientHight;

```

## 元素的布局宽高
元素布局宽 = width + padding-left + padding-right + 竖直滚动条宽度 + border-left + border-right
元素布局高 = height + padding-top + padding-bottom + 横向滚动条高度 + border-top + border-bottom
```
let offsetWidth = element.offsetWidth;
let offsetHight = element.offsetHight;

```

## 元素的内容宽高
元素的内容宽高，包括由于溢出导致内容在屏幕上下不可见的内容。

```
let scrollWidth = element.scrollWidth;
let scrollHeight = element.scrollHeight;

```

## 屏幕的宽高
屏幕分辨率宽高。如果是移动设备，则返回逻辑分辨率宽高。

```
let screenWidth = window.screen.width;
let screenHeight = window.screen.height;

```

## 屏幕的可用宽高
减去比如Windows的任务栏等界面特性的屏幕的可用宽高。如果是移动设备，则返回逻辑分辨率宽高。

```
let availWidth = window.screen.availWidth;
let availHeight = window.screen.availHeight;

```

## 以下三种方法能够确定浏览器窗口的尺寸（浏览器的视口，不包括工具栏和滚动条）。

### 1. 对于Internet Explorer、Chrome、Firefox、Opera 、 Safari：
```
浏览器窗口的内部高度:
 window.innerHeight
 
 浏览器窗口的内部宽度:
 window.innerWidth
```

### 2.对于 Internet Explorer 8、7、6、5：
```
浏览器窗口的内部高度:
document.documentElement.clientHeight

浏览器窗口的内部宽度:
document.documentElement.clientWidth

       或者

浏览器窗口的内部高度:
document.body.clientHeight

浏览器窗口的内部宽度:
document.body.clientWidth
```
### 3. ==》实用的 JavaScript 解决方案（兼容所有浏览器）：

```
宽度：
var w=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

高度：
var h=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

```
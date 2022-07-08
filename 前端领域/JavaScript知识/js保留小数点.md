## 使用数字的toFixed函数
- 自带四舍五入的功能
- 自带补位功能比如： 23.00
```javascript
let num = 23.23232
num.toFixed(2)
```

## substr截取字符串
- 没有四舍五入
```javascript
let num = 23.33434 + ''
num.substr(0,num.indexOf(".")+3)
```

## 浮点数 parseFloat
```javascript
let num = 23.23232
Math.round(num*100)/100;
```
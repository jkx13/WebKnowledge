## 浏览器拦截原因
- 当window.open为用户触发事件内部或者加载时，不会被拦截
- 将window.open弹出代码移动到ajax或者一段异步代码内部，马上就出现被拦截的表现了
- 浏览器检测到的是非用户操作产生的新弹出窗口，就会对其进行阻止。因为浏览器认为这可能是一个广告，不是一个用户希望看到的页面;

1. 事件触发
- 优点：所有浏览器都不会拦截
- 缺点：只要点击页面元素都会进行跳转，不是很友好
```javascript
document.body.addEventListener('click' function() {
    window.open('//www.baidu.com, '_blank');
});
```
2. 使用a标签替代
- 优点：模拟a标签，利用a标签的href进行页面的跳转，兼容所有浏览器
- 缺点：需要创建a标签
```javascript
 const a = document.createElement('a');
 a.href = location.origin+'adress'
 document.body.appendChild(a)
 a.click()
 document.body.removeChild(a)
```

3. 表单提交的方式
- 如果需要传递参数时，需要使用 POST 方法， 默认的 GET 方法无法传递参数。也就是新页面的url中 没有参数部分。
```javascript
const form = document.createElement('form');
		form.action = 'www.baidu.com?id=1';
		form.target = '_blank';
		form.method = 'POST';
		document.body.appendChild(form);
		form.submit();
		document.body.removeChild(form);
```

4. 通过JS打开新窗口会被拦截
```javascript
const tempPage=window.open('_blank'); // 先打开一个空页面
tempPage.location='http://www.baidu.com'; //目标的页面地址
```

5. 先弹出窗口，然后重定向
- 建议在打开第一个地址的时候给出一个类似‘当前页面正在加载中，请稍后…’的简单提示，可以避免打开两次真正的目标页面，让用户察觉到页面的重定向。

```javascript
dom.addEventListener('click', function () {
	 const tempPage = window.open('loading page');
	     ajax().done(function() {
	         // 重定向到目标页面
	          tempPage.location.href = 'target url';
	      });
	 });
```
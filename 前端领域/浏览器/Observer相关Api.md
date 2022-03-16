[](https://juejin.cn/post/7064557881492209678)

## 5种Observer
浏览器提供了 5 种 Observer 来监听这些变动：
- MutationObserver、
- IntersectionObserver、
- PerformanceObserver、
- ResizeObserver、
- ReportingObserver


## MutationObserver
监听一个普通 JS 对象的变化，我们会用 Object.defineProperty 或者 Proxy：
而监听元素的属性和子节点的变化，我们可以用 MutationObserver：
- MutationObserver 可以监听对元素的属性的修改、对它的子节点的增删改。

```
const mutationObserver = new MutationObserver((mutationsList) => {
    console.log(mutationsList)
});
var box = document.getElementById('box');
mutationObserver.observe(box, {
    attributes: true,
    childList: true
});

```

- 使用场景
文章水印被人通过 devtools 去掉了，那么就可以通过 MutationObserver 监听这个变化，然后重新加上，让水印去不掉


## IntersectionObserver
IntersectionObserver 可以监听一个元素和可视区域相交部分的比例，然后在可视比例达到某个阈值的时候触发回调。

```
<div id="box1">BOX111</div>
<div id="box2">BOX222</div>

#box1,#box2 {
    width: 100px;
    height: 100px;
    background: blue;
    color: #fff;
    position: relative;
}
#box1 {
    top: 500px;
}
#box2 {
    top: 800px;
}


// 创建一个 IntersectionObserver 对象，监听 box1 和 box2 两个元素，当可见比例达到 0.5 和 1 的时候触发回调。

const intersectionObserver = new IntersectionObserver(
    function (entries) {
        console.log('info:');
        entries.forEach(item => {
            console.log(item.target, item.intersectionRatio)
        })
    }, {
    threshold: [0.5, 1]
});

intersectionObserver.observe( document.querySelector('#box1'));
intersectionObserver.observe( document.querySelector('#box2'));


// 可以看到元素 box1 和 box2 在可视范围达到一半（0.5）和全部（1）的时候分别触发了回调。

```

- 使用场景
数据采集的、图片懒加载


## ResizeObserver
窗口我们可以用 addEventListener 监听 resize 事件 而元素是 ResizeObserver 监听大小的改变，当 width、height 被修改时会触发回调

```
const resizeObserver = new ResizeObserver(entries => {
    console.log('当前大小', entries)
});
resizeObserver.observe(box);

```

## PerformanceObserver
浏览器提供了 performance 的 api 用于记录一些时间点、某个时间段、资源加载的耗时等。

PerformanceObserver 用于监听记录 performance 数据的行为，一旦记录了就会触发回调，这样我们就可以在回调里把这些数据上报。

- performance 可以用 mark 方法记录某个时间点：
```
performance.mark('registered-observer');

```

- 用 measure 方法记录某个时间段：后两个个参数是时间点，不传代表从开始到现在
```
performance.measure('button clicked', 'from', 'to');

```
- 创建 PerformanceObserver 对象，监听 mark（时间点）、measure（时间段）、resource（资源加载耗时） 这三种记录时间的行为。

```javascript
<html>
<body>
  <button onclick="measureClick()">Measure</button>

  <img src="https://p9-passport.byteacctimg.com/img/user-avatar/4e9e751e2b32fb8afbbf559a296ccbf2~300x300.image" />

  <script>
    const performanceObserver = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        console.log(entry);// 上报
      })
    });
    performanceObserver.observe({entryTypes: ['resource', 'mark', 'measure']});

    performance.mark('registered-observer');

    function measureClick() {
      performance.measure('button clicked');
    }
  </script>
</body>
</html>

```

## ReportingObserver
- 当浏览器运行到过时（deprecation）的 api 的时候，会在控制台打印一个过时的报告:
- 浏览器还会在一些情况下对网页行为做一些干预（intervention），比如会把占用 cpu 太多的广告的 iframe 删掉：


- 浏览器提供了 ReportingObserver 的 api 用来监听这些报告的打印，我们可以拿到这些报告然后上传。
```javascript
const reportingObserver = new ReportingObserver((reports, observer) => {
    for (const report of reports) {
        console.log(report.body);//上报
    }
}, {types: ['intervention', 'deprecation']});

reportingObserver.observe();

```
ReportingObserver 可以监听过时的 api、浏览器干预等报告等的打印，在回调里上报，这些是错误监听无法监听到但对了解网页运行情况很有用的数据。


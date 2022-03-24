# js常用工具类

## lodash 
一个一致性、模块化、高性能的 JavaScript 实用工具库。
```javascript
import _ from 'lodash'

_.max([4, 2, 8, 6]) // 返回数组中的最大值 => 8
_.intersection([1, 2, 3], [2, 3, 4]) // 返回多个数组的交集 => [2, 3]
```

## ramda 
一个很重要的库，提供了许多有用的方法，每个 JavaScript 程序员都应该掌握这个工具

## day.js 
一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样, 体积只有2kb

## big.js
一个小型，快速的JavaScript库，用于任意精度的十进制算术运算

## qs
一个 url参数转化 (parse和stringify)的轻量级js库

# dom库

## JQuery 
封装了各种dom/事件操作, 设计思想值得研究借鉴

## zepto j
query的轻量级版本, 适合移动端操作

## fastclick 
一个简单易用的库，它消除了移动端浏览器上的物理点击和触发一个 click 事件之间的 300ms 的延迟。目的就是在不干扰你目前的逻辑的同时，让你的应用感觉不到延迟，反应更加灵敏

# 文件处理

## file-saver 
一个在客户端保存文件的解决方案，非常适合在客户端上生成文件的Web应用程序

## js-xlsx
 一个强大的解析和编写excel文件的库
 
 # 网络请求

## Axios 
一个基于 Promise 的 HTTP 库，可用在 Node.js 和浏览器上发起 HTTP 请求，支持所有现代浏览器，甚至包括 IE8+

## Superagent 
基于Ajax的优化, 可以与 Node.js HTTP 客户端搭配使用

## fly.js
一个基于promise的http请求库, 可以用在node.js, Weex, 微信小程序, 浏览器, React Native中

# 动画库

## Anime.js 
一个JavaScript动画库，可以处理CSS属性，单个CSS转换，SVG或任何DOM属性以及JavaScript对象
## Velocity
 一个高效的 Javascript 动画引擎，与jQuery的 $.animate() 有相同的API, 同时还支持彩色动画、转换、循环、画架、SVG支持和滚动等效果

## Vivus 
一个零依赖的JavaScript动画库，可以让我们用SVG制作动画，使其具有被绘制的外观

## GreenSock JS 
一个JavaScript动画库，用于创建高性能、零依赖、跨浏览器动画，已在超过400万个网站上使用, 并且可以在React、Vue、Angular项目中使用

## Scroll Reveal
 零依赖，为 web 和移动浏览器提供了简单的滚动动画，以动画的方式显示滚动中的内容

## Kute.js
一个强大高性能且可扩展的原生JavaScript动画引擎，具有跨浏览器动画的基本功能

## Typed.js
一个轻松实现打字效果的js插件

## fullPage.js
一个可轻易创建全屏滚动网站的js滚动动画库, 兼容性无可替代

## iscroll 
移动端使用的一款轻量级滚动插件

#  鼠标/键盘相关
## KeyboardJS 
一个在浏览器中使用的库（与node.js兼容）.它使开发人员可以轻松设置键绑定和使用组合键来设置复杂的绑定.

## SortableJS 
功能强大的JavaScript 拖拽库

# 图形/图像处理库

## html2canvas
一个强大的使用js开发的浏览器网页截图工具
## dom-to-image
一个可以将任意DOM节点转换为用JavaScript编写的矢量（SVG）或光栅（PNG或JPEG）图像的库

## pica
一个在浏览器中调整图像大小，而不会出现像素失真，处理速度非常快的图片处理库

## Lena.js
一个轻量级的可以给你图像加各种滤镜的js库

## Compressor.js
一个使用本地canvas.toBlob API进行图像有损压缩的js库

## Fabric.js
一个易于使用的基于HTML5 canvas元素的图片编辑器

## merge-images
一个将多张图片合并成一张图的js插件

## cropperjs
一款强大的图片裁切库, 支持灵活的图片裁切方式

## Grade
一个基于图像中的前2种主要颜色生成互补渐变背景的库


## 工具库

### Day.js
一个极简的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持一样, 但体积仅有2KB。
```shell
npm install dayjs
```

```javascript
import dayjs from 'dayjs'
dayjs().format('YYYY-MM-DD HH:mm') // => 2022-01-03 15:06
dayjs('2022-1-3 15:06').toDate() // => Mon Jan 03 2022 15:06:00 GMT+0800 (中国标准时间)
```

### qs
一个轻量的 url 参数转换的 JavaScript 库
```shell
npm install qs
```

```javascript
import qs from 'qs'

qs.parse('user=tom&age=22') // => { user: "tom", age: "22" }
qs.stringify({ user: "tom", age: "22" }) // => user=tom&age=22
```

### js-cookie
一个简单的、轻量的处理 cookies 的 js API
```javascript
import Cookies from 'js-cookie'

Cookies.set('name', 'value', { expires: 7 }) // 有效期7天
Cookies.get('name') // => 'value'
```

### flv.js
bilibili 开源的 html5 flash 视频播放器，使浏览器在不借助 flash 插件的情况下可以播放 flv，目前主流的直播、点播解决方案。

```javascript
<video autoplay controls width="100%" height="500" id="myVideo"></video>

import flvjs from 'flv.js'

// 页面渲染完成后执行
if (flvjs.isSupported()) {
  var myVideo = document.getElementById('myVideo')
  var flvPlayer = flvjs.createPlayer({
    type: 'flv',
    url: 'http://localhost:8080/test.flv' // 视频 url 地址
  })
  flvPlayer.attachMediaElement(myVideo)
  flvPlayer.load()
  flvPlayer.play()
}
```

### vConsole
一个轻量、可拓展、针对手机网页的前端开发者调试面板。如果你还苦于在手机上如何调试代码，用它就对了。
```javascript
import VConsole from 'vconsole'

const vConsole = new VConsole()
console.log('Hello world')
```

### Animate.css
```shell
npm install animate.css
```

```javascript
<h1 class="animate__animated animate__bounce">An animated element</h1>

import 'animate.css'
```

### animejs
一款功能强大的 Javascript 动画库。可以与CSS3属性、SVG、DOM元素、JS对象一起工作，制作出各种高性能、平滑过渡的动画效果。


```javascript
<div class="ball" style="width: 50px; height: 50px; background: blue"></div>

import anime from 'animejs/lib/anime.es.js'

// 页面渲染完成之后执行
anime({
  targets: '.ball',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#F00',
  duration: 800
})

```

### mescroll.js
一款精致的、在H5端运行的下拉刷新和上拉加载插件，主要用于列表分页、刷新等场景。
```javascript
<template>
  <div>
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
    >
      <!--内容...-->
    </mescroll-vue>
  </div>
</template>

<script>
import MescrollVue from 'mescroll.js/mescroll.vue'

export default {
  components: {
    MescrollVue
  },
  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {}, //下拉刷新的配置
      mescrollUp: {
        // 上拉加载的配置
        callback: this.upCallback
      },
      dataList: [] // 列表数据
    }
  },
  methods: {
    // 初始化的回调,可获取到mescroll对象
    mescrollInit(mescroll) {
      this.mescroll = mescroll
    },
    // 上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
    upCallback(page, mescroll) {
      // 发送请求
      axios
        .get('xxxxxx', {
          params: {
            num: page.num, // 当前页码
            size: page.size // 每页长度
          }
        })
        .then(response => {
          // 请求的列表数据
          let arr = response.data
          // 如果是第一页需手动置空列表
          if (page.num === 1) this.dataList = []
          // 把请求到的数据添加到列表
          this.dataList = this.dataList.concat(arr)
          // 数据渲染成功后,隐藏下拉刷新的状态
          this.$nextTick(() => {
            mescroll.endSuccess(arr.length)
          })
        })
        .catch(e => {
          // 请求失败的回调,隐藏下拉刷新和上拉加载的状态;
          mescroll.endErr()
        })
    }
  }
}
</script>

<style scoped>
.mescroll {
  position: fixed;
  top: 44px;
  bottom: 0;
  height: auto;
}
</style>
```

### Chart.js
一套基于 HTML5 的简单、干净并且有吸引力的 JavaScript 图表库
```javascript
<canvas id="myChart" width="400" height="400"></canvas>

import Chart from 'chart.js/auto'

// 页面渲染完成后执行
const ctx = document.getElementById('myChart')
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

```
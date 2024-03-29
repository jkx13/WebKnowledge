## 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的
```
1.标准CSS盒子是 content(等于 盒子width) + padding + border + margin
2.低版本IE盒子是（content+padding+border) 等于 盒子width 
```

## box-sizing属性
```
是控制盒子解析模式：默认值content-box
1.content-box是W3C标准盒子模型
2.border-box 是 低版本IE盒子模型
```

## CSS选择器有哪些？哪些属性可以继承？
```
选择器:
id选择器(#id),类选择器（.class),标签选择器（div),相邻选择器（div+p) , 子选择器（ul>li),后代选择器（li a),通配符（*）,属性选择器（a[rel="external"]),
伪类选择器(a:hover,li:nth-child)

可继承属性: color ,font-size,font-family

不可继承属性: width ,height,padding,margin,border
```

## CSS优先级
```
 !important > 内联选择器（1000） > id选择器（100） > 类选择器（10） == 属性选择器 == 伪类选择器 > 标签选择器（1） == 伪元素选择器
```
### 条件伪类
```
:lang()：基于元素语言来匹配页面元素；
:dir()：匹配特定文字书写方向的元素；
:has()：匹配包含指定元素的元素；
:is()：匹配指定选择器列表里的元素；
:not()：用来匹配不符合一组选择器的元素；
```

### 行为伪类
```
:active：鼠标激活的元素；
:hover： 鼠标悬浮的元素；
::selection：鼠标选中的元素；
```

### 状态伪类
```
:target：当前锚点的元素；
:link：未访问的链接元素；
:visited：已访问的链接元素；
:focus：输入聚焦的表单元素；
:required：输入必填的表单元素；
:valid：输入合法的表单元素；
:invalid：输入非法的表单元素；
:in-range：输入范围以内的表单元素；
:out-of-range：输入范围以外的表单元素；
:checked：选项选中的表单元素；
:optional：选项可选的表单元素；
:enabled：事件启用的表单元素；
:disabled：事件禁用的表单元素；
:read-only：只读的表单元素；
:read-write：可读可写的表单元素；
:blank：输入为空的表单元素；
:current()：浏览中的元素；
:past()：已浏览的元素；
:future()：未浏览的元素；
```

### 结构伪类
```
:root：文档的根元素；
:empty：无子元素的元素；
:first-letter：元素的首字母；
:first-line：元素的首行；
:nth-child(n)：元素中指定顺序索引的元素；
:nth-last-child(n)：元素中指定逆序索引的元素；；
:first-child	：元素中为首的元素；
:last-child	：元素中为尾的元素；
:only-child：父元素仅有该元素的元素；
:nth-of-type(n)	：标签中指定顺序索引的标签；
:nth-last-of-type(n)：标签中指定逆序索引的标签；
:first-of-type	：标签中为首的标签；
:last-of-type：标签中为尾标签；
:only-of-type：父元素仅有该标签的标签；
```


## CSS3新增伪类
```
p:first-of-type 选择其父元素的首个元素
p:last-of-type 选择其父元素的最后元素
p:only-of-type 选择父元素的唯一元素
p:only-child 选择父元素的唯一子元素
p:nth-child(2)选择父元素的第二个子元素
p:enabled :disable 表单启用和禁用
:checked 单选框和复选框被选中
```

## 如何居中div？如何居中一个浮动元素？如何让绝对定位的div居中
```
div居中： 设置width 和 margin: 0 auto;

浮动元素居中：
div{
	float:left;
	width:100px;
	height:200px;
	position:absolute;
	left:50%;
	top:50%;
	margin-left:-50px;
	margin-top:-100px;
}

绝对定位居中:
div{
	position:absolute;
	left:0;
	top:0;
	width:200px;
	height:200px;
	margin:0 auto;
}
```

## 伪元素
```
::before：在元素前插入内容；
::after：在元素后插入内容；
```

## display有哪些值？说明他们的作用?
```
inline:行内元素
block:块状元素
inline-block:行内块状元素
none:隐藏
table:表格布局
list-item:项目列表

```

## position的值
```
static ：默认正常文档流
relative(相对定位,不脱文档流，相对自身位置移动)
absolute(绝对定位，脱离文档流，相对最近的父元素不为static)
fixed(固定定位，脱离文档流，相对可视窗口)
sticky(粘性定位)
```

## CSS3有哪些新特性
```
1.圆角设置 border-radius
2.边框图片 border-image
3.盒阴影 box-shadow
4.媒体查询 @media screen and (max-width:960px){}
5.font-face 定义自己的字体
6.文字阴影 text-shadow
7.word-wap:bread-word 对长文本换行
8.RGBA和透明度
9. background-image background-size background-repeat background-origin

```

## CSS3的flexbox（弹性盒布局模型）
```
盒子设置display:flex或display:inline-flex 后，float,clear,vertical-align属性失效
flex容器有两根主轴：水平方向主轴和垂直方向交叉轴

flex容器属性:
flex-direction:主轴方向（row | row-reverse | column | column-reverse）

flex-wrap（如果一条轴线排不下，如何换行，nowrap | wrap | wrap-reverse）

flex-flow（属性是flex-direction属性和flex-wrap属性的简写形式，默认值:row nowrap)

justify-content (主轴上的对齐方式 flex-start | flex-end | center | space-between | space-around)

align-items(交叉轴上如何对齐 flex-start | flex-end | center | baseline | stretch)

align-content(定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用)(flex-start | flex-end | center | space-between | space-around | stretch;)

flex子项目属性:
order (属性定义项目的排列顺序。数值越小，排列越靠前，默认为0)

flex-grow (属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大)

flex-shrink (属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小)

flex-basis (属性定义了在分配多余空间之前，项目占据的主轴空间（main size）,即项目的本来大小,可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间)
flex (属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto)(建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值)

align-self(允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。)
```

## 用纯CSS创建一个三角形的原理是什么
```css
div{
	width:0;
	height:0;
	border-left:20px solid transparent;
	border-top:20px solid transparent;
	border-right:20px solid transparent;
	border-bottom:20px solid red;
}
```

## 一个满屏品字布局如何设计
```
方法一：
1.设置上面有宽度的盒子 margin: 0 auto
2.下面两个盒子设置float或inline设置不换行
3.通过margin来调整位置

方法二:
1.设置上面盒子width:100%
2.设置下面div分别宽50%，设置float 或 inline
```

## 常见的兼容性问题
```
1.不同浏览器的margin,pading等默认值不一样
2.IE6-7中设置高度height小于10px会显示超出，可设置overflow:hidde或line-height小于高度
3.使用getAttribute()获取属性
4.hover样式问题：设置Css属性的顺序L-V-H-A(love hate) a:link{} a:visited{} a:hover{} a:active{}

```

## display:none与visibility：hidden的区别
```
1. display:none 不显示对应的元素，文档布局中不会分配空间（回流和重绘）
2. visibility:hidden 会隐藏元素，在文档布局中存在空间（重绘）
```

## position,display,overflow,float在一起使用
```
position: absolute/fixed优先级最高，这时float不起作用，需要调整display;
float或absolute定位，只能是块元素或表格
```

## BFC规范（块级格式化上下文）
```
1) BFC:块级格式化上下文
	a)形成BFC的条件
		i)浮动元素（float除none以外的值）
		ii)定位元素position(absolute/fixed的值)
		iii)overflow设置为hidden/auto/scroll
		iiii)display设置（inline-block/table-cell/table-caption/flex-inline)
	b)BFC特性
		i)内部块盒子会在垂直方向布局
		ii)垂直方向上margin会叠加，值由最大margin值决定(改变其中一盒子为BFC)
		iii)BFC的区域不会flaot元素重叠
		iiii)计算高度时浮动参与计算
		iiiii)独立容器，内部元素不会影响外面的元素
```
## 为什么会出现浮动和什么时候需要清除浮动？清除浮动的方式？
```
浮动问题:
1.无法撑开父元素的高度，影响同级元素
2.同级非浮动元素会跟随其后（内联）
3.浮动元素后面的元素需要清除浮动

清除浮动方式:
1.父级div设置height
2.浮动后面添加空div并设置clear:both
3.浮动的父标签设置overflow:hidden/auto 或者设置zoom
```
给父级添加 伪元素 示例： 
```css
.clearfix {
    zoom: 1;
}
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}
```

## Css3属性-webkit-font-smoothing实现抗锯齿
```css
//非标准
//chrome/safari
-webkit-font-smoothing: antialiased;//subpixel-antialiased默认值 ， none对低像素文本比较好 ，antialiased 抗锯齿比较好

//firefox
-moz-osx-font-smoothing: grayscale;

```

## @import 与 link 的区别
```
1.@import只能导入css ,link可导入css,图片/脚本/字体等

2.@import只能在页面加载了才能加载css, link可以在页面加载同时加载css

3.@import 不能兼容ie5以下，link没有兼容性问题

4.link可以通过js操作Dom动态插入样式
```

## 规则
```
@namespace 让CSS引擎知道是必须考虑XML命名空间
@media 设置媒体查询
@page  描述打印文档时布局的变化
@font-face 下载外部的字体
@keyframes 描述Css动画的关键帧
@document 文档样式表满足条件规则
```

## 单行和多行
```
//单行
{
	max-width:300px;
	white-space:nowrap;
	text-overflow:ellipsis;
	overflow:hidden;
}

//多行
{
	display:-webkit-box;
	-webkit-box-orient:vertical;
	-webkit-line-clamp:2;
	overflow:hidden;
}

可以设置line-height整数倍防止超出文字漏出

```

## 设置背景边角
```
width: 160px;
background: linear-gradient(135deg, transparent 8px, #3ED1FF 0) top left,
		linear-gradient(-135deg, transparent 8px, #3ED1FF 0) top right,
		linear-gradient(-45deg, transparent 8px, #3ED1FF 0) bottom right,
		linear-gradient(45deg, transparent 8px, #3ED1FF 0) bottom left;
background-size: 50% 50%;
background-repeat: no-repeat;
```

## padding实现图片自适应
```html
1.子容器的padding百分比大小是相对父容器的宽度来计算的（父width * 百分比)

<div class="main">
	<img src="./x.png" />
</div>

.main{
	padding-bottom:60%;//为图片宽高比例
	position:relative;//让图片脱离文档流，不撑开main
	img{
		position:absolute;
		with:100%;
	}
}
```

## ::selection伪元素
```
//设置文本选中的样式
p::selection{
	background-color:#262626;
	color:#fff
}
```

## calc计算
```
//calc() 函数用于指定使用大小、角度、时间或数字作为值的属性的计算值。这允许根据不同单位的加减来设置值
.modal{
	position:absolute;
	top: calc(50% - 50px);
}
```

## var函数
```
//var() 函数允许你使用自定义变量的值作为属性值

:root{
	--primary-bg-color:#fff;
}

button{
	background-color: var(--primary-bg-color)
}
```

## 适配浏览器是否支持该属性
```
//@supports 规则允许你在使用之前检查浏览器是否支持特定的一个或多个属性

@supports (display:grid){
	section{
		display:grid;
	}
}

@supports (image-rendering){
	img{
		image-rendering:pixelated;
	}
}
```

## text-overflow设置文本省略号
```
p{
	text-overflow: ellipsis;
}
```


## 组合选择器
```
//共用样式设置
选择器1,选择器2{
	属性:值;
}
```

## 设置边框透明
```css
border:10px solid hsla(0,0%,100%,.5);
```

## animation
```
CSS animation 属性是 animation-name，animation-duration, animation-timing-function，animation-delay，animation-iteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式。
```

## hover摆动动画
```css
div{
	animation: shake 2s ease 0s infinite;
	animation-play-state:paused;
}
	
div:hover{
	animation-play-state:running;
}

@keyframes shake{
	from {
		transform:roate(0deg);
	}
	4% {
		transform:rotate(5deg);
	}
	12.5% { transform: rotate(-5deg); }
	21% { transform: rotate(5deg); }
	29% { transform: rotate(-5deg); }
	37.5%{ transform: rotate(5deg); }
	46%{ transform: rotate(-5deg); }
	50%,to{
		transform:rotate(0deg);
	}
}
```

## 将div元素中的文本分为3列:(IE不支持)
```
div{
	-moz-column-count:3;
	-webkit-column-count:3;
	column-count:3;
	column-gap:1px;//指定列之间的间隙
}
```

## bootstrap响应式预设尺寸
#### 每行总共24个栅格，在不同尺寸的页面上如何分配宽度比例
|名称|尺寸|
|-|-|
|xs|<768px|
|sm|>=768px|
|md|>=992px|
|lg|>=1200px|
|xl|>=1920px|


## text-size-adjust 
```
默认值：auto 适用于：所有元素 属性值
auto：文本大小根据设备尺寸进行调整。
none：文本大小不会根据设备尺寸进行调整。
<percentage>：用百分比来指定文本大小在设备尺寸不同的情况下如何调整
```
- text-size-adjust 属性 允许我们控制将文本溢出算法应用到一些手机设备上。
- 这个属性还没有写进标准，使用时必须加上前缀：-moz-text-size-adjust，-webkit-text-size-adjust,，和 -ms-text-size-adjust。
- 因为缩放适配小屏幕而导致文字会变得很小，许多手机浏览器会使用文本溢出算法让文本变大而更易读。
- 当一个包含文本的元素宽度用了 100%，他的文本大小会增加直到达到一个易读的大小，但是不会修改布局。

### 使用说明
- 检索或设置移动端页面中对象文本的大小调整。
- 该属性只在移动设备上生效(PC端chrome中文不能小于12px也是这个属性做怪)；
- 如果你的页面没有定义meta viewport，此属性定义将无效；
- 对应的脚本特性为textSizeAdjust。

### 用法
text-size-adjust会根据设备尺寸而自动调整文字大小，这对于前端效果并不一定是需要的，所以我们一般会修改这个属性，将字体大写严格设置为我们定义的大小
```
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
```
或
```
html {
  -ms-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  text-size-adjust: none;
}
```
设置为 text-size-adjust:none 或 text-size-adjust:100% 两种设置等效。 另外，text-size-adjust 在 iPhone 上默认值为 auto，iPad 上的默认值为 none，所以 iPad 并不会出现文字调整的现象。


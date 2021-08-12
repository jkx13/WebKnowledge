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

21
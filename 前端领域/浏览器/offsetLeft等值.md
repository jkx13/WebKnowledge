## offsetHeight 与 offsetWidth
```
等于 boder + padding + content
```

## offsetLeft 与 offsetTop
```
相对于 offsetParent计算(第一个定位父级)

注意: offsetTop返回值是数字（只读) 而 style.top返回字符串带px(可读写);其他方向同理
```

## scrollTop,scrollLeft,scrollWidth,scrollHeight
```
相对于滚动盒子和可视范围进行计算得到
```

## event.clientX,event.clientY,event.pageX,event.pageY
```
event.clientX 是目标盒子距离浏览器可视范围的X轴坐标
event.clientY 是目标盒子距离浏览器可视范围的Y轴坐标
event.pageX 是目标盒子距离document最左上角的X轴坐标
event.pageY 是目标盒子距离document最左上角的Y轴坐标

```
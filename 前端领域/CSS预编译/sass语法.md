###  变量
```
$nav-color: #F90;// 全局
nav {
  $width: 100px;// 局部
  width: $width;
  color: $nav-color;
}

//编译后

nav {
  width: 100px;
  color: #F90;
}
```

### 嵌套（Nesting）
基本用法与less相同
```
article {
  ~ article { border-top: 1px dashed #ccc } // 同层组合选择器
  > section { background: #eee }  // 子组合选择器
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 } // 同层组合选择器
}


nav {
  border: {
  style: solid;
  width: 1px;
  color: #ccc;
  }
}
```

### 混合器@mixin标识符
```
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

- @include调用会把混合器中的所有样式提取出来放在@include被调用的地方
```
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

=>

.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

```
### 变量
```
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
```

### 嵌套（Nesting）
```
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

### 混合（Mixins）
```
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}

#menu a {
  color: #111;
  .bordered();
}

.post a {
  color: red;
  .bordered();
}
```
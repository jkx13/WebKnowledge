## meta是文档级元数据元素
- 用来表示那些不能由其它 HTML 元相关元素（<base>、<link>, <script>、<style>或 <title>）之一表示的任何元数据
- 如果设置了 name属性，meta 元素提供的是文档级别的元数据，应用于整个页面。
- 如果设置了 http-equiv属性，meta 元素则是编译指令，提供的信息与类似命名的 HTTP 头部相同。
- 如果设置了 charset属性，meta 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 itemprop 属性，meta 元素提供用户定义的元数据。
- name和content一起使用，前者表示要表示的元数据的名称，后者是元数据的值。

### description描述
```html
<meta name="description" content="电商网络....">

```

###  keyswords 关键词
```html
<meta name="keyswords" content="电商,网购"
```

### viewpoint
- width用来设置 viewport 的宽度为设备宽度;
- initial-scale为设备宽度与 viewport 大小之间的缩放比例。


```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

```

### robots
- 表示爬虫对此页面的处理行为，或者说，应当遵守的规则，是用来做搜索引擎抓取的。

- all:搜索引擎将索引此网页，并继续通过此网页的链接索引文件将被检索
- none:搜索引擎讲忽略此网页
- index:搜索引擎索引此网页
- follow:搜索引擎继续通过此网页的链接索引搜索其它的网页

### renderer

```
<meta name="renderer" content="webkit"> //默认webkit内核
<meta name="renderer" content="ie-comp"> //默认IE兼容模式
<meta name="renderer" content="ie-stand"> //默认IE标准模式
```

### http-equiv
- http-equiv也是和content一起使用，前者表示要表示的元数据的名称，后者是元数据的值。
- http-equiv 所有允许的值都是特定 HTTP 头部的名称，


### X-UA-Compatible
- 开发者偏好（meta元素）优先于Web服务器设置（HTTP头）
- IE=edge告诉浏览器，以当前浏览器支持的最新版本来渲染，IE9就以IE9版本来渲染。
- chrome=1告诉浏览器，如果当前IE浏览器安装了Google Chrome Frame插件，就以chrome内核来渲染页面。
```html
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
```

### content-type
```html
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />

```

### x-dns-prefetch-control
- HTML页面中的a标签会自动启用DNS提前解析来提升网站性能，但是在使用https协议的网站中失效了，我们可以设置
```html
<meta http-equiv="x-dns-prefetch-control" content="no">
```

### cache-control,Pragma,Expires
不生效，一般都通过http headers来设置缓存策略
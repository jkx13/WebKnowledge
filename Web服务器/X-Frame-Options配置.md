## X-Frame-Option响应头配置
X-Frame-Options HTTP 响应头是用来给浏览器指示允许一个页面可否在 <frame>, </iframe> 或者 <object> 中展现的标记。
网站可以使用此功能，来确保自己网站的内容没有被嵌套到别人的网站中去，也从而避免了点击劫持 (clickjacking) 的攻击。

### X-Frame-Options三个参数:

#### 1、DENY

表示该页面不允许在frame中展示，即便是在相同域名的页面中嵌套也不允许。

#### 2、SAMEORIGIN

表示该页面可以在相同域名页面的frame中展示。

#### 3、ALLOW-FROM uri

表示该页面可以在指定来源的frame中展示。
换一句话说，如果设置为DENY，不光在别人的网站frame嵌入时会无法加载，在同域名页面中同样会无法加载。另一方面，如果设置为SAMEORIGIN，那么页面就可以在同域名页面的frame中嵌套。正常情况下我们通常使用SAMEORIGIN参数。
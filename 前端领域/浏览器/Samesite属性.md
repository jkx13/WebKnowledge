## samesite属性说明(Cookies的属性)
```
1. samesit属性用来防止 CSRF 攻击和用户追踪（限制第三方 Cookie，从而减少安全风险）

2. chrome80开始 samesite属性设置默认值为Lax(对某些类型的跨站请求伪造 （CSRF） 攻击具有相当强的防御能力)

3.samesite的值(Strict,Lax,None)
设置了Strict或Lax以后，基本就杜绝了 CSRF 攻击。当然，前提是用户浏览器支持 SameSite 属性。

(1)Strict
最为严格，完全禁止第三方 Cookie，跨站点时，任何情况下都不会发送 Cookie。换言之，只有当前网页的 URL 与请求目标一致，才会带上 Cookie
(2)Lax
Lax规则稍稍放宽，大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外。
```

|	请求类型	|	示例	|	正常情况	| Lax |
|--	|--	|--	|-- |
|	链接	|	`<a href="..."></a>`	|	发送 Cookie	|   发送 Cookie    |
|	预加载	|	`<link rel="prerender" href="..."/>`	|	发送 Cookie	|   发送 Cookie    |
|	GET 表单	|	`<form method="GET" action="...">`	|	发送 Cookie	|   发送 Cookie    |
|POST 表单|`<form method="POST" action="...">`|发送 Cookie|不发送|
|iframe|	`<iframe src="..."></iframe>`|	发送 Cookie	|不发送|
|AJAX|	`$.get("...")`	|发送 Cookie	|不发送|
|Image	|`<img src="...">`|	发送 Cookie	|不发送|

```
(3)None
网站可以选择显式关闭SameSite属性，将其设为None。不过，前提是必须同时设置Secure属性（Cookie 只能通过 HTTPS 协议发送），否则无效

下面设置无效:
Set-Cookie: widget_session=abc123; SameSite=None

下面设置有效:
Set-Cookie: widget_session=abc123; SameSite=None; Secure
```

```	
4. 禁用samesite
94版本通过命令行禁用设置SameSite默认值的方式会被移除
(后续可通过nginx等代理工具或软件将跨域请求转为非跨域请求来解决,在开发环境,上https也许是最简单的一种办法)

打开chrome设置: chrome://flags 搜索samesit设置禁用
```
[](https://mp.weixin.qq.com/s/uEWKcSpz3dXAL_d9WRDj5w)

## cookie
cookie 也是前端存储的一种，但相比于 localStorage 等其他方式，借助 HTTP 头、浏览器能力，cookie 可以做到前端无感知。一般过程是这样的：

在提供标记的接口，通过 HTTP 返回头的 Set-Cookie 字段，直接「种」到浏览器上，浏览器发起请求时，会自动把 cookie 通过 HTTP 请求头的 Cookie 字段，带给接口

cookie 是要限制::「空间范围」::的，通过 Domain（域）/ Path（路径）两级。

> Domain属性指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie。如果没有指定该属性，浏览器会默认将其设为当前 URL 的一级域名，比如 www.example.com 会设为 example.com，而且以后如果访问example.com的任何子域名，HTTP 请求也会带上这个 Cookie。如果服务器在Set-Cookie字段指定的域名，不属于当前域名，浏览器会拒绝这个 Cookie。Path属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只要浏览器发现，Path属性是 HTTP 请求路径的开头一部分，就会在头信息里面带上这个 Cookie。比如，PATH属性是/，那么请求/docs路径也会包含该 Cookie。当然，前提是域名必须一致。—— Cookie — JavaScript 标准参考教程（alpha）

**「配置：Expires / Max-Age」**

> Expires属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。它的值是 UTC 格式。如果不设置该属性，或者设为null，Cookie 只在当前会话（session）有效，浏览器窗口一旦关闭，当前 Session 结束，该 Cookie 就会被删除。另外，浏览器根据本地时间，决定 Cookie 是否过期，由于本地时间是不精确的，所以没有办法保证 Cookie 一定会在服务器指定的时间过期。Max-Age属性指定从现在开始 Cookie 存在的秒数，比如60 * 60 * 24 * 365（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie。如果同时指定了Expires和Max-Age，那么Max-Age的值将优先生效。如果Set-Cookie字段没有指定Expires或Max-Age属性，那么这个 Cookie 就是 Session Cookie，即它只在本次对话存在，一旦用户关闭浏览器，浏览器就不会再保留这个 Cookie。—— Cookie — JavaScript 标准参考教程（alpha）

**「配置：Secure / HttpOnly」**
> Secure属性指定浏览器只有在加密协议 HTTPS 下，才能将这个 Cookie 发送到服务器。另一方面，如果当前协议是 HTTP，浏览器会自动忽略服务器发来的Secure属性。该属性只是一个开关，不需要指定值。如果通信是 HTTPS 协议，该开关自动打开。HttpOnly属性指定该 Cookie 无法通过 JavaScript 脚本拿到，主要是Document.cookie属性、XMLHttpRequest对象和 Request API 都拿不到该属性。这样就防止了该 Cookie 被脚本读到，只有浏览器发出 HTTP 请求时，才会带上该 Cookie。—— Cookie — JavaScript 标准参考教程（alpha）

「HTTP 头对 cookie 的读写」回过头来，HTTP 是如何写入和传递 cookie 及其配置的呢？HTTP 返回的一个 Set-Cookie 头用于向浏览器写入「一条（且只能是一条）」cookie，格式为 cookie 键值 + 配置键值。例如：

那我想一次多 set 几个 cookie 怎么办？多给几个 Set-Cookie 头（一次 HTTP 请求中允许重复）
```
Set-Cookie: weight=80; domain=me.jimu.com 
Set-Cookie: weight1=88; domain1=me.jimu.com1 
```

HTTP 请求的 Cookie 头用于浏览器把符合当前「空间、时间、使用方式」配置的所有 cookie 一并发给服务端。因为由浏览器做了筛选判断，就不需要归还配置内容了，只要发送键值就可以。

「前端对 cookie 的读写」前端可以自己创建 cookie，如果服务端创建的 cookie 没加HttpOnly，那恭喜你也可以修改他给的 cookie。调用document.cookie可以创建、修改 cookie，和 HTTP 一样，一次document.cookie能且只能操作一个 cookie。

调用document.cookie也可以读到 cookie，也和 HTTP 一样，能读到所有的非HttpOnly cookie。


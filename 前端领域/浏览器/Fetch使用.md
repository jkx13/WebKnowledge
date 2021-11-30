## Fetch定义
Fetch本质上是一种标准，该标准定义了请求、响应和绑定的流程。
Fetch标准还定义了Fetch () JavaScript API，它在相当低的抽象级别上公开了大部分网络功能，我们今天讲的主要是Fetch API。Fetch API 提供了一个获取资源的接口（包括跨域）。它类似于 XMLHttpRequest ，但新的API提供了更强大和灵活的功能集。
**Fetch 的核心在于对 HTTP 接口的抽象**，包括 Request，Response，Headers，Body，以及用于初始化异步请求的 global fetch。

## 使用Fetch
Fetch API 提供了一种全局fetch()方法，该方法位于 WorkerOrGlobalScope 这一个 mixin 中 方法用于发起获取资源的请求。它返回一个 promise，这个 promise 会在请求响应后被 resolve，并传回 Response 对象。
```javascript
fetch(input?: Request | string, init?: RequestInit): Promise<Response>

fetch(url, options).then(function(response) {
  // 处理 HTTP 响应
}, function(error) {
  // 处理网络错误
})

```

## fetch()参数
fetch方法可以接收两个参数input和options。
- input 参数可以是字符串，包含要获取资源的 URL。也可以是一个 [Request](https://developer.mozilla.org/zh-CN/docs/Web/API/Request) 对象。

- options 是一个可选参数。一个配置项对象，包括所有对请求的设置。可选的参数有：
```
method: 请求使用的方法，如 GET、POST。
headers: 请求的头信息，包含与请求关联的Headers对象。
body: 请求的 body 信息。注意 GET 或 HEAD 方法的请求不能包含 body 信息
mode: 请求的模式，如 cors、 no-cors 或者 same-origin。
credentials: 请求的 credentials，如 omit、same-origin 或者 include。为了在当前域名内自动发送 cookie ， 必须提供这个选项。
```
### html
```javascript
fetch('/index/fetchHtml')
  .then((res) => {
    return res.text()
  }).then((result) => {
    document.body.innerHTML += result
  })
  .catch((err) => {
  })

```
### json
```javascript
fetch('/api/user/CaiCai')
  .then((res) => {
    return res.json()
  })
  .then((json) => {
    console.log(json)
  })
  .catch((err => {
  }))


```
### POST FORM
```javascript
function postForm() {
  const form = document.querySelector('form')
  const name = encodeURI(document.getElementsByName('name')[0].value)
  fetch(`/api/user/${name}`, {
    method: 'POST',
    body: new FormData(form)
  })
}
```

### POST json
```javascript
fetch('/api/user/test', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'test',
    age: '26',
  })
})


```
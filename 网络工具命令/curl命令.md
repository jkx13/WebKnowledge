## curl命令

### 1. 查看网站源码
```
curl www.baidu.com
```

### 2. 相当于wget命令
```
curl -o [文件名] www.baidu.com
```

### 自动跳转（使用 -L 参数 就会跳转到新网站）
```
curl -L www.baidu.com
```

### 使用 -i 显示http response 头信息 和 网页代码
```
curl -i www.baidu.com
```

### 显示通信过程
`-v`参数可以显示一次http通信的整个过程，包括端口连接和http request头信息。
```
curl -v www.baidu.com

或
curl --trace output.txt www.baidu.com

或

curl --trace-ascii output.txt www.baidu.com
```

### 发送表单请求
发送表单信息有GET和POST两种方法
GET方式
```
curl example.com/form.cgi?data=xxx
```

POST方法必须把数据和网址分开，curl就要用到--data参数。
```
curl -X POST --data "data=xxx" example.com/form.cgi
```

如果你的数据没有经过表单编码，还可以让curl为你编码，参数是`--data-urlencode`。
```
curl -X POST--data-urlencode "date=April 1" example.com/form.cgi
```

### HTTP 动词
```
curl -X [POST/GET/DELETE] www.example.com
```

### 文件上传
```javascript

　<form method="POST" enctype='multipart/form-data' action="upload.cgi">
　　　　<input type=file name=upload>
　　　　<input type=submit name=press value="OK">
　</form>
等于

  curl --form upload=@localfilename --form press=OK [URL]

```

### Referer字段
有时你需要在http request头信息中，提供一个referer字段，表示你是从哪里跳转过来的。
```
curl --referer http://www.example.com http://www.example.com
```

### User Agent字段
这个字段是用来表示客户端的设备信息。服务器有时会根据这个字段，针对不同设备，返回不同格式的网页，比如手机版和桌面版。
```
　　$ curl --user-agent "[User Agent]" [URL]
```

### cookie
使用`--cookie`参数，可以让curl发送cookie。

```
curl --cookie "name=xxx" www.example.com
```

`-c cookie-file`可以保存服务器返回的cookie到文件，`-b cookie-file`可以使用这个文件作为cookie信息，进行后续的请求。
```
curl -c cookies http://example.com
curl -b cookies http://example.com
```

### header 信息
有时需要在http request之中，自行增加一个头信息。`--header`参数就可以起到这个作用。
```
curl --header "Content-Type:application/json" http://example.com
```

### http认证
有些网域需要HTTP认证，这时curl需要用到`--user`参数。
```
　　$ curl --user name:password example.com
```

[](http://www.ruanyifeng.com/blog/2019/09/curl-reference.html)
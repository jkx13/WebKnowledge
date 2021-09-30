## nginx全局变量[url](https://www.cnblogs.com/zqifa/p/nginx-rewrite.html)
	arg_PARAMETER #这个变量包含GET请求中，如果有变量PARAMETER时的值。
	args #这个变量等于请求行中(GET请求)的参数，如：foo=123&bar=blahblah;
	binary_remote_addr #二进制的客户地址。
	body_bytes_sent #响应时送出的body字节数数量。即使连接中断，这个数据也是精确的。
	content_length #请求头中的Content-length字段。
	content_type #请求头中的Content-Type字段。
	cookie_COOKIE #cookie COOKIE变量的值
	document_root #当前请求在root指令中指定的值。
	document_uri #与uri相同。
	host #请求主机头字段，否则为服务器名称。
	hostname #Set to themachine’s hostname as returned by gethostname
	http_HEADER
	is_args #如果有args参数，这个变量等于”?”，否则等于”"，空值。
	http_user_agent #客户端agent信息
	http_cookie #客户端cookie信息
	limit_rate #这个变量可以限制连接速率。
	query_string #与args相同。
	request_body_file #客户端请求主体信息的临时文件名。
	request_method #客户端请求的动作，通常为GET或POST。
	remote_addr #客户端的IP地址。
	remote_port #客户端的端口。
	remote_user #已经经过Auth Basic Module验证的用户名。
	request_completion #如果请求结束，设置为OK. 当请求未结束或如果该请求不是请求链串的最后一个时，为空(Empty)。
	request_method #GET或POST
	request_filename #当前请求的文件路径，由root或alias指令与URI请求生成。
	request_uri #包含请求参数的原始URI，不包含主机名，如：”/foo/bar.php?arg=baz”。不能修改。
	scheme #HTTP方法（如http，https）。
	server_protocol #请求使用的协议，通常是HTTP/1.0或HTTP/1.1。
	server_addr #服务器地址，在完成一次系统调用后可以确定这个值。
	server_name #服务器名称。
	server_port #请求到达服务器的端口号。
	
## Nginx 中rewrite(重定向)
#### 语法
1. 语法: rewrite 正则 替换url flag
2. 应用于 server,location,if中
3. rewrite实现重定向重要指令(根据regex正则表达式匹配内容跳转到替换url,falg标记符号)

```shell
rewrite ^/(.*) https://baidu.com permanent #永久重定向到baidu.com

#添加个server区块跳转
server{
	listen  80;
	server_name baidu.com;
	rewrite ^/(.*) https://www.baidu.com/$1 permanent;
}
```

#### 正则表达
|字符| 描述 |
|--|--|
|\ |将后面接着的字符标记为一个特殊字符或者一个原义字符或一个向后引用|
|^ | 匹配输入字符串的起始位置|
|$|匹配输入字符串的结束位置|
|*|匹配前面的字符零次或者多次|
|+|匹配前面字符串一次或者多次|
|?|匹配前面字符串的零次或者一次|
|.|匹配除“\n”之外的所有单个字符|
|(pattern)	|匹配括号内的pattern|
｜~｜区分大小写匹配|
|~*|不区分大小写匹配|
|!~和!~*｜ 分别区分大小写不匹配及不区分大小写不匹配|
|-f和!-f|用来判断是否存在文件|
|-d和!-d|用来判断是否存在目录|
|-e和!-e|用来判断是否存在文件或目录|
|-x和!-x|用来判断文件是否可执行|

#### 最后一项flag
|标记符号|说明|
|--|--|
|last|本条规则匹配完成后继续向下匹配新的location URI规则|
|break|本条规则匹配完成后终止，不在匹配任何规则|
|redirect|返回302临时重定向|
|premanent|返回301永久重定向|


## nginx命令

```
1. nginx -t //检查语法
2. nginx -s reload //重新加载修改后的配置
```
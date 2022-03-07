##  telnet 
telnet 是一个阉割版的 ssh ，它数据不加密，数据容易被盗窃，也容易受中间人攻击，所以默认情况下 telnet 端口是必须要被关闭的。

telnet为用户提供了在本地计算机上完成远程主机工作的能力，因此可以通过telnet来测试端口的连通性。

### 使用telnet测试端口的连通性
```
$ telnet server port
```

### http 的端口（80）连通性
```
$ telnet lxlinux.net 80
```

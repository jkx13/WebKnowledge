## github访问速度慢
最主要的原因是 GitHub 的分发加速网络的域名遭到 dns污染

> 网域服务器缓存污染（DNS cache pollution），又称域名服务器缓存投毒（DNS cache poisoning），是指一些**刻意制造或无意中制造出来的域名服务器数据包**，把域名指往不正确的IP地址。
一般来说，在互联网上都有可信赖的网域服务器，但为减低网络上的流量压力，一般的域名服务器都会把从上游的域名服务器获得的解析记录暂存起来，待下次有其他机器要求解析域名时，可以立即提供服务。
一旦有关网域的局域域名服务器的缓存受到污染，就会把网域内的计算机导引往错误的服务器或服务器的网址。

修改 Host，相当于绕过国内DNS解析，直接访问 GitHub 的 CDN 节点，从而达到加速目的。

## 修改host
- 打开 ipaddress.com 网站，查询下面 3个网址对应的 IP 地址
```
github.com

assets-cdn.github.com

github.global.ssl.fastly.net

```

- 修改本地电脑系统hosts文件
```
windows: C:\Windows\System32\drivers\etc
linux: /etc/hosts
```

- 复制如下：
```
140.82.114.4	github.com

185.199.108.153		assets-cdn.github.com

199.232.69.194		github.global.ssl.fastly.net
```

- windows刷新dns缓存(linux不需要)
用 WIN+R 快捷键打开运行窗口，输入命令：cmd 并回车进入命令行窗口。 
接着输入命令：ipconfig /flushdns 回车后执行刷新本地 dns 缓存数据即可。



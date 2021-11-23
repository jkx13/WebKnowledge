## pip与pip3区别
1. pip 是一个现代的，通用的 Python 包管理工具。提供了对 Python 包的查找、下载、安装、卸载的功能。
2. 如果系统中只安装了Python2，那么就只能使用pip
3. 如果系统中只安装了Python3，那么既可以使用pip也可以使用pip3，二者是等价的
4. 如果系统中同时安装了Python2和Python3，则pip默认给Python2用，pip3指定给Python3用。
5. 注意：使用pip之前查看版本

## 查看pip依赖安装路径
```
python -m site
```
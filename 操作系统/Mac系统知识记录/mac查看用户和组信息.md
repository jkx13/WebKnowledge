## 查看所有用户和组
```shell
dscacheutil -q group

groups//查看当前用户所属于组

groups 用户名//查看用户所属组

id -a 用户名//查看指定用户的组的详情

sudo -i //切换超级用户

su - 用户名 //切换到某个用户
```

## Mac 编辑环境变量
```
vi ~/.bash_profile 
//编辑完成
source ~/.bash_profile
```
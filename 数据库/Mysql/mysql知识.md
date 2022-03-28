## mysql 登录
```
mysql -uroot -proot
```

## 创建root
```
 create user 'root'@'%' identified by 'root';
```

## 查看用户
```
 SELECT DISTINCT CONCAT('User: ''',user,'''@''',host,''';') AS query FROM mysql.user;
```

## 授权
```
// 5.7
 GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION;
 
 // 8.0
grant all privileges on *.* to root@'%' with grant option;

grant all privileges  on *.* to root@'%' identified by "password";
```

## 刷新权限
```
flush privileges;
```
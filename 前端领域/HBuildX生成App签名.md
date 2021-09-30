## HBuildX生成App签名
用keytool查看
```shell
keytool -list -v -keystore ./HBuilder.keystore
```
发现签名算法名称： SHA1withRSA主体公共密钥算法：1024 位 RSA 密钥密钥库类型：JKS果然和默认生成不一样

1. 第一步生成正常的证书

```shell
keytool -genkey -alias myapp.keystore -keyalg RSA -sigalg SHA1WithRSA -validity 20000 -keysize 1024 -keystore myapp.keystore -v
```
	
```shell
上面的关键的地方
-sigalg SHA1WithRSA
-keysize 1024
```

2. 第二步更改密钥库类型

```shell
keytool -importkeystore -srckeystore ./myapp.keystore -destkeystore ./myapp.keystore -deststoretype JKS
```
注：myapp是你的app名称
查看keystore文件：
```shell
keytool -list -v -keystore demo.keystore
```
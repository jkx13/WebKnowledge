## 约定式目录结构
```
项目
	/src
		/main 主程序目录 （完成项目功能代码和配置文件)
			/java (包相关类定义)
			/resources （配置资源文件)
		/test
			/java
			/resources
	/pom.xml (maven配置文件)
```

## Mac idea中终端无法检测到mvn
```
1. vim ~/.zshc再末尾加入 srouce ~/.bash_profile
```
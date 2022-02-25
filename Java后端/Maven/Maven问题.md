## maven settings.xml 文件私服地址和 pom.xml配置的私服地址同时生效的问题
修改settings.xml
```
<mirrors>
<mirror>
<id>nexus_mirror</id>
<mirrorOf>*,!dev</mirrorOf>
<name>nexus mirror</name>
<url>http://127.0.0.1:8020/public/</url>
</mirror>
</mirrors>

```

pom.xml 

```

<repositories>
	<repository>
		<id>dev</id>
		<name>nti</name>
		<url>http://127.0.0.1:8020/nexus/</url>
		<releases>
			<enabled>true</enabled>
		</releases>
		<snapshots>
			<enabled>true</enabled>
		</snapshots>
	</repository>
</repositories>
```

总结

	假如在mirrorOf节点，写 * 会覆盖掉所有的，不管是哪个repository，最后都被这个镜像所mirror替代，导致pom文件中的repository不生效。
	解决方案就是  <mirrorOf>*,!dev</mirrorOf>， 这样 pom.xml里的 dev repository就会生效。
	
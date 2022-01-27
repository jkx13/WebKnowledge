## 在windows环境下使用AS编译代码有错误：
错误提示： Android resource linking failed
C:\****\app\build\intermediates\merged_manifests\debug\AndroidManifest.xml:63: error: not well-formed (invalid token).

原因：在AndroidManifest.xml文件里有中文注释，在编译的过程中，将中文编译成了乱码，可以看到build后的 AndroidManifest.xml 文件中相应注释已经变成了乱码。

解决方法：在 gradle.properties 文件中将org.gradle.jvmargs=-Xmx1536m 替换为：

```java
org.gradle.jvmargs=-Xmx1536m -Dfile.encoding=UTF-8
```
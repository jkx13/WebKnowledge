## 单利模式
```java
// 饿汉模式(马上)
class Singleton{
	private static Singleton singleton = new Singleton();
	private Singleton(){}
	public static Singleton getInstance(){
		return singleton;
	}
}

// 简单懒汉模式（延迟并加方法锁）
class Singleton{
	private static Singleton singleton = null;
	private Singleton(){
		
	}
	publich static synchronized Singleton getInstance(){
		if(singleton == null){
			singleton = new Singleton();
		}
		return singleton;
	}
}

//DCL 懒汉式
class Singleton {
	// 这里一定要volatile修饰,防止指令重排导致线程不安全的问题(可查看java后端中volatile详解)
	private static volatile Singleton singleton = null;
	
	private Singleton(){}
	
	public static Singleton getInstance(){
		if(singleton = null){
			synchronized (Singleton.class){
				if(singleton == null){
					singleton = new Singleton();
				}
			}
		}
		return singleton;
	}
}

// 静态内部类 懒汉模式 简洁
class Singleton{
	private Singleton {}
	// 使用静态内部类的方式来实现懒加载（一定线程安全）
	private static class LazyHolder{
		private static final Singleton singleton = new Singleton();
	}
	
	public static final Singleton getInstance(){
		return LazyHolder.singleton;
	}
}
```

[](https://juejin.cn/post/7034295770614333470?utm_source=gold_browser_extension)
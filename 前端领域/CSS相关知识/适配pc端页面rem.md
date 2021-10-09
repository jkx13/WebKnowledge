## 适配尺寸
1. 1920*1080px
2. 1366*1080px

## 根标签设置字体大小
1. 1920分辨率设置屏幕html字体大小
```css
html{
	font-size:calc(1920px / 100px);
}
```

2. 1366分辨率设置屏幕html 字体大小
```css
html{
	font-size:calc(1366px / 100px);
}
```

3. 设置media查询
```css
html{
	font-size:calc(1920px / 100px);
}
@media only screen and (min-width:1366px){
	html{
		font-size:calc(1366px / 100px);
	}
}
```

## sass 函数计算出rem(按照UI尺寸)
```css

@function px2rem($px,$base-font-size:19.2px){
	@if(unitless($px)){
		//无单位
		@return ($px / $base-font-size)*1rem;
	} @else if(unit($px) == em || unit($px) == rem){
		@return $px;
	}
	@return ($px / $base-font-size)*1rem
}
```

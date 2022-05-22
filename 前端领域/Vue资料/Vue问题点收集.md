## 使用@keyup.native.enter 第一次触发时，会刷新页面的原因
原因：事件包裹在form表单中，enter事件默认触发了表单的提交，导致页面刷新

解决办法：
在el-form标签中加上 @submit.native.prevent，阻止表单的默认行为

```html
<el-form @submit.native.prevent>
</el-form>
```

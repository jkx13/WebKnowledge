## v-if原理(Vue3)
v-if 指令
```javascript
<div v-if="visible"><div>

// 编译生成 render 函数:

render(_ctx,_cache,$props,$setup,$data,$options){
	return (_ctx.visiable) ? (_openBlock(),_createBlock("div",{key:0})) : _createCommentVNode("v-if",true);
}
```
- _ctx 当前组件实例的上下文，即 this
- _openBlock() 和 _createBlock() 用于构造 Block Tree 和 Block VNode，它们主要用于 更新过程
- _createCommentVNode() 创建注释节点的函数，通常用于占位
- 当 visible 为 false 的时候，会在当前模版中创建一个注释节点（也可称为占位节点），反之则创建一个真实节点(以便patch 的时候将该元素放回该位置)

（组件的更新过程）
针对 v-if 指令是直接走**派发更新**过程时 patch 的逻辑。由于 v-if 指令订阅了 visible 变量，所以当 visible 变化的时候，则会触发派发更新，即 Proxy 对象的 set 逻辑，最后会命中 componentEffect 的逻辑

- 获取当前组件对应的组件树 nextTree 和之前的组件树 prevTree(组件树: VNode Tree)
- 更新当前组件实例 instance 的组件树 subTree 为 nextTree
- patch 新旧组件树 prevTree 和 nextTree，如果存在 dynamicChildren，即 Block Tree，则会命中靶向更新的逻辑

### 总结
基于数据驱动的理念，当 v-if 指令对应的 value 为 false 的时候会预先创建一个注释节点在该位置，然后在 value 发生变化时，命中派发更新的逻辑，对新旧组件树进行 patch，从而完成使用 v-if 指令元素的动态显示隐藏。

## v-show 原理
v-show 指令
```javascript
<div v-show="visible"></div>

// 编译生成 render 函数

render(_ctx,_cache,$props,$setup,$data,$options){
	return _withDirectives((_openBlock(),_createBlock("div",null,null,512)),
		[
			[_vShow,_ctx.visible]
		]
	)
}
```

vShow 在源码中则对应着 vShow，它被定义在 packages/runtime-dom/src/directives/vShow。它的职责是对 v-show 指令进行特殊处理，主要表现在 beforeMount、mounted、updated、beforeUnMount 这四个生命周期中

- 首先，由 widthDirectives 来生成最终的 VNode。它会给 VNode 上绑定 dir 属性，即 vShow 定义的在生命周期中对元素 CSS display 属性的处理
- 其次，在 patchElement 的阶段，会注册 postRenderEffect 事件，用于调用 vShow 定义的 update 生命周期处理 CSS display 属性的逻辑
- 在派发更新的结束，调用 postRenderEffect 事件，即执行 vShow 定义的 update 生命周期，更改元素的 CSS display 属性
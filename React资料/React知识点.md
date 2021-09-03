## React点击事件传参数
```
<div onClick={this.changeEvent.bind(this,"jk")}></div>
1.
changeEvent = (name,e)=>{
	console.log(name)
}

2.
<div onClick={this.changeEvent("jk")}></div>
changeEvent= (name)=>{
	return (event)=>{
		console.log(name)
	}
}

```

## react 中使用ref
```
1.字符串( this.refs.test来引用真实dom)
<input type="text" ref="test" />

2.回调函数(回调函数就是在dom节点或组件上挂载函数，函数的入参是dom节点或组件实例)
<input type="text" ref={(input)=>this.textInput = input}

3.React.createRef()
在React 16.3版本后，使用此方法来创建ref。将其赋值给一个变量，通过ref挂载在dom节点或组件上，该ref的current属性将能拿到dom节点或组件的实例

this.myRef = React.createRef();

<input type="text" ref={this.myRef} />



```

## Hooks相关
> class类组件的问题
##### 1.生命周期臃肿、逻辑耦合
##### 2.逻辑难以复用	
	解决方案: 继承/ 通过Hoc/ 渲染属性
	缺点：不支持多继承/ 会增加额外的组件嵌套性能影响/ 同上、层级臃肿、性能影响

##### 3.class this 指向问题
	解决方案: 匿名函数/ bind
	缺点: 每次都创建新的函数，子组件重复不必要渲染/ 需要写很多跟逻辑、状态无关的代码
	
> 针对以上问题使用hooks解决
	1.没有了 class， 自然就没有了 this 指向问题
	2.通过自定义 useEffect 来解决复用问题
	3.通过使用 useEffect 来细分逻辑，减小出现逻辑臃肿的场景

#### useState使用
```javascript

function App(){
	//es6解构赋值
	const [count,setCount] = useState(0)//初始值0，只会执行一次
	return (
		<div>
			数量:{count}
			<button onClick={setCount(count=> count + 1)}>点击</button>
		</div>
	)
}

注：
1. setCount的参数传入相同的值不会重新渲染
2. useState(默认值),默认值可以是object,array,函数并返回值等
3. 组件每渲染一次，useState中的函数不会执行一遍，只会执行初始化的一次
4. 多个useState按执行顺序记录并存入数组中，不要在循环，条件或嵌套函数中调用 Hook，确保总是在 React 函数的最顶层调用，确保 Hook 在每一次渲染中都按照同样的顺序被调用；
5. 使用eslint-plugin-react-hooks 插件来规范代码编写
```

#### useEffect使用
	可以执行副作用操作(除了状态相关的逻辑，网络请求，监听事件，查找dom等)
> useEffect包含的生命周期
	useEffect hook是componentDidMount,componentDidUpdate,componentWillUnmount三个钩子的组合（useEffect会在组件每次render之后调用）
```javascript

useEffect(()=>{//只会在第一次运行时执行一次，无论组件怎么render，都不会再执行
	//相当于componentDidMount
	window.addEventListener('resize',onChange,false)
	
	return ()=>{//相当于componentWillUnmount
		window.removeEventListener('resize',onChange,false)
	}
},[])

	
useEffect(()=>{//会在每次组件render之后都执行
	//相当于componentDidUpdate
	document.title = 'jk'
})

useEffect(()=>{//根据count变化后才执行，相当于Vue的computed计算属性项，而组件render并不会影响第三个useEffect
	console.log(`count change: count is ${count}`)
},[count])

```
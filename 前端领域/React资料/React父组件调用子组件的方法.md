## React 父组件调用子组件
###  类组件中的使用React.createRef()
- 如 子组件是嵌套了HOC高阶组件，就无法指向真实子组件
```javascript
import React , { Component } from "react"

class Child extends Component {
	func(){
		console.log("执行我")
	}
	render(){
		return (<div>子组件</div>);
	}
}

class Parent extends Component {
	constructor(props) {
	    super(props);
	 	this.curChild = React.createRef();
	}
	handleOnClick = ()=>{
		this.curChild.current.func();
	}
	render(){
		return (<div>
			<button onClick={this.handleOnClick}>click</button>
			<Child ref={this.curChild}></Child>	
		</div>);
	}
}
```

### 使用ref的函数式声明
- 子组件是嵌套了HOC，就无法指向真实子组件
```
import React , { Component } from "react"

class Child extends Component {
	func(){
		console.log("执行我")
	}
	render(){
		return (<div>子组件</div>);
	}
}

class Parent extends Component {
	handleOnClick = ()=>{
		this.Child.func();
	}
	render(){
		return (<div>
			<button onClick={this.handleOnClick}>click</button>
			<Child ref={ node => this.Child = node }></Child>	
		</div>);
	}
}
```

### 使用props自定义onRef属性
```
import React , { Component } from "react"
import { withRouter } from "react-router-dom"

// 使用装饰器给子组件裹上一层高阶函数（装饰器需要安装对应的babel包）
@withRouter 
class Child extends Component {
	componentDidMount(){
		this.props.onRef && this.props.onRef(this);
	}
	func(){
		console.log("执行我")
	}
	render(){
		return (<div>子组件</div>);
	}
}

class Parent extends Component {
	handleOnClick(){
		this.Child.func();
	}
	render(){
		return (<div>
			<button onClick={this.handleOnClick}>click</button>
			<Child onRef={ node => this.Child = node }></Child>	
		</div>);
	}
}
```

### 函数式和hooks写法
```javascript
import React from 'react';
import Child from './Child';

const Parent = () => {
  let ChildRef = React.createRef();

  function handleOnClick() {
    ChildRef.current.func();
  }

  return (
    <div>
      <button onClick={handleOnClick}>click</button>
      <Child onRef={ChildRef} />
    </div>
  );
};

export default Parent;

// 子组件
import React, { useImperativeHandle } from 'react';
import { withRouter } from 'react-router-dom';

const Child = props => {
  //用useImperativeHandle暴露一些外部ref能访问的属性
  useImperativeHandle(props.onRef, () => {
    return {
      func: func,
    };
  });
  function func() {
    console.log('执行我');
  }
  return <div>子组件</div>;
};

export default withRouter(Child);
```

### 使用forwardRef抛出子组件的ref
这个方法其实更适合自定义HOC。但问题是，withRouter、connect、Form.create等方法并不能抛出ref，假如Child本身就需要嵌套这些方法，那基本就不能混着用了。forwardRef本身也是用来抛出子元素，如input等原生元素的ref的，并不适合做组件ref抛出，因为组件的使用场景太复杂了。

```
import React from 'react';
import Child from './Child';

const Parent = () => {
  let ChildRef = React.createRef();

  function handleOnClick() {
    ChildRef.current.func();
  }

  return (
    <div>
      <button onClick={handleOnClick}>click</button>
      <Child ref={ChildRef} />
    </div>
  );
};

export default Parent;

// 子组件
import React, { Component } from 'react';

@Log
class Child extends Component {
  func = () => {
    console.log('打印了我');
  };
  render() {
    return <div>我是个测试的子组件</div>;
  }
}

// 自定义可以抛出子组件ref的HOC
function Log(Comp) {
  const Log = props => {
    const { forwardRef, ...rest } = props;
    return <Comp ref={forwardRef} {...rest} />;
  };

  return React.forwardRef((props, ref) => {
    return <Log {...props} forwardRef={ref} />;
  });
}

export default Child;
```
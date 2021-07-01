import React, { Component } from 'react'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
        console.log('constructor==初始化state=' + JSON.stringify(this.state));
        console.log('End======================constructor========================');
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps==static中访问不了this');
        console.log('getDerivedStateFromProps==在初始化与update时都会执行用于取代componentWillReceiveProps');
        console.log('nextProps==' + JSON.stringify(nextProps));
        console.log('prevState==' + JSON.stringify(prevState));

        console.log('End======================getDerivedStateFromProps========================');
        return prevState;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate==是否需要更新组件');
        console.log('nextProps==' + JSON.stringify(nextProps));
        console.log('nextState==' + JSON.stringify(nextState));
        console.log('End======================shouldComponentUpdate========================');

        return true;//更新
    }

    componentDidMount() {
        console.log('componentDidMount==组件挂载后调用');
        console.log('componentDidMount==可以请求或订阅');

        console.log('End======================componentDidMount========================');
    }

    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate==用于获取最新DOM数据');
        console.log('End======================getSnapshotBeforeUpdate========================');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate==组件更新后调用');
        console.log('End======================componentDidUpdate========================');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount==组件将要销毁,用于取消订阅或定时器等');
        console.log('End======================componentWillUnmount========================');
    }
    render() {
        console.log('render==渲染组件函数');
        console.log('End======================render========================');
        return (
            <div>
                hello
            </div>
        )
    }
}

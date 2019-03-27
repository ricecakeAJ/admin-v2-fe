import React from 'react';
import ReactDom from 'react-dom';


class Component extends React.Component{
    //构造函数
    constructor(props){//第一步
        super(props);
        this.state={
            data:'Old State'
        };
        console.log('初始化数据','constructor');
    }
    //组件将要加载
    componentWillMount(){//第二步，将异步方法放在这里
        console.log('componentWillMount');
    }
    //组件加载完成
    componentDidMount(){//第四步，组件已经挂载成功了
        console.log('componentDidMount');
    }
    //将要接收父组件传来的props
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    //需要返回值，子组件是否应该更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    //组件将要更新
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    //组件已经更新
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    //组件将要销毁
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    //处理点击事件
    handleClick(){
        console.log('更新数据：');
        this.setState({
            data:'New State'
        })
    }
    //渲染
    render(){//第三步，将我们的app.jsx渲染到页面上
        console.log('render');
        return (
            <div>
                <div>Props:{this.props.data}</div>
                <button onClick={()=>{this.handleClick()}}>更新组件</button>
            </div>
        );
    }
}
class App extends React.Component{
    constructor(props) {//第一步
        super(props);
        this.state = {
            data: 'Old Props',
            hasChild:true
        };
        console.log('初始化数据','App-constructor');
    }
    onPropsChange(){
        console.log('更新props:');
        this.setState({
            data:'New Props'
        });
    }
    onDestoryChild(){
        console.log('去掉子组件');
        this.setState({
            hasChild:false
        });
    }
    render(){
        return(
            <div>
                {
                    this.state.hasChild? <Component data={this.state.data}/>:null
                }

                <button onClick={()=>{this.onPropsChange()}}>改变props</button>
                <button onClick={()=>{this.onDestoryChild()}}>去掉子组件</button>
            </div>);
    };
}
ReactDom.render(

    <App/>,

    document.getElementById('app')//选择器
);
{/*
 shouldComponentUpdate返回为false时,从父组件向子组件传参数过程为：
 componentWillReceiveProps
 shouldComponentUpdate
 shouldComponentUpdate返回为true时,从父组件向子组件传参数过程为：
 componentWillReceiveProps
 shouldComponentUpdate
 componentWillUpdate
 render
 componentDidUpdate
 */}

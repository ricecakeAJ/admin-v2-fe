import React from 'react';
import ReactDom from 'react-dom';

//基础component写法
function Component() {
    return <h1>I am Jaina</h1>
}
class ES6Component extends  React.Component{
    render(){
        return <h1>I am Jaina in ES6</h1>
    }
}

//render方法负责将jsx放入html中
ReactDom.render(
    <div>
        <Component/>
        <ES6Component/>
    </div>,//要渲染的组件
    document.getElementById('app')//选择器
);

//status && props的用法
class Component extends  React.Component{
    constructor(props){//props用于父组件向子组件传参数，只读，不能更改
        super(props);
        this.state={
            name:'Jaina'
        }
    }
    render(){
        setTimeout(()=>{
            this.setState({//用于改变state里面的内容
                name:'Jaina Test'
            })
        },2000);
        return <h1>I am {this.state.name}</h1>
        // return <h1>I am {this.props.name}</h1>
    }
}
ReactDom.render(
    <div>
        <Component name="Jaina 123"/>
    </div>,//要渲染的组件
    document.getElementById('app')//选择器
);

//事件处理1
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Jaina',
            age:18
        };
        this.handleClick=this.handleClick.bind(this)//onClick时的this.handleClick是事件的回调，this已经改变，所以需要绑定this
    }
    handleClick(){
        this.setState({
            age:this.state.age+1
        })
    }
    render(){
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old!</p>
                <button onClick={this.handleClick}>加一岁</button>
            </div>


        )
    }
}
ReactDom.render(

    <Component/>,

    document.getElementById('app')//选择器
);

//事件处理2
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Jaina',
            age:18
        };
    }
    handleClick(){
        this.setState({
            age:this.state.age+1
        })
    }
    onValueChange(e){
        this.setState({
            age:e.target.value
        })
    }
    render(){
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old!</p>
                <button onClick={(e)=>{this.handleClick(e)}}>加一岁</button>{/*箭头函数不占用作用域*/}
                <input type="text" onChange={(e)=>{this.onValueChange(e)}}/>
            </div>


        )
    }
}
ReactDom.render(

    <Component/>,

    document.getElementById('app')//选择器
);

//组件的组合方式 两种
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Jaina',
            age:18
        };
    }
    handleClick(){
        this.setState({
            age:this.state.age+1
        })
    }
    onValueChange(e){
        this.setState({
            age:e.target.value
        })
    }
    render(){
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old!</p>
                <button onClick={(e)=>{this.handleClick(e)}}>加一岁</button>{/*箭头函数不占用作用域*/}
                <input type="text" onChange={(e)=>{this.onValueChange(e)}}/>
            </div>


        );
    }
}
class Title extends React.Component{
    constructor(props){
        super (props);
    }
    render(props){
        // return <h1>{this.props.title}</h1>//第一种，可以调用到title
        return <h1>{this.props.children}</h1>//第二种
    }
}
class App extends React.Component{
    render(){
        return (
            <div className="">
                {/*<Title title="App Title"/>  第一种，单纯组件*/}
                {/*第二种，容器式的组件写法*/}
                <Title>
                    <span> App Test 2 </span>
                    <a href="https://reactjs.org/docs/hello-world.html">React</a>
                </Title>
                <hr/>
                <Component/>{/*引用Component这个组件*/}

            </div>
        );
    }
}

//将数据从子组件传递到父组件--------------------------
class Child extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(color){
        this.props.changeColor('red');//子组件值
    }
    render(){
        return (
            <div>
                <h1>父组件背景色： {this.props.bgColor}</h1>
                <button onClick={(e)=>{this.handleClick(e)}}>改变父组件颜色bgColor</button>{/*箭头函数不占用作用域*/}
            </div>


        );
    }
}
class Father extends React.Component{
    constructor(props){
        super (props);
        this.state={
            bgColor:'#999'
        }
    }
    onBgColorChange(color){
        this.setState({
            bgColor:color
        })
    }
    render(props){

        return (
            <div style={{background:this.state.bgColor}}>{/*第一个{}是表达式，第二个{}是json表达式*/}
                <Child bgColor={this.state.bgColor} changeColor={(color)=>{this.onBgColorChange(color)}}/>
                {/*传递到父组件，利用回调改变父组件的值*/}
            </div>
        );

    }
}
ReactDom.render(

    <Father/>,

    document.getElementById('app')//选择器
);

//状态提升，从child1向child2传值：从child1传递到father,再从father传递到child2
class Child1 extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(){
        this.props.changeChild2Color('red');
    }
    render(){
        return (
            <div>
                <h1>Child1： {this.props.bgColor}</h1>
                <button onClick={(e)=>{this.handleClick(e)}}>改变Child2 颜色</button>{/*箭头函数不占用作用域*/}
            </div>


        );
    }
}
class Child2 extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div style={{backgroundColor:this.props.bgColor}}>
                <h1>Child2背景颜色： {this.props.bgColor}</h1>
            </div>


        );
    }
}
class Father extends React.Component{
    constructor(props){
        super (props);
        this.state={
            child2BgColor:'#999'
        }
    }
    onChild2ColorChange(color){
        this.setState({
            child2BgColor:color
        })
    }
    render(){

        return (
            <div>
                <Child1 changeChild2Color={(color)=>{this.onChild2ColorChange(color)}}/>
                <Child2 bgColor={this.state.child2BgColor}/>
            </div>
        );

    }
}
class App extends React.Component{
    render(){
        return (
            <div className="">
                {/*<Title title="App Title"/>  第一种，单纯组件*/}
                {/*第二种，容器式的组件写法*/}
                <Title>
                    <span> App Test 2 </span>
                    <a href="https://reactjs.org/docs/hello-world.html">React</a>
                </Title>
                <hr/>
                <Component/>{/*引用Component这个组件*/}

            </div>
        );
    }
}
ReactDom.render(

    <Father/>,

    document.getElementById('app')//选择器
);
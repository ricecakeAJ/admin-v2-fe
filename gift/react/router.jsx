//页面路由
window.location.href='http://www.baidu.com';
history.back();

//hash路由
window.location='#hash';
window.onhashchange=function () {
    console.log('current hash:',window.location.hash);
};

//h5 路由
//推进一个状态
history.pushState('name','Title','/path');
//替换一个状态
history.replaceState('name','Title','/path');
//popstate
window.onpopstate=function () {
    console.log(window.location.href);//整个路径，全路径
    console.log(window.location.pathname);//绝对路径
    console.log(window.location.hash);//hash值
    console.log(window.location.search);

};

//Router
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom';
class A extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <Switch>//选择
                <Route exact path={`${this.props.match.path}`}
                       render={(route)=>{
                           return <div> 当前组件是不带参数的Component A</div>
                       }}/>{/*exact表示完全匹配*/}
                {/*解决子路径与参数的冲突问题，通常把通配的放在下面*/}
                <Route path={`${this.props.match.path}/sub`}
                       render={(route)=>{
                           return <div> 当前组件是sub</div>
                       }}/>
                <Route path={`${this.props.match.path}/:id`}
                       render={(route)=>{
                           return <div> 当前组件是带参数的Component A,参数是：{route.match.params.id}</div>
                       }}/>

            </Switch>
        </div>);
    }
}

class B extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>Component B</div>
    }
}

class Wrapper extends React.Component{//一个容器
    constructor(props){
        super(props)
    }
    render(){
        return (<div>
            <Link to="/a">组件A </Link>
            <br/>
            <Link to="/a/123">带参数的组件A </Link>
            <br/>
            <Link to="/a/sub">/a/sub </Link>
            <br/>
            <Link to="/b">组件B </Link>
            {this.props.children}
        </div>);
    }
}
ReactDom.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A}/>
            <Route path="/B" component={B}/>
        </Wrapper>
    </Router>,
    document.getElementById('app')
);





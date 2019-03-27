import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect } from 'react-router-dom';

//页面
import Home from 'page/home/index.jsx';
import Login from 'page/login/index.jsx';
import UserList from 'page/user/index.jsx';
import Layout from 'component/layout/index.jsx';
import ErrorPage from 'page/error/index.jsx';

class App extends React.Component{

    render(){
        let LayoutRouter=(
            <Layout>
                {/*只匹配第一个匹配到的*/}
                <Switch>
                    {/*path="/",就是主页*/}
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={Home}/>
                    <Route path="/product-category" component={Home}/>
                    {/*<Route exact path="/order" component={Home}/>*/}
                    <Route path="/user/index" component={UserList}/>
                    <Redirect exact from="/user" to="/user/index" component={UserList}/>
                    <Route  component={ErrorPage}/>
                    {/*表示如果我们匹配不到/，就把所有的链接都跳转到/上*/}
                    {/*<Redirect from="*" to="/"/>*/}
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={(props)=>LayoutRouter}/>
                </Switch>
            </Router>

        );
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
);



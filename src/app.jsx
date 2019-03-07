import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch,Redirect } from 'react-router-dom';

//页面
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Layout>
                    {/*只匹配第一个匹配到的*/}
                    <Switch>
                        {/*path="/",就是主页*/}
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/product" component={Home}/>
                        <Route exact path="/product-category" component={Home}/>
                        <Route exact path="/order" component={Home}/>
                        <Route exact path="/user" component={Home}/>
                        {/*表示如果我们匹配不到/，就把所有的链接都跳转到/上*/}
                        {/*<Redirect from="*" to="/"/>*/}
                    </Switch>
                </Layout>
            </Router>

        );
    }
}
ReactDom.render(
    <App/>,
    document.getElementById('app')
);



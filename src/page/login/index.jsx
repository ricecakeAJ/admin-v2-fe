import React from 'react';
import './index.scss'
import MUtil from 'util/mm.jsx';
import User from 'service/user-service.jsx';
const _mm=new MUtil();
const _user=new User();
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            redirect:_mm.getUrlParam('redirect')||'/'
        }
    }
    componentWillMount(){
        document.title='登录 - MMALL ADMIN';
    }
    //当用户名发生改变
    onInputChange(e){

        let inputValue = e.target.value;//取到html标签的值
        let inputName=e.target.name;//取到html标签的name值
        this.setState({
            [inputName]:inputValue
        })
    }
    //当用户提交表单
    onSubmit(){
        let loginInfo={
            username:this.state.username,
            password:this.state.password,
        };
        let checkResult=_user.checkLoginInfo(loginInfo);
        //验证通过
        if(checkResult.status){
            _user.login(loginInfo).then((res)=>{
                _mm.setStorage('userInfo',res);
                    // console.log(this.state.redirect);
                    this.props.history.push(this.state.redirect);
                },(errMsg)=>{
                    _mm.errorTips(errMsg);
                }
            );
        }
        //验证信息不通过
        else{
            _mm.errorTips(checkResult.msg);
        }

    }
    //当用户按下回车要提交表单
    onInputKeyUp(e){
        if(e.keyCode===13){
            this.onSubmit();
        }
    }
    render(){
        return (
                <div className="col-md-4 col-md-offset-4">
                    <div className="panel panel-default login-panel">
                        <div className="panel-heading">欢迎登录 --MMALL管理系统</div>
                        <div className="panel-body">
                            <div>
                                <div className="form-group">
                                    <input type="text"
                                           name="username"
                                           className="form-control"
                                           placeholder="请输入用户名"
                                           onKeyUp={e=>this.onInputKeyUp(e)}
                                           onChange={e=>this.onInputChange(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="请输入密码"
                                        onKeyUp={e=>this.onInputKeyUp(e)}
                                        onChange={e=>this.onInputChange(e)}
                                    />
                                </div>
                                <button type="submit"
                                        className="btn btn-lg btn-block btn-primary"
                                        onClick={(e)=>{this.onSubmit(e)}}
                                >登录</button>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Login;
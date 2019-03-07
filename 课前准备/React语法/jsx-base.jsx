import React from 'react';
import ReactDom from 'react-dom';
import './index.scss'

//基础jsx、样式-------------------------------------------------------------
let style={
    // color:'red',
    // fontSize:'30px'
    color:'r'+'ed'//通过计算得到的red
};//优先级相对于选择器更高，但一般使用选择器

let jsx=<div className="jsx" style={style}>jsx....</div>;//在jsx中将class替换为className,因为有冲突

//render方法负责将jsx放入html中
ReactDom.render(
    jsx,//要渲染的组件
    document.getElementById('app')//选择器
);

//数据逻辑处理-------------------------------------------------------------
let name='Jaina';
let names=['Jiana','Geely','RiceCake'];
let flag=false;
let jsx=(
    <div>
        {/*变量使用*/}
        <p>I am {name}</p>
        {/*条件判断*/}
        {
            flag?<p>I am {name}</p>:<p>I am not {name}</p>
        }
        {/*数组循环*/}
        {
            names.map((name,index)=><p key={index}>Hello,I am {name}</p>)
        }
    </div>
);//在jsx中将class替换为className,因为有冲突

//render方法负责将jsx放入html中
ReactDom.render(
    jsx,//要渲染的组件
    document.getElementById('app')//选择器
);
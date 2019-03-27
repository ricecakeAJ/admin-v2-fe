//基本用法
let str=`
<div>
    <h1 class="title">123</h1>
</div>
`;
document.querySelector('body').innerHTML=str;

//嵌套变量
let name='Rosen';
let str=`
<div>
    <h1 class="title">${name}</h1>
</div>
`;
document.querySelector('body').innerHTML=str;

//嵌套函数的用法
let getName=()=>{
  return   'Rosen Test';
};
let str=`
<div>
    <h1 class="title">${getName()}</h1>
</div>
`;
document.querySelector('body').innerHTML=str;

//循环嵌套模板
let names=['Rosen','jianna','cherry'];
let str=`
<ul>
   ${
    names.map(name=> `<li>Hi,I am ${name}</li >`).join(' ')
    }
</ul>
`;
document.querySelector('body').innerHTML=str;
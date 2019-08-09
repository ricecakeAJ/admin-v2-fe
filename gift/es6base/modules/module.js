let str='string';
let obj={
    name:"Rosen",
};
let fn=()=>{
    console.log("module test");
};
export {
    str,
    obj,
    fn
}//输出这三个模块
export default {a:1}//表示这个模块默认会输出
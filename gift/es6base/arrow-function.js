let value=2;
let doubl = x => 2*x;
let trebl = x => {
    return 3*x;
};
console.log('double:',doubl(value));
console.log('treble:',trebl(value));


var obj={
    commonFn:function () {
        console.log(this);
    },
    arrowFn:()=>{
        console.log(this);
    }
};
obj.commonFn();
obj.arrowFn();

//不能用作构造函数
let Animal=function () {

};
let animal=new Animal();//可以

let Animal=()=> {

};
let animal=new Animal();//不可以

//没有prototype
let commonFn=function () {

};
let arrowFn=()=>{};
console.log(commonFn.prototype);
console.log(arrowFn.prototype);
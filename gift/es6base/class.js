//class constructor
class Animal{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
}
let animal = new Animal('animal test');
console.log(animal.getName());

//类的继承
class Animal{
    constructor(name){
        this.name='animal';
    }
    getName(){
        return this.name;
    }
}
class Cat extends Animal{
    constructor(){
        super();
        this.name='cat';//运用extends时，子类中没有this,除非使用super
    }
}
let animal =new Animal();
let cat=new Cat();
console.log(animal.getName());
console.log(cat.getName());

//对象的用法
var name='Rosen';
var age=18;
var obj={
    name:name,
    age:age,
    getName:function () {
        return this.name;
    },
    getAge:function () {
        return this.age;
    }
};
 //ES6中的用法
let name='Rosen';
let age=18;
let obj={
    //变量名可以直接用作对象的属性名称
    name,
    age,
    //对象里面的方法可以简写
    getName(){
        return this.name;
    },
    //表达式作为属性名或者方法名
    ['get'+'Age'](){
        return this.age;
    }
};

//obj对象的扩展
Object.keys(obj);//返回obj的所有属性名，数组形式，(4) ["name", "age", "getName", "getAge"]
Object.assign({a:1},{b:2,a:2});//将几个对象进行整合，如果有重叠的关系，后面会将前面的覆盖
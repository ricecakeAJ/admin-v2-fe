import {str as string,obj,fn} from './module.js'//as是改名
import foo from './module.js'//默认的名字可以随便起
console.log('name:',obj.name);
console.log('string:',string);
console.log('fn:',fn);
console.log(foo);
console.log('1');
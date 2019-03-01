new Promise((resolve,reject)=>{
    //异步函数
    $.ajax({
        url:'http：//happymmall.com/user/get_user_info.do',
        type:'post',
        success(res){
            resolve(res);//异步请求成功，调用then中的第一个方法
        },
        error(err){
            reject(err);//异步请求失败，调用then的第二个方法
        }
    });
}).then((res)=>{
    console.log('success:',res);
},(err)=>{
    console.log('error:',err);
});

//链式promise
// $.ajax({
//     url:'http：//happymmall.com/user/get_user_info.do',
//     type:'post',
//     success(res){
//         $.ajax({
//             url:'http：//happymmall.com/user/get_product_info.do',
//             type:'post',
//             success(res){
//                 resolve(res);
//             },
//             error(err){
//                 reject(err);
//             }
//         });
//     },
//     error(err){
//         reject(err);
//     }
// });
var promiseFn1=new Promise((resolve,reject)=>{
    $.ajax({
        url:'http：//happymmall.com/user/get_user_info.do',
        type:'post',
        success(res){
            resolve(res);//异步请求成功，调用then中的第一个方法
        },
        error(err){
            reject(err);//异步请求失败，调用then的第二个方法
        }
    });
});
var promiseFn2=new Promise((resolve,reject)=>{
    $.ajax({
        url:'http：//happymmall.com/cart/get_Cart_product-count.do',
        type:'post',
        success(res){
            resolve(res);//异步请求成功，调用then中的第一个方法
        },
        error(err){
            reject(err);//异步请求失败，调用then的第二个方法
        }
    });
});
promiseFn1.then(()=>{
    console.log('promiseFn1 success');
  return promiseFn2;
}).then(()=>{
    console.log('promoseFn2 success');
});

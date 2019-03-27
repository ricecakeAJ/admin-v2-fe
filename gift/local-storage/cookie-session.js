//查看cookie
document.cookie;
//添加cookie
document.cookie='name=Jaina;domain=happymmall.com;path=/index.html;expires=Thu, 28 Feb 2020 03:06:01 GMT'//添加cookie
//修改cookie,只有domain和path完全相等才能认为是同一个cookie
document.cookie='name=Jaina1;domain=happymmall.com;path=/index.html';
//删除cookie,将过期时间设置成之前的时间
document.cookie='name=Jaina1;domain=happymmall.com;path=/index.html,expires=Thu, 28 Feb 2018 03:06:01 GMT';
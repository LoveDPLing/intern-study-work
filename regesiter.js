$(function(){
    // 失去焦点判断事件
function blurFn(r, e, t) {
    if (t) {
        $(r).show();
        $(e).hide();
    } else {
        $(r).hide();
        $(e).show();
    }
}

// 获得焦点事件
function foucsFn(r, e) {
    judgeName();
    $(r).hide();
    $(e).hide();
}

function rightFn(r, e) {
    $(r).show();
    $(e).hide();
}

function errorFn(r, e) {
    $(r).hide();
    $(e).show();
}
// 邮箱格式的验证
function judgeName(){
   var reg=/^[a-zA-Z][a-zA-Z0-9]{5,15}$/;
   var  uname=$("#username").val();
   if(uname.length<=0||!reg.test(uname)){
       errorFn("#usernameRight","#usernameError");
   }else{
       rightFn("#usernameRight","#usernameError");
   }
}

// 第一次输入密码验证
$("#userpassword").focus(function () {
    foucsFn("#userpasswordRight", "#userpasswordRight");
});

$("#userpassword").blur(function () {
   var upassword = $(this).val();
   blurFn("#userpasswordRight", "#userpasswordError", upassword.length > 5 && upassword.length < 17);
});

$("#reuserpassword").focus(function focusFn() {
    foucsFn("#userpassword1Right", "#userpassword1Right");
});
$("#reuserpassword").blur(function () {
    var upassword = $("#userpassword").val();
    var upassword1 = $(this).val();
    if (upassword1 == upassword && upassword1.length > 0) {
        rightFn("#reuserpasswordRight", "#reuserpasswordError");
    } else {
        errorFn("#reuserpasswordRight", "#reuserpasswordError");
    }
});










})

$(function () {
    var index = 0;//用index记录下标,默认为0
    var lis = $('.slider ul li');
    //1.右边箭头点击事件
    $('#arrow-right').click(right);
    //右箭头点击事件处理函数
    function right() {
        index++;
        //如果当前是最后一张,此时index=lis.length-1,index++后index=lis.length
        // 此时应让index=0
        if (index == lis.length) {
            index = 0;
        }
        //显示对应下标的图片,让其他兄弟隐藏
        lis.eq(index).fadeIn().siblings().fadeOut();
        //给对应下标的小圆点按钮添加current类名,其他兄弟移除current类名
    }
    //2.左边箭头点击事件
    $('#arrow-left').click(function () {
        index--;
        //如果当前是第一张(index=0),index--后,index<0,此时应显示最后一张,让index=lis.length-1
        if (index < 0) {
            index = lis.length - 1;
        }
        //显示对应下标的图片,让其他兄弟隐藏
        lis.eq(index).fadeIn().siblings().fadeOut();
        //给对应下标的小圆点按钮添加current类名,其他兄弟移除current类名
    });
    // 对按钮的逻辑验证
    $("#loginbox").click(function (e) {
        var email=$("#email").val();
        var password=$("#password").val();
        var email1=localStorage.getItem("name");
        var password1=localStorage.getItem("password");
        // e.preventDefault();
        if(!(email==email1)){
            alert("请输入正确邮箱地址")
        }else if(!(password==password1)) {
            alert("请输入正确密码");
        }
        if(email===email1&&password===password1){
            alert("登陆成功");
        }
    })
});
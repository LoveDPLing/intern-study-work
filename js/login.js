$(function () {
    var bac=["rgb(234, 233, 233)","rgb(241, 242, 246)","rgb(254, 238, 228)"];
    var index = 0;//用index记录下标,默认为0
    var lis = $('.slider ul li');
    //1.右边箭头点击事件
    $('#arrow-right').click(right);
    //右箭头点击事件处理函数
    function right() {
        index++;
        if (index == lis.length) {
            index = 0;
        }
        //显示对应下标的图片
        $("#main").css("background-color", bac[index]);
        lis.eq(index).show().siblings().hide();
    }
    //2.左边箭头点击事件
    $('#arrow-left').click(function () {
        index--;
        if (index < 0) {
            index = lis.length - 1;
        }
        $("#main").css("background-color", bac[index]);
        //显示对应下标的图片,让其他的隐藏
        lis.eq(index).show().siblings().hide();
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
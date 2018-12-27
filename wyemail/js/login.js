$(function () {
    // 定义一个数组存储背景色，数组元素的类型为字符串
    var bac = ['rgb(234, 233, 233)', 'rgb(241, 242, 246)', 'rgb(254, 238, 228)'];
    // 定义一个变量表示下表
    var index = 0;
    // 选中包含三张图片的三个li
    var lis = $('.slider ul li');
    // console.log(lis);

    // 1.右边边箭头的点击事件
    $('#arrow-right').click(nextPic);
    // 定义nextPic函数
    function nextPic() {
        index++;
        console.log(index);
        // 对index的值进行判断
        if (index == lis.length) {
            index = 0;
        };
        // 改变背景色
        $("#main").css("backgroundColor", bac[index]);
        // 当前的图片显示，其他兄弟图片隐藏
        lis.eq(index).show().siblings().hide();
    };
    // 2.左边箭头的点击事件
    $('#arrow-left').click(prevPic);
    function prevPic() {
        index--;
        if (index < 0) {
            index = lis.length;
        };
        $("#main").css("backgroundColor", bac[index]);
        lis.eq(index).show().siblings().hide();
    };
    // 3.对footer里的登陆按钮进行验证
    $('#loginbox').click(function (e) {
        var email = $("#email").val();
        var password = $("#password").val();
        var email1 = localStorage.getItem("name");
        var password1 = localStorage.getItem("password");
        e.preventDefault();
        if (!(email == email1)) {
            alert("请输入正确邮箱地址")
        } else if (!(password == password1)) {
            alert("请输入正确密码");
        };
        if (email === email1 && password === password1) {
            alert("登陆成功");
        };
    });
});
var c, d, e, f, h;
var i, j, k, l, m, n;
$('#e-address').on('input propertychange', function () {
    c = $('#e-address').val();
    if ($('#e-address').val() === "") {
        $('#p1-hide').hide();
        $('#p1').show();
    }
});
var aa = /^[a-zA-Z]/;
$('#e-address').blur(function () {
    if (!aa.test(c)) {
        $('#p1').hide();
        $('#p1-hide').show();
        $('#p1-hide').text("邮箱格式错误!请重新填写");
    }
    else if (c.length < 6 || c.length > 18) {
        $('#p1-hide').show();
        $('#p1-hide').text("邮箱格式错误！请重新填写");
        $('#p1').hide();
    }
    else {
        $('#p1-hide').hide();
        $('#p1').show();
        i = 1;
    }
});

$('#pwd1').on('input propertychange', function () {
    d = $('#pwd1').val();
});
$('#pwd1').blur(function () {
    if (d.length < 6 || d.length > 16) {
        $('#p2-hide').show();
        $('#p2').text("输入错误请重新填写！");
        $('#p2').css({
            color: 'red'
        });
    }
    else {
        $('#p2').text("输入正确请继续！");
        $('#p2').css({
            color: 'green'
        });
        $('#p2-hide').hide();
        j = 1;
    }
});

$('#pwd2').on('input propertychange', function () {
    e = $('#pwd2').val();
});
$('#pwd2').blur(function () {
    if (e != d) {
        $('#p3').text("密码不一致！请重新填写");
        $('#p3').css({
            color: 'red'
        });
    }
    else {
        $('#p3').text("输入正确请继续！");
        $('#p3').css({
            color: 'green'
        });
        k = 1;
    }
});

$('#mobile').on('input propertychange', function () {
    f = $('#mobile').val();
});
$('#mobile').blur(function () {
    if (f.length != 11) {
        $('#p4').text("请填写正确的手机号码！");
        $('#p4').css({
            color: 'red'
        });
    }
    else {
        $('#p4').text("输入正确，忘记密码时，可以通过该手机号码快速找回密码！");
        $('#p4').css({
            color: 'green'
        });
        l = 1;
    }
});
$('#code').on('input propertychange', function () {
    $('#p5').css({
        color: 'red'
    });
});
$('#code').blur(function () {
    $('#p5').css({
        color: 'green'
    });
    m = 1;
});
/*
var random_code = window.localStorage.getItem("random_code");
$('#code').on('input propertychange', function () {
    g = $('#code').val();
});
$('#code').blur(function () {
   if (g.length != random_code) {
        $('#p5').text("请输入正确的验证码！");
        $('#p5').css({
            color: 'red'
        });
    }
    else {
        $('#p5').text("输入正确,请进行下部操作！");
        $('#p5').css({
            color: 'green'
        });
        m = 1;
    }
});*/
$('#message').on('input propertychange', function () {
    h = $('#message').val();
});
$('#message').blur(function () {
    if (h.length != 4) {

        $('#p6-hide').text("手机验证码错误！请重新输入");
        $('#p6-hide').css({
            color: 'red'
        });
    }
    else {
        $('#p6-hide').text("输入正确!请仔细阅读以下文档！");
        $('#p6-hide').css({
            color: 'green'
        });
        n = 1;
    }
});
$('.signbtn').click(function () {
    if (i == 1 && j == 1 && k == 1 && l == 1 && m == 1 && n == 1) {
        alert("恭喜您！注册成功！");
        $(location).prop('href', 'index.html');
        var user, password;
        window.localStorage.setItem("user", c);
        window.localStorage.setItem("password", d);
    } else {
        alert("输入有误！请重新返回填写");
    }
});

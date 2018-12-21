import $ from 'jquery';
window.$ = $;
window.jQuery = $;
var c, d, e, f, h, z;
var i, j, k, l, m, n;
$('#user').on('input propertychange', function () {
    c = $('#user').val();
    if ($('#user').val() === "") {
        $('#p1-hide').hide();
        $('#p1').show();
    }
});
var aa = /^[a-zA-Z]/;
$('#user').blur(function () {
    if (!aa.test(c)) {
        $('#p1').hide();
        $('#p1-hide').show();
        $('#p1-hide').text("邮箱首部应为字母且不为空值!请重新填写");
    }
    else if (c.length < 6 || c.length > 18) {
        $('#p1-hide').show();
        $('#p1-hide').text("邮箱输入长度有误！请重新填写");
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
        $('#p2').text("密码输入长度有误，请重新填写！");
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
        $('#p3').text("两次密码不一致！请重新填写");
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
    if ($('#mobile').val() === "") {
        $('#p4').text("请勿输入空值！");
        $('#p4').css({
            color: 'red'
        });
    }
});
var bb = /^1[34578]/;
$('#mobile').blur(function () {
    if (!bb.test(f)) {
        $('#p4').text("手机格式错误!请重新填写正确的手机格式");
        $('#p4').css({
            color: 'red'
        });
    }
    else if (f.length != 11) {
        $('#p4').text("请填写正确的手机号码长度！");
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
    z = $('#code').val();
});
$('#code').blur(function () {
    var ycode = window.localStorage.getItem("ycode");
    z = $('#code').val();
    if (z != ycode) {
       $('#p5-a').text("输入错误，请重新输入!");
        $('#p5-a').css({
            color: 'red'
        });
    }
    else {
        $('#p5-a').text("输入正确，请继续!");
        $('#p5-a').css({
            color: 'green'
        });
        m = 1;
    }
});
/*  $('#p5').css({
      color: 'red'
  });
});
$('#code').blur(function () {
  $('#p5').css({
      color: 'green'
  });
  m = 1;*/
function MathRand() {
    var Num = "";

    for (var i = 0; i < 6; i++) {
        Num += Math.floor(Math.random() * 10);
    }
    alert("您的手机验证码是：" + " " + Num + "  " + "谢谢！");
    var number;
    window.localStorage.setItem("number", Num);
}
$('#message').on('input propertychange', function () {
    h = $('#message').val();
});
$('#message').blur(function () {
    var number = window.localStorage.getItem("number");
    h = $('#message').val();
    if (h != number) {
        $('#p6').text("手机验证码错误！请重新输入");
        $('#p6').css({
            color: 'red'
        });
    }
    else {
        $('#p6').text("输入正确!请仔细阅读以下文档！");
        $('#p6').css({
            color: 'green'
        });
        n = 1;
    }
});
$('.signbtn').click(function () {
    if (i == 1 && j == 1 && k == 1 && l == 1 && m == 1 && n == 1) {
        alert("恭喜您！注册成功！");
        $(location).prop('href', 'login.html');
        var user, password;
        window.localStorage.setItem("user", c);
        window.localStorage.setItem("password", d);
    } else {
        alert("输入有误！请重新返回填写");
    }
});

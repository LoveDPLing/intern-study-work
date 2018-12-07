var x, y;
$('#user').on('input propertychange', function () {
    x = $('#user').val();
});
$('#password').on('input propertychange', function () {
    y = $('#password').val();
});
/*****本地缓存*****/
var user = window.localStorage.getItem("user");
var password = window.localStorage.getItem("password");
$('.login-in').click(function () {
    if (x == user && y == password) {
        $(location).prop('href', '**.html');
    } else {
        alert("登录失败！请确认您的账户和密码是否有误");
    }
});


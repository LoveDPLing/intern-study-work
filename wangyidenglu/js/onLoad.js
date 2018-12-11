$(document).ready(function () {
    var account1, password;
    var i = 1;
    $('#email-001').on('input propertychange', function () {
        account1 = $('#email-001').val();
    });

    $('#password-001').on('input propertychange', function () {
        password = $('#password-001').val();
    });

    // 从缓存区获取账号和密码
    var hoster1 = window.localStorage.getItem("hoster");
    var password02 = window.localStorage.getItem("password01");

    $('#loading').click(function () {
        // 判断账号密码是否错误
        if (account1 == hoster1 && password == password02) {
            $('#email-001').val("");
            $(location).prop('href', 'chengguo.html');
        } else {
            alert("登陆失败！请检查您的账户和密码");
        }
    });
    $("#left").click(function () {
        i--;
        if (i < 1) {
            i = 3;
        }
        showPicture(i)
    });
    $("#right").click(function () {
        i++;
        if (i > 3) {
            i = 1;
        }
        showPicture(i)
    });

    function showPicture(a) {
        switch (a) {
            case 1:
                $('.main').css({"backgroundColor": "rgb(236, 237, 239)"});
                $('.main-inner').css({"background": "url(images/denglu1.png) no-repeat"});
                break;
            case 2:
                $('.main').css({"backgroundColor": "rgb(221, 228, 226)"});
                $('.main-inner').css({"background": "url(images/denglu2.png) no-repeat"});
                break;
            case 3:
                $('.main').css({"backgroundColor": "#F1F2F6"});
                $('.main-inner').css({"background": "url(images/denglu3.png) no-repeat"});
                break;
        }
    }
});


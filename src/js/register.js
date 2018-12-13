$(function () {
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
    function judgeName() {
        var regtitle = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/;
        var uname = $("#username").val();
        if (uname.length <= 0 || !regtitle.test(uname)) {
            errorFn("#usernameRight", "#usernameError");
        } else {
            rightFn("#usernameRight", "#usernameError");
        }
    }

    // 第一次输入密码，关于密码格式的验证
    $("#userpassword").focus(function () {
            foucsFn("#userpasswordRight", "#userpasswordRight");
        }
    );
    $("#userpassword").blur(function () {
        var upassword = $(this).val();
        blurFn("#userpasswordRight", "#userpasswordError", upassword.length > 5 && upassword.length < 17);
    });
//password1验证   关于两次输入密码是否一致的验证
    $("#userpassword1").focus(function focusFn() {
        foucsFn("#userpassword1Right", "#userpassword1Right");
    });
    $("#userpassword1").blur(function () {
        var upassword = $("#userpassword").val();
        var upassword1 = $(this).val();
        if (upassword1 == upassword && upassword1.length > 0) {
            rightFn("#userpassword1Right", "#userpassword1Error");
        } else {
            errorFn("#userpassword1Right", "#userpassword1Error");
        }
    });
//userphone验证
    $("#userphone").focus(function focusFn() {
        foucsFn("#userphoneRight", "#userphoneRight");
    });
    $("#userphone").blur(function () {
        var regphone = /^(13[0-9]|15[0-9]|18[0-9]|16[0-9])\d{8}$/;
        var uphone = $(this).val();
        if (uphone.length <= 0 || !regphone.test(uphone)) {
            errorFn("#userphoneRight", "#userphoneError");
        } else {
            rightFn("#userphoneRight", "#userphoneError");
        }
    });
    $("#usercode").focus(function focusFn() {
        foucsFn("#usercodeRight", "#usercodeRight");
    });

// 随机生成位随机数
    function rand() {
        var str = "abcdefghijklmnopqrstuvwxyz0123456789";
        var arr = str.split("");
        var validate = "";
        var ranNum;
        for (var i = 0; i < 6; i++) {
            ranNum = Math.floor(Math.random() * 36);   //随机数在[0,35]之间
            validate += arr[ranNum];
        }
        return validate;
    }

    /*干扰线的随机x坐标值*/
    function lineX() {
        var ranLineX = Math.floor(Math.random() * 90);
        return ranLineX;
    }

    /*干扰线的随机y坐标值*/
    function lineY() {
        var ranLineY = Math.floor(Math.random() * 40);
        return ranLineY;
    }

    function clickChange() {
        var mycanvas = document.getElementById('mycanvas');
        var cxt = mycanvas.getContext('2d');
        cxt.fillStyle = '#3182d9';
        cxt.fillRect(0, 0, 110, 40);
        /*生成干扰线20条*/
        for (var j = 0; j < 20; j++) {
            cxt.strokeStyle = '#fff';
            cxt.beginPath();    //若省略beginPath，则每点击一次验证码会累积干扰线的条数
            cxt.moveTo(lineX(), lineY());
            cxt.lineTo(lineX(), lineY());
            cxt.lineWidth = 0.5;
            cxt.closePath();
            cxt.stroke();
        }
        // 干扰线样式
        cxt.fillStyle = '#ffffff';
        cxt.font = 'bold 20px Arial';
        var ran = rand();
        cxt.fillText(ran, 25, 25);
        $("#usercode").blur(function () {
            var upcode = $(this).val();
            blurFn("#usercodeRight", "#usercodeError", ran == upcode);
        });
    }

// 打开页面先执行一次
    clickChange();
    /*点击验证码更换*/
    $('#ver-img').click(function (e) {
        e.preventDefault();   //阻止鼠标点击发生默认的行为
        clickChange();
    });

    $("#usernote").focus(function focusFn() {
        foucsFn("#usernoteRight", "#usernoteRight");
    });

//六位的短信验证码
    function noteRandom() {
        var str = "0123456789";
        var arr = str.split("");
        var vali = "";
        var ranNum;
        for (var i = 0; i < 6; i++) {
            ranNum = Math.floor(Math.random() * 9);   //随机数在[0,35]之间
            vali += arr[ranNum];
        }
        return vali;
    }

//给按钮绑定点击事件  弹窗的方式发送短信
    $("#usercode-gain").click(function (a) {
        a.preventDefault();
        // 先调用随机短信函数
        noteRandom();
        var note = noteRandom();
        alert("短信验证码是：" + note);
        $("#usernote").blur(function () {
            var upnote = $("#usernote").val();
            blurFn("#usernoteRight", "#usernoteError", note == upnote);
        });
    });
//关于是否勾选服务条款的验证  将这个判断放在立即祖册按钮中
    $("#register-btn").click(function (e) {
        e.preventDefault();
        var checks = $("#check");
        if (!checks.prop("checked") == true) {
            alert("请阅读服务条款并同意");
        } else {
            if ($("input").val() == "") {
                alert("请输入所有相关信息")
            } else {
                // 注册成功并跳转到登陆页面
                user = $("#username").val();
                password = $("#userpassword").val();
                localStorage.setItem("name", user);
                localStorage.setItem("password", password);
                var i = window.confirm("您已注册成功，点击确认将跳转到登陆页面");
                if (i != 0) {
                    window.location = "index.html";
                }
            }
        }
    });
});



$(function () {
    // 失去焦点判断事件
    function blurFn (r, e, t) {
        if (t) {
            $(r).show(); //显示正确tip
            $(e).hide(); //隐藏错误tip
        } else {
            $(r).hide();
            $(e).show();
        }
    }

    // 获得焦点事件
    function focusFn (r, e) {
        judgeName();
        $(r).hide();
        $(e).hide();
    }

    function rightFn (r, e) {
        $(r).show();
        $(e).hidn();
    } 

    function errorFn (r, e) {
        $(r).hide();
        $(e).show();
    }
    
    // 验证邮箱的格式
    function judgeName () {
        // 正则
        var regtitle = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/;
        var uname = $("#usernameRight").val();
        // 不符合规定格式
        if (uname.length <= 0 || !regtitle.test(uname)) {
            errorFn("#usernameRight", "#usernameError")
        } else {
            rightFn("#usernameRight", "#usernameError");
        }
    }

    // 第一次输入密码，对密码进行验证
    $("#userpassword").focus(function () {
        focusFn("#userpasswordRight", "#userpasswordRight");
    });
    $("#userpassword").blur(function () {
        var upassword = $(this).val();
        blurFn("#userpasswordRight", "#userpasswordError", upassword.length > 5 && upassword.length < 17);    
    });
    // 第二次验证密码，两次的是否一致
    $("#userpassword1").focus(function () {
        focusFn("#userpassword1Right", "#userpassword1Right");
    });
    $("#userpassword1").blur(function () {
        var upassword = $("#userpassword").val();
        var upassword1 = $(this).val();
        if (upassword1 == upassword && upassword1.length > 0) {
            rightFn("#userpassword1Right", "#userpassword1Error");
        }  else {
            errorFn("#userpassword1Right", "#userpassword1Error");
        } 
    });
    // 手机号码验证
    $("userphone").focus(function () {
        focusFn("#userphoneRight", "#userphoneRight");
    });
    $("userphone").blur(function () {
        var regphone = /^(13[0-9]|15[0-9]|18[0-9]|16[0-9])\d{8}$/;
        var uphone = $(this).val();
        if (uphone.length <= 0 || !regphone.test(uphone)) {
            errorFn("#userphoneRight", "#userphoneError");
        } else {
            rightFn("#userphoneRight", "#userphoneError");
        }
    });

    // 验证码
    $("#usercode").focus(function () {
        focusFn("#usercodeRight", "#usercodeRight");
    });
    // 函数：随机生产一个6位的验证码
    function rand() {
        var codestr = "abcdefghijklmnopqrstuvwxyz0123456789";
        var arr = codestr.split("");
        var resultcode = "";
        var ranNum;
        for (var i = 0; i < 6; i++) {
            ranNum = Math.floor(Math.random() * 36);
            resultcode += arr[ranNum];
        }
        return resultcode;
    }

    // 验证码区域干扰线
    function linex() {
        var x = Math.floor(Math.random() * 90);
        return x;
    }
    function liney() {
        var y = Math.floor(Math.random() * 90);
        return y;
    }

    function clickChange () {
        var mycanvas = document.getElementById('mycanvas');
        var cxt = mycanvas.getContext('2d');
        cxt.fillStyle = "#3182d9";
        cxt.fillRect(0, 0, 110, 40);
        // 生成20条干扰线
        for(var j = 0; j < 20; j++) {
            cxt.strokeStyle = "#fff";
            cxt.beginPath();
            cxt.moveTo(linex(), liney());
            cxt.lineTo(linex(), liney());
            cxt.lineWidth = 0.5;
            cxt.closePath();
            cxt.stroke();
        }
        // 干扰线样式
        cxt.fillStyle = "#ffffff";
        cxt.font = 'bold 20px Arial';
        var ran = rand();
        cxt.fillText(ran, 25, 25);
        $("#usercode").blur(function() {
            var ucode = $(this).val();
            blurFn("#usercodeRight", "#usercodeError", ran == ucpde);
        });
    }

    // 打开页面先执行一次
    clickChange();
    $("#ver-img").click(function (e){
        e.preventDefault();
        clickChange();
    });

    $("#usernote").focus(function () {
        focusFn("#usernoteRight", "#usernoteRight");
    });

    // 6位短信验证码
    function noteRandom() {
        var str = "0123456789";
        var arr = str.split("");
        var resultnote = "";
        var ranNum;
        for (var k = 0; k < 6; k++){
            ranNum = Math.floor(Math.random() * 9);
            resultnote += arr[ranNum]
        }
        return resultnote;
    }

    $("#usercode-gain").click(function (event) {
        event.preventDefault();
        noteRandom();
        var note = noteRandom();
        alert("短信验证码是：" + note);
        $("#usernote").blur(function() {
            var unote = $("#usernote").val();
            blurFn("#usernoteRight", "#usernoteError", note == unote);
        });
    });


    // 
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
})
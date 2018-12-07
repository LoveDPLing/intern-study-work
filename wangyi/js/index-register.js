$(function () {
// 邮箱格式的验证
    $("#username").focus(function () {
        $("#username").css("background-color", "#FFFFCC");
        $("#usernameRight").hide();
        $("#usernameError").hide();
    });
    $("#username").blur(function () {
        var regtitle = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/;
        var uname = $("#username").val();
        $("#username").css("background-color", "white");
        if (uname.length <= 0 || !regtitle.test(uname)) {
            $("#usernameRight").hide();
            $("#usernameError").show();
        } else {
            $("#usernameRight").show();
            $("#usernameError").hide();
        }
    });
// 第一次输入密码，关于密码格式的验证
    $("#userpassword").focus(function () {
        //获得焦点时  先判断邮箱地址是否输入正确
        var regtitle = /^[a-zA-Z][a-zA-Z0-9]{5,15}$/;
        var uname = $("#username").val();
        if (uname.length <= 0 || !regtitle.test(uname)) {
            $("#usernameRight").hide();
            $("#usernameError").show();
        } else {
            $("#usernameRight").show();
            $("#usernameError").hide();
        }
        $("#userpassword").css("background-color", "#FFFFCC");
        $("#userpasswordRight").hide();
        $("#userpasswordError").hide();
    });
    $("#userpassword").blur(function () {
        var upassword = $("#userpassword").val();
        $("#userpassword").css("background-color", "white");
        if (upassword.length > 5 && upassword.length < 17) {
            $("#userpasswordRight").show();
            $("#userpasswordError").hide();
        } else {
            $("#userpasswordRight").hide();
            $("#userpasswordError").show();
        }
    });
//password1验证   关于两次输入密码是否一致的验证
    $("#userpassword1").focus(function () {
        ///获得焦点时  先判断邮箱地址是否输入正确
        var regtitle = /^[a-zA-Z][a-zA-Z0-9]{3,17}$/;
        var uname = $("#username").val();
        if (uname.length <= 0 || !regtitle.test(uname)) {
            $("#usernameRight").hide();
            $("#usernameError").show();
        } else {
            $("#usernameRight").show();
            $("#usernameError").hide();
        }
        $("#userpassword1").css("background-color", "#FFFFCC");
        $("#userpassword1Right").hide();
        $("#userpassword1Error").hide();
    });
    $("#userpassword1").blur(function () {
        var upassword = $("#userpassword").val();
        var upassword1 = $("#userpassword1").val();
        $("#userpassword1").css("background-color", "white");
        if (upassword1 != upassword) {
            $("#userpassword1Right").hide();
            $("#userpassword1Error").show();
        } else {
            $("#userpassword1Right").show();
            $("#userpassword1Error").hide();
        }
    });
//手机号码的验证
//userphone验证
    $("#userphone").focus(function () {
        //获得焦点时  先判断邮箱地址是否输入正确
        var regtitle = /^[a-zA-Z][a-zA-Z0-9]{3,17}$/;
        var uname = $("#username").val();
        if (uname.length <= 0 || !regtitle.test(uname)) {
            $("#usernameRight").hide();
            $("#usernameError").show();
        } else {
            $("#usernameRight").show();
            $("#usernameError").hide();
        }
        $("#userphone").css("background-color", "#FFFFCC");
        $("#userphoneRight").hide();
        $("#userphoneError").hide();
    });
    $("#userphone").blur(function () {
        var regphone = /^(13[0-9]|15[0-9]|18[0-9]|16[0-9])\d{8}$/;
        var uphone = $("#userphone").val();
        $("#userphone").css("background-color", "white");
        if (uphone.length <= 0 || !regphone.test(uphone)) {
            $("#userphoneRight").hide();
            $("#userphoneError").show();
        } else {
            $("#userphoneRight").show();
            $("#userphoneError").hide();
        }
    });
    $("#usercode").click(function () {
        //获得焦点时  先判断邮箱地址是否输入正确
        var regtitle = /^[a-zA-Z][a-zA-Z0-9]{3,17}$/;
        var uname = $("#username").val();
        if (uname.length <= 0 || !regtitle.test(uname)) {
            $("#usernameRight").hide();
            $("#usernameError").show();
        } else {
            $("#usernameRight").show();
            $("#usernameError").hide();
        }
        $("#usercode").css("background-color", "#FFFFCC");
        $("#usercodeError").hide();
        $("#usercodeRight").hide();
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
        // 在这里先调用函数生成随机数组
        rand();
        // 将随机数组保存在变量中，防止随机数组发生变化
        var ran = rand();
        cxt.fillText(ran, 25, 25);//把rand()生成的随机数文本填充到canvas中
        // 将验证码验证逻辑放在这,这样可以保证每次和输入框里对照的验证码都是图片里的
        $("#usercode").blur(function () {
            var upcode = $(this).val();
            $("#usercode").css("background-color", "white");
            if (ran == upcode) {
                $("#usercodeRight").show();
                $("#usercodeError").hide();
                $("#usercodeRight-p").hide();
            } else {
                $("#usercodeRight").hide();
                $("#usercodeError").show();
            }
        });
    }

// 打开页面先执行一次
    clickChange();
    /*点击验证码更换*/
    $('#ver-img').click(function (e) {
        e.preventDefault();   //阻止鼠标点击发生默认的行为
        clickChange();
    });
// 今天晚上要做的---点击免费获取二维码弹窗显示模拟一个手机短信二维码，输入并进行验证

    $("#usernote").focus(function () {
        //获得焦点时  先判断邮箱地址是否输入正确
        var regtitle = /^[a-zA-Z][a-zA-Z0-9]{3,17}$/;
        var uname = $("#username").val();
        if (uname.length <= 0 || !regtitle.test(uname)) {
            $("#usernameRight").hide();
            $("#usernameError").show();
        } else {
            $("#usernameRight").show();
            $("#usernameError").hide();
        }
        $("#usernote").css("background-color", "#FFFFCC");
        $("#usernoteError").hide();
        $("#usernoteRight").hide();
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
        a.preventDefault();   //阻止鼠标点击发生默认的行为
        // 先调用随机短信函数
        noteRandom();
        // 赋值给一个变量
        // 将当前的这个随机短信保存在变量中
        var note = noteRandom();
        alert("短信验证码是：" + note);
        $("#usernote").blur(function () {
            var upnote = $("#usernote").val();
            $("#usernote").css("background-color", "white");
            if (note == upnote) {
                $("#usernoteRight").show();
                $("#usernoteError").hide();
            } else {
                $("#usernoteRight").hide();
                $("#usernoteError").show();
            }
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
                    window.location = "index-enter.html";
                }
            }
        }
    });
});



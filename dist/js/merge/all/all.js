/*!  2018-12-13 */

$(function(){var r=["rgb(234, 233, 233)","rgb(241, 242, 246)","rgb(254, 238, 228)"],e=0,o=$(".slider ul li");$("#arrow-right").click(function(){++e==o.length&&(e=0),$("#main").css("backgroundColor",r[e]),o.eq(e).show().siblings().hide()}),$("#arrow-left").click(function(){--e<0&&(e=o.length-1),$("#main").css("backgroundColor",r[e]),o.eq(e).show().siblings().hide()}),$("#loginbox").click(function(r){var e=$("#email").val(),o=$("#password").val(),t=localStorage.getItem("name"),s=localStorage.getItem("password");e!=t?alert("请输入正确邮箱地址"):o!=s&&alert("请输入正确密码"),e===t&&o===s&&alert("登陆成功")})}),$(function(){function t(r,e,o){o?($(r).show(),$(e).hide()):($(r).hide(),$(e).show())}function r(r,e){var o;(o=$("#username").val()).length<=0||!/^[a-zA-Z][a-zA-Z0-9]{5,15}$/.test(o)?n("#usernameRight","#usernameError"):s("#usernameRight","#usernameError"),$(r).hide(),$(e).hide()}function s(r,e){$(r).show(),$(e).hide()}function n(r,e){$(r).hide(),$(e).show()}function a(){return Math.floor(90*Math.random())}function i(){return Math.floor(40*Math.random())}function e(){var r=document.getElementById("mycanvas").getContext("2d");r.fillStyle="#3182d9",r.fillRect(0,0,110,40);for(var e=0;e<20;e++)r.strokeStyle="#fff",r.beginPath(),r.moveTo(a(),i()),r.lineTo(a(),i()),r.lineWidth=.5,r.closePath(),r.stroke();r.fillStyle="#ffffff",r.font="bold 20px Arial";var o=function(){for(var r="abcdefghijklmnopqrstuvwxyz0123456789".split(""),e="",o=0;o<6;o++)e+=r[Math.floor(36*Math.random())];return e}();r.fillText(o,25,25),$("#usercode").blur(function(){var r=$(this).val();t("#usercodeRight","#usercodeError",o==r)})}function o(){for(var r="0123456789".split(""),e="",o=0;o<6;o++)e+=r[Math.floor(9*Math.random())];return e}$("#userpassword").focus(function(){r("#userpasswordRight","#userpasswordRight")}),$("#userpassword").blur(function(){var r=$(this).val();t("#userpasswordRight","#userpasswordError",5<r.length&&r.length<17)}),$("#userpassword1").focus(function(){r("#userpassword1Right","#userpassword1Right")}),$("#userpassword1").blur(function(){var r=$("#userpassword").val(),e=$(this).val();e==r&&0<e.length?s("#userpassword1Right","#userpassword1Error"):n("#userpassword1Right","#userpassword1Error")}),$("#userphone").focus(function(){r("#userphoneRight","#userphoneRight")}),$("#userphone").blur(function(){var r=$(this).val();r.length<=0||!/^(13[0-9]|15[0-9]|18[0-9]|16[0-9])\d{8}$/.test(r)?n("#userphoneRight","#userphoneError"):s("#userphoneRight","#userphoneError")}),$("#usercode").focus(function(){r("#usercodeRight","#usercodeRight")}),e(),$("#ver-img").click(function(r){r.preventDefault(),e()}),$("#usernote").focus(function(){r("#usernoteRight","#usernoteRight")}),$("#usercode-gain").click(function(r){r.preventDefault(),o();var e=o();alert("短信验证码是："+e),$("#usernote").blur(function(){var r=$("#usernote").val();t("#usernoteRight","#usernoteError",e==r)})}),$("#register-btn").click(function(r){r.preventDefault(),1==!$("#check").prop("checked")?alert("请阅读服务条款并同意"):""==$("input").val()?alert("请输入所有相关信息"):(user=$("#username").val(),password=$("#userpassword").val(),localStorage.setItem("name",user),localStorage.setItem("password",password),0!=window.confirm("您已注册成功，点击确认将跳转到登陆页面")&&(window.location="index.html"))})});
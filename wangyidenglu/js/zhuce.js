
  var account,password001,password002,phonenumber,code001,code002,check1,check2,check3,check4,check5,check6,check7;

//   监听邮箱账号变化
  $('#email1').on('input propertychange',function(){   　　
    account = $('#email1').val();
   if($('#email1').val() === ""){
        $('.email-error').hide();
        $('#p1-show').show();   
   }
  });

  var Regx = /[a-zA-Z]/
//  离开焦点后发生变化
  $('#email1').blur(function(){
    //   首位必须是字母
    if(!Regx.test(account)){       
        $('#p1-show').hide();
        $('.email-error').show();
        $('.emm').show();
        $('.email-error').text("邮箱格式错误");
    }
    //  account的长度的限制
    else if(account.length < 6 ||account.length >18){    
        $('.email-error').show();
        $('.emm').show();
        $('.email-error').text("邮箱格式错误");
        $('#p1-show').hide();
    }
    else{
        $('.email-error').hide();
        $('.emm').hide();
        $('#p1-show').show();
        check1 = 1;
    }
   });
//   监听密码变化
   $('#password1').on('input propertychange',function(){    　　
    password001 = $('#password1').val();
   }); 
//  离开焦点后发生变化
   $('#password1').blur(function(){  
    //    密码长度的限制     
     if(password001.length < 6 || password001.length > 18)
     {
        $('#pass1').text("密码长度应为6-18！");
        $('#pass1').css({
            color:'red'
        });
     }
     else{  
        $('#pass1').text("6~16个字符，区分大小写！");
        $('#pass1').css({
            color:'#aaa'
        });
        check2 = 1;
     }  
    });
//   监听再次输入密码变化
    $('#password2').on('input propertychange',function(){   　　 
        password002 = $('#password2').val();   
     });
//  离开焦点后发生变化
// 确认密码是否和密码相同
     $('#password2').blur(function(){   
      if(password002 != password001)
        {
           $('#pass2').text("确认密码错误！");   
           $('#pass2').css({  
               color:'red'   
           });
        }
        else{  
            $('#pass2').text("请再次填写密码！");
            $('#pass2').css({   
                color:'#aaa'    
            });    
            check3 = 1;
         }
     });
//   监听电话号码变化
     $('#phone1').on('input propertychange',function(){
        phonenumber = $('#phone1').val();    
       });
 //  离开焦点后发生变化   
     $('#phone1').blur(function(){
//   手机号码的长度要求
       if(phonenumber.length != 11)
       {
        $('#phone-1').text("请填写正确的手机号码！");

        $('#phone-1').css({

            color:'red'

        });
    }
    else{

        $('#phone-1').text("忘记密码时，可以通过该手机号码快速找回密码！");

        $('#phone-1').css({
            color:'#aaa'
        });
        check4 = 1;
    }
      });
//   监听验证码变化
    $('#code1').on('input propertychange',function(){    　  
        code001 = $('#code1').val();    
       });
//  离开焦点后发生变化
    $('#code1').blur(function(){
        // 获取缓存区的验证码,并比较
       if(code001 != window.localStorage.getItem("code01"))
     {
        $('#code-1').text("验证码错误");
        $('#code-1').css({
            color:'red'
        });
     }
     else{  
        $('#code-1').text("请填写表格中的字符，不区分大小写！");
        $('#code-1').css({
            color:'#aaa'
        });
           check5 = 1;
     } 
       });
//   监听手机验证码变化
    $('#messager1').on('input propertychange',function(){
        code002 = $('#messager1').val();    
    });
//  离开焦点后发生变化
// 检验手机的验证码
    $('#messager1').blur(function(){    
        if(code002.length != 6)
          {
             $('#messager-01').text("验证码错误！");     
             $('#messager-01').css({    
                 color:'red'    
             });
          }
          else{    
              $('#messager-01').text("请查收手机短信，并填写短信中的验证码");
              $('#messager-01').css({
                       color:'#aaa'
                    });     
                    check6 = 1;
           }
       });
    //    同意按钮的检验
       $('#s1').click(function(){
        check7=1;
       });
    
     $('.last').click(function(){
        //  判断是否全部正确
        if(check1 == 1&& check2==1&& check3==1 &&check4==1&& check5==1&& check6==1&&check7==1){
       alert("注册成功！");
    //    获取本地的登陆页面
       $(location).prop('href', 'dengluyemian.html');
    //    将值存到缓存区
      var hoster,password01;
       window.localStorage.setItem("hoster",account);
       window.localStorage.setItem("password01",password001);
       $('#email1').val("");
       $('#password1').val("");
       $('#password2').val("");
       $('#phone1').val("");
       $('#code1').val("");
       $('#messager1').val("");
        }else{  
            alert("有错误！！！");
        }
       });

       


       
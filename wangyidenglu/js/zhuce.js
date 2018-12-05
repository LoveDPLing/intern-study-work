
  var c,d,e,f,h;

  $('#email1').on('input propertychange',function(){
    　　
   c = $('#email1').val();

   if($('#email1').val() === ""){

        $('.email-error').hide();

        $('#p1-show').show();
    
   }

  });
  var aa = /^[a-zA-Z]/
 
  $('#email1').blur(function(){

    if(!aa.test(c)){
        
        $('#p1-show').hide();

        $('.email-error').show();

        $('.email-error').text("邮箱格式错误");

        // $('#sel').append("<div>请以字母开头！</div>");
        
        // $('#sel:eq(0)').css({

        //   width:'300px',

        //   height:'50px',
          
        //   border:'1px solid red',
       
        //   color:'red',

        //   margin:'50px 0px 0px 200px'

        // });
    }
    else if(c.length < 6 ||c.length >18){

    
        $('.email-error').show();

        $('.email-error').text("邮箱格式错误");

        $('#p1-show').hide();

    }
    else{

        $('.email-error').hide();

        $('#p1-show').show();

    }
 
   });

   $('#password1').on('input propertychange',function(){
    　　
  
    d = $('#password1').val();
 
   });
   $('#password1').blur(function(){
 
       
     if(d.length < 6 || d.length > 18)
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

     }
  
    });
    $('#password2').on('input propertychange',function(){
    　　
  
      e = $('#password2').val();
   
     });
     $('#password2').blur(function(){
   
      if(e != d)
        {
           $('#pass2').text("密码长度不一致！");
   
           $('#pass2').css({
   
               color:'red'
   
           });
        }
        else{
  
            $('#pass2').text("请再次填写密码！");

            $('#pass2').css({
   
                color:'#aaa'
    
            });
    
         }
     });
     $('#phone1').on('input propertychange',function(){
    　　
  
      f = $('#phone1').val();
   
     });
     $('#phone1').blur(function(){
   
         
       if(f.length != 11)
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

    }
      });
      $('#code1').on('input propertychange',function(){
    　　
        $('#code-1').css({

            color:'red'

        });
       });
       $('#code1').blur(function(){

        $('#code-1').css({

            color:'#aaa'
    
       });
    });
    $('#messager1').on('input propertychange',function(){
    　　
  
        h = $('#messager1').val();
     
       });
       $('#messager1').blur(function(){
     
        if(h.length != 6)
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
      
           }
       });
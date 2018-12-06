var aa,bb;

$('#email-001').on('input propertychange',function(){

  aa = $('#email-001').val();

});
$('#password-001').on('input propertychange',function(){

    bb  = $('#password-001').val();
  
  });

  var hoster1 = Window.localStorage.getItem("hoster");

  var passsword02 = Window.localStorage.getItem("password01");

$('#loading').click(function(){

   if(aa == hoster1&& bb==password02){

    alert("登陆成功！");

   }else{

    alert("登陆失败！请检查您的账户和密码");

   }

     });
    
     window.localStorage.setItem("hoster1","c");

     window.localStorage.setItem("password02","d");
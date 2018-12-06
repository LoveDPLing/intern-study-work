var aa,bb;

$('#email-001').on('input propertychange',function(){

  aa = $('#email-001').val();

});
$('#password-001').on('input propertychange',function(){

    bb  = $('#password-001').val();
  
  });

  var hoster1 = window.localStorage.getItem("hoster");

  var password02 = window.localStorage.getItem("password01");

$('#loading').click(function(){

   if(aa == hoster1 && bb == password02){

    $(location).prop('href', 'chengguo.html');

   }else{

    alert("登陆失败！请检查您的账户和密码");

   }

     });
    

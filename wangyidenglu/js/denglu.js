var account1,password;

$('#email-001').on('input propertychange',function(){

  account1 = $('#email-001').val();

});
$('#password-001').on('input propertychange',function(){
    password  = $('#password-001').val(); 
  });
// 从缓存区获取账号和密码
  var hoster1 = window.localStorage.getItem("hoster");
  var password02 = window.localStorage.getItem("password01");
$('#loading').click(function(){
  // 判断账号密码是否错误
   if(account1 == hoster1 && password == password02){
    $(location).prop('href', 'chengguo.html');
   }else{
    alert("登陆失败！请检查您的账户和密码");
   }
     });
    

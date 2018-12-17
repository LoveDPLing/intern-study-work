$(function(){
    var bac=["rgb(234, 233, 233)","rgb(241, 242, 246)","rgb(254, 238, 228)"];
    var index=0;   
    var pos=$('.slide-inner li');
$('.slide-right').click(right);
function right(){
      index++;
      if(index == pos.length){
          index=0;
      }
      $('.main-inner').css("background-color",bac[index]);
      pos.eq(index).show().siblings().hide();
  }
$('.slide-left').click(left);
  function left(){
       index--; 
        if(index < 0){
            index=pos.length-1;
        }
        $('.main-inner').css("background-color",bac[index]);
        pos.eq(index).show().siblings().hide();
    }
});
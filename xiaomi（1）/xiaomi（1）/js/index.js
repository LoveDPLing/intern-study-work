$(function(){
    var index=0;   
    var pos=$('.slide li');
$('.slide-right').click(right);
function right(){
      index++;
      if(index == pos.length){
          index=0;
      }
      pos.eq(index).fadeIn().siblings().fadeOut();
      $('.focuses li').eq(index).addClass('current').siblings().removeClass('current');
}
$('.slide-left').click(left);
  function left(){
        index--;
        if(index < 0){
            index=pos.length-1;
        }
        pos.eq(index).fadeIn().siblings().fadeOut();
        $('.focuses li').eq(index).addClass('current').siblings().removeClass('current');
    }
$('.focuses li').click(function(){
      var index=$(this).index();
      pos.eq(index).fadeIn().siblings().fadeOut();
      $(this).addClass('current').siblings().removeClass('current');
    });
});
$(function(){
    var index=0;   
    var pos=$('.sg4 ul');
$('#btn-right').click(right);
function right(){     
      index++;
      if(index == pos.length){
          index=0;
      }
      pos.eq(index).fadeIn().siblings().fadeOut();
  }
$('#btn-left').click(left);
  function left(){
          index--;   
        if(index < 0){
            index=pos.length-1;
        }
        pos.eq(index).fadeIn().siblings().fadeOut();
    }
});
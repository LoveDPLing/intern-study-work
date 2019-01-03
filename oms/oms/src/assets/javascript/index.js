$(document).ready(function () {
    $(".list_dt").on("click",function () {
        $('.list_li').removeClass("selected");
        $('.list_dd').stop();
        // $('#spanText').remove();
        $(this).siblings("dt").removeAttr("id");
        if($(this).attr("id")=="open"){
            $(this).removeAttr("id").siblings("dd").slideUp(300);
            // $('#spanText2').remove();
        }else{
            $(this).attr("id","open").next().slideDown(300).siblings("dd").slideUp(300);
            // var pText = $(this).children('p').text();
            // var txt2=$("<span id='spanText'></span>").text(pText);
            // $('#backstage').after(txt2);
        }
    });
    $(".list_li").on("click",function () {
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected");
        // var pText = $(this).text();
        // var txt3=$("<span id='spanText2'></span>").text(pText);
        // $('#spanText').after(txt3);
    });
    var i=0;
    $('.shrink').click(function(){
        // $('.left').toggle({},$('.test').toggle()); 
        $('.left').toggle('normal'); 
        if (i==0){ 
        $(".right").animate({marginLeft:"0px"});
        i=1;
    }
        else{   
        $(".right").animate({marginLeft:"256px"});
        i=0;
        }
    });
});
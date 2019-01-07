jQuery(document).ready(function () {
    $(".list_dt").on("click", function () {
        // $('.list_li').removeClass("selected");
        $('.list_dd').stop();
        $(this).siblings("dt").removeAttr("id");
        if ($(this).attr("id") == "open") {
            $(this).removeAttr("id").siblings("dd").slideUp(300);
        } else {
            $(this).attr("id", "open").next().slideDown(300).siblings("dd").slideUp(300);
        }
    });
    // $(".list_li").on("click",function () {
    //     $(this).addClass("selected");
    //     $(this).siblings().removeClass("selected");
    // });
    var i=0;     //收缩
    $('.shrink').click(function(){
        // $('.left').toggle({},$('.test').toggle()); 
        $('.left').toggle('normal'); 
        if (i==0){ 
            $(".right").animate({marginLeft:"0px"});
            $(this).find('i').addClass("fa-arrow-right");
            i=1;
        }
        else{
            $(this).find('i').removeClass("fa-arrow-right");   
            $(".right").animate({marginLeft:"256px"});
            i=0;
        }
    });
});
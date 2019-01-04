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
});
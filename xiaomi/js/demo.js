// 轮播图
$(function () {
    var index = 0;//用index记录下标,默认为0
    var lis = $('.slider li');
    //1.右边箭头点击事件
    $('.arrow-right').click(right);
    //右箭头点击事件处理函数
    function right() {
        index++;
        //如果当前是最后一张,此时index=lis.length-1,index++后index=lis.length
        // 此时应让index=0
        if (index == lis.length) {
            index = 0;
        }
        //显示对应下标的图片,让其他兄弟隐藏
        lis.eq(index).fadeIn().siblings().fadeOut();
        //给对应下标的小圆点按钮添加current类名,其他兄弟移除current类名
        $('.focus li').eq(index).addClass('current').siblings().removeClass('current');
    }
    //2.左边箭头点击事件
    $('.arrow-left').click(function () {
        index--;
        //如果当前是第一张(index=0),index--后,index<0,此时应显示最后一张,让index=lis.length-1
        if (index < 0) {
            index = lis.length - 1;
        }
        //显示对应下标的图片,让其他兄弟隐藏
        lis.eq(index).fadeIn().siblings().fadeOut();
        //给对应下标的小圆点按钮添加current类名,其他兄弟移除current类名
        $('.focuses li').eq(index).addClass('current').siblings().removeClass('current');
    })

    //3.底部圆点按钮鼠标点击事件
    //btn的事件处理函数

    $('.focuses li').click(function(){
            var index = $(this).index();
            lis.eq(index).fadeIn().siblings().fadeOut();
            $(this).addClass('current').siblings().removeClass('current');
    });

    //下拉菜单
    function fn(a,b ){
        var  lef= document.getElementById(a);
        var  rig= document.getElementById(b);
        // var  bar= document.getElementsByClassName("bar")[0];

        lef.onmouseover = function(){
            rig.style.display = "block";
        };
        lef.onmouseout = function(){
            rig.style.display = "none";
        };
        rig.onmouseover = function(){
            rig.style.display = "block";
        };
        rig.onmouseout = function(){
            rig.style.display = "none";
        };

    }
    fn("xiaomi1","xiaomi" );
    fn("xiaomi2","xiaomi" );
    fn("xiaomi3","xiaomi" );
    fn("xiaomi4","xiaomi" );
    fn("xiaomi5","xiaomi" );
    fn("xiaomi6","xiaomi" );
    fn("xiaomi7","xiaomi" );
    fn("hongmi1","hongmi");
    fn("zhineng1","zhinneg");
    fn("dianshi1","dianshi");
    fn("l1","dv1");
    fn("l2","dv2");
    fn("l3","dv3");
    fn("l4","dv4");
    fn("l5","dv5");
    fn("l6","dv1");
    fn("l7","dv2");
    fn("l8","dv3");
    fn("l9","dv4");
    fn("l0","dv5");
    fn("right-barcode","right-code");
});
//下拉菜单
function fn(a,b ){
    var  lef= document.getElementById(a);
    var  rig= document.getElementById(b);
    // var  bar= document.getElementsByClassName("bar")[0];

    lef.onmouseover = function(){
        rig.style.display = "block";
    };
    lef.onmouseout = function(){
        rig.style.display = "none";
    };
    rig.onmouseover = function(){
        rig.style.display = "block";
    };
    rig.onmouseout = function(){
        rig.style.display = "none";
    };

}
fn("xiaomi1","xiaomi" );
fn("xiaomi2","xiaomi" );
fn("xiaomi3","xiaomi" );
fn("xiaomi4","xiaomi" );
fn("xiaomi5","xiaomi" );
fn("xiaomi6","xiaomi" );
fn("xiaomi7","xiaomi" );
fn("hongmi1","hongmi");
fn("zhineng1","zhinneg");
fn("dianshi1","dianshi");
fn("l1","dv1");
fn("l2","dv2");
fn("l3","dv3");
fn("l4","dv4");
fn("l5","dv5");
fn("l6","dv1");
fn("l7","dv2");
fn("l8","dv3");
fn("l9","dv4");
fn("l0","dv5");
fn("right-barcode","right-code");


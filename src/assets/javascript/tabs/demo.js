$(function () {
    //计算内容区域高度
    var calcHeight = function () {
        // // 浏览器的高度
        var browserHeight = $(window).innerHeight();
        // var topHeight = $('#mainFrameHeadBar').outerHeight(true);
        // var tabMarginTop = parseInt($('#mainFrameTabs').css('margin-top'));//获取间距
        // var heardHeight = parseInt($('div.tab-content').css('margin-top'));
        // var tabHeadHeight = $('ul.nav-tabs',$('#mainFrameTabs')).outerHeight(true) + tabMarginTop;
        // var contentMarginTop = parseInt($('div.tab-content',$('#mainFrameTabs')).css('margin-top'));//获取内容区间距
        // var contentHeight = browserHeight - topHeight - tabHeadHeight - contentMarginTop;
        var contentHeight = browserHeight - 64;
        $('div.tab-content', $('#mainFrameTabs')).height(contentHeight);
    };
    //菜单点击
    $('a', $('.list_dd_ul')).on('click', function (e) {
        e.stopPropagation();
        var li = $(this).closest('li');
        var menuId = $(li).attr('mid');
        var url = $(li).attr('funurl');
        var title = $(this).text();
        $('#mainFrameTabs').bTabsAdd(menuId, title, url);
        //计算Tab可用区域高度
        calcHeight();
    });
    //初始化
    $('#mainFrameTabs').bTabs();
});
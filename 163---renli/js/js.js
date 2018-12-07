$(function () {
    var index = 0;
    var pos = $('.slide-inner li');
    $('.slide-right').click(right);

    function right() {
        index++;
        if (index == pos.length) {
            index = 0;
        }
        pos.eq(index).fadeIn().siblings().fadeOut();
    }

    $('.slide-left').click(left);

    function left() {
        index--;
        if (index < 0) {
            index = pos.length - 1;
        }
        pos.eq(index).fadeIn().siblings().fadeOut();
    }
});
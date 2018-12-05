// 圆点导航
var index = 0;
var dots = document.getElementsByTagName("span");


window.addEventListener('load', init, false);


function init() {
    var wrap = document.querySelector(".container-top-02-01");
    var next = document.querySelector(".arrow-right");
    var prev = document.querySelector(".arrow-left");
    // 当鼠标点击上下箭头
    next.onclick = function () {
        nextPic(wrap);
    }
    prev.onclick = function () {
        prevPic(wrap);
    }

    //最开始和最后的照片修整
    for (var i = 0, len = dots.length; i < len; i++) {
        (function (i) {
            var wrap = document.querySelector(".container-top-02-01");
            dots[i].onclick = function () {
                var dis = index - i;
    //             if (index == 3 && parseInt(wrap.style.left) !== -3976) {
    //                 dis = dis - 4;
    //             }
    // //和使用prev和next相同，在最开始的照片5和最终的照片1在使用时会出现问题，导致符号和位数的出错，做相应地处理即可
    //             if (index == 0 && parseInt(wrap.style.left) !== -994) {
    //                 dis = 4 + dis;
    //             }
                wrap.style.left = (parseInt(wrap.style.left) + dis * 994) + "px";
                index = i;
                showCurrentDot(wrap);

            }
        })(i);
    }
}

// 下一页
function nextPic(wrap) {
    index++;
    if (index > 3) {
        index = 0;
    }
    showCurrentDot(wrap);
    var newLeft;
    if (wrap.style.left === "-4970px") {
        newLeft = 0;
    } else {
        newLeft = parseInt(wrap.style.left) - 994;
    }
    wrap.style.left = newLeft + "px";
}
// 上一页
function prevPic(wrap) {
    index--;
    if (index < 0) {
        index = 3;
    }
    showCurrentDot(wrap);
    var newLeft;
    if (wrap.style.left === "0px") {
        newLeft = -3976;
    } else {
        newLeft = parseInt(wrap.style.left) + 994;
    }
    wrap.style.left = newLeft + "px";
}

// 显示当前是第几张图片
function showCurrentDot(wrap) {
    for (var i = 0, len = dots.length; i < len; i++) {
        dots[i].className = "";
    }
    dots[index].className = "on";
}

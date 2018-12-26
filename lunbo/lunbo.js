var carousel = document.querySelector('.carousel');
    var rigthArrow = document.querySelector('.right');
    var leftArrow = document.querySelector('.left');
    var items = document.querySelectorAll('.item');
    var indicators = document.querySelectorAll('.carouser-indicators li');

    // 声明一个全局控制的编号，具体显示哪一张图片由此编号决定
    var i = 0;
    // 获取轮播图片的张数
    var length = items.length;

    // 将图片和点的切换，封装成函数
    function change() {
        // 全局编号控制显示哪一张图片和哪一个点
        for (var j = 0; j < length; j++) {
                // 图片全部隐藏 
                items[j].classList.remove('active');
                indicators[j].classList.remove('active');
            }
            items[i].classList.add('active');
            indicators[i].classList.add('active');
    }

    // 切换下一张
    function next () {
        i++; //单击一次加1，控制图片依次显示
        // 在 i 的值每次使用之前，都要进行范围判断
        i = i > length-1 ? 0 : i;

        change();
    }

    // 切换上一张
    function prev(){
        i--;
        i = i < 0 ? length - 1 : i;
        change();
    }

    
    rigthArrow.onclick = next;

    leftArrow.onclick = prev;
       
 

    // 循环遍历每个点，添加点击事件 点击哪个点就显示哪张图片
    for (var k = 0; k < length; k++) {
        indicators[k].index = k; // 扩展一个属性
        indicators[k].onclick = function (e) {
            i = e.target.index;
            change();
        }
    }

    // 自动播放
     var timer = setInterval(next,2000);

    // 鼠标在轮播图商法，停止计时器
    carousel.onmouseover = function(){
        clearInterval(timer);
    }

    carousel.onmouseleave = function(){
        timer = setInterval(next,2000);
    }  
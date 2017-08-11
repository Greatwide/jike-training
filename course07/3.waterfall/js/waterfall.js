//瀑布流

$(window).on("load", function() {
    //瀑布流加载图片
    waterfall('wrapper', 'pic-wrap');
    var dataInt = {
        'data': [{ 'src': '21.jpg' }, { 'src': '22.jpg' }, { 'src': '23.jpg' }, { 'src': '24.jpg' }, { 'src': '25.jpg' },
            { 'src': '26.jpg' }, { 'src': '27.jpg' }, { 'src': '28.jpg' }, { 'src': '29.jpg' }, { 'src': '30.jpg' }
        ]
    };

    //滚动条事件处理
    window.onscroll = function() {
        if (isslide()) {
            $.each(dataInt.data, function(index, value) {
                var $oPicBox = $('<div>').addClass('pic-wrap').appendTo($("#wrapper"));
                var $oBox = $('<div>').addClass('pic-box').appendTo($oPicBox);
                $('<img>').attr('src', './img/' + $(value).attr('src')).appendTo($oBox);
            });
            waterfall();
        };
    }
    window.onresize = function(){
        waterfall();
    }
});
/*瀑布流*/
function waterfall(parent, PicBox) {
    var $aPicBox = $("#wrapper>div");
    var iPicBoxW = $aPicBox.eq(0).outerWidth(); // 一个块框的宽

    var num = Math.floor($(window).width() / iPicBoxW); //每行中能容纳的PicBox个数【窗口宽度除以一个块框宽度】
    if(num==0){ //这个时候是窗口缩小到比一个PicBox还小了。否则所有图片堆叠在一起
        num=1;
    }
    //设置父级居中
    $("#wrapper").css({
        'width': iPicBoxW * num+'px',
        'margin': '0 auto'
    });

    var PicBoxHArr = []; //用于存储每列中的所有块框相加的高度。

    $aPicBox.each(function(index, value) {
        value.style.cssText='';
        var PicBoxH = $aPicBox.eq(index).height();
        if (index < num) {
            PicBoxHArr[index] = PicBoxH; //第一行中的num个块框PicBox 先添加进数组PicBoxHArr
        } else {
            var minH = Math.min.apply(null, PicBoxHArr); //数组PicBoxHArr中的最小值minH
            var minHIndex = $.inArray(minH, PicBoxHArr);
            $(value).css({
                'position': 'absolute',
                'top': minH + 15,
                'left': $aPicBox.eq(minHIndex).position().left
            });
            //数组 最小高元素的高 + 添加的块框高
            PicBoxHArr[minHIndex] += $aPicBox.eq(index).height() + 15;
        }
    });
}

//判断滚动条是否到达需要加载新图片的位置
function isslide() {
    var $aPicBox = $("#wrapper>div");
    var lastPicBoxH = $aPicBox.last().get(0).offsetTop + Math.floor($aPicBox.last().height() / 2);
    var scrollTop = $(window).scrollTop()
    var documentH = $(document).width(); //页面高度
    return (lastPicBoxH < scrollTop + documentH) ? true : false;
}

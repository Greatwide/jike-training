/**
 * 新闻页面处理
 */
var newsstart = 0;
var currentType = "精选";
var lastSelected= $('ul li a')[0];
$(document).ready(function() {
    $(lastSelected).css({"text-decoration":"underline","color":"#000000"});
    refreshnews('精选', true); //页面加载时默认为精选页面

    $('nav a').click(function(e) { //根据选中的页面类型加载
        e.preventDefault();
        var type = $(this).text();
        $(lastSelected).css({"text-decoration":"none","color":"#ffffff"});
        $(this).css({"text-decoration":"underline","color":"#000000"});
        lastSelected=this;
        currentType = type;
        newsstart = 0;
        $("body").scrollTop(0);
        refreshnews(type, true);
    })

    $('.to-top').click(function() { //返回顶部
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 0) {
                $("body").scrollTop(0);
            }

        })
        //当鼠标滚动到屏幕底部时，再次查找数据库，看看是否还有可加载的新闻
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
            $('.to-top').show();
        } else {
            $('.to-top').hide();
        }
        var scrollHeight = $(document).height();
        var windowHeight = $(this).height();
        if (scrollTop + windowHeight == scrollHeight) {

            refreshnews(currentType, false);

        }

    });
});

//刷新页面
function refreshnews(type, isEmpty) {
    var $lists = $('article ul');
    var numsOfnews = 0;
    if (isEmpty)
        $lists.empty();

    $.ajax({
        url: '/news',
        type: 'get',
        datatype: 'json',
        data: { newstype: type, newsloaded: newsstart },
        success: function(data) {
            if (data.length == 10) {
                $('.disp-wait').fadeIn(1500);
                $('.disp-msg').fadeOut(1500);
            }
            data.forEach(function(item, index, array) {
                //var $list = $('<li></li>').addClass('news-list').prependTo($lists);
                var $list = $('<li></li>').addClass('news-list').appendTo($lists);
                var $newsImg = $('<div></div>').addClass('news-img').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('news-content').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').addClass('news-time').html(item.newstime).appendTo($p);
                var $newssrc = $('<span></span>').addClass('news-src').html(item.newssrc).appendTo($p);
                newsstart++;
                numsOfnews++;
            })

        }

    });
    if (numsOfnews < 10) {
        $('.disp-msg').fadeIn(1500);
        $('.disp-wait').fadeOut(1500);
    }
}

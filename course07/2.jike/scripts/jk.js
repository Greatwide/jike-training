/**
 * Created by Administrator on 2017/4/24.
 */


$(document).ready(function() {
    $(window).scroll(function() {
            if ($(window).scrollTop() > 50) {
                $("#id-go-top").css("display", "block");
            } else {
                $("#id-go-top").css("display", "none");
            }
        })
        //回到顶部
    $("#id-gototop").click(function() {
        $("body").scrollTop(0);
    })

    //搜索框
    $("#id-search").click(function() {
        //$("#id-searchbox").addClass("scale") ;
        $("#id-searchbox").fadeTo("slow", 1);

        /*$("#id-searchbox").animate({
            opacity:'1',
            display:"block",
            transform:'scale(1,1)'
        },500);*/
    });
    $("#id-close-icon").click(function() {
        $("#id-searchbox").fadeOut();
    });
    //移动开发子菜单
    $("#id-mobile").mouseenter(function() {
        $("#id-mobile-show").css("display", "block");
    });
    $("#id-mobile").mouseleave(function() {
        $("#id-mobile-show").css("display", "none");
    });

    //前端开发
    $("#id-front").mouseenter(function() {
        $("#id-front-show").css("display", "block");
    });
    $("#id-front").mouseleave(function() {
        $("#id-front-show").css("display", "none");
    });

    //后端开发
    $("#id-server").mouseenter(function() {
        $("#id-server-show").css("display", "block");
    });
    $("#id-server").mouseleave(function() {
        $("#id-server-show").css("display", "none");
    });

    //TAB页切换
    //最新
    $("#id-menu-new").mouseenter(function() {
        $("#id-sub-menu-new").css("visibility", "visible");
        $("#id-sub-menu-new").css("opacity", "1");
    });
    $("#id-sub-menu-new").mouseleave(function() {
        $("#id-sub-menu-new").css("visibility", "hidden");
        $("#id-sub-menu-new").css("opacity", "0");
    });
    //课程类型
    $("#id-menu-classtype").mouseenter(function() {
        $("#id-sub-menu-classtype").css("visibility", "visible");
        $("#id-sub-menu-classtype").css("opacity", "1");
    });
    $("#id-sub-menu-classtype").mouseleave(function() {
        $("#id-sub-menu-classtype").css("visibility", "hidden");
        $("#id-sub-menu-classtype").css("opacity", "0");
    });
    //内容类型
    $("#id-menu-type").mouseenter(function() {
        $("#id-sub-menu-type").css("visibility", "visible");
        $("#id-sub-menu-type").css("opacity", "1");
    });
    $("#id-sub-menu-type").mouseleave(function() {
        $("#id-sub-menu-type").css("visibility", "hidden");
        $("#id-sub-menu-type").css("opacity", "0");
    });
    //难度等级
    $("#id-menu-diff").mouseenter(function() {
        $("#id-sub-menu-diff").css("visibility", "visible");
        $("#id-sub-menu-diff").css("opacity", "1");
    });
    $("#id-sub-menu-diff").mouseleave(function() {
        $("#id-sub-menu-diff").css("visibility", "hidden");
        $("#id-sub-menu-diff").css("opacity", "0");
    });
    //显示模式选择

    $("#id-show-type1").click(function() {
        $("#id-course-list").removeClass("course-list-big");
        $("#id-course-list").addClass("course-list");
        $("#id-show-type1").addClass("curr");
        $("#id-show-type2").removeClass("curr");
    })
    $("#id-show-type2").click(function() {
        $("#id-course-list").removeClass("course-list");
        $("#id-course-list").addClass("course-list-big");
        $("#id-show-type2").addClass("curr");
        $("#id-show-type1").removeClass("curr");
        obj = $(".lesson-infor>p");
        for (i = 0; i < obj.length; i++) {
            $(obj[i]).css({ "opacity": "1", "display": "block", "height": "32px" });
        }

    })

    //课程
    for (r = 1; r <= 4; r++) {
        for (c = 1; c <= 3; c++) {
            courseno = "#r" + r + "c" + c;
            $(courseno).mouseenter(function(event) {

                obj = $(this).find(".lessonplay");
                obj.css("opacity", "1");

                //块显示模式下还要把一些隐藏的信息显示
                if ($("#id-show-type1").hasClass("curr")) {
                    obj = $(this).find(".lesson-infor")
                    obj.css("height", "175px");

                    obj = $(this).find(".lesson-infor>p")
                    obj.css({ "opacity": "1", "display": "block", "height": "52px" });
                    obj = $(this).find(".level");
                    obj.css("display", "block");
                    obj = $(this).find(".learn-num");
                    obj.css("display", "block");
                }
            })
            $(courseno).mouseleave(function(event) {
                obj = $(this).find(".lessonplay");
                obj.css("opacity", "0");
                if ($("#id-show-type1").hasClass("curr")) {
                    obj = $(this).find(".lesson-infor")
                    obj.css("height", "88px");
                    obj = $(this).find(".lesson-infor>p")
                    obj.css({ "opacity": "0", "display": "none", "height": "0px" });
                    obj = $(this).find(".level");
                    obj.css("display", "none");
                    obj = $(this).find(".learn-num");
                    obj.css("display", "none");
                }
            })
        }
    }

    //翻页处理
    browsePage();
});

//翻页处理
var maxPage = 1;

function browsePage() {
    //总共有几页
    maxPage = $(".page-number").length;
    curPage = $(".pgCurrent").text();
    if (curPage == 1) { //  当前页已经是首页
        $("#id-first-page").addClass("pgEmpty");
        $("#id-page-pre").addClass("pgEmpty");
    } else if (curPage == maxPage) { //  当前页已经是最后页
        $("#id-last-page").addClass("pgEmpty");
        $("#id-page-next").addClass("pgEmpty");
    }

    //下一页
    $("#id-page-next").click(function() {

        nextPage();
    });

    // //上一页
    $("#id-page-pre").click(function() {

        prePage();
    });
    //首页
    $("#id-first-page").click(function() {

        firstPage();
    });
    //末页
    $("#id-last-page").click(function() {

        lastPage();
    });
    //  确定
    $("#id-go").click(function() {

        gotoPage();
    });

}

function nextPage() {
    var obj = $(".page-number");
    maxPage = obj.length;
    curPage = $(".pgCurrent").text();
    if (curPage == maxPage) {
        return;
    }
    $(".pgCurrent").removeClass("pgCurrent");
    $(obj[curPage]).addClass("pgCurrent"); //因为页号是从1开始，而obj元素是从那个0开始，所以移动1页搞好于页号相同
    curPage++;
    if (curPage == maxPage) { //  移到最后页
        $("#id-last-page").addClass("pgEmpty");
        $("#id-page-next").addClass("pgEmpty");
    }
    //转到相应页面的内容，需要改变页面图片、文字等内容。方法基本一样，这里只实现改变图片
    obj = $(".lessonimg");
    for (r = 1; r <= 4; r++) {
        for (c = 1; c <= 3; c++) {
            imgname = "img/course/p" + curPage + "r" + r + "c" + c + ".jpg";
            index = (r - 1) * 3 + c - 1;
            $(obj[index]).attr("src", imgname);
        }
    }
    $("#gotoval").val(curPage);
    if (curPage != 1) {
        $("#id-first-page").removeClass("pgEmpty");
        $("#id-page-pre").removeClass("pgEmpty");
    }
    if (curPage != maxPage) {
        $("#id-last-page").removeClass("pgEmpty");
        $("#id-page-next").removeClass("pgEmpty");
    }
}


function prePage() {
    var obj = $(".page-number");
    maxPage = obj.length;
    curPage = $(".pgCurrent").text();
    if (curPage == 1) { //已经是第一页
        return;
    }

    $(".pgCurrent").removeClass("pgCurrent");
    curPage--; // 当前页从0开始，要减掉1
    $("#gotoval").val(curPage);
    curPage--; //前移一页，在减掉1
    $(obj[curPage]).addClass("pgCurrent");

    if (curPage == 0) { //  移到第一页
        $("#id-first-page").addClass("pgEmpty");
        $("#id-page-pre").addClass("pgEmpty");
    }

    //转到相应页面的内容，需要改变页面图片、文字等内容。方法基本一样，这里只实现改变图片
    //图片名的页码是从1开始，所以这里的页加1
    curPage++;
    obj = $(".lessonimg");
    for (r = 1; r <= 4; r++) {
        for (c = 1; c <= 3; c++) {
            imgname = "img/course/p" + curPage + "r" + r + "c" + c + ".jpg";
            index = (r - 1) * 3 + c - 1;
            $(obj[index]).attr("src", imgname);
        }
    }
    $("#gotoval").val(curPage);
    if (curPage != 1) {
        $("#id-first-page").removeClass("pgEmpty");
        $("#id-page-pre").removeClass("pgEmpty");
    }
    if (curPage != maxPage) {
        $("#id-last-page").removeClass("pgEmpty");
        $("#id-page-next").removeClass("pgEmpty");
    }
}

function firstPage() {
    var obj = $(".page-number");

    $(".pgCurrent").removeClass("pgCurrent");
    $(obj[0]).addClass("pgCurrent"); //因为页号是从1开始，而obj元素是从那个0开始，所以移动1页搞好于页号相同

    $("#id-first-page").addClass("pgEmpty");
    $("#id-page-pre").addClass("pgEmpty");
    $("#gotoval").val("1");
    //转到相应页面的内容，需要改变页面图片、文字等内容。方法基本一样，这里只实现改变图片
    obj = $(".lessonimg");
    for (r = 1; r <= 4; r++) {
        for (c = 1; c <= 3; c++) {
            imgname = "img/course/p1" + "r" + r + "c" + c + ".jpg";
            index = (r - 1) * 3 + c - 1;
            $(obj[index]).attr("src", imgname);
        }
    }

    $("#id-last-page").removeClass("pgEmpty");
    $("#id-page-next").removeClass("pgEmpty");



}


function lastPage() {
    var obj = $(".page-number");
    maxPage = obj.length;
    $(".pgCurrent").removeClass("pgCurrent");
    $(obj[maxPage - 1]).addClass("pgCurrent"); //因为页号是从1开始，而obj元素是从那个0开始，所以移动1页搞好于页号相同

    $("#id-last-page").addClass("pgEmpty");
    $("#id-page-next").addClass("pgEmpty");

    //转到相应页面的内容，需要改变页面图片、文字等内容。方法基本一样，这里只实现改变图片
    obj = $(".lessonimg");
    for (r = 1; r <= 4; r++) {
        for (c = 1; c <= 3; c++) {
            imgname = "img/course/p" + maxPage + "r" + r + "c" + c + ".jpg";
            index = (r - 1) * 3 + c - 1;
            $(obj[index]).attr("src", imgname);
        }
    }
    $("#gotoval").val(maxPage);
    $("#id-first-page").removeClass("pgEmpty");
    $("#id-page-pre").removeClass("pgEmpty");

}

function gotoPage() {
    var obj = $(".page-number");
    maxPage = obj.length;
    page = $("#gotoval").val();
    if (page >= 3) {
        page = 3;
    } else if (page <= 1) {
        page = 1;
    }

    $("#id-first-page").removeClass("pgEmpty");
    $("#id-page-pre").removeClass("pgEmpty");
    $("#id-last-page").removeClass("pgEmpty");
    $("#id-page-next").removeClass("pgEmpty");

    if (page == 1) {
        $("#id-first-page").addClass("pgEmpty");
        $("#id-page-pre").addClass("pgEmpty");
    } else if (page == maxPage) {
        $("#id-last-page").addClass("pgEmpty");
        $("#id-page-next").addClass("pgEmpty");
    }

    $(".pgCurrent").removeClass("pgCurrent");
    $(obj[page - 1]).addClass("pgCurrent"); //因为页号是从1开始，而obj元素是从那个0开始，所以移动1页搞好于页号相同


    //转到相应页面的内容，需要改变页面图片、文字等内容。方法基本一样，这里只实现改变图片
    obj = $(".lessonimg");
    for (r = 1; r <= 4; r++) {
        for (c = 1; c <= 3; c++) {
            imgname = "img/course/p" + page + "r" + r + "c" + c + ".jpg";
            index = (r - 1) * 3 + c - 1;
            $(obj[index]).attr("src", imgname);
        }
    }
}

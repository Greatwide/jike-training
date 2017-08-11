/**
 * Created by Administrator on 2017/4/11.
 */

/*换肤事件*/
var lis = document.querySelectorAll(".skin-photo-body ul li .skin-img-item.nav-1000");
var curPage = 0;
var isSkinSet = false;
var skinimg = { "page": "0", "pos": "0", "isSkinset": false, "curpage": "1" };
//var isBgImgCkeck=false;

$(document).ready(function() {
    loadskin(); //加载上次的皮肤
    //movePercentBox();
    thelastobj = findObjbyclass(".choose-li");
    if (thelastobj != null) {
        isSkinSet = true;
        /*isBgImgCkeck=true;*/
    }
    for (var i = 0; i < lis.length; i++) {
        /*鼠标进入图片,预览*/
        $(lis[i]).mouseenter(function() {
            SetPreImage(this);
        });
        /*鼠标离开图片*/
        $(lis[i]).mouseleave(function() {
            LeavePreImage(this);
        });
        $(lis[i]).click(function() {
            setImage(this);
        });
    }

    //“回到顶部”按钮
    $(".to-top").click(function() {
        $("body").scrollTop(0);
    })

    //收起
    $(".skin-up").click(function() {
        $("#id-skin-layer").css("display", "none");
        $("#id-skin-layer-shadow").hide();
        if (isSkinSet) {

            $("#lg_img").attr("src", "img/skin/logo_white.png");
            $("#s_top_wrap").css("border-bottom", "0px");
            $(".mancard-main").css("background-color", "#ffffff");
            $(".mancard-main").css("opacity", "0.5");
            $(".ctner-contents").css("border", "1px solid transparent");
            $(".left-menus a").css("color", "#fff");
            $(".left-menus span").css("color", "#fff");

            $(".right-menus a").css("color", "#fff");
            $(".right-menus span").css("color", "#fff");

            //搜索按钮背景、字体体色
            $(".btn").css("background-color", "#d4d4d4");
            $(".btn").css("color", "#000");
            $(".s_btn_wr").css("border", "1px solid #d4d4d4");
            $("#id-user-name-menu a").css("color", "#333");

            $("#id-set-menu a").css("color", "#333");
            $(".bar-inner-wrp a").css("color", "#333");
            isSkinSet |= true;
        }

    })
});

//设置有皮肤时的背景：logo，border、字体等
function setSkinBg() {
    $("#lg_img").attr("src", "img/skin/logo_white.png");
    $("#s_top_wrap").css("border-bottom", "0px");
    $(".mancard-main").css("background-color", "#ffffff");
    $(".mancard-main").css("opacity", "0.5");
    $(".ctner-contents").css("border", "1px solid transparent");
    $(".left-menus a").css("color", "#fff");
    $(".left-menus span").css("color", "#fff");

    $(".right-menus a").css("color", "#fff");
    $(".right-menus span").css("color", "#fff");

    //搜索按钮背景、字体体色
    $(".btn").css("background-color", "#d4d4d4");
    $(".btn").css("color", "#000");
    $(".s_btn_wr").css("border", "1px solid #d4d4d4");
    $("#id-user-name-menu a").css("color", "#333");

    $("#id-set-menu a").css("color", "#333");
    $(".bar-inner-wrp a").css("color", "#333");
    isSkinSet |= true;
}
//通过图片所在的页号和位置查找对象
function findObjbypos(pageNo, pos) {
    if (pageNo > 3 || pageNo < 0)
        return null;
    if (pos > 11 || pos < 0)
        return null;

    for (var i = 0; i < lis.length; i++) {

        if ($(lis[i]).is('.page-' + pageNo) && $(lis[i]).is('.pos-' + pos)) {
            return lis[i];
        }
    }
    return null;
}
//通过指定的类名找到对象
function findObjbyclass(cls) {
    for (var i = 0; i < lis.length; i++) {

        if ($(lis[i]).is(cls)) {
            return lis[i];
        }
    }
    return null;
}
/*加载上次皮肤*/
function loadskin() {
    /*
    showPage(0);
    hidePage(1);
    hidePage(2);
    hidePage(3);*/
    skinimg = JSON.parse(localStorage.getItem("skinimg"));
    if (skinimg == null) { //没有本地存储的换肤信息
        setSkinLs(0, 0, false);
        return;
    } else {
        if (skinimg.isSkinset == false) {
            resetSkin();
            return;
        }
    }

    //showPage(skinimg.page);

    bg = 'url(img/skin/bm0s0p' + skinimg.page + 'i' + skinimg.pos + '.jpg)';

    $("body").css("background", bg);
    setSkinBg();
    setCurrentPage(skinimg.curpage);
};

//保存本地存储，皮肤设置值
function setSkinLs(page, pos, isSkinset) {
    skinimg = JSON.parse(localStorage.getItem("skinimg"));
    if (skinimg == null) {
        var skinimgtemp = { "page": "0", "pos": "0", "isSkinset": false, "curpage": "1" };
        skinimgtemp.page = page;
        skinimgtemp.curpage = 1;
        skinimgtemp.isSkinset = false;
        skinimgtemp.pos = pos;
        localStorage.setItem("skinimg", JSON.stringify(skinimgtemp));
        skinimg = JSON.parse(localStorage.getItem("skinimg"));
        return;
    }
    skinimg.isSkinset = true;
    skinimg.page = page;
    skinimg.pos = pos;
    skinimg.isSkinset = isSkinset;
    localStorage.setItem("skinimg", JSON.stringify(skinimg));
}
//不使用皮肤
$(".skin-set").click(function() {
    resetSkin();
    isSkinSet = false;
    skinimg.isSkinset = false;
    setSkinLs(0, 0, false);

})

$("#id-skin-opacity-set").click(function(event) {
        //当前鼠标所在位置
        var cx = event.clientX;
        //透明度设置条最左边所在的相对位置（即透明度为0的位置）
        var zeroPos = $("#id-bg-alphaBar").offset().left;
        //百分比
        var opac = (cx - zeroPos) / 80;
        var percent = parseInt(opac * 100); //  宽度为80px

        //因为每一步为5%，所以做以下处理
        var theoffset = percent % 10;
        if (theoffset >= 5) {
            theoffset = 5;
        } else
            theoffset = 0;
        percent = parseInt(percent / 10) * 10;
        percent += theoffset;

        //小方块所在的位置
        var leftpos = parseInt(percent / 100 * 66); //小方块宽度为14，而透明度设置条宽度为80，所以小方块从0移动到100%只有66px

        opac = opac.toFixed(2);
        $(".mancard-main").css("opacity", opac);
        $("#id-bg-alphaBarMoveBtn").css("left", leftpos);
        $("#id-bg-alphaBarOpacity").text(percent + "%");
    })
    //设置回无皮肤状态
function resetSkin() {
    $("body").css("background", "");
    $("#id-skin-layer").css("display", "none");
    $("#id-skin-layer-shadow").hide();
    $("#lg_img").attr("src", "img/skin/bd_logo.png");
    $("#s_top_wrap").css("border-bottom", "1px solid #ebebeb");
    $(".mancard-main").css("background-color", "");
    $(".mancard-main").css("opacity", "1");

    $(".ctner-contents").css("border", "1px solid #e9e9e9");
    $(".left-menus a").css("color", "#333");
    $(".left-menus span").css("color", "#333");

    $(".right-menus a").css("color", "#333");
    $(".right-menus span").css("color", "#333");

    //搜索按钮背景、字体体色
    $(".btn").css("background-color", "#38f");
    $(".btn").css("color", "#fff");
    $(".s_btn_wr").css("border", "1px solid #38f");
    hideSkinOpa();
    thelastobj = findObjbyclass(".choose-li");
    if (thelastobj != null) {
        $(thelastobj).removeClass("choose-li");
        $(thelastobj).children("div.skin-img-item-choose").css("display", "none");
    }
    $(".preview-defined-view").css("display", "none");

}
//显示"不使用皮肤"和"透明度"菜单按钮
function showSkinOpa() {
    //$(".bg-hideOrShowAjax").css("visibility","visible" );
    $(".bg-hideOrShowAjax").show();
    $(".skin-set").show();
}
//隐藏"不使用皮肤"和"透明度"菜单按钮
function hideSkinOpa() {
    //$(".bg-hideOrShowAjax").css("visibility","hidden" );
    $(".bg-hideOrShowAjax").hide();
    $(".skin-set").hide();
}
//设置皮肤
function setImage(obj) {
    var pageNum = 0;
    var pos = 0;

    thelastobj = findObjbyclass(".choose-li");
    if (thelastobj != null) {
        $(thelastobj).removeClass("choose-li");
        $(thelastobj).children("div.skin-img-item-choose").css("display", "none");
    }
    //显示被选中的勾
    $(obj).children("div.skin-img-item-choose").css("display", "block");
    $(obj).addClass("choose-li");
    pageNum = getPageNum(obj);
    pos = getPPosNum(obj);
    bg = 'url(img/skin/bm0s0p' + pageNum + 'i' + pos + '.jpg)';
    //bg='url(img/skin/bm0s0p0i3.jpg)';
    $("body").css("background", bg);
    $(".mancard-main").css("background-color", "#ffffff");
    $(".mancard-main").css("opacity", "0.5");
    $(".ctner-contents").css("border", "1px solid transparent");

    isSkinSet = true; //选择了一张图片
    showSkinOpa();
    //本能地存储
    setSkinLs(pageNum, pos, true);
}

function getPageNum(obj) {
    var pagenum = 0;
    var pos = 0;
    for (i = 0; i <= 4; i++) {
        if ($(obj).is('.page-' + i)) {
            pagenum = i;
            break;
        }
    }
    return pagenum;
}

function getPPosNum(obj) {
    //图像位置
    var pos = 0;
    for (i = 0; i <= 11; i++) {
        if ($(obj).is('.pos-' + i)) {
            pos = i;
            break;
        }
    }
    return pos;
}

function SetPreImage(obj) {
    //第几页
    var pagenum = 0;
    var pos = 0;
    for (i = 0; i <= 4; i++) {
        if ($(obj).is('.page-' + i)) {
            pagenum = i;
            break;
        }
    }
    //图像位置
    for (i = 0; i <= 11; i++) {
        if ($(obj).is('.pos-' + i)) {
            pos = i;
            break;
        }
    }

    $(obj.childNodes[1]).css("opacity", "0.8");
    var imgname = "img/skin/m0s0" + "p" + pagenum + "i" + pos + ".jpg";
    $(".preview-defined-view").attr("src", imgname);
    $(".preview-defined-view").css("display", "block");
    $(obj).children("p.skin-img-item-writer").css("opacity", "1");


}

function LeavePreImage(obj) {
    //有已经选择的图片

    //第几页
    for (i = 0; i <= 4; i++) {
        if ($(obj).is('.page-' + i)) {
            pagenum = i;
            break;
        }
    }
    //图像位置
    for (i = 0; i <= 11; i++) {
        if ($(obj).is('.pos-' + i)) {
            pos = i;
            break;
        }
    }
    $(obj.childNodes[1]).css("opacity", "1");
    /*$(".preview-defined-view").attr("src","");*/
    $(".preview-defined-view").css("display", "none");
    $(obj).children("p.skin-img-item-writer").css("opacity", "0");

    if (isSkinSet) {
        theobj = findObjbyclass(".choose-li");
        if (theobj != null) {
            SetPreImage(theobj);
        }
    }

}

//点击“换肤”菜单，显示下拉换肤选择设置
$('#change-skin').click(function() {
    $(".skin-layer-shadow").css("display", "block");
    $(".skin-layer").css("display", "block");
    $('#id-skin-layer').removeClass('towTabNav-skin');
    $(".bg-hideOrShowAjax").css("visibility", "visible");

    //显示已保存的上次换肤所在图片位置i
    var obj = findObjbypos(skinimg.page, skinimg.pos);
    $(obj).children("div.skin-img-item-choose").css("display", "block");
    $(obj).addClass("choose-li");
    for (i = 0; i <= 3; i++) {
        hidePage(i);
    }
    showPage(skinimg.page);
    obj = $(".skin-page-number.skin-bg-icon");
    $(obj[pagenum = skinimg.page]).addClass("choose-page-btn");
    var imgname = "img/skin/m0s0" + "p" + skinimg.page + "i" + skinimg.pos + ".jpg";
    $(".preview-defined-view").attr("src", imgname);
    $(".preview-defined-view").css("display", "block");
});

//图片左翻页
$(".skin-page-dire.page-pre ").click(function() {
        curPage = $(".skin-page-number.skin-bg-icon.choose-page-btn").attr("pagenum"); //获取当前页页号
        if (curPage == '0') {
            curPage = 3;
            $(".skin-page-number.skin-bg-icon.choose-page-btn").removeClass("choose-page-btn");
            obj = $(".skin-page-number.skin-bg-icon");
            $(obj[pagenum = '3']).addClass("choose-page-btn");
            hidePage(0);
            showPage(curPage);
        } else {
            hidePage(curPage);
            obj = $(".skin-page-number.skin-bg-icon.choose-page-btn");
            obj.removeClass("choose-page-btn");
            obj = obj.prev();
            obj.addClass("choose-page-btn");
            curPage--;
            showPage(curPage);
        }
    })
    //图片右翻页
$(".skin-page-dire.page-next ").click(function() {
    curPage = $(".skin-page-number.skin-bg-icon.choose-page-btn").attr("pagenum"); //获取当前页页号
    if (curPage == '3') {
        curPage = 0;
        $(".skin-page-number.skin-bg-icon.choose-page-btn").removeClass("choose-page-btn");
        obj = $(".skin-page-number.skin-bg-icon");
        $(obj[pagenum = '0']).addClass("choose-page-btn");
        hidePage(3);
        showPage(curPage);
    } else {
        hidePage(curPage);
        obj = $(".skin-page-number.skin-bg-icon.choose-page-btn");
        obj.removeClass("choose-page-btn");
        obj = obj.next();
        obj.addClass("choose-page-btn");
        curPage++;
        showPage(curPage);
    }
})

/*显示指定页的皮肤图像*/
function showPage(pagenum) {
    showpageid = "#m0s0page" + pagenum;
    $(showpageid).show();
}

/*隐藏指定页的皮肤图像*/
function hidePage(pagenum) {
    showpageid = "#m0s0page" + pagenum;
    $(showpageid).hide();
}

function movePercentBox() {


    $("#id-bg-alphaBarMoveBtn").mousedown(function(e) //e鼠标事件
        {
            var zeroPos = $("#id-bg-alphaBar").offset().left;
            /*var offset = $(this).offset();//DIV在页面的位置
            var x = e.pageX - offset.left;//获得鼠标指针离DIV元素左边界的距离
            var y = e.pageY - offset.top;//获得鼠标指针离DIV元素上边界的距离*/
            var cx = event.clientX;

            //console.log("x="+x+" y="+y);
            // $(this).css("cursor","move");
            $(document).bind("mousemove", function(ev) //绑定鼠标的移动事件，因为光标在DIV元素外面也要有效果，所以要用doucment的事件，而不用DIV元素的事件
                {
                    $(this).css("cursor", "move");
                    $("#id-bg-alphaBarMoveBtn").stop();

                    // var _x = ev.pageX - x;//获得X轴方向移动的值
                    // var _y = ev.pageY - y;//获得Y轴方向移动的值
                    // console.log("mx="+_x+" my="+_y);
                    //$("#id-bg-alphaBarMoveBtn").animate({left:_x+"px"},10);
                    // $("#id-bg-alphaBarMoveBtn").css("left",_x);
                    var posMove = cx - zeroPos;
                    console.log("move left:" + posMove);
                    $("#id-bg-alphaBarMoveBtn").css("left", posMove + "px");
                    //$("#id-bg-alphaBarMoveBtn").animate({left:posMove+"px"},10);
                });

        });

    $(document).mouseup(function() {
        $(this).unbind("mousemove");
    })

}

//导航
/*$("#id-menu-1").click(function() {

    })*/
    //设置当前页面
function setCurrentPage(page) {
    var curId;
    for (i = 1; i <= 5; i++) {
        curId = "#id-menu-" + i;
        if ($(curId).hasClass("current")) {
            $(curId).removeClass("current");
            curId = "#id-s-content-" + i;
            $(curId).css("display", "none");
            break;
        }
    }
    curId = "#id-menu-" + page;
    $(curId).addClass("current");
    curId = "#id-s-content-" + page;
    $(curId).css("display", "block");
    skinimg = JSON.parse(localStorage.getItem("skinimg"));
    skinimg.curpage = page;
    localStorage.setItem("skinimg", JSON.stringify(skinimg));
}
//导航
$("#id-menu-1").click(function() {
        setCurrentPage(1);
    })
    //推荐
$("#id-menu-2").click(function() {
        setCurrentPage(2);
    })
    //购物
$("#id-menu-3").click(function() {
        setCurrentPage(3);
    })
    //我的关注
$("#id-menu-4").click(function() {
    setCurrentPage(4);
})

//视频
$("#id-menu-5").click(function() {
    setCurrentPage(5);
})

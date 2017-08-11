/**
 * Created by Administrator on 2017/4/6.
 * 事件处理
 */

//绑定事件
var timeoutid;
$(document).ready(function() {
    //天气预报：鼠标进入事件
    $(".weather-wrapper").mouseenter(function() {
        timeoutid = setTimeout(function() {
            showWeatherMod();
        }, 1000);
    });
    //天气预报：鼠标移出事件
    $(".weather-wrapper-top").mouseleave(function() {

        hideWeatherMod();
        clearTimeout(timeoutid);
    });
    //天气预报中的设置
    $(".lunar-setting-btn").click(function() {
        setLocation();
    });
    //保存按钮
    $(".set-save").click(function() {
        savesetting();
    });
    //取消按钮
    $(".set-cancel").click(function() {
        cancelsetting();
    });

    //用户名称鼠标移入
    $("#user_name_top").mouseenter(function() {
        //$(".menu-top").css("display","block");
        $("#id-user-name-menu").css("display", "block");
    });
    //用户名称鼠标移出
    $("#user_name_top").mouseleave(function() {
        //$(".menu-top").css("display","none");
        $("#id-user-name-menu").css("display", "none");
    });
    //搜索设置鼠标移入
    $("#user_setting_top").mouseenter(function() {
        //$(".menu-top").css("display","block");
        $("#id-set-menu").css("display", "block");
    });
    //搜索设置鼠标移出
    $("#user_setting_top").mouseleave(function() {
        //$(".menu-top").css("display","none");
        $("#id-set-menu").css("display", "none");
    });
    $("#id-menus-more").mouseenter(function() {
        $(".bar-top").css("display", "block");
    });
    $(".bar-top").mouseleave(function() {
        //$(".menu-top").css("display","none");
        $(".bar-top").css("display", "none");
    })
});
//鼠标移进，显示本地天气预报
function showWeatherMod() {
    $("#id-mod-setweather").slideDown("fast");
}
//鼠标移出
function hideWeatherMod() {
    $(".setweather-content").css("display", "block");
    $(".setweather-setting").css("display", "none");
    $("#id-mod-setweather").slideUp("fast");
}
//设置本地
function setLocation() {
    $(".setweather-content").css("display", "none");
    $(".setweather-setting").css("display", "block");
}
//本地设置中的“取消”健
function cancelsetting() {
    $(".setweather-setting").css("display", "none");
    $(".setweather-content").css("display", "block");

}
//本地设置中的“保存”健
function savesetting() {
    $(".setweather-setting").css("display", "none");
    $(".setweather-content").css("display", "block");
}

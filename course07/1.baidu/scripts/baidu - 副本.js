/**
 * Created by Administrator on 2017/4/6.
 * �¼�����
 */

//���¼�
$(document).ready(function(){
   $(".weather-wrapper").mouseenter(function(){
        showWeatherMod();
    });

    $(".weather-wrapper-top").mouseleave(function(){

        hideWeatherMod();
    });
    $(".lunar-setting-btn").click(function(){
        setLocation();
    })
    $(".set-save").click(function(){
        savesetting();
    })
    $(".set-cancel").click(function(){
        cancelsetting();
    })

    $("#user_name_top").mouseenter(function(){
        $(".menu-top").css("display","block");
    })

    $(".menupop").mouseleave(function(){
        $(".menu-top").css("display","none");
    })
})
//����ƽ�����ʾ��������Ԥ��
function showWeatherMod(){
    $("#id-mod-setweather").slideDown("500");
}
//����Ƴ�
function hideWeatherMod(){
    $(".setweather-content").css("display","block");
    $(".setweather-setting").css("display","none");
    $("#id-mod-setweather").slideUp("slow");
}
//���ñ���
function setLocation(){
    $(".setweather-content").css("display","none");
    $(".setweather-setting").css("display","block");
}
function cancelsetting(){
    $(".setweather-setting").css("display","none");
    $(".setweather-content").css("display","block");

}
function savesetting(){
    $(".setweather-setting").css("display","none");
    $(".setweather-content").css("display","block");
}
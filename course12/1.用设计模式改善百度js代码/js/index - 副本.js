$(document).ready(function(e) {
	//读取cooki
	if($.cookie("preview"))
	{
		$(".allbg").css("background","url("+$.cookie("preview")+")  no-repeat fixed 0 0 / cover ");
		$(".preview").children("img").attr("src",$.cookie("preview"));
	}
	//菜单切换
    $("#nav-title li").click(function (){
		$(this).addClass("now").siblings().removeClass("now");
		$(".option").eq($(this).index()).show().siblings().hide();
		});
    // 页面滚动出现回到顶部图标
		$(window).scroll(function () {
			if ($(window).scrollTop() >=20) {
					$("#to-top").show();
				}else{
					$("#to-top").hide();
				}
				 
		});
		// 回到顶部
		$("#to-top").click(function () {
	        var speed=200;//滑动的速度
	        $('body,html').animate({ scrollTop: 0 }, speed);
	        return false;
 		});
 		// 鼠标经过更多显示下拉列表
 		 $(".more").mousemove(function (){
		$("#moreul").show(); 
		})
 		 // 鼠标离开更多列表列表隐藏
 		 $("#moreul").mouseout(function(){
 		 	$(this).hide(); 
 		 })
 		 // 图片搜索触发按钮
		 $("#picture").click(function (e){
			 $(".picture-look").show();
			 e.stopPropagation()
			 })
		 // 冒泡
		$(".picture-look").click(function (e){			 
			 e.stopPropagation()
			 })
		// 关闭图片搜索
		 $(".soutu-close").click(function (){
			 $(".picture-look").hide();
			 })
		//点击页面其他地方图片搜索隐藏 
			 $(document).on('click',function(){
		 $(".picture-look").hide();
		})
		// 预览皮肤
		$(".skin-img").mousemove(function(){ 
			var src = $(this).children("img").attr("src");
			$(".preview").children("img").attr("src",src);
		}).click(function(){//设置皮肤
			var src = $(this).children("img").attr("src");
			$(".allbg").css("background","url("+src+") no-repeat fixed 0 0 / cover ");
			$.cookie("preview",src); 
		})


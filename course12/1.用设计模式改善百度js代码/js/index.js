//菜单切换
//单列函数
//有点：能有效保护自己的属性和方法
var table = {
  init:function(){ 
    this.render();
    this.bind();
  },
  render:function(){
    var me  = this;
	me.btna = $("#nav-title li")
  },
  bind:function(){
		var me = this;
		me.btna.click(function(){
			$(this).addClass("now").siblings().removeClass("now");
			$(".option").eq($(this).index()).show().siblings().hide();
		});
	},
}
table.init();
// 页面滚动出现回到顶部图标
var scroll = {
	init:function(){		 
		this.render();
		this.bind()
	},
	render:function(){
		var me = this;
		me.btna = $(window);

	},
	bind:function(){
		var me = this;
		me.btna.scroll(function(){
			if ($(window).scrollTop() >=20) {
					$("#to-top").show();
				}else{
					$("#to-top").hide();
				}	
		})
	},
	
}
scroll.init();
//回到顶部动画
var speed = {
	init:function(sp){		
		this.render();
		this.bind(sp)
	},
	render:function(){
		this.btna = $("#to-top");
	},
	bind:function(sp){		
		this.btna.click(function(){       
			    $('body,html').animate({ scrollTop: 0 }, sp);
			    return false;
			})
	},
}
speed.init(1000);
// 皮肤
var skin = {
	init:function(){
		this.render();
		this.bind();
	},
	render:function(){
		this.btna = $(".skin-img");
		this.open = $("#check-skin");
		this.off = $("#off-skin");
	},
	bind:function(){	
		 
		this.btna.mousemove(function(){ 	
			var src = $(this).children("img").attr("src");		
			$(".preview").children("img").attr("src",src);
		}).click(function(){//设置皮肤
			var src = $(this).children("img").attr("src");
			$(".allbg").css("background","url("+src+") no-repeat fixed 0 0 / cover ");
		});
		// 打开皮肤设置层
		this.open.click(function(){
			$("#show-skin").show(100);
		});
		// 关闭皮肤设置层
		this.off.click(function(){
			$("#show-skin").hide(100);
		});

	}
}
skin.init();
 // 图片搜索触发按钮 
var picture = {
	init:function(){
		this.render();
		this.bind();
	},
	render:function(){
		this.btna = $("#picture");
		this.close = $(".soutu-close"); 
	},
	bind:function(){
			this.btna.click(function (){ 
				 $(".picture-look").show();				 
			 });
			this.close.click(function (){
			 $(".picture-look").hide();
			 }); 
		}
	}
picture.init();

/**
 * Created by Administrator on 2017/4/27.
 */

                        //地址栏效果
$(function () {
//遍历所有隐藏地址 与显示的地址一样的元素改变样式
    for(var x=0;x<$(".gps>ul span").length;x++) {
        if ($(".site-check>span").html() == $(".gps>ul span").eq(x).html()) {
            $(".gps>ul span").css({"background": "", "color": ""});
            $(".gps>ul span").eq(x).css({"background": "#f10180", "color": "#fff"})
        }
    }
        //点击指定地址 改变显示地址内容
        $(".gps>ul>li>span").click(function () {
            $(".site-check>span").html($(this).html());
            $(".gps span").eq(3).html();
            $(".gps>ul span").css({"background": "", "color": ""});
            $(this).css({"background": "#f10180", "color": "#fff"});
        });

});


                        //main-nav导航特效
$(function () {
   $(".main-nav>li").eq(0).css("background","#bd1067");

  /* $(".main-nav>li").click(function(){
       $(".main-nav>li").css("background","");
       $(this).css("background","#bd1067");
   })*/

  //main 导航移入特效
    var color;
    $(".main-nav>li").mouseenter(function () {
        color = $(this).css("background-color");
        if($(this).css("background-color")=="rgb(189, 16, 103)"){

            return
        }
        $(this).css("background","rgb(219,10 ,118)")
    }).mouseleave(function () {
        $(this).css("background",color)
    });

    //more 图片移入遮罩特效
    $(".more>a").mouseenter(function () {
        $(this).children(".mask").css("top","0")
    }).mouseleave(function () {
        $(this).children(".mask").css("top","")
    });
    //more 图片移入文字特效
    $(".more>a").mouseenter(function () {
        $(this).children("p").css({"line-height":"96px"})
    }).mouseleave(function () {
        $(this).children("").css({"line-height":""})
    })
});
                                                 //轮播图特效
$(function () {
    var count = -1;
    var loadLeft = ["405px","580px"];
    run();
    var picindex = 0 ;

   function run() { count++;
       if(count > 1){count = 0}
       if(count < 0){count = 1}
       $(".banner-pic li").fadeOut(200);
       $(".banner-pic li").eq(count).fadeIn(200);
       $(".selected li").css("color","");
       $(".selected li").eq(count).css({"color":"#000","font-weight":"bold"});
       picindex = count;
       $(".load").css("left",loadLeft[count]);


   }

   //鼠标移入对应标题 获取标题当前下标
    $(".selected li").mouseenter(function () {
        if(picindex == $(this).index()){ return}
        clearInterval(s);
        $(".banner-pic li").stop(true,true);
        count = $(this).index()-1;
        run();
    }).mouseleave(function () {
        if(picindex == $(this).index()){return}
        s = setInterval(run,2000)
    });
   //轮播图前进后退点击事件
   $("#prv").click(function () {
       count-=2;
       run()
   });
    $("#next").click(function () {
        run()
    });
   var s = setInterval(run,2000)
});

                                                        //fore移入添加表单
$(function () {
   $(".fore").mouseenter(function () {
       var oInput = '<form action="" class="forme"> <div class="notic"> <input type="text" placeholder="请输入手机号"></input> <button>提醒我</button> </div> </form>';
       $(this).append(oInput);
   }).mouseleave(function () {
       $(".forme").remove()
   })
});
                                                //电梯图特效
$(function () {
    //点击电梯图层 到达指定位置
    var oIndex = 0;      //声明一个变量用于找到指定楼层
    $(".lift li").click(function () {
        //获取点击楼层下标
        var liftindex = $(this).index();
        //获取对应版块相对于文档的垂直偏移量
        var Top = $(".content section").eq(liftindex).offset().top;
        //达到指定版块文档需要向上移动 H
        //h = Top   文档垂直偏移量等于鼠标的垂直偏移量 所以scroll = Top = H
        $("html").animate({scrollTop:(Top-99)},200);
        $("body").animate({scrollTop:(Top-99)},200);
       /* $(this).css("background-color", "#f10180");
        $(this).css("color", "#fff")*/

    });

    //到达对应版块  指定楼层变色
    //1.先得到版块相对于文本的垂直偏移量
    //2.再获取文本自身偏移量
    //当 1 = 2 时 对应版块会出现在窗口上方；
    $(window).scroll(function () {
        //先用循环遍历对应版块的垂直偏移量
        for(var i = 0 ; i<$(".content section").length;i++) {
            var Top = $(".content section").eq(i).offset().top;
            //对应版块距离窗口顶端的距离 = 文档的垂直偏移量 - 对应版块相对于文本的垂直偏移量
            var oClip = $(window).scrollTop() - Top;
            if ($(window).scrollTop() > 800) {
                $(".lift").fadeIn()
            } else {
                $(".lift").fadeOut()
            }
            //获取版块自身的高度
            var H = $(".content section").eq(i).height();
            if (oClip >= -100 && oClip < (H - 100)) {
                $(".lift li").css("background-color", "");
                $(".lift li").css("color", "");
                $(".lift li").eq(i).css("background-color", "#f10180");
                $(".lift li").eq(i).css("color", "#fff")
            }else {
                $(".lift li").eq(i).css("background-color", "");
                $(".lift li").eq(i).css("color", "")
            }
        }
    })
});

                                                //顶部固定定位
$(function(){
    $(window).scroll(function () {
        if ($(window).scrollTop() > 800){
            $(".main-nav-bg").css({"position":"fixed","top":"0"})
        }else {
            $(".main-nav-bg").css({"position":"","top":""})
        }
    })
});

                                                                    //返回顶部
$(function () {
    $(".body-top").click(function () {
        $("body").animate({scrollTop:0},200);
        $("html").animate({scrollTop:0},200);
    })
});
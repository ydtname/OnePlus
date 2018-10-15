//图片高度问题
//当盒子高度大于图片高度时，图片高度为100%，宽度自适应
//当盒子宽度大于盒子宽度时，图片宽度为100%，高度自适应

function scale() {
    var left;
    var top;
    if($('.img-box').height() > $('.bg-img').height()){
        $('.bg-img').css({'height':'100%','width':'auto'});
    }
    else if($('.img-box').width() > $('.bg-img').width()){
        $('.bg-img').css({'width':'100%','height':'auto'});
    }
    left = -($('.bg-img').width() - $('.img-box').width())/2;
    top = -($('.bg-img').height() - $('.img-box').height())/2;
    $('.bg-img').css('left',left+'px');
    $('.bg-img').css('top',top+'px');
}
scale();
$(window).resize(function () {
    scale();
    //不存在时
    if($('.yj-aside').css('z-index') ==101){
        if($('.yj-aside').width() ===450){
            $('.yj-aside').css({'animation':'unslide 0s linear 0s 1','animation-fill-mode': 'forwards','z-index':'101'});
        }
        else if($('.yj-aside').width() !=450){
            $('.yj-aside').css({'animation':'unslide1 0s linear 0s 1','animation-fill-mode': 'forwards','z-index':'101'});
        }
    }

     //存在时
     else if($('.yj-aside').css('z-index') ==102){

         if($('.yj-aside').width() !=450){
             $('.mask').css({'display':'block','animation':'move1 0s linear 0s 1','animation-fill-mode': 'forwards'});
         }
         else{
            $('.mask').css({'display':'block','animation':'move 0s linear 0s 1','animation-fill-mode': 'forwards'});
        }
     }
});

//菜单点击事件
$('.yj-menu').click(function () {
    $('.yj-menu').css('display','none');
        if($('.yj-aside').width() ==450){
            $('.yj-aside').css({'animation':'slide 0.15s linear 0s 1','animation-fill-mode': 'forwards','z-index':'102'});
            $('.bg-img').css({'animation':'move 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
            $('.yj-foot').css({'animation':'move 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
            $('.top-box').css({'animation':'move 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
            $('.mask').css({'display':'block','animation':'move 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        }
        else{
            $('.yj-aside').css({'animation':'slide1 0.15s linear 0s 1','animation-fill-mode': 'forwards','z-index':'102'});
            $('.bg-img').css({'animation':'move1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
            $('.yj-foot').css({'animation':'move1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
            $('.top-box').css({'animation':'move1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
            $('.mask').css({'display':'block','animation':'move1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        }
});

//背景点击事件
$('.mask').click(function () {
    $('.yj-menu').css('display','block');
    $('.mask').css({'display':'none'});
    if($('.yj-aside').width() ==450){
        $('.yj-aside').css({'display':'block','animation':'unslide 0.15s linear 0s 1','animation-fill-mode': 'forwards','z-index':'101'});
        $('.bg-img').css({'animation':'unmove 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        $('.yj-foot').css({'animation':'unmove 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        $('.top-box').css({'animation':'unmove 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        $('.intro-info').css({'animation':'unslide1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
    }
    else{
        $('.yj-aside').css({'display':'block','animation':'unslide1 0.15s linear 0s 1','animation-fill-mode': 'forwards','z-index':'101'});
        $('.bg-img').css({'animation':'unmove1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        $('.yj-foot').css({'animation':'unmove1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        $('.top-box').css({'animation':'unmove1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        $('.intro-info').css({'animation':'unslide1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
    }
});

//侧边栏移入移出事件
$('.nav-li').hover(function () {
    $(this).children('a').css('color','#fff');
    $(this).css('background-color','#5A5A5A')
},function () {
    $(this).children('a').css({'color':'#7e7e7e'})
    $(this).css('background-color','#000')
});

//侧边栏close点击事件
$('.colse').eq(0).click(function () {
    $('.yj-menu').css('display','block');
    $('.mask').css({'display':'none'})
    if($('.yj-aside').width() ==450){
        $('.yj-aside').css({'display':'block','animation':'unslide 0.15s linear 0s 1','animation-fill-mode': 'forwards','z-index':'101'});
        $('.bg-img').css({'animation':'unmove 0.15s linear 0s 1','animation-fill-mode': 'forwards'});//?
        $('.yj-foot').css({'animation':'unmove 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        $('.top-box').css({'animation':'unmove 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
    }
    else{
        $('.yj-aside').css({'display':'block','animation':'unslide1 0.15s linear 0s 1','animation-fill-mode': 'forwards','z-index':'101'});
        $('.bg-img').css({'animation':'unmove1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});//?
        $('.yj-foot').css({'animation':'unmove1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
        $('.top-box').css({'animation':'unmove1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
    }
});

//活动介绍点击事件
$('.activity-intro').click(function () {
   $('.intro-info').css({'animation':'slide1 0.15s linear 0s 1','animation-fill-mode': 'forwards','overflow':'auto','height':'100%'});
});

$('.close2').click(function () {
    $('.intro-info').css({'animation':'unslide1 0.15s linear 0s 1','animation-fill-mode': 'forwards'});
});

// //详情点击事件
// $('.details').click(function () {
//     $('.intro-info').css({'width':$('.img-box').width()+'px','right':'0'})
// });

var num1=0;
/*mousewheel事件*/
$(document).mousewheel(function () {
    // d向上滚动1，向下滚地-1
    console.log(1);
    if($('.yj-head').css('display') == none){
        $('.yj-head').slideDown(500)
    }
    else{
        $('.yj-head').slideUp(500)
    }
});
/*函数节流*/


let list_btn = $('.btn-list');
let remove_btn = $('.btn-remove');
list_btn.click(function(){
    $('.full-screen').slideDown();
}).click(function(){
    $('body').css('overflow','hidden');
});
remove_btn.click(function(){
    $('.full-screen').slideUp();
}).click(function(){
    $('body').css('overflow','auto');
});
$('.own-ft').click(function(){
    $(this).toggleClass('own-ft-animating').siblings().removeClass('own-ft-animating');
    $(this).siblings().each(function(){$(this).find('span').removeClass('hidden');});
    $(this).find('span').toggleClass('hidden');
});

//进度条
$(function () {
    var slider = new SliderUnlock("#slider",{
        successLabelTip : "验证通过"
    },function(){
        //此处是验证成功之后执行的代码

    });
    slider.init();
});

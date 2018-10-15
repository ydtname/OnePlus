//窗口滚动事件
$(window).scroll(function () {
    if($(window).scrollTop() > $(window).height()){
        $('.scrollTop').fadeIn()
    }
    else{
        $('.scrollTop').fadeOut()
    }
});

//滚回顶部点击事件
$('.scrollTop').click(function () {
    $('html,body').animate({'scrollTop':0},500);
});
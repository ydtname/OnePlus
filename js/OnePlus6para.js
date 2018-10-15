/*基本参数点击展示*/
/*获取clientWidth*/
for(let i=0;i<$('.click-show').length;i++){
    $('.click-show').eq(i).click(function () {
        if($('.yj-i').css('display') === 'block'){
            if($('.item-box').eq(i).css('display') === 'none'){
                $('.yj-i').eq(i).css('background-image','url(../img/minus.png)');
                $('.item-box').eq(i).css('display','flex');
            }
            else{
                $('.yj-i').eq(i).css('background-image','url(../img/add.png)');
                $('.item-box').eq(i).css('display','none');
            }
        }
    });
}
$(window).resize(function () {
   var clientW = 0;
    if (window.innerWidth) {
        clientW = window.innerWidth;
    }
    else if ((document.body) && (document.body.clientWidth)) {
        clientW = document.body.clientWidth;
    }
    //通过深入Document内部对body进行检测，获取浏览器窗口高度
    if (document.documentElement && document.documentElement.clientWidth) {
        clientW = document.documentElement.clientWidth;
    }
    if(clientW>=718){
        $('.item-box').css('display','flex');
        $('.yj-i').css('background-image','url(../img/add.png)');
    }
    else{
        $('.item-box').css('display','none');
        $('.yj-i').css('background-image','url(../img/add.png)');
    }
});

$(window).scroll(function () {
    // console.log($(window).scrollTop());

    //头部置顶固定

    if ($(window).scrollTop() > 61) {
        $('#set_top').addClass('set_top')
    } else {
        $('#set_top').removeClass('set_top')
    }
    if($('#container2').offset().top<$(window).scrollTop()+$(window).height()*0.6) {
        $('#container2').addClass('animated fadeInUp')
    }
    if($('#container3').offset().top<$(window).scrollTop()+$(window).height()*0.6) {
        $('#container3').addClass('animated bounceIn')
    }
    if($('#container4').offset().top<$(window).scrollTop()+$(window).height()*0.6) {
        $('#container4').addClass('animated fadeInUpBig')
    }
    if($('#container5').offset().top<$(window).scrollTop()+$(window).height()*0.6) {
        $('#container5').addClass('animated bounceIn')
    }

})



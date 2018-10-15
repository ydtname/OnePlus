$(function () {
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

    //header以上

    //图片背景滚动
    var y = 100
    $('#hide_img1').css('transform', 'translate3d(0px, 100px, 0px)')

    $(window).mousewheel(function (event) {
        // console.log(event.deltaX, event.deltaY, event.deltaFactor);
        if (event.deltaY == -1) {
            y -= 9
            $('#hide_img1').css('transform', 'translate3d(0px, ' + y + 'px, 0px)')
        } else {
            y += 9
            $('#hide_img1').css('transform', 'translate3d(0px, ' + y + 'px, 0px)')
        }
    });


    //动画1
    $('#container1').removeClass('text_show')

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

//    以下footer
    $('.own-ft').click(function(){
        $(this).toggleClass('own-ft-animating').siblings().removeClass('own-ft-animating');
        $(this).siblings().each(function(){$(this).find('span').removeClass('hidden');});
        $(this).find('span').toggleClass('hidden');
    });


})

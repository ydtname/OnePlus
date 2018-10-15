//头部
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

//底部
$('.own-ft').click(function(){
    $(this).toggleClass('own-ft-animating').siblings().removeClass('own-ft-animating');
    $(this).siblings().each(function(){$(this).find('span').removeClass('hidden');});
    $(this).find('span').toggleClass('hidden');
});

$(window).scroll(function () {
    if($(window).scrollTop()<=48) {
        // $('.catogery').css('height','92px')
        $('.catogery i').removeClass('hide_img')
        $('.catogery ul').removeClass('pos_fixed')

        $('.catogery-phone').removeClass('pos_fixed_phone')
    }else {
        $('.catogery').css('height','92px')
        $('.catogery i').addClass('hide_img')
        $('.catogery ul').addClass('pos_fixed')

        $('.catogery-phone').addClass('pos_fixed_phone')

    }
})

$('#arrow_down').click(function () {
    console.log(1);
    // $('.catogery-mask').addClass('mask_phone')
    $('.catogery-mask').slideDown()
    $('body').css('overflow','hidden')
    return false
})

$('.catogery-mask').click(function () {
    $('.catogery-mask').slideUp()
    // $('.catogery-mask').removeClass('mask_phone')
    $('body').css('overflow','auto')
})



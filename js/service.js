let top_btn = $('.top-btn');
let list_btn = $('.btn-list');
let remove_btn = $('.btn-remove');
$(window).scroll(function(){
    if($('html').scrollTop() > 0) top_btn.show();
    else top_btn.hide();
});
top_btn.click(function(){
   $('html').animate({'scrollTop': 0}, 500);
});
list_btn.click(function(){
    $('.full-screen').slideDown();
});
remove_btn.click(function(){
    $('.full-screen').slideUp();
});
$('.own-ft').click(function(){
    $(this).toggleClass('own-ft-animating').siblings().removeClass('own-ft-animating');
    $(this).siblings().each(function(){$(this).find('span').removeClass('hidden');});
    $(this).find('span').toggleClass('hidden');
});
$('.btn-list').click(function(){
    $('body').css('overflow','hidden');
});
$('.btn-remove').click(function(){
    $('body').css('overflow','auto');
});


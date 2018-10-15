let list_btn = $('.btn-list');
let remove_btn = $('.btn-remove');
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
list_btn.click(function(){
    $('body').css('overflow','hidden');
});
remove_btn.click(function(){
    $('body').css('overflow','auto');
});

$('.commonly-problem__box dl').click(function(){
    console.log(1);
    $(this).toggleClass('dl-animating');
    $(this).find('span').toggleClass('hidden');
    $(this).find('dd').toggleClass('show');
});

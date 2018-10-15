expand(0);

//套装样式切换
$('.attr-list').eq(0).click(function () {
    if($(this).hasClass('expand') === false){
        $(this).addClass('expand');
        $('.attr-list').eq(1).removeClass('expand')
    }
    if($(this).hasClass('expand') === true){
        expand(0);
        unexpand(1);
    }
});
$('.attr-list').eq(1).click(function () {
    if($(this).hasClass('expand') === false){
        $(this).addClass('expand');
        $('.attr-list').eq(0).removeClass('expand')
    }
    if($(this).hasClass('expand') === true){
        expand(1);
        unexpand(0);
    }
});


//套装样式切换-删除
$('.attr-list-cancel').eq(0).click(function (e) {
    unexpand(0);
    e.stopPropagation();
});
$('.attr-list-cancel').eq(1).click(function (e) {
    unexpand(1);
    e.stopPropagation();
});

function expand(i) {
    $('.attr-list-title').eq(i).children('div').eq(1).css('display','none');
    $('.attr-list-title').eq(i).children('div').eq(2).css('display','none');
    $('.attr-list-cancel').eq(i).css('display','block');
    $('.attr-list-img').eq(i).css('display','none');
    $('.attr-content').eq(i).css('display','block')
}
function unexpand(i) {
    $('.attr-list-title').eq(i).children('div').eq(1).css('display','block');
    $('.attr-list-title').eq(i).children('div').eq(2).css('display','block');
    $('.attr-list-cancel').eq(i).css('display','none');
    $('.attr-list-img').eq(i).css('display','block');
    $('.attr-content').eq(i).css('display','none')
}
// console.log(parseInt($('.suit-nav-inner').offset().top));
//详情--评价切换置顶
var inneroffsetTop = $('.suit-nav-inner').offset().top;
$(window).scroll(function () {
    if($(window).scrollTop() >= inneroffsetTop){
        // console.log($('.suit-nav-inner').offset().top);
        if($('.suit-nav-inner').css('position') === 'relative'){
            $('.suit-nav-inner').css({'position':'fixed','top':'0'})
        }
    }
    else{
        $('.suit-nav-inner').css({'position':'relative','top':'0'})
    }
});


//详情--评价切换
$('.yj-details').click(function () {
    $('.section1').css('display','block');
    $('.section2').css('display','none');
    $('.yj-details').children('a').css('color','#222');
    $('.yj-review').children('a').css('color','rgba(51,51,51,0.7)');
});

$('.yj-review').click(function () {
    $('.section1').css('display','none');
    $('.section2').css('display','block');
    $('.yj-details').children('a').css('color','rgba(51,51,51,0.7)');
    $('.yj-review').children('a').css('color','#222');
});

//所有评价点击事件

$('.dropdown').click(function () {
    if($('.drop-menu').css('display') === 'none'){
        $('.drop-menu').slideDown(500);
    // $('.tria-img').attr('src','../img/downtria.png')
        $('.tria-img').addClass('rotate')
    }
    else{
        $('.drop-menu').slideUp(200);
        $('.tria-img').attr('src','../img/uptria.png');
        $('.tria-img').removeClass('rotate')
    }
});


//筛选有图评价
/*$('.yj-label').click(function () {
    alert(1);
    $('.yj-label').css('background','url(../img/right.jpg) 0 center no-repeat');
    $('.yj-label').css('background-size','20px 20px');
});*/


$(function () {

    $(".sub-nav>ul>li>a").hover(function () {
        $(this).children("span").stop().slideDown(200);
    },function () {
        $(this).children("span").stop().slideUp(200);
    });
    var timer = null;
    $(".video-show>ul>li>a").hover(function () {
        clearTimeout(timer);
        var t = $(this);
        timer = setTimeout(function () {
            t.children("span").css({
                "transform": "scale(1.4,1.4)"
            });
        },1000)
    },function () {
        $(this).children("span").css(
            "transform", "scale(1,1)"
        )
    })

});
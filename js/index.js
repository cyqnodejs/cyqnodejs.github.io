$(function (ev) {
    var toggle = $('#ss_toggle');
    var menu = $('#ss_menu');
    var rot;
    $('#ss_toggle').on('click', function (ev) {
        rot = parseInt($(this).data('rot')) - 180;
        menu.css('transform', 'rotate(' + rot + 'deg)');
        menu.css('webkitTransform', 'rotate(' + rot + 'deg)');
        if (rot / 180 % 2 == 0) {
            toggle.parent().addClass('ss_active');
            toggle.addClass('close');
        } else {
            toggle.parent().removeClass('ss_active');
            toggle.removeClass('close');
        }
        $(this).data('rot', rot);
    });
    menu.on('transitionend webkitTransitionEnd oTransitionEnd', function () {
        if (rot / 180 % 2 == 0) {
            $('#ss_menu div i').addClass('ss_animate');
        } else {
            $('#ss_menu div i').removeClass('ss_animate');
        }
    });

    $(".go_top").click(function(){
        $('body,html').animate({
            'scrollTop':'0px'
        },400)
    });
    //导航
    $(".menu ul").css({
        display: "none"
    }); // Opera Fix
    $(".menu li").hover(function () {
        $(this).find('ul:first').css({
            visibility: "visible",
            display: "none"
        }).slideDown("normal");
    }, function () {
        $(this).find('ul:first').css({
            visibility: "hidden"
        });
    });
});
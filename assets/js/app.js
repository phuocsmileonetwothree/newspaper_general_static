$(function () {

    $("a").not('.allow-click').click(function(){
        return false; 
    });


    // Ẩn hiện #back-top
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $("#back-top").fadeIn();
        }
        else {
            $("#back-top").fadeOut();
        }
    });

    //Back-Top
    $("#back-top").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 600)
    })



    //FAST-CONTACT
    $("i.fa-chevron-down").click(function () {
        $("#contact-fast").toggleClass('open-contact-fast');
        $("i.fa-chevron-down").toggleClass('fa-chevron-up');
    })

    // $(window).resize(function () {
    //     let size = $(this).width();
    //     if(size >= 1024){

    //     }


    // })



    $(window).scroll(function () {
        let scroll_Top = $(this).scrollTop();
            console.log(scroll_Top)
            if ($(".contact-head i").hasClass('fa-chevron-down fa-chevron-up') && scroll_Top <= 1739 && $("#contact-fast").hasClass('open-contact-fast')) {
                $("#contact-fast").toggleClass('open-contact-fast');
                $("i.fa-chevron-down").toggleClass('fa-chevron-up');
            }
            else if (!$(".contact-head i").hasClass('fa-chevron-down fa-chevron-up') && scroll_Top >= 1740 && !$("#contact-fast").hasClass('open-contact-fast')) {
                $("#contact-fast").addClass('open-contact-fast');
                $("i.fa-chevron-down").addClass('fa-chevron-up');
            }
    });
    //MENU-RESPONSIVE
    $("a.icon-respon-menu").click(function () {
        $("#site").toggleClass('open-respon-menu');
        $("a.icon-respon-menu").toggleClass('fa-bars fa-times');
        return false;
    })




    //UP DOWN INFO
    $("ul#list-index-post li:first-child .post-answer").slideDown(1);
    $("ul#list-index-post li:first-child .post-title a.click").removeClass('fa-chevron-down').addClass('fa-chevron-up');
    $("ul#list-index-post li .post-title a.click").click(function () {
        $(this).parent().next().stop().slideToggle(350);
        $(this).toggleClass('fa-chevron-down fa-chevron-up');
        return false;
    })


    //TAB CONTENT
    $("ul#list-tab-content li.about").fadeIn(1);
    $("ul#list-click-tab li a").click(function () {
        $("ul#list-tab-content li").fadeOut(1);
        if ($(this).hasClass('about')) {

            $("ul#list-tab-content li.about").fadeIn(1);
        }
        else if ($(this).hasClass('contact')) {
            $("ul#list-tab-content li.contact").fadeIn(1);

        }
        else if ($(this).hasClass('support')) {
            $("ul#list-tab-content li.support").fadeIn(1);
        }
        return false;
    });


    //SLIDER POST RECOMMEND

    $(".post-recommend .icon-slider .icon-right").click(function () {
        let a = $("ul#list-post-recommend").scrollLeft();
        a = a + 380;
        $("ul#list-post-recommend").stop().animate({ scrollLeft: a }, 500)
    });

    $(".post-recommend .icon-slider .icon-left").click(function () {
        let b = $("ul#list-post-recommend").scrollLeft();
        b = b - 450;
        $("ul#list-post-recommend").stop().animate({ scrollLeft: b }, 500)
    });

});
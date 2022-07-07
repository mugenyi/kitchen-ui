/**
 * Created by DevPC on 2018-01-11.
 */
$(document).ready(function () {


    $(".btn-toggle").click(function () {
        var target = $(this).attr("data-toggle");
        console.log(target);
        $(target).toggle();
    });

    //module-popup
    $(".btn-popup").click(function () {
        var target = $(this).attr("data-toggle");
        console.log(target);
        $(".module-popup").hide();
        $("body").addClass("popup-open");
        $(target).fadeIn(100);
    });
    //module-popup


    $(".close-popup").click(function () {
        $("body").removeClass("popup-open");
        $(this).parents(".module-popup").fadeOut(100);
        //location.reload();
    });
    var windowHeight = $(window).height();
    $("body").css({"min-height": windowHeight});


    $(".accordion-box .accordion-btn").click(function () {
        $(".accordion-box").removeClass("active");
        $(".accordion-box .accordion-content").slideUp(100);
        if ($(this).siblings(".accordion-content").is(":visible") == true){
            $(this).siblings(".accordion-content").slideUp(100);
            $(this).parent(".accordion-box").removeClass("active");
        }
        else {
            $(this).siblings(".accordion-content").slideDown(100);
            $(this).parent(".accordion-box").addClass("active");
        }
    });
    $(".accordion-btn").click(function () {
        event.stopPropagation(); return false;
    });
    $('#product-slider').slick({
        arrows: true,
        dots: true
    });
    $('#slides-mobile').slick({
        arrows: false,
        dots: false
    });
    $("#searchform").submit(function (e) {
        event.preventDefault();
        var str = $("#mainsearch").val();
        if(str.length >= 3) {
            var url = "/?s=" + str;
            location.href = url;
        }
    });

});
// $(document).on("click", function(event){
//     var $trigger = $(".btn-menu");
//     if($trigger !== event.target && !$trigger.has(event.target).length){
//         $("body").removeClass("menu-open");
//     }
// });


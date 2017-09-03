/*global $, console, alert*/
$(document).ready(function () {
    "use strict";
    //nicescroll
    $("html").niceScroll();
    $(".carousel").carousel({
        interval: 5000
    });

//option-box
    $(".gear-check").click(function () {
        $(".color-option").fadeToggle();
    });
// change theme color on click
    $(".color-option ul li")
         .eq(0).css("backgroundColor", "blue").end()
         .eq(1).css("backgroundColor", "#00ff18").end()
         .eq(2).css("backgroundColor", "#ff00dc").end()
         .eq(3).css("backgroundColor", "#ffc000").end()
         .eq(4).css("backgroundColor", "red").end();
   
    $(".color-option ul li").click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));

    
    });

    


});

//loading screen
$(window).load(function () {
    "use strict";
    $(".loading-overlay .sk-folding-cube").fadeOut(2000,
        function () {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(1000, function () {
                
                $(this).remove();
            });
        });
    
});



$(document).ready(function () {
    "use strict";
    var scrollButton = $("#scroll-top");
    
    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 700) {
            scrollButton.fadeIn();
        } else {
            scrollButton.fadeOut();
        }
    
   
    });
    scrollButton.click(function () {
        $("html,body").animate({scrollTop: 0}, 600);
    });
    
    
});




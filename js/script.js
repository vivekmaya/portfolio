// Site Fade-In
// $(document).ready(function() {
//     $(document.body).hide().fadeIn('4000');
// });

// Sidebar Fade
// To solve this problem, I had to have all variables in the local scope and had to put within the scroll function, so that constant scrolling keep running the function
$(document).ready(function() {
    $(".project-nav-download-bubble").hide().delay("1000").fadeToggle("1000", function() {
        $(this).delay("3000").fadeToggle("1000");
    });

    $(window).scroll(function() {
        var $nav = $(".project-nav");
        var $textLogo = $(".text-logo");
        var $footer = $("#contact");

        var posFooter = $footer.offset().top;  //find top of footer
        var posNav = $nav.offset().top + 350;  //find top of nav, and compensate for body of nav (260)

        if (posNav > posFooter){
            $(".project-nav, .text-logo").stop(true, true).animate({opacity: 0}, 100);
        } else {
            $(".project-nav, .text-logo").stop(true, true).animate({opacity: 1}, 100);
        }
    });

});

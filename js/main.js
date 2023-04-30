

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* Click Event on toggle menu*/
    // $toggleCollapse.click(function(){
    //     $nav.toggleClass('collapse');
    // })

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: true,
        nav: true, // This nav means .owl-nav Class using in css
        // navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        // responsive: responsive
    });

    // click to scroltop
    // $('.move-up span').click(function(){
    //     $('html,body').animate({
    //         scrollTop:0
    //     }, 2000);
    // })
});
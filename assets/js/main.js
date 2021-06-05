 
 $(document).ready(function(){
    $(".embed-responsive iframe").addClass("embed-responsive-item");
    $(".carousel-inner .item:first-child").addClass("active");   
       
    $('[data-toggle="tooltip"]').tooltip();
   
    $(".header-area").sticky({topSpacing: 0});       
       
    //jquery smooth scroll
    $('li.smooth-menu a').bind('click', function(event) {
        var $anchor = $(this);
        var headerH = '60';
        $('html,body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });
    
    // jquery scroll psy
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 95
    });
    

    $('.parallax-bg').scrolly({
        bgParallax: true
    });

    $(".navbar-toggle").click(function(){
        $("body").addClass("mobile-menu-activated");
    });
    
    $("ul.nav.navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass("in");
    });
    
 });


$(window).load(function(){
        
});
//jquery-click-scroll
//by syamsul'isul' Arifin

var sectionArray = [1, 2, 3, 4, 5, 6];

$.each(sectionArray, function(index, value){
          
     $(document).scroll(function(){
         var offsetSection = $('#' + 'section_' + value).offset().top - 90;
         var docScroll = $(document).scrollTop();
         var docScroll1 = docScroll + 1;
         
        
         if ( docScroll1 >= offsetSection ){
             $('.navbar-nav .nav-item .nav-link').removeClass('active');
             $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');  
             $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
             $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
         }
         
     });
    
    $('.click-scroll').eq(index).click(function(e){
        var offsetClick = $('#' + 'section_' + value).offset().top - 90;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop':offsetClick
        }, 300)
    });
    
});

$(document).ready(function(){
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');    
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});
 var swiper = new Swiper(".mySwiper", {
            // Enable looping (infinite scroll)
            loop: true,
            
            // Enable autoplay (slides automatically)
            autoplay: {
                delay: 3000, // Time between slides in milliseconds (3 seconds)
                disableOnInteraction: false, // Continue autoplay after user interacts
            },
            
            // Number of slides to show at once
            slidesPerView: 1, // Show 1 slide on mobile
            
            // Space between slides (in pixels)
            spaceBetween: 30,
            
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 640px (tablets)
                640: {
                    slidesPerView: 2, // Show 2 slides
                },
                // when window width is >= 1024px (desktops)
                1024: {
                    slidesPerView: 3, // Show 3 slides
                }
            },
            
            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            
            // Pagination dots
            pagination: {
                el: ".swiper-pagination",
                clickable: true, // Allow clicking on dots to navigate
            },
        });
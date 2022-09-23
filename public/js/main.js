/*-----------------------------------------------------------------------------------

    Theme Name: Croper - Gardening and Landscaping Template
    Description: Gardening and Landscaping Template
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Tab Effect
        07. Wow animation - on scroll
        08. Copy to clipboard
        09. Sliders
        10. Tabs
        11. CountUp
        12. Countdown
        13. Current Year
        14. Portfolio Gallery
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logos/logo-inner.png');
                logodefault.attr('src', 'img/logos/logo.png');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logos/logo.png');
                logodefault.attr('src', 'img/logos/logo.png');
            }
        });


        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });


        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            05. Video
        --------------------------------------*/

        // It is for local video
        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        $('.source-modal').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 160
        });

        /*------------------------------------
            06. Tab Effect
        --------------------------------------*/

        //Click on first li element
        $( ".tab1" ).click(function() {
        $( ".second, .third, .fourth, .fifth" ).fadeOut();
        $( ".first" ).fadeIn(1000);
        });

        //Click on second li element
        $( ".tab2" ).click(function() {
        $( ".first, .third, .fourth, .fifth" ).fadeOut();
        $( ".second" ).fadeIn(1000);
        });

        //Click on third li element
        $( ".tab3" ).click(function() {
        $( ".first, .second, .fourth, .fifth" ).fadeOut();
        $( ".third" ).fadeIn(1000);
        });

        //Click on fourth li element
        $( ".tab4" ).click(function() {
        $( ".first, .second, .third, .fifth" ).fadeOut();
        $( ".fourth" ).fadeIn(1000);
        });

        //Click on fifth li element
        $( ".tab5" ).click(function() {
        $( ".first, .second, .third, .fourth" ).fadeOut();
        $( ".fifth" ).fadeIn(1000);
        });

        /*------------------------------------
            07. Wow animation - on scroll
        --------------------------------------*/
        
        var wow = new WOW({
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: false, // default
            live: true // default
        })
        wow.init();

        /*------------------------------------
            08. Copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function() {
                var $this = $(this);
                var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function() {
                    $this.text('Copy')
                    }, 2000);
            });
        };

    // === when document ready === //
    $(document).ready(function(){

        /*------------------------------------
            09. Sliders
        --------------------------------------*/

        // testmonial2-carousel
        $('.testimonial-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: true,
            center:false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }

            }
        });

        // project details carousel
        $('.project-details').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 900,            
            nav: false,
            dots: true,
            center: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 2,
                    margin: 15
                },
                992: {
                    items: 3
                }
            }
        });

        // blog-post carousel
        $('.blog-post-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 900,
            nav: false,
            dots: false,
            items: 1,
            margin: 15
        });

        // portfolio-carousel (Index Gardener)
        $('.portfolio-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,            
            nav: false,
            dots: false,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }

            }
        }); 

        // Sliderfade (Index Gardener)
        $('.slider-fade1').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            margin: 0,
            nav: false,
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"],
            autoplay: true,
            smartSpeed:1500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
                992: {
                nav: true,
                dots: false
                }
            }
            
        });

        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay:false,
            smartSpeed:500
        });   

        // Slider text animation
        var owl = $('.slider-fade1');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('.h5').removeClass('animated fadeInUp');
            $('.title').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('a').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.h5').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.title').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('a').addClass('animated fadeInUp');
        });

        /*------------------------------------
            10. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            11. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            12. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Jul 2024 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });

        /*------------------------------------
            13. Current Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            14. Portfolio Gallery
        --------------------------------------*/

        $('.portfolio-gallery').lightGallery();

        $('.portfolio-link').on('click', (e) => {
            e.stopPropagation();
        })

        // stellar
        $window.stellar();

    });

})(jQuery);
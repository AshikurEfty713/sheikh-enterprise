(function (BDT) {
    "use strict";
    
    // Dropdown on mouse hover
    BDT(document).ready(function () {
        function toggleNavbarMethod() {
            if (BDT(window).width() > 992) {
                BDT('.navbar .dropdown').on('mouseover', function () {
                    BDT('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    BDT('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                BDT('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        BDT(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    BDT(window).scroll(function () {
        if (BDT(this).scrollTop() > 100) {
            BDT('.back-to-top').fadeIn('slow');
        } else {
            BDT('.back-to-top').fadeOut('slow');
        }
    });
    BDT('.back-to-top').click(function () {
        BDT('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    BDT('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    BDT('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Product Quantity
    BDT('.quantity button').on('click', function () {
        var button = BDT(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);


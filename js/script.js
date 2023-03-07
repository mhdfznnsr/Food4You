$('.carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    // nav: true,
    center: true,
    dotsData: true,
    dotsEach: 3,
    responsive:{
        0:{
            items:1,
            dotsEach: 1,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
            dotsEach: 3,
        }
    }
})

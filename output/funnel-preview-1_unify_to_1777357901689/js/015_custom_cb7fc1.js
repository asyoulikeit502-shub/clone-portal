function cart_block() {
  jQuery('.cart-btn').on('click', function() {
    jQuery(".cart-dropdown-item-wraper").slideToggle("slow");
  });
}

// $('.tg-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     dots:false,
//      navText: [
//         '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//         '<i class="fa fa-angle-right" aria-hidden="true"></i>'
//     ],
//     navContainer: '.tec_carousal_inner .custom-nav',
//     responsive:{
//         0:{
//             items:2
//         },
//         991:{
//             items:4
//         },
//         1199:{
//             items:8
//         },
//         1399:{
//              items:8
//         },
//         1400:{
//              items:8
//         }
//     }
// })

// ----------------------------

// product carousel

// $('.index-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     dots:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })
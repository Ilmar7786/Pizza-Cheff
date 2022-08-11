$(document).ready(function () {

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true
    });

    $('.product-image').each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

});

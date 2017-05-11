$(document).ready(function () {
    $('#my-size').change(function () {
        $('#my-button').data('item-custom2-value', $(this).val());
    });

    $('#my-quantity').change(function () {
        $('#my-button').data('item-quantity', $(this).val());
    });

    $('#my-price').change(function () {
        $('#my-button').data('data-item-price', $(this).val());
    });

    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });

    // initialize typer
    $('[data-typer-targets]').typer({
        highlightSpeed: 2660,
        typeSpeed: 8600,
        clearDelay: 6500,
        typeDelay: 6200,
        clearOnHighlight: false,
        typerDataAttr: 'data-typer-targets',
        typerInterval: 2000
    });

});

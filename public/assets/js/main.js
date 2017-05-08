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

    var fuseOptions = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "name",
            "headline",
            "underline",
            "thirdline",
            "description",
            "texte"
        ]
    };

    var filteredData = [];
    $('#filtered-products .product-item').each(function () {
        filteredData.push($(this).data());
    });
    var fuse = new Fuse(filteredData, fuseOptions);
    $('input.product__filter-search').on('keydown', function (e) {
        if (e.which == 13) {
            e.preventDefault();
            var result = fuse.search($(this).val().trim());
            console.log('result = ', result);
        }
    });

});

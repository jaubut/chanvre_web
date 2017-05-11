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

    var fuseOptions = {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
            "name"
        ]
    };

    var filteredData = [];
    var $productList = $('#filtered-products');
    $productList.find('.product-item').each(function () {
        filteredData.push($(this).data());
    });
    var fuse = new Fuse(filteredData, fuseOptions);
    $('input.product__filter-search').on('keydown', function (e) {
        if (e.which == 13) {
            e.preventDefault();
            var searchToken = $(this).val().trim();
            if (searchToken === '') {
                resetResult();
                return;
            }
            var result = fuse.search(searchToken);
            console.log('result = ', result);

            $productList.find('.product-item').each(function () {
                var id = $(this).data('id');

                // make sure it is defined
                if (_.isUndefined(id)) {
                    return;
                }
                var resultIDs = _.map(result, function (item) {
                    return item.id;
                });

                var matchResult = resultIDs.indexOf(id) > -1;
                if (!matchResult) {
                    $(this).hide();
                    return;
                }
                $(this).show();
            });
        }
    });

    // handle category search
    $('.product__filter-item').click(function (event) {
        event.preventDefault();
        event.stopPropagation();
        var category = $(this).data('category');
        if (!category) {
            return;
        }
        filterByCategory(category);
    });

    var resetResult = function () {
        $productList.find('.product-item').each(function () {
            $(this).show();
        });
    };
    var filterByCategory = function (category) {
        $productList
            .find('.product-item')
            .each(function () {
                var dataCategory = $(this).data('category');
                if (dataCategory === category) {
                    $(this).show();
                    return;
                }
                $(this).hide();
            });
    }


});

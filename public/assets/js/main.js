app.locals.product = require('../product.json');

$(document).ready(function() {
        $(".convert-emoji").each(function() {
            var original = $(this).html();
            // use .shortnameToImage if only converting shortnames (for slightly better performance)
            var converted = emojione.toImage(original);
            $(this).html(converted);
        });
    });

$('#my-size').change(function() {
    $('#my-button').data('item-custom2-value', $(this).val());
});

Snipcart.api.configure('show_continue_shopping', true);



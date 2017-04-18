var moltin = new Moltin({publicId: 'HimKFkM74zwzb8mtGTBMmCBtw0wVZJ1BUsG0PE9cZ1'});
var products = moltin.Product.List();
moltin.Authenticate(function() {
  // Make your calls here
});

$('#my-size').change(function() {
$('#my-button').data('item-custom2-value', $(this).val());
});

$('#my-quantity').change(function() {
$('#my-button').data('item-quantity', $(this).val());
});

$('#my-price').change(function() {
    $('#my-button').data('data-item-price', $(this).val());
});

$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});

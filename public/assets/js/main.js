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

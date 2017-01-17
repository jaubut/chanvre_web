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

    $('#my-quantity').change(function() {
    $('#my-button').data('item-quantity', $(this).val());
    });

    function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    }

    function myFunctiontree() {
    document.getElementById("myDropsearch").classList.toggle("show");
    }

// Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    function myFunctionTwo() {
        document.getElementById("yourDropdown").classList.toggle("show");
    }


    $('#my-price').change(function() {
        $('#my-button').data('data-item-price', $(this).val());
    });

    $('.main-carousel').flickity({
      // options
      cellAlign: 'left',
      contain: true
    });

mixpanel.track("Video play");

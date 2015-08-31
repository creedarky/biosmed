/*
 *
 * Example file
 *
 */

(function() {
  'use strict';
  $.material.init();
  var $document = $(document);

  $document.on('error', 'img', function () {
    $(this).attr('src', '/img/placeholder.png' );
  });
  $document.ready(function() {
    $('.slick-carousel').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $document.on('submit', '#footer-form', function(e) {
      e.preventDefault();
      var $form = $(this);
      $.post('/contact-mail', $form.serialize() , function(data) {
        console.log(data);
        $form.trigger('reset');
      });

    });
  });


  function isMailValid(valor) {
    // creamos nuestra regla con expresiones regulares.
    var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    // utilizamos test para comprobar si el parametro valor cumple la regla
    return !!filter.test(valor);
  }

})();

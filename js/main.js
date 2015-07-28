/*
 *
 * Example file
 *
 */

(function() {
  'use strict';
  $.material.init();
  var $document = $(document);

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
  });

  function enviar() {
    var name = jQuery.trim(jQuery('#nombre').val());
    var mail = jQuery.trim(jQuery('#mail').val());
    var contact = jQuery.trim(jQuery('#mensaje').val());
    if (!name) {
      alert('Debe ingresar nombre');
      return;
    }
    if (!mail) {
      alert('Debe ingresar email');
      return;
    }
    if (!contact) {
      alert('Debe ingresar mensaje');
      return;
    }
    if (!isMailValid(mail)) {
      alert('Email invalido');
      return;
    }
    var data = 'nombre=' + name + '&mail=' + mail + '&mensaje=' + contact;
    $('#enviarButton').prop('disabled', true);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: data,
      success: function (data) {
        jQuery.trim(jQuery('#nombre').val(''));
        jQuery.trim(jQuery('#mail').val(''));
        jQuery.trim(jQuery('#mensaje').val(''));
        alert('Enviado con éxito');
        $('#enviarButton').prop('disabled', false);
      }

    });
  }

  function isMailValid(valor) {
    // creamos nuestra regla con expresiones regulares.
    var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
    // utilizamos test para comprobar si el parametro valor cumple la regla
    return !!filter.test(valor);
  }

})();

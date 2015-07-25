(function () {
  'use strict';

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

/**
 * Created by mcastro on 8/10/15.
 */

(function() {
  'use strict';
  var $document = $(document);
  $document.ready(function() {
    var $productsInfo = $('.product-info');
    var $productsList = $('.product');
    var $form = $('.cotizar-form');
    var $active = $productsInfo.filter('[data-index="0"]') ;
    $document.on('click', '.product', function() {
      var $this = $(this);
      $productsList.removeClass('active');
      $this.addClass('active');
      $('.product-info').addClass('hidden');
      $active = $productsInfo.filter('[data-index="' +  $this.data('index') + '"]');
      $active.removeClass('hidden');
      $form.addClass('hidden');
      $active.append($form);
    });
    $document.on('click', '.cotizar', function() {
      $form.removeClass('hidden');
      $form[0].reset();
    });
  });
})();
/**
 * Created by mcastro on 8/10/15.
 */

(function() {
  'use strict';
  var $document = $(document);
  $document.ready(function() {
    var $productsInfo = $('.product-info');
    var $productsList = $('.product');
    $document.on('click', '.product', function() {
      var $this = $(this);
      $productsList.removeClass('active');
      $this.addClass('active');
      $('.product-info').addClass('hidden');
      $productsInfo.filter('[data-index="' +  $this.data('index') + '"]').removeClass('hidden');
    });
  });
})();
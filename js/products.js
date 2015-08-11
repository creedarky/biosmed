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
      console.log($this);

    });
  });
})();
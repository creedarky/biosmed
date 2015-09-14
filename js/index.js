/*
 *
 * Example file
 *
 */

(function() {
  'use strict';
  var $document = $(document);

  $document.ready(function() {
    $('.bxslider').bxSlider({
      auto: true,
      pager:false,
      touchEnabled: true,
      control:false
    });
    $('.bxslider img').removeClass('hidden');

    $('.intro_slider').bxSlider({
      auto: true,
      controls : false,
      mode: 'fade',
      pager: true
    });
  });



})();

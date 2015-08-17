/*
 *
 * Example file
 *
 */

(function() {
  'use strict';
  var $document = $(document);

  $document.ready(function() {
    var map = new GMaps({
      el: '#map',
      lat: -33.4379686,
      lng: -70.6151266
    });
    map.addMarker({
      lat: -33.4379686,
      lng: -70.6151266,
      title: 'BIOSCOM',
      infoWindow: {
        content: 'Edificio corporativo BIOSCOM'
      }
    });
  });



})();

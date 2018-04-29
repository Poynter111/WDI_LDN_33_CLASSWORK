/* global google */
window.addEventListener('DOMContentLoaded', () => {
  const mapDiv = document.querySelector('.map');
  const autocompleteInput = document.querySelector('.autocomplete');


  const map = new google.maps.Map(mapDiv, {
    center: { lat: 51.515, lng: -0.072 },
    zoom: 14,
    styles: [
      {
        'featureType': 'all',
        'elementType': 'all',
        'stylers': [
          {
            'saturation': '32'
          },
          {
            'lightness': '-3'
          },
          {
            'visibility': 'on'
          },
          {
            'weight': '1.18'
          }
        ]
      },
      {
        'featureType': 'administrative',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'landscape',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'landscape.man_made',
        'elementType': 'all',
        'stylers': [
          {
            'saturation': '-70'
          },
          {
            'lightness': '14'
          }
        ]
      },
      {
        'featureType': 'poi',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'road',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'transit',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'all',
        'stylers': [
          {
            'saturation': '100'
          },
          {
            'lightness': '-14'
          }
        ]
      },
      {
        'featureType': 'water',
        'elementType': 'labels',
        'stylers': [
          {
            'visibility': 'off'
          },
          {
            'lightness': '12'
          }
        ]
      }
    ],
    // scrollwheel: false,
    disableDefaultUI: true
  });
  const autocomplete = new google.maps.places.Autocomplete(autocompleteInput);
  autocomplete.bindTo('bounds', map);

  autocomplete.addListener('place_changed', () => {
    new google.maps.Marker({
      position: autocomplete.getPlace().geometry.location,
      map: map,
      animation: google.maps.Animation.DROP
    });
  });

  const bounds = new google.maps.LatLngBounds();
  const centerInfoWindow = new google.maps.InfoWindow({
    content: '<h4>Center Point</h4>',
    map: map
  });
  map.addListener('click', (e) => {
    map.panTo(e.latLng);
    new google.maps.Marker({
      position: e.latLng,
      map: map
    });
    bounds.extend(e.latLng);
    centerInfoWindow.setPosition(bounds.getCenter());
    // centerInfoWindow.open();
  });

  const marker = new google.maps.Marker({
    position: map.getCenter(),
    map: map,
    label: '🐶'
  });

  const infoWindow = new google.maps.InfoWindow({
    content: `<div>
    <h4>General Assembly London</h4>
    <p>114 Whitechapel High St., E1 7PT</p>
    </div>`
  });

  marker.addListener('click', () => {
    infoWindow.open(map, marker);
  });

});

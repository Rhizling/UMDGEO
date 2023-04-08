function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 38.987003, lng: -76.942293},
      zoom: 14
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
      position: {lat: 38.987003, lng: -76.942293},
      map: map,
      title: 'UMD'
    });

    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById('pano'),
      {
        position: { lat: 37.7749, lng: -122.4194 },
        pov: { heading: 165, pitch: 0 },
        zoom: 1
      }
    );
  }
  
  
  // Load the Google Maps API
  function loadMapScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDwCIKO3h7vYxfQ22LSsDsNlaQKYomWluE&callback=initMap';
    document.body.appendChild(script);
  }
  
  // Call the loadMapScript function when the page loads
  window.onload = initMap;
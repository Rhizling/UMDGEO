function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7749, lng: -122.4194},
      zoom: 8
    });
  
    // Add a marker to the map
    var marker = new google.maps.Marker({
      position: {lat: 37.7749, lng: -122.4194},
      map: map,
      title: 'San Francisco'
    });
  }
  
  // Load the Google Maps API
  function loadMapScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDwCIKO3h7vYxfQ22LSsDsNlaQKYomWluE&callback=initMap';
    document.body.appendChild(script);
  }
  
  // Call the loadMapScript function when the page loads
  window.onload = initMap;
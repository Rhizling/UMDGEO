function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.987003, lng: -76.942293 },
    zoom: 14,
    disableDefaultUI: true,
  });

  // Create a custom zoom control and add it to the map
  /*var zoomControlDiv = document.createElement("div");
  var zoomControl = new CustomZoomControl(zoomControlDiv, map);*/

  // Add the custom zoom control to the map
  /*zoomControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(zoomControlDiv);*/

  // Disable the zoom control and map type control
  map.setOptions({
    zoomControl: false,
    mapTypeControl: false,
  });

  /*var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.7749, lng: -122.4194},
      zoom: 8
    });*/

  // Add a marker to the map
  var marker = new google.maps.Marker({
    position: { lat: 38.987003, lng: -76.942293 },
    map: map,
    title: "College Park",
  });

  /*var marker = new google.maps.Marker({
      position: {lat: 37.7749, lng: -122.4194},
      map: map,
      title: 'San Francisco'
    });*/

  const result = getRandomLocation({ lat: 38.987003, lng: -76.942293 }, 0.785);

  const panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), {
    position: { lat: result.lat, lng: result.lng },
    pov: { heading: 165, pitch: 0 },
    zoom: 1,
  });
}

// Load the Google Maps API
function loadMapScript() {
  var script = document.createElement("script");
  script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDwCIKO3h7vYxfQ22LSsDsNlaQKYomWluE&callback=initMap";
  document.body.appendChild(script);
}

function getRandomLocation(center, radius) {
  // center is an object with properties lat and lng
  const lat = center.lat + ((Math.random() * 2 - 1) * radius) / 111;
  const lng = center.lng + ((Math.random() * 2 - 1) * radius) / (111 * Math.cos((center.lat * Math.PI) / 180));
  return { lat, lng };
}

// Call the loadMapScript function when the page loads
window.onload = initMap;
var previousMarker;
var interval;

function initMap() {
  clearInterval(interval);

  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 38.987003, lng: -76.942293 },
    zoom: 14,
    disableDefaultUI: true,
  });

  // Disable the zoom control and map type control
  map.setOptions({
    zoomControl: false,
    mapTypeControl: false,
    clickableIcons: false,
  });

  const result = getRandomLocation({ lat: 38.987003, lng: -76.942293 }, 0.785);

  const panorama = new google.maps.StreetViewPanorama(document.getElementById("pano"), {
    position: { lat: result.lat, lng: result.lng },
    pov: { heading: 165, pitch: 0 },
    zoom: 1,

    linksControl: false,
    panControl: false,
    addressControl: false,
    enableCloseButton: false,
    zoomControl: false,
    fullscreenControl: false,
    enableCloseButton: false,
    showRoadLabels: false,
  });

  var map;
  var timerElement = document.getElementById("timer");
  var counter = 20;

  // Start the timer update interval
  interval = setInterval(updateTimer, 1000);

  function updateTimer() {
    // Update the timer display
    if (counter != -1) {
      timerElement.innerHTML = counter;
      counter--;
    } else {
      window.location = "./end.html";
    }
  }  

  // Add a listener for the 'click' event
  map.addListener("click", function (event) {
    // Remove the previous marker if it exists
    if (previousMarker) {
      previousMarker.setMap(null);
    }

    // Create a marker at the clicked location and set it as the previous marker
    previousMarker = new google.maps.Marker({
      position: event.latLng,
      map: map,
    });
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

function getUserLocation() {
  var position = previousMarker.getPosition();
  lat = position.lat();
  lng = position.lng();
  window.location = "./end.html";
  return { lat, lng };
}

// Call the loadMapScript function when the page loads
window.onload = initMap;
function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: {lat: 0, lng: 0}
    });

    var infoWindow = new google.maps.InfoWindow({map: map});

    navigator.geolocation.getCurrentPosition(function(position) {
  
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);

      infoWindow.setContent('Found');
      map.setCenter(pos);
    });

  }

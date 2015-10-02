$(document).ready(function() {

  $.ajax('http://api.openweathermap.org/data/2.5/find?q=london&units=metric', {
      success: function(data){
        var location = data.list[0].name;
        var temperature = Math.floor(data.list[0].main.temp) + '°C';
        showCity(location);
        showWeather(temperature);
      }
    });

  showCity = function(city) {
    $('.city').text(city);
  };

  showWeather = function(weather) {
    $('.weather').html(weather);
  };

  $("#cityBtn").click(function(){
    var city = $('#city').val();
    $.ajax('http://api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric', {
      success: function(data) {
        var location = data.list[0].name;
        var temperature = Math.floor(data.list[0].main.temp) + '°C';
        showCity(location);
        showWeather(temperature);
      }
    });
  });

  $("#location").click(initiate_geolocation);

  function initiate_geolocation() {
      navigator.geolocation.getCurrentPosition(handle_geolocation_query)
  }

  function handle_geolocation_query(position){
      alert('Lat: ' + position.coords.latitude + ' ' +
            'Lon: ' + position.coords.longitude);
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      showLocation(lat, lon);

  };

  // function initMap(lat, lon) {
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: lat, lng: lon},
  //     zoom: 10
  //   });
  // };


  function showLocation(lat, lon) {
    $.ajax('http://api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&' +
    'lon=' + lon + '&units=metric', {
      success: function(data) {
        var location = data.name;
        var temperature = data.main.temp + '°C';
        showCity(location);
        showWeather(temperature);
      }
    });
  };
  //
  // function initMap() {
  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: lat, lng: long},
  //     zoom: 10
  //   });
  // }
//     var infoWindow = new google.maps.InfoWindow({map: map});
//
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function(position) {
//         var pos = {
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         };
//
//         infoWindow.setPosition(pos);
//         infoWindow.setContent('Location found.');
//         map.setCenter(pos);
//       }, function() {
//         handleLocationError(true, infoWindow, map.getCenter());
//       });
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   }
//
//
//
});

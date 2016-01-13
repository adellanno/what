$(document).ready(function() {

  $.ajax('//api.openweathermap.org/data/2.5/find?q=london&units=metric&APPID=e95855e73dd097a4ad32be4cb4c05bb8', {
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
    $.ajax('//api.openweathermap.org/data/2.5/find?q=' + city + '&units=metric&APPID=e95855e73dd097a4ad32be4cb4c05bb8', {
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

  function showLocation(lat, lon) {
    $.ajax('//api.openweathermap.org/data/2.5/weather?' + 'lat=' + lat + '&' +
    'lon=' + lon + '&units=metric&APPID=e95855e73dd097a4ad32be4cb4c05bb8', {
      success: function(data) {
        var location = data.name;
        var temperature = data.main.temp + '°C';
        showCity(location);
        showWeather(temperature);
      }
    });
  };

});

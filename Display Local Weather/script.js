$(document).ready(function(){
  var long;
  var lat;
  $.getJSON('http://ip-api.com/json', function(location){
    long = location.lon;
    lat = location.lat;
     var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=1e092a14857fefa57d2caa8842412c5b';
      $.getJSON(api, function(data) {
        var tempC = (data.main.temp - 273.15).toFixed(1);
        var tempF = (data.main.temp*9/5 - 459.67).toFixed(2);
        var boo = true;
        $( "button" ).click(function() {
          if (boo){
            $(".temp").html(tempF + "°F");
            $("button").html("Change to Celcius");
            boo = false;
          }
          else{
            $(".temp").html(tempC + "°C");
            $("button").html("Change to Fahrenheit");
            boo = true;
          }
        });
        
        var type = data.weather[0].description;
        var city = data.name + ", " + data.sys.country;
        $(".city").html(city);
        $(".type").html(type);
        $(".temp").html(tempC + "°C");
        if (type == "Clouds"){
          $('body').css("background-image", "url('https://upload.wikimedia.org/wikipedia/commons/a/a3/Cumulus_clouds_panorama.jpg')");
        }
        else if (type == "Haze"){
           $("body").css("background-image", "url('https://pbs.twimg.com/media/CIdTMkuUMAA_jrl.jpg:orig')");
        }
        else if (type == "Drizzle"){
           $('body').css("background-image", "url(http://i1.coventrytelegraph.net/incoming/article4703205.ece/alternates/s2197/Cloudy_Sky_V_by_surczak-Medium.jpg)");
        }
        else{
          $('body').css("background-image", "url('http://kingofwallpapers.com/weather-wallpaper/weather-wallpaper-006.jpg')");
        }
          
      });
  });

});
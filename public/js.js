jQuery(document).ready(function($) {

  $("#submit").on("click", function(event) {
    event.preventDefault();

    var city = $('#city').val().trim()
    var state = $('#state').val().trim()

    var tempAmount;
    var rainAmount;
    var humidityAmount;

    $.ajax({
        url: "/api/" + state + "/" + city,
        dataType : "json",
        success : function(parsed_json) {
          console.log('x');
          Promise.all([

          console.log(parsed_json),
          
          tempAmount = parseInt(parsed_json.current_observation.feelslike_f),
          
          rainAmount = parseInt(parsed_json.current_observation.precip_today_in),

          humidityAm = parseInt(parsed_json.current_observation.relative_humidity),

          ]).then(function() {
              console.log(tempAmount, rainAmount, humidityAm);
              temperature(tempAmount);
              rain(rainAmount);
              humidity(humidityAm);
          });
        }
    });
  });
});

function temperature(tempAmount) {
  if(tempAmount >= 85) {
      $("#tempDisplay").html("<img src='images/hotweather.png' style='width:150px; height:165px'/> <p class='text-center'><strong> It's hot! The temperature is: " + tempAmount + "</p>");

  } else if ( tempAmount < 85 && tempAmount >= 65 ) {
      $("#tempDisplay").html("<img src='images/hotweather.png' alt='temp' style='width:150px; height:165px'/> <p class='text-center'> <strong> Warm! The temperature is: " + tempAmount + "</strong></p>");

  } else if ( tempAmount < 65 && tempAmount >= 55) {
      $("#tempDisplay").html("<img src='images/coldWeather.jpg' alt='temp' style='width:150px; height:165px'/> <p class='text-center'><strong> Getting chilly...The temperature is: " + tempAmount + "</strong></p>");

  } else if ( tempAmount < 55 && tempAmount >= 32) {
      $("#tempDisplay").html("<img src='images/coldWeather.jpg' alt='temp' style='width:150px; height:165px'/> <p class='text-center'> <strong> Take a jacket. The temperature is: " + tempAmount + "</strong></p>");

  } else if ( tempAmount < 32 ) {
      $("#tempDisplay").html("<img src='images/coldWeather.jpg' alt='temp' style='width:150px; height:165px'/> <p class='text-center'> <strong> It's freezing! The temperature is: " + tempAmount + "</strong></p>");
  }
};

function rain(rainAmount) {
  if(rainAmount <= .5) {
      $("#rainDisplay").html("<img src='images/no-rain.jpg' style='width:150px; height:165px'/><p class='text-center'><strong> No rain! </strong></p>");
  } else if (rainAmount > .5) {
      $("#rainDisplay").html("<img src='images/umbrella.jpg' style='width:150px; height:165px'/> <p class='text-center'><strong> It's raining...</strong></p>");
  }
};

function humidity(humidityAm) {
  if(humidityAm >= 50) {
    $("#humidityDisplay").html("<img src='images/humid.jpg' style='width:150px; height:165px'/>");
  } else if (humidityAm < 50) {
    $("#humidityDisplay").html(" ")
  }
}

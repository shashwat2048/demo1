const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "64dbc07fc8msh3c77495732761c7p1fb25ajsn3192623b2f74",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed2.innerHTML = response.wind_speed;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Delhi");
// const getWeatherPerth = (city) => {
//   city = "perth";
//   fetch(
//     "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
//     options
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       cloud_pct_perth.innerHTML = response.cloud_pct;
//       temp_perth.innerHTML = response.temp;
//       feels_like_perth.innerHTML = response.feels_like;
//       humidity_perth.innerHTML = response.humidity;
//       min_temp_perth.innerHTML = response.min_temp;
//       max_temp_perth.innerHTML = response.max_temp;
//       wind_speed_perth.innerHTML = response.wind_speed;
//       wind_degrees_perth.innerHTML = response.wind_degrees;
//     })
//     .catch((err) => console.error(err));
// };

// cloud_pct.innerHTML = response.cloud_pct;
// temp.innerHTML = response.temp;
// feels_like.innerHTML = response.feels_like;
// humidity.innerHTML = response.humidity;
// min_temp.innerHTML = response.min_temp;
// max_temp.innerHTML = response.max_temp;
// wind_speed.innerHTML = response.wind_speed;
// wind_degrees.innerHTML = response.wind_degrees;
//-----------------------------------------------
// cloud_pct_perth.innerHTML = response.cloud_pct;
// temp_perth.innerHTML = response.temp;
// feels_like_perth.innerHTML = response.feels_like;
// humidity_perth.innerHTML = response.humidity;
// min_temp_perth.innerHTML = response.min_temp;
// max_temp_perth.innerHTML = response.max_temp;
// wind_speed_perth.innerHTML = response.wind_speed;
// wind_degrees_perth.innerHTML = response.wind_degrees;

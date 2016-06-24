var axios = require('axios');

// http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=5&appid=438b9bb8ef30cbf3934c6bed3ff483ff
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=438b9bb8ef30cbf3934c6bed3ff483ff

var api = "438b9bb8ef30cbf3934c6bed3ff483ff";

function getCurrentWeather (city) {
  return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=438b9bb8ef30cbf3934c6bed3ff483ff');
}

function getWeatherForecast(city) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city +'&cnt=5&appid=438b9bb8ef30cbf3934c6bed3ff483ff');
}

var helpers = {
  getWeatherInfo: function (city) {
    return axios.all([getCurrentWeather(city), getWeatherForecast(city)])
    .then(function (info) {
      return info.map(function (data) {
        console.log(data);
      })
    })
    .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
  },
  getForcast: function (city) {
    return getWeatherForecast(city).then(function (info) {
      console.log(info.data);
      return info.data;
    })
    .catch(function (err) {console.warn('Error in getForcast: ', err)})
  }
};

module.exports = helpers;

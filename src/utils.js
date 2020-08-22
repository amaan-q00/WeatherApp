const request = require('request')

const weather = (city, callback)=> {
  const url = 'http://api.openweathermap.org/data/2.5/weather?q='+encodeURIComponent(city)+'&units=metric&appid=2c00f06d41d95551a018289dc247b5aa'

  request({
    url, json: true
  }, (error, response)=> {
    if (error) {
      callback('Something went wrong, Check your internet connection and try again!!', undefined)
    } else if (response.body.message) {
      callback('No Data found, Check your input', undefined)
    } else {
      callback(
        undefined, {

          city: response.body.name,
          country: response.body.sys.country,
          weather: response.body.weather[0]. description,
          avg_temp: response.body.main.temp, //°C
          humidity: response.body.main.humidity, //%
          min_temp: response.body.main.temp_min,
          max_temp: response.body.main.temp_max,
          wind_speed: (response.body.wind.speed)*3.6, //kmph


        })
    }
  })

}

module.exports = weather
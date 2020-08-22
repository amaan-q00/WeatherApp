//main
const weatherForm = document.querySelector('form')
const searchText = document.querySelector('input')
const msg = document.querySelector('.msg')

weatherForm.addEventListener('submit', (e)=> {
  e.preventDefault()
  var city = document.querySelector(".city")
  var country = document.querySelector(".country")
  var weather = document.querySelector(".weather")
  var temp = document.querySelector(".temp")
  var min = document.querySelector(".min")
  var max = document.querySelector(".max")
  var humidity = document.querySelector(".humidity")
  var wind = document.querySelector(".wind")
  city.textContent = ''
  country.textContent = ''
  weather.textContent = ''
  temp.textContent = ''
  min.textContent = ''
  max.textContent = ''
  humidity.textContent = ''
  wind.textContent = ''

  const search = searchText.value
  msg.textContent = 'Loading...'
  const url = 'http://localhost:3000/weather?search='+search
  fetch(url).then((response)=> {
    response.json().then((data)=> {
      if (data.error) {
        msg.textContent = data.error
      } else {
        msg.textContent = ''
        msg.textContent = 'Forcast Report:'

        city.textContent = data.city
        country.textContent = data.country
        weather.textContent = data.weather
        temp.textContent = data.avg_temp.toFixed(2)
        min.textContent = data.min_temp.toFixed(2)
        max.textContent = data.max_temp.toFixed(2)
        humidity.textContent = data.humidity
        wind.textContent = data.wind_speed.toFixed(2)

      }
    })
  })
})
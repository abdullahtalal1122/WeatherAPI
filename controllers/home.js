

const axios = require('axios');
const apiKey = "6c5977b97cfa6b2d21c56a8d6e643425";
const units = 'metric';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const homeController = (req,res) => {

    const CityName = req.body.cityname;
    
    
    axios.get(apiUrl, {
      params: {
        q: CityName,
        appid: apiKey,
        units: units
      }
    })
    .then((response) => {
      
        const weatherData = {
            cityName: response.data.name,
            temperature: response.data.main.temp,
            weatherDescription: response.data.weather[0].description,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
            sunriseTime: new Date(response.data.sys.sunrise * 1000).toLocaleTimeString(),
            sunsetTime: new Date(response.data.sys.sunset * 1000).toLocaleTimeString()
          };
          
          res.render("weather", { weatherData });
          
    })
    .catch((error) => {  
      console.error(error);
    });
    
    }

exports.homeController = homeController;

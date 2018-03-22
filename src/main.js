import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { WeatherApi } from './weather-backEnd.js';

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    event.preventDefault();
    let city = $('#location').val();
    console.log(city);
    $('#location').val("");
    let weather = new WeatherApi();
    let promise = weather.getWeather(city);
    console.log(weather);

    promise.then(function(response) {
      let body = JSON.parse(response);
      let weatherArray = [];
    //   for(i=0; i<=weatherArray.length; i++)
    //   {if(body.main=(i);
    // });
    //   return weatherArray.push(i);
    //   $(".showTemp").append(weatherArray);
      body.weather.forEach(function(element) {
        weatherArray.push(weather.description + " " + element.humidity);
        console.log(element);
        });
        weatherArray.forEach(function(element) {
          $(".showTemp").append("<p>" + element + "</p>");
        });
      // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp}.`);
      //   $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      }, function(error) {
        $('.errors').text(`There was an error processing your request: ${error.message}`);
      });
    });
  });

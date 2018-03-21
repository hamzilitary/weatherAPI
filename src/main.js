import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

$(document).ready(function() {
  $('#dinoRandom').click(function() {
    event.preventDefault();
    let promise = dinoApi.getNames();

    promise.then(function(response) {
      let body = JSON.parse(response);
        $('.showDino').text(`The humidity in ${city} is ${body.main.humidity}%`);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
  });
});














// let getDino = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response){
//   $('.showDino').html(response);
//   getDino.then(response);
// });

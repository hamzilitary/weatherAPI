import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#dinoRandom').click(function() {
    event.preventDefault();
    // let words = $('#words').val();
    // $('#words').val("");
    // let paragraphs = $('#paragraphs').val();
    // $('#paragraphs').val("");
    // let request = new XMLHttpRequest();

    let getDino = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=1&words=1').then(function(response){
      $('.showDino').html(response);
      getDino.then(response);
    });


    // request.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     let response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // };

    // request.open("GET", url, true);
    // request.send();

    // let getElements = function(response) {
    //   $('.showDino').append(`The dino is ${response.main}%`);
    //   $('#errors').text("There was an error processing your request. Please try again.");
    //
    // }
  });
});

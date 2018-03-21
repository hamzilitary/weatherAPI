
var getDino = $.get(`http://dinoipsum.herokuapp.com/api/?format=html`),
  fillContainer = function(html) {
    $('.showDino').html(html);
    console.log("html: "+ html);
  },
  error = function() {
      console.log('No dinosaurs');
    };

getDinos.then(fillContainer, error);

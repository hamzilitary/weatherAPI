export class WeatherApi{
  constructor(){}
  getWeather(city) {
    console.log(city);

    let request = new XMLHttpRequest();
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d5b2be85f19a7c96bd325e2d819284f`;
    return new Promise(function(resolve, reject) {
      request.onload = function() {
        console.log(resolve);
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
      console.log(resolve);
    });
    };
}

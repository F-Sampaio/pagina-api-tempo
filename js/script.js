citySearch.addEventListener('click', search);



 function search(){
    var cityName = document.getElementById('cityName').value;

    var http = new XMLHttpRequest();
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b3a40c8e9ed10a3850cb4e90c6a5305e&units=metric`;

    http.open("GET", url, true);
    http.send();

    http.onreadystatechange = function() {
        var weather = JSON.parse(http.responseText)
        // console.log(weather);
        document.getElementById('city').innerHTML = weather.name;
        document.getElementById('weather').innerHTML = Math.round(parseFloat(weather.main.temp)) + ' °C';

        // console.log(`Cidade: ${weather.name}`)
        // console.log(`Atual: ${Math.round(parseFloat(weather.main.temp))}`);

        // console.log(http.responseText)
    }

}
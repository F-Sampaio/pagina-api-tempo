citySearch.addEventListener('click', search);

 function search(){
    var cityName = document.getElementById('cityName').value;

    var http = new XMLHttpRequest();
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=b3a40c8e9ed10a3850cb4e90c6a5305e`;

    http.open("GET", url, true);
    http.send();

    http.onreadystatechange = function() {
        console.log(http.responseText)
    }

}
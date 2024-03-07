//Consumiendo APIS
//1. Declarar una variable para almacenar la url del api.
let url="https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z/top-tracks?market=US"

//2. Almacenar en una variable o en varias variables datos de control que se nececiten en el api.
let token="Bearer BQDFv69jPDSdyZFDzuK0ShAQ7RWx8SAdXn3wl2UWOxCp6UMCQDhvsddpTiE-qYnG3062cUM8GczWr8iUrFywcspuVKxIckO2sBkHgCGsOXgg_qbTN48"

//3. Construir la peticion que se va aenviar.
let peticion={
    method:"GET",
    headers:{
        Authorization:token
    }
}
//4. Ejecutar el consumo del api.
fetch(url, peticion)
.then(function(){})
.then(function(){})
.catch(function(){})
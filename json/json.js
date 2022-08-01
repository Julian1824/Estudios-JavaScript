'use strict'

var pelicula = {

    title: "El despertar",
    year: 2021,
    pais: "Colombia"

};

var peliculas = [
    { title: "Hola Empeze a darle duro", year: 2021, pais: "Africa" },
    pelicula
]

var caja_pelis = document.querySelector("#peliculas");
var index;

for (index in peliculas) {
    var p = document.createElement("p");
    var br = document.createElement("br");
    p.append(peliculas[index].title + " - " + peliculas[index].year);
    caja_pelis.append(br);
    caja_pelis.append(p);
}
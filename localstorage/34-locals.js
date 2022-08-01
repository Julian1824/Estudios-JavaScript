'use strict'

//LocalStorage
/*
Probar disponibilidad de LocalStorage
if (typeof(Storage) !== 'undefined') {
    console.log("Funciona LocalStorage");
} else {
    console.log("Erro 500 LocalStorage")
}*/

var x = prompt("Ingrese los datos");

//Guardar Datos
localStorage.setItem("titulo", x);

//Recuperar Elemento

console.log(localStorage.getItem("titulo"));

//document.querySelector("#peliculas").innerHTML = (localStorage.getItem("titulo"));


var parrafo = document.createElement("h1");
parrafo.append(x);
peliculas.append(parrafo);

//parrafo.style.background = "red";

var usuarios = {
    Nombre: "Julian",
    Edad: "18"
}

localStorage.setItem("user", JSON.stringify(usuarios));

var userjs = JSON.parse(localStorage.getItem("user"));

console.log(userjs);

document.getElementById("peliculas").append(userjs.Nombre);


localStorage.removeItem("user");

localStorage.clear();
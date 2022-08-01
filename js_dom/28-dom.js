'use strict'

//Clase Dom , Por favor Pendiente, Aprender para mejorar

//DOCUMENT ODJECT MODEM

/*var caja = document.getElementById("micaja").innerHTML;*/

//var caja = document.getElementById("micaja");

/*todosDiv[2].style.background = "red";
var texto = todosDiv[2].textContent;
 parrafo.appendChild(texto);
        document.querySelector("#miseccion").appendChild(parrafo);

        todosDiv[2].innerHTML = "!TEXTO CAJA JS¡";
*/

var caja = document.querySelector("#micaja");

function micolor(color) {
    caja.style.background = color;
}

caja.innerHTML = "!TEXTO CAJA JS¡";
caja.style.background = "red";
caja.style.color = "white";
caja.style.padding = "20px";


var todosDiv = document.getElementsByTagName('div');

var seccion = document.querySelector('#miseccion');

var hr = document.createElement("hr");

console.log(todosDiv);
//todosDiv.array.forEach((valor, indice) => {
var valor;
for (valor in todosDiv) {
    //console.log(todosDiv[valor]);
    if (typeof todosDiv[valor] == "string") {
        var parrafo = document.createElement('p');
        var texto = document.createTextNode(todosDiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }

}
seccion.append(hr);

var divrojo = document.getElementsByClassName('rojo');

var div;
for (div in divrojo) {
    ///if (typeof todosDiv[div] != undefined) {
    if (divrojo[div].className == "rojo") {
        divrojo[div].style.background = "red";

    }
}

console.log(divrojo);

/*
//Query

var classrojo = document.querySelector('.rojo');
classrojo.style.background = "green";
console.log(classrojo);*/
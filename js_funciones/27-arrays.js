'use strict';

/*
1. Pida 6 numero por pantalla y los meta en un array.
2.Mostrar el array por consola y por la pagina principal.
3 Ordenarlo y mostrarlo
4.Inverti su nombre y mostrarlo.
5. Mostrar cuantos elementos tiene el array por
6.Busqueda de un valor introducido, que nos diga si lo encuentra o el indice.
*/

function mostrar(elementos, texto = "") {
    document.write("<h1>Contenido de array" + texto + "</h1>");
    document.write("<ul>")
    elementos.forEach((elemento, index) => {
        document.write("<li>" + elemento + "</li>");
    });
    document.write("</ul>")
}

var numeros = [];

for (var i = 0; i <= 5; i++) {
    // numeros[i] = parseInt(prompt("Por favor dijite un numero", 0));
    numeros.push(parseInt(prompt("Por favor dijite un numero", 0)));
}

mostrar(numeros);
//Organizar todo el array de Datos
numeros.sort(function(a, b) { return a - b });
mostrar(numeros, " Orden");
console.log(numeros);

numeros.reverse(function(a, b) { return a - b });
mostrar(numeros, " Invertido");
console.log(numeros);


document.write("<h1> Total de Numeros: " + numeros.length + " elemetos </h1>");

var busquedad = parseInt(prompt("La pocision", 0));

var posicion = numeros.findIndex(numero => numero == busquedad);

if (posicion && posicion != -1) {
    document.write("<h1>ECONTRADO</h1>");
    document.write("<h1> La pocicionn es " + posicion + "</h1>")
} else {

    document.write("<h1>NO ECONTRADO</h1>");
}
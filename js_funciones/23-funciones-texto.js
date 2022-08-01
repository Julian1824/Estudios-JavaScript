'use  strict';
//Trasfrmacion de textos.
/*
var datoNumerico = numero.toString();
console.log(datoNumerico);

var datoTexto1Mayus = texto1.toUpperCase();

console.log(datoTexto1Mayus);

var datoTexto1Minus = texto1.toLowerCase();

console.log(datoTexto1Minus);

console.log(texto2.length);

var TextoCompleto = texto1 + " " + texto2;
console.log(TextoCompleto);

var Completo = texto2.concat(" " + texto1);
console.log(Completo);
*/
var numero = 444;
var texto1 = "Bienvenido";
var texto2 = "Clase Nueva Nueva"

var busqueda = texto2.indexOf("Nueva");
console.log(busqueda);

var busqueda1 = texto2.lastIndexOf("Nueva");
console.log(busqueda1);

var busqueda2 = texto2.search("Perez");
console.log(busqueda2);

var busqueda3 = texto2.match(/Nueva/gi);
console.log(busqueda3);

var busqueda4 = texto2.substr(6, 5);
console.log(busqueda4);

var busqueda5 = texto2.charAt(6);
console.log(busqueda5);

var busqueda6 = texto2.startsWith("Clase");
console.log(busqueda6);

var busqueda7 = texto2.endsWith("Nueva");
console.log(busqueda7);

var busqueda8 = texto2.includes("Clase");
console.log(busqueda8);
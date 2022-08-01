'use strict'
//Una funcion anonima es una funcion que no tiene nombre
/*
var Pelicula = function(nombre) {
    return "El nombre de la pelicula es: " + nombre;
}
*/

function sumame(numero1, numero2, sumaYmuestra, sumaYpordos) {
    var suma = numero1 + numero2;

    sumaYmuestra(suma);
    sumaYpordos(suma);

    return suma;
}
sumame(10, 2, function(datos) {
    console.log("La suma es: ", datos);
}, function(datos) {
    console.log("Por dos es: ", (datos * 2));
});
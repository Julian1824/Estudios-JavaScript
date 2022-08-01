'use strict'
/*
Muestre todos los numero dividores por un numero introducido
*/
var numero = parseInt(prompt("Por favor dijite un numero"));
for (var i = 0; i <= numero; i++) {
    if (numero % i == 0) {
        console.log("Numero divisores: " + i)
    }
}
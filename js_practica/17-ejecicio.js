'use strict'
/*
Tabla de multiplicar de un numero introducio por pantalla
*/
/*
var numero = parseInt(prompt("Por favor dijite un numero"));
for (var i = 1; i <= 12; i++) {
    document.write(i * numero + "<br>");
}*/
for (var c = 1; c <= 10; c++) {
    document.write("<h1> Tabla de multiplicar: " + c + "</h1>")
    for (var i = 1; i <= 12; i++) {
        document.write(i * c + "<br>");
    }
}
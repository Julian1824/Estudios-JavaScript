'use strict'
/*
Que nos diga si un numero es par o impar

1.Ventana Prompt
2.Si no es valido que nos pida de nuevo el numero
*/
var numero = parseInt(prompt("Por favor dijite un numero"));

while (isNaN(numero) || numero <= 0) {
    numero = parseInt(prompt("Por favor dijite un numero"));
}

if (numero % 2 == 0) {
    document.write("Es par" + numero);
} else if (numero % 2 == 1) {
    document.write("No en par " + numero);
} else {
    alert("Por favor recarga la pagina");
}
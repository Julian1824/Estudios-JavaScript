'use strict'

/*Hacer un programa que muestre todos los numero entre dos numeros introducidos*/


var numero1 = parseInt(prompt("Dijite el primer numero", 0))
var numero2 = parseInt(prompt("Dijite el segundo numero", 0))

if (numero1 <= numero2) {
    document.write("Se ejecuta el bucle 1" + "<br>");
    for (var i = numero1; i <= numero2; i++) {
        document.write("Numero #" + i + "<br>");
    }
} else if (numero1 >= numero2) {
    document.write("Se ejecuta el bucle 2" + "<br>");
    for (var i = numero2; i <= numero1; i++) {
        document.write("Numero #" + i + "<br>");
    }
}
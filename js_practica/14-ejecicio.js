'use strict'

/*
Mostrar todos los numero impares entre dos numeros indroducidos por el usuario.
*/

var numero1 = parseInt(prompt("Dijite el primer numero", 0))
var numero2 = parseInt(prompt("Dijite el segundo numero", 0))
    /*
    for (var i = numero1; i <= numero2; i++) {
        if (i % 2 == 1) {
            document.write(i + "<br>")
        }
    }*/

while (numero1 <= numero2) {
    numero1++;
    if (numero1 % 2 != 0) {
        document.write(numero1 + "<br>")
    }
}
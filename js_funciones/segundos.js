'use strict'

/*
Mostrar todos los numero impares entre dos numeros indroducidos por el usuario.
*/

var numero1 = parseInt(prompt("Dijite su primer numero"));
var numero2 = parseInt(prompt("Dijite su segundo numero"));
/*
for (var i = num1; i <= num2; i++) {

    if (i % 2 != 0) {
        document.write("Numero impar" + i);
    }
} */

while (numero1 <= numero2) {
    numero1++;
    if (numero1 % 2 != 0) {
        document.write("Numero impar" + numero1);
    }
}
/*
while (numero1 <= numero2) {
    numero1++;
    if (numero1 % 2 != 0) {
        document.write(numero1 + "<br>")
    }
}
*/
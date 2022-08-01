'use strict'

/*Con un buble hacer una suma y el promedio de los resultados*/

var suma = 0;
var contador = 0;
do {
    var numero = parseInt(prompt("Por favor dijite un numero"));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;

        contador++;
    }
    console.log(suma);
    console.log(contador);
}
while (numero >= 0) {
    alert("La suma total es: " + suma);
    alert("El promedio es de: " + (suma / contador))
}
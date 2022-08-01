'use string'

/*
Hacer un ejercio que sume y promedie todos los numero pero si un numero es negativo se detenga
*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Por favor dijite su primer numero: ", 0));
    if (isNaN(numero)) {
        numero = 0;
    } else if (numero >= 0) {
        suma = suma + numero;


        contador++;
    }
    console.log(suma);
    console.log(contador);

}
while (numero > 0) {
    alert("La suma de todos los numeros: " + suma);
    alert("El promedio de todos los numeros: " + (suma / contador));
}
document.write(contador);
/*
do {
    alert("Solo cuanto sea igual 20");
    var sign = prompt("What's your sign?");
} while (sign != 20) {
    alert("Llego a 20");
}*/
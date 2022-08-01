/*Programa que pida dos numeros y diga cual es el mayor, el menor y si son iguales*/

var PrimerNumero = parseInt(prompt("Por favor dijite un numero", 0));
var SegundoNumero = parseInt(prompt("Por favor dijite un segundo numero", 0));

while (PrimerNumero <= 0 || isNaN(PrimerNumero) || isNaN(SegundoNumero) || SegundoNumero <= 0) {
    PrimerNumero = parseInt(prompt("Por favor dijite un numero", 0));
    SegundoNumero = parseInt(prompt("Por favor dijite un segundo numero", 0));
}

if (PrimerNumero == SegundoNumero) {
    document.write("Los numeros " + PrimerNumero + " = " + SegundoNumero + " Son iguales");
} else if (PrimerNumero > SegundoNumero) {
    document.write("El Primer Numero es mayor" + PrimerNumero + "el segundo es menor");
} else if (PrimerNumero < SegundoNumero) {
    document.write("El Segundo Numero es mayor " + SegundoNumero + "el primero es menor");
} else {
    alert("INTRODUCE UN VALOR");
}
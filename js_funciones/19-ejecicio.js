'use strict'
/*
Una funcion es una aplicacion reutilizable de un conjunto de instriciones
*/
function PorConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Divicion: " + (numero1 / numero2));
}

function PorPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2) + "<br>");
    document.write("Resta: " + (numero1 - numero2) + "<br>");
    document.write("Multiplicacion: " + (numero1 * numero2) + "<br>");
    document.write("Divicion: " + (numero1 / numero2) + "<br>");
}

function Calculadora(numero1, numero2, mostrar = false) {
    if (mostrar == false) {
        PorConsola(numero1, numero2);
    } else {
        PorPantalla(numero1, numero2);
    }
    /*console.log("Hola soy una calculadora");
    return "Hola soy una calculadora";*/
}
Calculadora(3, 8);
Calculadora(3, 5, true);
/*
Calculadora(12, 8);

for (var i = 0; i <= 10; i++) {
    console.log(i);
    Calculadora(i, 8);
}
*/
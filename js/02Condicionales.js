'Use strict'

//Condicion IF
//Instruciones que permiten comparar
/*
Mayor: >
Menor: <
Mayor o igual: >=
Menor o igual: <=
Igual: ==
Distinto: !=

*/
//IF anidados
/* 
var Edad1 = 18;

if (Edad1 >= 18) {
    console.log("Usted es mayor de edad");
    if (Edad1 == 18) {
        console.log("Eres muy joven");
    }
} else if (Edad1 < 18) {
    console.log("Usted es menor de edad");
} else {
    console.log("Holaa");
}
//Operadores de control
var year = 2018;
if (year != 2002) {
    console.log("El es igual " + year);
}


if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
} else {
    console.log("Era post moderna");
}
if (year == 2000 || (year >= 2018 && year == 2018)) {
    console.log("El año esta en el sistema");
} else {
    console.log("Por favor ingresa otra fecha");
}*/
var edad = 41;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "Cumpliste la mayoria de edad ";
        break;
    case 25:
        imprime = "Eres adulto";
        break;
    case 40:
        imprime = "Crisis 40";
        break;
    case 60:
        imprime = "Anciano";
        break;
    default:
        imprime = "Tu edad no esta registrada";
        break;
}
console.log(imprime);
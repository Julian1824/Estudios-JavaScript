'use strict'
/*
- Que pida dos numeros por pantalla
- Si metemos uno igual que no salte una alerta
- Que muestre los resultados por cuerpo de pagina, consola y alerta
*/
var numero = parseInt(prompt("Por favor dijite el primer numero"));
var numero1 = parseInt(prompt("Por favor dijite el segundo numero"));

while (numero <= 0 || numero1 <= 0 || isNaN(numero) || isNaN(numero1)) {
    numero = parseInt(prompt("Por favor dijite el primer numero"));
    numero1 = parseInt(prompt("Por favor dijite el segundo numero"));
}
var resultado = ("El resultado es: " + (numero + numero1) + "<br>") +
    ("El resultado es: " + (numero - numero1) + "<br>") +
    ("El resultado es: " + (numero * numero1) + "<br>") +
    ("El resultado es: " + (numero / numero1) + "<br>");

document.write(resultado);
console.log(resultado);
alert(resultado);
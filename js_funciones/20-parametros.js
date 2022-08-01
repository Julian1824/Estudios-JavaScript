'use strict'

//Parametros REST Y SPREAD

function Lista(fruta1, fruta2, fruta3, ...resto_de_frutas) {
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log("Fruta 3: " + fruta3);
    console.log(resto_de_frutas);
}

Lista("Mango", "Piña", "Naranja", "Sandia", "Papaya");

var frutas = ["Naranja", "Piña"];
Lista(...frutas, "Naranja", "Sandia", "Papaya");
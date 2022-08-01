'use strict'

//Eventos del raton

/*Para dos clic colocar ondblclick*/

function CambiarBoton() {
    console.log("Contador");
    var bg = boton.style.background;
    if (bg == "red") {
        boton.style.background = "green"
        boton.style.padding = "200px";
        boton.style.width = "10%";
    } else {

        boton.style.background = "red";
        boton.style.padding = "20px";
        boton.style.width = "100%";

    }

    return true;
};

function ColorLetra() {
    boton.style.color = "white";
}

var boton = document.getElementById("boton");

//click
boton.addEventListener('click', function() {
    CambiarBoton();
    this.style.border = "10px solid blue"
});

//Mouse over
boton.addEventListener('mouseover', function() {
    boton.style.background = "blue"
});

boton.addEventListener('mouseout', function() {
    boton.style.background = "black"
    ColorLetra();
});
'use strict'

window.addEventListener("load", () => {
    var input = document.getElementById("123");
    //Focus

    input.addEventListener('focus', function() {
        console.log("Estas dentro del Input");
        this.style.background="red"
    });

    //Blur
    input.addEventListener('blur', function() {
        console.log("Estas fuera del Input");
    });

    //Keydown

    input.addEventListener('keydown', function(event) {
        console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));
    });

    //Keypress

    input.addEventListener('keypress', function(event) {
        console.log("dsd     tecla precionada", String.fromCharCode(event.keycode));
    });

    //Keyup
    input.addEventListener('keyup', function(event) {
        console.log("Alza tecla precionada", String.fromCharCode(event.keycode));
    });
});
'use strict'
try {

    // código...
    window.addEventListener('load', function() {
        function intervalo() {
            var tiempo = setInterval(function() {
                console.log("Hola Mundo");
                if (titulo == "red") {
                    titulo.style.color = "red"
                } else {
                    titulo.style.color = "green"
                }


            }, 1000);
            return tiempo;
        }

        var tiempo = intervalo();

        var stop = document.querySelector("#stop");

        stop.addEventListener("click", function() {
            alert("Haz parado")
            clearInterval(tiempo);
        });




        var start = document.querySelector("#start");

        start.addEventListener("click", function() {
            alert("Haz INICIADO")
            intervalo();
        });

    });
} catch (err) {
    console.log("err");
    // manipulación de error
}
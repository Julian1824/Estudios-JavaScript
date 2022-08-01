'use strict'

window.addEventListener("load", function() {
    console.log("Dom Cargado");

    var form = document.querySelector("#form");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none"
    
    form.addEventListener('submit', function() {
        console.log("Evento Sumibt Capturado");

        var Nombre = document.querySelector("#Nombre").value;
        var Apellido = document.querySelector("#Apellido").value;
        var edad = parseInt(document.querySelector("#edad").value);
        var inputnom = document.querySelector("#Nombre");
        var inputapell= document.querySelector("#Apellido");
        var inputedad = document.querySelector("#edad");

        if (Nombre.trim() == null || Nombre.trim().length == 0) {
            alert("Campo Nombre Vacio");
            inputnom.style.border = "2px solid #FF0000";
            inputnom.addEventListener('blur', function() {
                inputnom.style.border = "2px solid #2C2626";
            });
            return false;
        }else if (Apellido.trim() == null || Apellido.trim().length == 0) {
            alert("Campo Apellido Vacio");
            inputapell.style.border = "2px solid #FF0000";
            inputapell.addEventListener('blur', function() {
                inputapell.style.border = "2px solid #2C2626";
            });
            return false;
        }else if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("Campo edad, por favor dijite un valor valido");
            inputedad.style.border = "2px solid #FF0000";
            inputedad.addEventListener('blur', function() {
                inputedad.style.border = "2px solid #2C2626";
            });
            return false;
        }
    
        if(edad == 18){
            box_dashed.style.color = "#FF0000";
        }

        box_dashed.style.display = "block";
        /*
        var Datos = [Nombre, Apellido, edad];
        var indice;
        for (indice in Datos) {
            var parrafo = document.createElement("p");
            parrafo.append(Datos[indice]);
            box_dashed.append(parrafo);
        }
        */
        var p_nombre = document.querySelector("#p_nombre")
        var p_apellido = document.querySelector("#p_apellido")
        var p_edad = document.querySelector("#p_edad")
        p_nombre.innerHTML = Nombre;
        p_apellido.innerHTML = Apellido;
        p_edad.innerHTML = edad;

    });
});
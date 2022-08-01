'use strict'

var form = document.querySelector("#formovie");

form.addEventListener("submit", function() {
    var titulo = document.querySelector("#addmovie").value;
    if (titulo.length >= 1) {
        localStorage.setItem(titulo, titulo);
    } else {
        alert("Campo Vacio")
    }

});
var ul = document.querySelector("#peliculas-list");
for (var i in localStorage) {
    var li = document.createElement("li");
    if (typeof localStorage[i] == "string") {
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var FormDelete = document.querySelector("#forDeleteMovie");

FormDelete.addEventListener("submit", function() {
    var titulo = document.querySelector("#DeleteMovie").value;
    if (titulo.length >= 1) {
        localStorage.removeItem(titulo);
    } else {
        alert("Campo Vacio")
    }

});

var forClearMovie = document.querySelector("#forClearMovie");
forClearMovie.addEventListener("submit", function() {
    localStorage.clear();
});

'use strict'
var formu = document.querySelector("#form");

formu.addEventListener("submit", function(){
    var campo1 = document.querySelector("#gastos").value;
    var input = document.querySelector("#gastos")
    var campo2 = document.querySelector("#comentario").value;
  /*  if(campo1 != 'string' || lenght.campo1 == 0){
        alert("Por favor llenar campo");*/
    if(campo1 == null || campo1 <= 0){
        input.style.border = "2px solid #FF0000"
        alert("Campo  Vacio");
        return input.style.border = "2px solid #FF0000";
    }if (campo2.trim() == null || campo2.trim().length == 0) {
        alert("Campo Edad Vacio");
    }
    var key = Math.floor(Math.random() * 11);
    localStorage.setItem(key,campo2);
});
    var ul = document.querySelector("#list");
for(var i in localStorage) {
    var li = document.createElement("li");
    document.write(localStorage.key);
    if (typeof localStorage[i] == "string") {
         li.append(localStorage[i]);
        ul.append(li);
    }
}

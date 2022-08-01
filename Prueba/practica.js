'use strict'

///Pintar pares de un color diferente a los pares

try {
window.addEventListener('load', () =>{
    /*var Num1 = parseInt(prompt("Dijitar Numero"));
    var signo = prompt("Decrementar" + "-" +"Incrementar" + "+" );*/
  /*  if(signo=="+"){
        console.log("Menor a Mayor");
    for(var i = 0; i <= Num1; i++){
        console.log(i);
    }
}else if(signo=="-"){
    console.log("Mayora Menor");
    for(var i = Num1; i >= 0; i--){  
        console.log(i);
    }
}*/
function limpiar(){
    location.reload();
}
function CambioColor(){

}

var btn1 = document.querySelector("#incr");
var btn2 = document.querySelector("#decr");
var clean = document.querySelector("#limpiar");
clean.addEventListener('click',function(){
    limpiar();
});
var contador1 = 0;
var contador2 = 0;
btn1.addEventListener('click', function(){
    contador1++;
    var seccion = document.querySelector('#seccion1');
    console.log("Menor a Mayor");
    var valor = parseInt(document.querySelector("#valor").value);
    for(var i = 0; i <= valor; i++){
        if(i % 2 == 0){
        var parrafo = document.createElement('li');
        parrafo.style.color="white"
        parrafo.style.background="red"
        parrafo.append(i);
        seccion.append(parrafo);
    }else {
        var parrafo = document.createElement('li');
        parrafo.style.color="white"
        parrafo.style.background="green"
        parrafo.append(i);
        seccion.append(parrafo);
    }
}
    console.log(contador1);
});
btn2.addEventListener('click', function(){
    contador2++;
    var seccion = document.querySelector('#seccion1');
    console.log("Mayora Menor");
    var valor = parseInt(document.querySelector("#valor").value);
    for(var i = valor; i >= 0; i--){  
        
            if(i % 2 == 0){
            var parrafo = document.createElement('li');
            parrafo.style.color="white"
            parrafo.style.background="blue"
            parrafo.append(i);
            seccion.append(parrafo);
        }else {
            var parrafo = document.createElement('li');
            parrafo.style.background="yellow"
            parrafo.append(i);
            seccion.append(parrafo);
        } 
    }

console.log(contador2);
});
});
    }catch (error) {
    console.error(error);
  }
  
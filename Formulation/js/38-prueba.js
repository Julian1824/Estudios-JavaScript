'use strict'

addEventListener("load",function(){

    
    function button(){
        var txt;
        if (confirm("Press a button!")) {
          txt = "You pressed OK!";
        } else {
          txt = "You pressed Cancel!";
        }
        document.getElementById("demo").innerHTML = txt;
    }
});
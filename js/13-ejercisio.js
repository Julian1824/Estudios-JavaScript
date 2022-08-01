'user String'


/*Hacer un programa que muestr todos los numero entre dos numeros introducidos*/

var numero1 = parseInt(prompt("Digita tu primer numero", 0));
var numero2 = parseInt(prompt("Digita tu segundo numero", 0));

for (var i = numero1; i <= numero2; i++) {

    document.write("Numero #" + i + "<br>");
}

/*
for (var i = 1; i <= sign; i++) {
    document.write("Numero: " + i)
}*/
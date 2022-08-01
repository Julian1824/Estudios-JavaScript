'use strict'

/*Proma que pida 2 numero que di cual es mayor o menor e iguales*/

var PrimerNumero = parseInt(prompt("Por favor dijite su primer numero", 0));
var SegundoNumero = parseInt(prompt("Por favor dijite su segundo numero", 0));

while (PrimerNumero <= 0 || SegundoNumero <= 0 || isNaN(PrimerNumero) || isNaN(SegundoNumero)) {
    PrimerNumero = parseInt(prompt("Por favor dijite su primer numero", 0));
    SegundoNumero = parseInt(prompt("Por favor dijite su segundo numero", 0));
}
if (PrimerNumero == SegundoNumero) {
    document.write("Los numero son iguales: " + PrimerNumero + " = " + SegundoNumero);
} else if (PrimerNumero > SegundoNumero) {
    document.write("El Primer numero es mayor que: " + PrimerNumero + " > " + SegundoNumero);
} else if (PrimerNumero < SegundoNumero) {
    document.write("El Segundo numero es mayor que: " + PrimerNumero + " < " + SegundoNumero);
} else {
    alert("INTRODUCE UN NUMERO");
}
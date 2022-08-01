'use strict'

//Browser Object Modem

var intFrameWidth = window.innerWidth;
console.log(intFrameWidth);
console.log(window.innerHeight);

console.log(window.location);
console.log(window.location.href);


function redirect(url) {
    window.location.href = url;
}

function abrirventana(url) {
    window.open(url, "", "width=500px, height=300px")
}
/*
function getBoom() {
    console.log(screen.Width);
    console.log(screen.Height);
}


getBoom();

*/
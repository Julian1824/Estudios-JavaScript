'use strict'
// Fetch ajax y peticiones servidor / apis rest

var divs_usuarios = document.querySelector("#usuarios");
var divs_profesor = document.querySelector("#profesor");
var divs_janet = document.querySelector("#janet");

getusuarios()
    .then(data => data.json())
    .then(users => {

        listados(users.data);
        return getinfo();

    }).then(data => {
        divs_profesor.innerHTML = data;
        return getjanet();
    })
    .then(data => data.json())
    .then(user => {
        janet(user.data);
    });


function getusuarios() {
    return fetch('https://reqres.in/api/users');

}

function getjanet() {
    return fetch('https://reqres.in/api/users/2');

}

function getinfo() {
    var profesor = {
        nombre: 'Julian',
        apellido: 'Bedoya',
        tel: 2141560
    };

    return new Promise((resolve, reject) => {
        var letra = "";

        setTimeout(function() {
            letra = JSON.stringify(profesor);
            if (typeof(letra) != 'string' || letra == '') {
                return reject("Datos erroneos");
            } else {
                return resolve(letra);
            }
        }, 3000);
    });
}


function listados(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3')
        let avatar = document.createElement('img')

        nombre.innerHTML = i + "--" + user.first_name + "--" + user.last_name;
        avatar.src = user.avatar


        divs_usuarios.appendChild(nombre);
        divs_usuarios.appendChild(avatar);

        var cargado = document.querySelector("#cargado").style.display = "none";


    });
}

function janet(user) {

    let nombre = document.createElement('h3')
    let avatar = document.createElement('img')

    nombre.innerHTML = user.first_name + "--" + user.last_name;
    avatar.src = user.avatar
    divs_janet.appendChild(nombre);
    divs_janet.appendChild(avatar);
    var cargado = document.querySelector("#janet #cargado").style.display = "none";



}
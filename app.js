// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Se declara la lista inicial y el indice inicial
let listaDeAmigos = [];
let indice = 0;

//Funcion que valida que el campo de la caja de texto no este vacio y si no lo esta agrega el nombre a la lista.
let agregarAmigo = () => {
    if (document.getElementById('amigo').value === "") {
        alert("¡El campo esta vacio! Por favor, escriba un nombre");
    } else {
        let nuevoAmigo = document.getElementById('amigo').value;
        //console.log(nuevoAmigo);
        listaDeAmigos.push(nuevoAmigo);
        //console.log(listaDeAmigos);
        limpiarPlaceholder();
        const elementosHTML = listaDeAmigos.map(amigo => `<li>${amigo}</li>`).join('');
        asignarTextoElemento("listaAmigos", elementosHTML);
    
    }

}

// Esta funcion valida la longitud del arreglo, si no hay nombres agregados, muestra una alerta que indica que no hay nombres
// si solo hay uno, imprime directamente el resultado
//si hay mas de 1, entonces se procede a hacer el sorteo
let sortearAmigo = () => {
    if (listaDeAmigos.length === 0){
        alert('No hay nombres agregados');
    } else if (listaDeAmigos.length === 1){
        //console.log(listaDeAmigos[0])
    } else {
        indice = Math.floor(Math.random() * listaDeAmigos.length)
        //console.log(indice);
        //console.log(listaDeAmigos[indice]);
        nombreSorteado = listaDeAmigos[indice];
        asignarTextoElemento("listaAmigos", "");
        asignarTextoElemento("resultado", `El nombre sorteado es: ${nombreSorteado}`);
    }
}

let asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

let limpiarPlaceholder = () => {
    document.querySelector('#amigo').value = '';
}


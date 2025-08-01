// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


//- - - - - - - - - - - - - - - - - - - TAREA 1 - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//Crea un array para almacenar los nombres
let listadoNombres = [];


//Implementa una función para agregar amigos al array
function agregarAmigo() {
    const input = document.querySelector("#amigo"); //Toma lo ingresado por input (id=amigo) y lo asocia a input
    const nombre = input.value; //Nombre será dicho texto. Podría ser redundante tener 2 variables para el input
    console.log("Ingresó un nombre nuevo: " + nombre);

    if (nombre === "") {
        alert("Campo vacío. No ingresaste un nombre válido.");
        return;
    }

    listadoNombres.push(nombre); //Agrega el nombre al array
    console.log(`listadoNombres = ${listadoNombres}`); //Revisión
    input.value = ""; //Limpiar el input antes de terminar la función

    mantenerListadoAmigos();
}



/*
    //Tarea 2 - Fué mi primer intento
    let agregarLi = document.querySelector('#listaAmigos'); //toma el nuevo integrante del array
    agregarLi.innerHTML += `<li>${nombre}</li>` //Y lo agrega al DOM en formato lista
}
*/


function mantenerListadoAmigos() { 
    const lista = document.querySelector('#listaAmigos'); 
    lista.innerHTML = ""; //Crucial para evitar duplicaciones


    for (let i = 0; i < listadoNombres.length; i++) { 
        lista.innerHTML += `<li>${listadoNombres[i]}</li>`;
    }
}

//Fn sortearAmigo, ul id=resultado
function sortearAmigo() {
    let mostrarGanador = document.getElementById('resultado'); //Preparar la modificación del DOM

    if (listadoNombres.length != 0) { //Comprobar que el array tenga contenido
        let sortea = Math.floor(Math.random() * listadoNombres.length); //Elige indice aleatorio existente
        let seleccionado = listadoNombres[sortea]; //El ganador tiene nombre
        console.log(`El índice seleccionado es ${sortea}, que corresponde a ${seleccionado}`); //control

        mostrarGanador.innerHTML += `<li>El amigo secreto sorteado es: ${seleccionado}</li>`;
    } else {
        console.log('No ingresaste ningún nombre');
    }
}


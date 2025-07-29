// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.


//Crea un array para almacenar los nombres
let listadoNombres = [];


//Implementa una función para agregar amigos 
function agregarAmigo() {
    let input = document.querySelector("#amigo"); //Toma lo ingresado por input (id=amigo) y lo asocia a input
    let nombre = input.value; //Nombre será dicho texto. Podría ser redundante tener 2 variables para el input
    console.log("Ingresó un nombre nuevo: " + nombre);

    if (nombre === "") {
        alert("Campo vacío. No ingresaste un nombre válido.");
        return;
    }

    listadoNombres.push(nombre); //Agrega el nombre al array
    console.log(`listadoNombres = ${listadoNombres}`) //Revisión
    input.value = ""; //Limpiar el input antes de terminar la función
}


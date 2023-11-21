/**
 * GET
 */

// const urlBase = "https://rickandmortyapi.com/api/";
//
// fetch(`${urlBase}character`)
//     .then( (response) => {
//         return response.json();
//     })
//     .then( (responseJson) => {
//         const personajes = responseJson.results;
//
//         for(const personaje of personajes) {
//             console.log(personaje.name);
//         }
//     });

/**
 * POST/PUT/DELETE
 */

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'NUEVO POST',
//         body: 'BODY DEL NUEVO POST',
//         userId: 3,
//     }),
//     headers: {
//         'Content-type': 'application/json',
//     },
// }).then( (response) => {
//     return response.json();
// }).then( (responseJson) => {
//     console.log(responseJson);
// });

/**
 * RUTAS RELATIVAS
 */

// async function obtenerProductos() {
//
//     const response = await fetch('/productos.json');
//     const responseJson = await response.json();
//
//     console.log(responseJson);
//
//
// }
//
// obtenerProductos();
//
// console.log("asd");

/** ************************************** */
/**
 * PROYECTO FINAL
 */
/** ************************************** */

// Clases
class Asiento {
    constructor(id, precio = 20) {
        this.id = id;
        this.comprado = false;
        this.seleccionado = false;
        this.precio = precio;
    }
}

// Funciones
function setearTotalAsientosSeleccionados(asientosSeleccionados) {

    const totalAsientosSeleccionados = asientosSeleccionados.reduce( (acc, el) => {

        return acc + el.precio;

    }, 0);

    // Cambiamos el HTML
    spanTotalAsientosSeleccionados.innerText = `$${totalAsientosSeleccionados}`;
}

function comprarAsiento(asiento) {

    asiento.comprado = true;

    // Le ponemos al div del asiento la clase seleccionado
    const divAsiento = document.getElementById(`asiento-${asiento.id}`);
    divAsiento.classList.remove("seleccionado");
    divAsiento.classList.add("comprado");
}

function buscarAsientoEnLista(id) {

    let asientoEncontrado = null;

    for(const listaDeAsientos of asientos) {

        for(const asiento of listaDeAsientos) {

            if(asiento !== null && asiento.id === id) {
                asientoEncontrado = asiento;
            }
        }
    }

    return asientoEncontrado;
}

function obtenerAsientosComprados() {
    asientosComprados = JSON.parse(localStorage.getItem("asientosComprados")) || [];

    // Recorremos los asientos comprados
    for(const asientoComprado of asientosComprados) {

        // Buscamos el asiento en el listado de asientos
        const asiento = buscarAsientoEnLista(asientoComprado.id);

        if(asiento !== null) {

            asiento.comprado = true;

        }

    }
}

function comprarAsientos() {

    const asientosCompradosYSeleccionados = [
        ...asientosComprados,
        ...asientosSeleccionados,
    ];

    // Recorrer asientos seleccionados
    for(const asientoSeleccionado of asientosSeleccionados) {
        comprarAsiento(asientoSeleccionado);
    }

    // Limpiar lista de asientos seleccionados
    asientosSeleccionados = [];

    // Cargamos los asientos a localStorage
    localStorage.setItem("asientosComprados", JSON.stringify(asientosCompradosYSeleccionados));

    // Obtenemos los asientos comprados
    obtenerAsientosComprados();

    // Seteamos el total
    setearTotalAsientosSeleccionados(asientosSeleccionados);
}

function indiceAsientoSeleccionado(id) {
    return asientosSeleccionados.findIndex( (el) => {
        return el.id === id;
    });
}

function seleccionarAsiento(asiento) {

    if(asiento.comprado) {
        alert("ESTE ASIENTO NO SE PUEDE SELECCIONAR");
        return;
    }

    // Le ponemos al div del asiento la clase seleccionado
    const divAsiento = document.getElementById(`asiento-${asiento.id}`);

    // Agregamos el asiento a la lista
    const indexAsientoSeleccionado = indiceAsientoSeleccionado(asiento.id);
    if(indexAsientoSeleccionado !== -1) {

        // Seteamos el asiento a que no está seleccionado
        asiento.seleccionado = false;

        // Remover la clase
        divAsiento.classList.remove("seleccionado");

        // Sacar de la lista sientos seleccionados...
        asientosSeleccionados.splice(indexAsientoSeleccionado, 1);

    } else {

        // Seteamos el asiento a seleccionado
        asiento.seleccionado = true;

        // Agregamos el asiento a la lista de asientos seleccionados
        asientosSeleccionados.push(asiento);

        // Agregamos la clase
        divAsiento.classList.add("seleccionado");
    }

    // Seteamos el total de los asientos seleccionados
    setearTotalAsientosSeleccionados(asientosSeleccionados);
}

function renderizarAsientos(asientos) {

    // Limpio el contenedor
    const divAsientos = document.getElementById("asientos");
    divAsientos.innerHTML = "";

    // Recorrer los asientos
    for(const filaDeAsientos of asientos) {

        // Creamos el div para la fila de asientos
        const divFlex = document.createElement("div");
        divFlex.className = "d-flex align-items-center";

        for(const asiento of filaDeAsientos) {

            const divAsiento = document.createElement("div");
            divAsiento.className = "asiento";

            // Chequeo si es un asiento o un espacio vacío
            if(asiento !== null) {
                divAsiento.id = `asiento-${asiento.id}`;
                divAsiento.className += " seleccionable";

                // Chequear si está seleccionado o comprado
                if(asiento.comprado) {
                    divAsiento.className += " comprado";
                }

                if(asiento.seleccionado) {
                    divAsiento.className += " seleccionado";
                }

                // Evento de click
                divAsiento.addEventListener("click", () => {

                    seleccionarAsiento(asiento);

                });
            }

            // Agregamos el asiento al flex
            divFlex.append(divAsiento);
        }

        // Agregamos el flex al contenedor
        divAsientos.append(divFlex);

    }

}

function obtenerAsientosJSON() {

    return new Promise( (resolve, reject) => {

        fetch('/asientos.json').then( (response) => {
            return response.json();
        }).then( (responseJson) => {

            for(const filaAsiento of responseJson) {

                const fila = [];

                for(const asiento of filaAsiento) {

                    if(asiento !== "") {
                        fila.push(new Asiento(asiento));
                    } else {
                        fila.push(null);
                    }

                }

                asientos.push(fila);
            }

            resolve();
        });

    });
}

// Inicio del programa
let asientosComprados = [];
let asientosSeleccionados = [];
const asientos = [];

const spanTotalAsientosSeleccionados = document.getElementById("totalAsientosSeleccionados");

const botonComprarAsientos = document.getElementById("comprarAsientos");
botonComprarAsientos.addEventListener("click", comprarAsientos);

obtenerAsientosJSON().then( () => {

    obtenerAsientosComprados();

    // Renderizar asientos
    renderizarAsientos(asientosCargados);

});

// Funciones
// function pedirNombre() {
//
//     const nombre = prompt("Ingrese el nombre");
//     console.log("Su nombre es: " + nombre);
//
// }

// function mostrarNombre(nombre) {
//     console.log("Su nombre es: " + nombre);
// }
//
// function sumar(numero1, numero2) {
//
//     const resultado = numero1 + numero2;
//     console.log("La suma es: " + resultado);
// }

// Inicio
// console.log("Inicio");
// pedirNombre();
// console.log("Fin");

// mostrarNombre("Sergio");
// mostrarNombre("Pedro");
// sumar(10, 15);
// sumar(1, 2);
// sumar(40, 20);
// sumar(40, 20);

// Parámetros y valores de retorno

// function sumar(numero1, numero2) {
//
//     // Forma 1
//     // const resultado = numero1 + numero2;
//     // return resultado;
//
//     // Forma 2
//     return numero1 + numero2;
// }
//
// const resultado = sumar(10, 30);
//
// console.log("La suma es: " + resultado);

// function obtenerNombre() {
//     return prompt("Ingrese el nombre");
// }
//
// const nombre = obtenerNombre();
//
// console.log("El nombre de la persona es: " + nombre);

// function concatenarNombreYApellido(nombre, apellido) {
//
//     // Devolves la concatenación
//     return nombre + " " + apellido;
//
//     // O mostras la concatenación
//     // console.log(nombre + " " + apellido);
//
// }

// Obtener valor de la función
// const nombreCompleto = concatenarNombreYApellido("Pedro", "Rodriguez");
// console.log(nombreCompleto);

// Mostrar la concatenación en la función
// concatenarNombreYApellido("Pedro", "Rodriguez");

// Scope

// Variables globales
// let numero = 10;
//
// if(true) {
//
//     numero = 5;
//
//     for(let i = 0; i < 10; i++) {
//         numero += i;
//     }
//
// }
//
// console.log(numero);

// Variables locales

// if(true) {
//
//     let numero = 5;
//
//     numero += 10;
//
//     for(let i = 0; i < 10; i++) {
//         numero += i;
//     }
//
//     console.log(numero);
//
// }
//

// Variables locales y globales

// function suma(numero1, numero2) {
//     let resultado = numero1 + numero2;
//
//     console.log(resultado);
// }
//
// function resta(numero1, numero2) {
//     let resultado = numero1 - numero2;
//
//     console.log(resultado);
// }
//
// let resultado = 10;
//
// suma(5, 10);
// resta(10, 5);
//
//
// resultado += 20;
// console.log(resultado);

// Funciones anónimas

// Ejemplo 1
// const mostrarNombre = function (nombre) {
//     console.log("El nombre es: " + nombre);
// }

// Ejemplo 2
// function suma(numero1, numero2, accion) {
//     const resultado = numero1 + numero2;
//
//     accion(resultado);
// }
//
// const mostrarNumero = function (numero) {
//     console.log("El numero es: " + numero);
// }
//
// const sumarDiez = function (numero) {
//     const resultado = numero + 10;
//     console.log("Numero: " + resultado);
// }
//
// suma(10, 15, mostrarNumero);
// suma(30, 15, sumarDiez);

// Función flecha

// const mostrarNombre = function (nombre) {
//     console.log("El nombre es: " + nombre);
// }
// const mostrarNombre = (nombre) => {
//     console.log("El nombre es: " + nombre);
// }

// const devolverNombre = (nombre) => nombre;
//
// console.log(devolverNombre("Pablo"));

/**
 * EJEMPLO DE PROYECTO FINAL
 */

// Funciones
function solicitarMonto() {
    let monto = parseInt(prompt("Ingrese cantidad a transferir"));

    // Valido el monto ingresado
    while(monto <= 0) {
        monto = parseInt(prompt("Ingrese un monto válido a transferir"));
    }

    return monto;
}

function transferir() {
    let clienteATransferir = prompt("Ingrese el cliente al cual le quiere transferir. 1- Manuel. 2- Pepe. 3- Pedro. 0- SALIR");

    // Mientras el cliente sea distinto de 0, estamos en el bucle
    while(clienteATransferir !== "0") {

        // Usuario ingrese monto a transferir
        let monto = solicitarMonto();

        /**
         * CONFIRMAR OPERACIÓN
         */

            // Forma 1
            // const confirmar = prompt("Está seguro que desea transferir $" + monto + ". Ingrese SI para confirmar o cualquier cosa para abortar");
            //
            // if(confirmar !== "SI") {
            //     break;
            // }

            // Forma 2
        const confirmar = prompt("Está seguro que desea transferir $" + monto + ". Ingrese NO para abortar, cualquier otra cosa para confirmar");

        if(confirmar === "NO") {
            alert("TRANSFERENCIA ABORTADA");
            break;
        }

        /**
         * FINALIZA CONFIRMAR OPERACIÓN
         */

        // Chequeamos el usuario a transferir
        switch(clienteATransferir) {
            case "1": // Manuel

                const saldoDeManuel = 1000 + monto;

                console.log("Le transferiste $" + monto + " a Manuel. El nuevo saldo que tiene Manuel es $" + saldoDeManuel);

                break;

            case "2": // Pepe

                const saldoDePepe = 2000 + monto;

                console.log("Le transferiste $" + monto + " a Pepe. El nuevo saldo que tiene Pepe es $" + saldoDePepe);

                break;

            case "3": // Pedro

                const saldoDePedro = 3000 + monto;

                console.log("Le transferiste $" + monto + " a Pedro. El nuevo saldo que tiene Pedro es $" + saldoDePedro);

                break;

            default:

                alert("EL CLIENTE NO EXISTE");

                break;
        }

        // Volvemos a pedir un usuario
        clienteATransferir = prompt("Ingrese un nuevo cliente al cual le quiere transferir. 1- Manuel. 2- Pepe. 3- Pedro. 0- SALIR");
    }
}

function deposito() {
    console.log("Depositar");
    // ..
    // ..
}

function procesarOperacion(operacion) {

    // Mientras el usuario escriba algo distinto de SALIR, nos quedamos en el while
    while(operacion !== "0") {

        // Chequeamos que operación ingreso
        switch(operacion) {

            // Transferir
            case "1":

                transferir();
                break;

            case "2":

                deposito();
                break;

            default:

                alert("INGRESASTE UNA OPCIÓN INCORRECTA");
                break;
        }

        // Volver a pedirle una opción al usuario
        operacion = prompt("Ingrese la operación que quiere realizar. 1- Transferir. 2- Depositar. 0- SALIR");
    }
}

// Inicio

// Pedimos la operación al usuario
let operacion = prompt("Ingrese la operación que quiere realizar. 1- Transferir. 2- Depositar. 0- SALIR");

procesarOperacion(operacion);

// Finaliza la aplicación
console.log("Gracias por utilizar nuestros servicios");

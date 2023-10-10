// const nombre1 = prompt("Ingrese un nombre");
// console.log(nombre1);
//
// const nombre2 = prompt("Ingrese un nombre");
//
// const nombre3 = prompt("Ingrese un nombre");
//
// const nombre4 = prompt("Ingrese un nombre");

// ....

/**
 * FOR
 */

// for(let i = 10; i <= 20; i = i + 1) {
//     console.log(i);
// }

// console.log("Finaliza el for");

// Pedir 10 nombres
// let nombre = "";
//
// for(let i = 0; i < 5; i = i + 1) {
//
//     nombre = prompt("Ingrese un nombre");
//     console.log(nombre);
//
// }

// Break
// // Números pares
// for(let i = 0; i <= 10; i = i + 2) {
//
//     if(i >= 5) {
//         break;
//     }
//
//     console.log(i);
// }

// // Números impares
// for(let i = 1; i <= 10; i = i + 2) {
//
//     if(i > 5) {
//         break;
//     }
//
//     console.log(i);
// }

// Continue
// Números pares
// for(let i = 0; i <= 10; i++) {
//
//     if(i % 2 === 0) {
//         continue;
//     }
//
//     console.log(i);
// }

// Números pares
// for(let i = 0; i <= 10; i++) {
//
//     if(i % 2 !== 0) {
//         continue;
//     }
//
//     console.log(i);
// }
//
// console.log("Finalizó el ciclo");

/**
 * WHILE
 */

// // Pedir nombres
// // Forma 1
// let nombre = "";
//
// while(nombre !== "SALIR") {
//
//     nombre = prompt("Ingrese un nombre. Ingrese SALIR para no ingresar más");
//
//     if(nombre !== "SALIR") {
//         console.log("El nombre que ingresó es: " + nombre);
//     }
// }
//
// // Forma 2
// let nombre = prompt("Ingrese un nombre. Ingrese SALIR para no ingresar más");
//
// while(nombre !== "SALIR") {
//
//     console.log("El nombre que ingresó es: " + nombre);
//     nombre = prompt("Ingrese un nombre. Ingrese SALIR para no ingresar más");
//
// }

// Contar de 1 a 10
// let i = 0;
// while(i < 10) {
//     console.log(i);
//
//     i = i + 1; // Forma 1
//     // i++; // Forma 2
// }

/**
 * DO WHILE
 */

// Diferencias usando while
// let nombre = prompt("Ingrese un nombre. Ingrese SALIR para no ingresar nada.");
//
// while(nombre !== "SALIR") {
//
//     console.log(nombre);
//     nombre = prompt("Ingrese un nombre. Ingrese SALIR para no ingresar nada.");
// }

// Usando do while
// let nombre = "";
//
// do {
//     nombre = prompt("Ingrese un nombre. Ingrese SALIR para no ingresar nada.");
//
//     if(nombre !== "SALIR") {
//         console.log(nombre);
//     }
//
// } while(nombre !== "SALIR");

/**
 * SWITCH
 */

// // Pedimos la operación al usuario
// let operacion = prompt("Ingrese la operación que quiere realizar. 1- Transferir. 2- Depositar. 0- SALIR");
//
// // Mientras el usuario escriba algo distinto de SALIR, nos quedamos en el while
// while(operacion !== "0") {
//
//     // Chequeamos que operación ingreso
//     switch(operacion) {
//
//         // Transferir
//         case "1":
//
//             let clienteATransferir = prompt("Ingrese el cliente al cual le quiere transferir. 1- Manuel. 2- Pepe. 3- Pedro. 0- SALIR");
//
//             // Mientras el cliente sea distinto de 0, estamos en el bucle
//             while(clienteATransferir !== "0") {
//
//                 // Usuario ingrese monto a transferir
//                 let monto = parseInt(prompt("Ingrese cantidad a transferir"));
//
//                 // Valido el monto ingresado
//                 while(monto <= 0) {
//                     monto = parseInt(prompt("Ingrese un monto válido a transferir"));
//                 }
//
//                 /**
//                  * CONFIRMAR OPERACIÓN
//                  */
//
//                 // Forma 1
//                 // const confirmar = prompt("Está seguro que desea transferir $" + monto + ". Ingrese SI para confirmar o cualquier cosa para abortar");
//                 //
//                 // if(confirmar !== "SI") {
//                 //     break;
//                 // }
//
//                 // Forma 2
//                 const confirmar = prompt("Está seguro que desea transferir $" + monto + ". Ingrese NO para abortar, cualquier otra cosa para confirmar");
//
//                 if(confirmar === "NO") {
//                     alert("TRANSFERENCIA ABORTADA");
//                     break;
//                 }
//
//                 /**
//                  * FINALIZA CONFIRMAR OPERACIÓN
//                  */
//
//                 // Chequeamos el usuario a transferir
//                 switch(clienteATransferir) {
//                     case "1": // Manuel
//
//                         const saldoDeManuel = 1000 + monto;
//
//                         console.log("Le transferiste $" + monto + " a Manuel. El nuevo saldo que tiene Manuel es $" + saldoDeManuel);
//
//                         break;
//
//                     case "2": // Pepe
//
//                         const saldoDePepe = 2000 + monto;
//
//                         console.log("Le transferiste $" + monto + " a Pepe. El nuevo saldo que tiene Pepe es $" + saldoDePepe);
//
//                         break;
//
//                     case "3": // Pedro
//
//                         const saldoDePedro = 3000 + monto;
//
//                         console.log("Le transferiste $" + monto + " a Pedro. El nuevo saldo que tiene Pedro es $" + saldoDePedro);
//
//                         break;
//
//                     default:
//
//                         alert("EL CLIENTE NO EXISTE");
//
//                         break;
//                 }
//
//                 // Volvemos a pedir un usuario
//                 clienteATransferir = prompt("Ingrese un nuevo cliente al cual le quiere transferir. 1- Manuel. 2- Pepe. 3- Pedro. 0- SALIR");
//             }
//
//         break;
//
//         case "2":
//
//             console.log("Depositar");
//             // ..
//             // ..
//
//             break;
//
//         default:
//
//             alert("INGRESASTE UNA OPCIÓN INCORRECTA");
//
//             break;
//     }
//
//     // Volver a pedirle una opción al usuario
//     operacion = prompt("Ingrese la operación que quiere realizar. 1- Transferir. 2- Depositar. 0- SALIR");
// }
//
// // Finaliza la aplicación
// console.log("Gracias por utilizar nuestros servicios");

/**
 * EJERCICIO 10
 *
 * Escriba un programa en dónde se le solicite un número al usuario y determine si es
 * un número primo o no.
 */

// let divisores = 0;
// const numero = parseInt(prompt("Ingrese un número"));
//
// for(let i = numero; i >= 1; i = i - 1) {
//
//     if(numero % i === 0) {
//         divisores = divisores + 1;
//     }
// }
//
// if(divisores > 2) {
//     console.log("El número ingresado NO es primo");
// } else {
//     console.log("El número ingresado es primo");
// }

/**
 * EJERCICIO 12
 *
 *  Realizar un programa que le pida al usuario cuántos números quiere ingresar y entre
 * todos los que ingrese calcular cual es el mayor, el menor y la media.
 */

// Le pedimos la cantidad de números al usuario
const cantidadDeNumeros = parseInt(prompt("Escriba la cantidad de números que desea ingresar"));

// Pedimos el primer número al usuario
let numero = parseInt(prompt("Ingrese un número"));

// Variables que me van a alojar los resultados
let mayor = numero;
let menor = numero;
let media = numero;

// Hacemos un ciclo con la cantidad de números que ingreso el usuario
for(let i = 0; i < cantidadDeNumeros - 1; i++) {

    // Pedimos el número al usuario
    numero = parseInt(prompt("Ingrese un número"));

    // Calcular mayor
    if(numero > mayor) {
        mayor = numero;
    }

    // Calcular menor
    if(numero < menor) {
        menor = numero;
    }

    // Calcular media
    // media += numero;
    media = media + numero;

}

// Mostramos los resultados
console.log("La media es: " + media / cantidadDeNumeros);
console.log("El mayor número es: " + mayor);
console.log("El menor número es: " + menor);



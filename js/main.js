const var1 = "Hola";
const var2 = "Como estas";

// Ifs sencillos
// if (true) {
//     console.log(var1);
// }
//
// if (false) {
//     console.log(var2);
// }

// Operador de comparación
// if(var1 == "Hola") {
//     console.log("La variable var1 es: Hola");
// }
//
// if(var2 == "Como estas") {
//     console.log("La variable var2 es: Como esta");
// }
//
// if(var1 == "hola") { // Esto es falso dado que JS es case senstivie
//     console.log("la variable var1 es: Hola");
// }
//
// const numero1 = 5;
// const numero2 = 20;
//
// const resultado = numero1 + numero2;
//
// if(resultado == 15) {
//     console.log("La suma da 15");
// }

// Diferencia de = y ==
// let variabledeprueba = 5;
//
// if(variabledeprueba = 10) {
//     console.log(variabledeprueba);
//     console.log("la variable es 5");
// }

// IF ELSE
// Ejemplo 1
// const numero1 = 3;
// const numero2 = 6;
// const resultado = numero1 * numero2;
//
// if(resultado == 15) {
//     console.log("El resultado es igual a 15");
// } else {
//     console.log("El resultado no es 15");
// }

// Ejemplo 2
// const nombre = prompt("Ingrese su nombre");
//
// if(nombre == "Rodrigo") {
//     console.log("Acceso permitido");
// } else {
//     console.log("Acceso denegado");
// }

// IF - ELSE IF - ELSE
// const nombre = prompt("Ingrese su nombre");
//
// if(nombre == "Rodrigo") {
//     console.log("Bienvenido Rodrigo");
// } else if(nombre == "Juan") {
//     console.log("Bienvenido Juan");
// } else if(nombre == "Pedro") {
//     console.log("Bienvenido Pedro");
// } else {
//     console.log("No ingresaste un nombre válido");
// }

// Variables booleanas
// const verdadero = true;
// const falso = false;

// const numero1 = 10;
// const esNumero10 = (numero1 == 10);
//
// if (esNumero10) {
//     console.log("Es numero 10");
// } else {
//     console.log("No es numero 10");
// }

// Evaluar números
// const numero = -10;
//
// if (numero) {
//     console.log("asd");
// }

// Operador "es distinto"
// const numero1 = 20;
// const numero2 = 20;

// if(numero1 == numero2) {
//     console.log("Numero 1 es igual a numero 2");
// } else {
//     console.log("numero 1 es distinto de numero 2");
// }

// if (numero1 != numero2) {
//     console.log("numero 1 es distinto de numero 2");
// } else {
//     console.log("Numero 1 es igual a numero 2");
// }

// Operador lógicos de números

// const precioProducto1 = parseInt(prompt("Ingrese el precio de producto 1"));
// const precioProducto2 = parseInt(prompt("Ingrese el precio de producto 2"));

// if (precioProducto1 >= precioProducto2) {
//     console.log("El precio del producto 1 es mayor o igual al precio del producto 2");
// } else {
//     console.log("El precio del producto 1 es menor al precio del producto 2");
// }

// if (precioProducto1 <= precioProducto2) {
//     console.log("El precio del producto 1 es menor al precio del producto 2");
// } else {
//     console.log("El precio del producto 1 es mayor o igual al precio del producto 2");
// }

// const edad = parseInt(prompt("Ingrese su edad"));
//
// if(edad >= 18) {
//     console.log("Puede comprar alcohol");
// } else {
//     console.log("No puede comprar, es menor de edad");
// }

// Operador &&

// const nombre = "Pedro";
// const edad = 25;

// if (nombre == "Rodrigo") {
//
//     if(edad == 20) {
//         console.log("El nombre es Rodrigo y la edad es 20");
//     }
// }

// if ( (nombre == "Rodrigo") && (edad == 20) ) {
//     console.log("El nombre es Rodrigo y la edad es 20");
// } else if( (nombre != "Rodrigo")) {
//     console.log("El nombre es distinto a Rodrigo");
// } else if( (edad != 20)) {
//     console.log("La edad es distinta de 20");
// }

// Operador ||

// const nombre = prompt("Ingrese el nombre");
//
// if( (nombre == "Pedro") || (nombre == "pedro") || (nombre == "PEDRO") ) {
//     console.log("BIenvenido pedro");
// } else {
//     console.log("Usted no es pedro");
// }

// Operadores && y || compuestos

// const nombre = prompt("Ingrese el nombre");
// const edad = parseInt(prompt("Ingrese la edad"));
//
// if ( (edad >= 18) && (nombre == "Pedro" || nombre == "pedro") ) {
//     console.log("Permitir acceso");
// } else {
//     console.log("Acceso denegado");
// }

// CUIDADO CON LOS PARENTESIS

// const nombre = prompt("Ingrese el nombre");
// const edad = parseInt(prompt("Ingrese la edad"));
//
// if ( (edad >= 18) && (nombre == "Pedro" || nombre == "pedro") ) {
//     console.log("Permitir acceso");
// } else {
//     console.log("Acceso denegado");
// }

/**
 * EJERCICIO 7
 *
 * Escriba un programa en donde se le pida al usuario ingresar el lugar a donde quiera
 * viajar. Teniendo en cuenta estos valores:
 * - Colombia: $40
 * - México: $50
 * - Brasil: $30
 * - Uruguay: $20
 * - Chile: $20
 * - Ecuador: $30
 * - Perú: $40
 * - Estados Unidos: $50
 * Mostrarle al usuario cuál sería el costo de viajar al lugar que escribió.
 *     NOTA: Tener en cuenta las mayúsculas y minúsculas al momento de ingresar el
 * nombre del lugar
 */

let costo = 0;
const lugarAViajar = prompt("Ingrese a dónde quiere viajar");

if(lugarAViajar == "Colombia" || lugarAViajar == "Perú") {
    costo = 40;
} else if(lugarAViajar == "México" || lugarAViajar == "Estados Unidos") {
    costo = 50;
} else if(lugarAViajar == "Uruguay" || lugarAViajar == "Chile") {
    costo = 20;
} else if(lugarAViajar == "Ecuador" || lugarAViajar == "Brasil") {
    costo = 30;
}

console.log("El costo de su viaje a " + lugarAViajar + " es: $" + costo);



// MI PRIMER COMENTARIO DE UNA LINEA

/*

LINEA 1 DE COMENTARIO
LINEA 2 DE COMENTARIO
LINEA 3 COMENTARIO

*/

// Declarar variables
// let nombre;
// const apellido = "Perez";
// let edad = 20;
// const sexo = "Masculino";

// Cambiando el valor de variables
// edad = 21;
// nombre = "Juan";

// Puedo cambiar el tipo de valor de una variable
// nombre = 10;

// Operaciones con números
// const numero1 = 15;
// const numero2 = 30;
//
// const resultadoSuma = numero1 + numero2;
//
// const resultadoResta = numero2 - numero1;
//
// const resultadoMultiplicacion = numero1 * numero2;
//
// const resultadoDivision = numero2 / numero1;
//
// const resultadoCombinado = (numero1 + numero2) / numero2 * (numero1 * numero2);

// Operaciones con texto
const string1 = "Hola";
const string2 = "Que tal";
const espacioEnBlanco = " ";

const resultadoConcatenacion = string1 + string2; // Resultado: HolaQue tal

const resultadoCombinadoConcatenacion = string1 + string2 + string1 + string2 + string2 + string1;

const resultadoConEspacioForma1 = string1 + " " + string2; // Resultado forma 1: Hola Que tal
const resultadoConEspacioForma2 = string1 + espacioEnBlanco + string2; // Resultado forma 2: Hola Que tal

// Imprimir valores
// console.log(resultadoSuma);
// console.log(resultadoConcatenacion);

// Pedirle valores al usuario
// const nombre = prompt("Ingrese un nombre");
// const edad = prompt("Ingrese la edad");
//
// console.log("El nombre de la persona es: " + nombre);
// console.log("La edad de " + nombre + " es: " + edad);

// Mostrar valores en alert
// alert("El nombre de la persona es: " + nombre);
// alert("La edad de " + nombre + " es: " + edad);

// Tipos de valores de variables
// const numero1 = prompt("Ingrese un número");
// const numero2 = prompt("Ingrese otro número");
//
// const resultadoSuma = parseInt(numero1) + parseInt(numero2);

// console.log("El resultado de la suma es: " + resultadoSuma);

// const var1 = 10;
// const var2 = 30;
// const var3 = 50;
// const var4 = "60";
//
// const resultadoVar = var1 + var2 + var3 + parseInt(var4);
//
// console.log(resultadoVar);

// Valores enteros y decimales
// const numero = "10.5";
//
// console.log(parseInt(numero));
// console.log(parseFloat(numero));

// Ejemplo de lo que vimos hasta ahora
// const numero1 = parseInt(prompt("Ingrese un número"));
// const numero2 = parseInt(prompt("Ingrese un número"));
//
// const multiplicacion = numero1 * numero2;
// const division = numero1 / numero2;
// const resta = numero1 - numero2;
// const suma = numero1 + numero2;
//
// console.log("El resultado de la multiplicación es: " + multiplicacion);
// console.log("El resultado de la divisón es: " + division);
// console.log("el resultado de la resta es: " + resta);
// console.log("El resultado de la suma es: " + suma);

// Prompt con una variable let
// let nombre = prompt("Ingrese un nombre");
// nombre = nombre + " " + prompt("Ingres el apellido");
//
// console.log(nombre);

// Ejemplo de pedir un número y sumarlo a otro que tengo
const numero1 = 50;
const numero2 = prompt("Ingrese el número");

const resultadoNumero = numero1 + parseInt(numero2);

console.log("El resultado de la suma es: " + resultadoNumero);


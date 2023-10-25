/**
 * FUNCIONES DE ÓRDEN SUPERIOR
 * /

 /* EJERCICIO 1
 *
 * Dado el siguiente array de arrays, se pide transformarlo para que de como resultado
 * un único array con todos los elementos. Para ese ejemplo, el array resultante sería:
 * [1, 2, 3, 4, 5, 6, 7, 8, 9].
 */

// let solucion = [];
// const listaNumeros = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
//
// for(const subArray of listaNumeros) {
//
//     // Forma 1
//     // for(const elemento of subArray) {
//     //     solucion.push(elemento);
//     // }
//
//     // Forma 2
//     solucion = solucion.concat(subArray);
// }
//
// console.log(solucion);

/**
 * EJERCICIO 2
 *
 * Dado el siguiente array
 * a) Se pide primero obtener todas las personas del género femenino (genero = “F”)
 * b) Una vez obtenidas, se pide calcular el promedio de edad sobre ellas
 */

// const listaPersonas = [
//     {
//         nombre: "Matias",
//         genero: "M",
//         edad: 25,
//     },
//     {
//         nombre: "Fernanda",
//         genero: "F",
//         edad: 27,
//     },
//     {
//         nombre: "Federico",
//         genero: "M",
//         edad: 32,
//     },
//     {
//         nombre: "Camila",
//         genero: "F",
//         edad: 12,
//     },
//     {
//         nombre: "Gabriela",
//         genero: "F",
//         edad: 42,
//     }
// ];
//
// // a)
// const mujeres = listaPersonas.filter( (persona) => {
//     return persona.genero === "F";
// });
//
// // b)
// const promedio = mujeres.reduce( (acc, mujer) => {
//     return acc + mujer.edad;
// }, 0) / mujeres.length;
//
// console.log(promedio);

/**
 * EJERCICIO 3
 *
 * Dado el siguiente array de letras, se pide obtener cuantas veces se repite cada letra.
 * Para este ejemplo sería:
 * - a: 3
 * - b: 2
 * - c: 1
 * - d: 1
 * - f: 1
 * - g: 2
 */

// const letras = ['a', 'b', 'a', 'c', 'b', 'd', 'f', 'g', 'a', 'g'];

// FORMA 1 - forEach
// const resultado = {};
//
// letras.forEach( (letra) => {
//
//     if(resultado[letra]) {
//         resultado[letra]++;
//     } else {
//         resultado[letra] = 1;
//     }
//
// });

// FORMA 2 - REDUCE
// const resultado = letras.reduce( (acc, letra) => {
//
//     if(acc[letra]) {
//         acc[letra]++;
//     } else {
//         acc[letra] = 1;
//     }
//
//     return acc;
//
// }, {});
//
// console.log(resultado);

/**
 * EJERCICIO 5
 *
 * Dado el siguiente array, se solicita aumentar los precios de todos los productos en un 15%
 */

// const productos = [
//     {
//         nombre: "Arroz",
//         precio: 20,
//     },
//     {
//         nombre: "Fideos",
//         precio: 15,
//     },
//     {
//         nombre: "Tomate",
//         precio: 5,
//     },
// ];
//
// const productosModificados = productos.map( (producto) => {
//
//     // FORMA 1
//     // return {
//     //     nombre: producto.nombre,
//     //     precio: producto.precio * 1.15,
//     // }
//
//     // FORMA 2
//     producto.precio = producto.precio * 1.15;
//
//     return producto;
//
// });
//
// console.log(productosModificados);

/**
 * EJERCICIO 4
 *
 * Se solicita obtener la sumatoria solamente de los números positivos.
 */

// const numeros = [1, -4, 12, 0, -3, 29, -150];
//
// // FORMA 1
// // const sumatoria = numeros.reduce( (acc, numero) => {
// //
// //     if(numero >= 0) {
// //         acc += numero;
// //     }
// //
// //     return acc;
// // }, 0);
//
// // FORMA 2
// const sumatoria = numeros.filter( (numero) => {
//     return numero > 0;
// }).reduce( (acc, numero) => {
//     return acc + numero;
// }, 0);
//
// console.log(sumatoria);

/**
 * EJERCICIO 6
 *
 * Dado el siguiente array se pide obtener.
 * a) La población total de Argentina y la población total de España
 * b) Las provincias de Argentina que tienen más de 1500 habitantes
 * c) Las provincias de España que tienen más de 4000 habitantes
 * d) Cuál es la provincia de Argentina que tiene más población
 * e) Cuál es la provincia de España que tiene más población
 */

const poblaciones = [
    {
        pais: "Argentina",
        provincia: "Buenos Aires",
        poblacion: 2000,
    },
    {
        pais: "España",
        provincia: "Cataluña",
        poblacion: 5000,
    },
    {
        pais: "España",
        provincia: "Valencia",
        poblacion: 2500,
    },
    {
        pais: "Argentina",
        provincia: "Santa Fe",
        poblacion: 1000,
    },
    {
        pais: "España",
        provincia: "Madrid",
        poblacion: 3000,
    },
    {
        pais: "Argentina",
        provincia: "Córdoba",
        poblacion: 3500,
    },
];

// a)
// const poblacionArgentina = poblaciones.reduce( (acc, poblacion) => {
//
//     if(poblacion.pais === "Argentina") {
//         acc += poblacion.poblacion;
//     }
//
//     return acc;
// }, 0);
// const poblacionEspania = poblaciones.reduce( (acc, poblacion) => {
//
//     if(poblacion.pais === "España") {
//         acc += poblacion.poblacion;
//     }
//
//     return acc;
// }, 0);
//
// console.log(poblacionArgentina);
// console.log(poblacionEspania);

// b)
// const provinciasArgentinas = poblaciones.filter( (poblacion) => {
//
//     return poblacion.pais === "Argentina" && poblacion.poblacion > 1500;
// });
//
// console.log(provinciasArgentinas);

// c)
// const provinciasEspania = poblaciones.filter( (poblacion) => {
//
//     return poblacion.pais === "España" && poblacion.poblacion > 4000;
// });
//
// console.log(provinciasEspania);

// d)

// FORMA 1

const provinciaConMasPoblacion = poblaciones.filter( (poblacion) => {
    return poblacion.pais === "Argentina";
}).sort( (poblacionA, poblacionB) => {

    if(poblacionA.poblacion > poblacionB.poblacion) {
        return -1;
    } else if(poblacionA.poblacion < poblacionB.poblacion) {
        return 1;
    }

    return 0;
})[0];

console.log(provinciaConMasPoblacion);



/** ********************************************** */
/** ********************************************** */
/** ********************************************** */
/** ********************************************** */

/**
 * FUNCIONES DE ÓRDEN SUPERIOR II
 */

// ROUND, CEIL Y FLOOR

// console.log(Math.ceil(3.9999));
// console.log(Math.floor(3.000000001));
// console.log(Math.round(3.4999999999999999));

// SACAR DECIMALES
// const random = Math.random();
//
// console.log(parseFloat(random.toFixed(2)));

/**
 * OBJETO DATE
 */

// const fechaHoy = new Date();
// console.log(fechaHoy);

// const fechaAyer = new Date(2023, 9, 23, 15, 30, 0);
// console.log(fechaAyer);

// Métodos para obtener valores
// const fecha1 = new Date(2022, 5, 23, 22, 15, 5, 15);
//
// console.log(fecha1.getMilliseconds())

// const fecha2 = new Date(2022, 3, 23);
//
// console.log(fecha2.toLocaleString());

// Diferencia entre fechas

// const fecha1 = new Date(2023, 9, 24, 17);
// const fecha2 = new Date(2023, 9, 24, 15);
//
// const diferencia = Math.abs(fecha1 - fecha2);
//
// console.log(diferencia);

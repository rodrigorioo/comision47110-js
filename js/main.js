// // Función flecha
//
// // function suma(numero1, numero2) {
// //     return numero1 + numero2;
// // }
//
// const suma = function(numero1, numero2) {
//     return numero1 + numero2;
// }
//
// // const suma = (numero1, numero2) => numero1 + numero2;
//
// const resultado = suma(10, 20);

/**
 * 3) Dados los siguientes arrays
 * a) [1, 3, 5, 6, 7, 9]
 * b) [1, 2, 3, 4, 7, 8]
 * Generar un nuevo array con la intersección de los elementos
 */

// const interseccion = [];
// const array1 = [1, 3, 5, 6, 7, 9];
// const array2 = [1, 2, 3, 4, 7, 8];
// // La intersección de ambos sería:
// // [1, 3, 7]
//
// for(const numero of array1) {
//
//     if(array2.includes(numero)) {
//         interseccion.push(numero);
//     }
//
// }
//
// console.log(interseccion);

/**
 * 4) Ídem ejercicio anterior pero en vez de la intersección, generar un nuevo array con la
 * unión de los elementos (Sin repetirlos).
 */

// const union = [];
// const array1 = [1, 3, 5, 6, 7, 9];
// const array2 = [1, 2, 3, 4, 7, 8];
// // La unión sería:
// // [1, 3, 5, 6, 7, 9, 2, 4, 8]
//
// // FORMA 1 - CON CONCAT
// const concatenacion = array1.concat(array2);
//
// for(const elemento of concatenacion) {
//
//     if(!union.includes(elemento)) {
//         union.push(elemento);
//     }
// }
//
// console.log(union);
//
// // HACERLO DE OTRA FORMA PARA CASA (?

/** **************** */
/** **************** */
/**
 * FUNCIONES DE ORDEN SUPERIOR
 */
/** **************** */
/** **************** */
// Funciones
// function calcularEnvioLegumbres(precio) {
//     return 100 + (precio * 0.05);
// }
//
// function calcularEnvioLacteos(precio) {
//
//     let costo = 50;
//
//     if(precio > 100) {
//         costo += 10;
//     } else {
//         costo += 5;
//     }
//
//     return costo;
// }
//
// function calcularEnvioVerduras(precio) {
//     return (precio * 0.30);
// }

// FORMA MALA >:(
// function calcularEnvio(producto) {
//
//     let costo = 0;
//
//     switch(producto.categoria) {
//         case "Legumbres":
//             costo = calcularEnvioLegumbres(producto.precio);
//             break;
//
//         case "Lacteos":
//             costo = calcularEnvioLacteos(producto.precio);
//             break;
//
//         case "Verduras":
//             costo = calcularEnvioVerduras(producto.precio);
//             break;
//     }
//
//     return costo;
// }

// FORMA BUENA :D
// function calcularEnvio(producto, funcionQueCalculaElEnvio) {
//
//     let costo = funcionQueCalculaElEnvio(producto.precio);
//
//     return costo;
// }

// Objetos
// class Producto {
//
//     constructor(nombre, categoria, precio) {
//         this.nombre = nombre;
//         this.categoria = categoria;
//         this.precio = precio;
//     }
// }
//
// const producto1 = new Producto("Lentejas", "Legumbres", 200);
// const producto2 = new Producto("Yogurt", "Lacteos", 300);
// const producto3 = new Producto("Zanahoria", "Verduras", 100);

// FORMA MALA >:(
// const costoLentejas = calcularEnvio(producto1);
// const costoYogurt = calcularEnvio(producto2);
// const costoZanahoria = calcularEnvio(producto3);

// FORMA BUENA :D
// const costoLentejas = calcularEnvio(producto1, calcularEnvioLegumbres);
// const costoYogurt = calcularEnvio(producto2, calcularEnvioLacteos);
// const costoZanahoria = calcularEnvio(producto1, calcularEnvioVerduras);

// console.log(costoLentejas);
// console.log(costoYogurt);


// const numeros = [1, 2, 3, 4];
// const nombres = ["Rodrigo", "Federico", "Gonzalo"];

// forEach
// numeros.forEach( (el) => {
//     console.log(el * 2);
// });
// nombres.forEach( (qwkmesjkfasnkjfdajnks) => {
//
//     console.log("Hola " + qwkmesjkfasnkjfdajnks);
// });

// Reduce
const carrito = [
    {
        nombre: "Pepino",
        precio: 200,
    },
    {
        nombre: "Yogurt",
        precio: 100,
    },
    {
        nombre: "Lechuga",
        precio: 300,
    }
];

// Forma sin reduce
// let total = 0;
// carrito.forEach( (producto) => {
//
//     total += producto.precio;
//
// });

// Forma con reduce
// const total = carrito.reduce( (acc, producto) => {
//
//     acc += producto.precio;
//
//     return acc;
// }, 0);

// Agregar campo con reduce
const carritoConCostoDeEnvio = carrito.reduce( (acc, producto) => {

    producto.costoDeEnvio = (producto.precio * 0.35);

    acc.push(producto);

    return acc;
}, []);

console.log(carritoConCostoDeEnvio);

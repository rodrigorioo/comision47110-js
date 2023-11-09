// const edad = parseInt(prompt("Ingrese la edad"));
//
// let esMayorDeEdad =  null;

// IF normal
// if(edad >= 18) {
//     esMayorDeEdad = true;
// } else {
//     esMayorDeEdad = false;
// }

// Operador ternario
// esMayorDeEdad = (edad >= 18) ? true : false;
//
// console.log(esMayorDeEdad);

// Operador lógico OR
// Forma 1
// const productosLS = localStorage.getItem("productos");
// let productos = [];
//
// if(productosLS !== null) {
//     productos = JSON.parse(productosLS);
// }

// Forma 2
// let productos = JSON.parse(localStorage.getItem("productos"));
//
// if(productos === null) {
//     productos = [];
// }

// Forma 3 - CON OPERADOR ||
// localStorage.setItem("productos", JSON.stringify([{
//     nombre: "Producto 1",
//     precio: 40,
// },
//     {
//         nombre: "Producto 2",
//         precio: 20,
//     }]));
//
// let productos = JSON.parse(localStorage.getItem("productos")) || [];
//
// console.log(productos);

// ACCESO CONDICIONAL A UN OBJETO

// const producto1 = {
//     nombre: "Lechuga",
//     precio: 20,
//     categoria: {
//         nombre: "Verduras",
//         deposito: {
//             nombre: "Deposito 2",
//             stock: 20,
//         }
//     },
// };
//
// const producto2 = {
//     nombre: "Yogurt",
//     precio: 30,
//     categoria: {
//         nombre: "Lacteos",
//         deposito: {
//             nombre: "Deposito 1",
//             stock: 20,
//         }
//     }
// };
//
// const producto3 = {
//     nombre: "Lentejas",
//     precio: 40,
//     categoria: {
//         nombre: "Legumbres",
//         deposito: null,
//     },
// };
//
// console.log(
//     producto3.categoria?.deposito?.nombre ||
//     "Error al obtener la categoría o depósito"
// );

// DESESTRUCTURACIÓN

// const producto1 = {
//     nombre: "Lechuga",
//     precio: 20,
//     categoria: {
//         nombre: "Verduras",
//         color: "Verde",
//         deposito: {
//             nombre: "Deposito 2",
//             stock: 20,
//         }
//     },
// };

// Desestructuración tradicional
// const categoria = producto1.categoria;
// const deposito = categoria.deposito;

// Desestructuración de JavaScript
// const { nombre, categoria } = producto1;
//
// console.log(nombre);
// console.log(categoria);

// Sub-desestructuración
// const {
//     nombre,
//     categoria: {
//         color,
//         deposito: {
//             stock,
//         }
//     }
// } = producto1;
//
// console.log(nombre);
// console.log(color);
// console.log(stock);

// Alias
// const {
//     nombre: nombreProducto,
//     categoria: {
//         color: colorCategoria,
//         deposito: {
//             stock: stockDeposito,
//         }
//     }
// } = producto1;

// console.log(nombreProducto);
// console.log(colorCategoria);
// console.log(stockDeposito);

// const {
//     nombre: nombreProducto,
//     categoria: {
//         nombre: nombreCategoria,
//         deposito: {
//             nombre: nombreDeposito,
//         }
//     }
// } = producto1;
//
// console.log(nombreProducto);
// console.log(nombreCategoria);
// console.log(nombreDeposito);

// DESESTRUCTURACIÓN EN PARÁMETROS
// const producto1 = {
//     nombre: "Lechuga",
//     precio: 20,
//     categoria: {
//         nombre: "Verduras",
//         color: "Verde",
//         deposito: {
//             nombre: "Deposito 2",
//             stock: 20,
//         }
//     },
// };

// function mostrarStock({
//     categoria: {
//         nombre,
//         color,
//         deposito: {
//             stock,
//         }
//     }
// }) {
//
//     // const {
//     //     categoria: {
//     //         nombre,
//     //         deposito: {
//     //             stock,
//     //         }
//     //     }
//     // } = producto;
//
//     console.log(`El color de la categoría es: ${color}`);
//     console.log(`El stock de la categoría ${nombre} es ${stock} `);
//
// }
//
// mostrarStock(producto1);

// const botonsito = document.getElementById("botonsito");
//
// botonsito.addEventListener("click", ( {target} ) => {
//
//     // const target = e.target;
//
//     console.log(target);
//
// });

// DESESTRUCTURACIÓN DE ARRAYS
// const personas = [
//     {
//         nombre: "Fernando",
//         edad: 25,
//     },
//     {
//         nombre: "Alejandro",
//         edad: 30,
//     },
//     {
//         nombre: "Camila",
//         edad: 20,
//     }
// ];

// const [fernando, alejandro] = personas;
// const [fernando,,camila] = personas;
//
// console.log(fernando);
// console.log(camila);

// Ejemplo desestructuración de arrays

/**
 *
 * @param producto
 * @returns {number[]}
 */
function calcularAumentoDePrecio(producto) {

    let porcentaje = 0;
    let nuevoPrecio = 0;

    if(producto.categoria === "Verduras") {
        porcentaje = 25;
        nuevoPrecio = producto.precio + (porcentaje * producto.precio) / 100;
    }

    return [
        porcentaje,
        nuevoPrecio
    ];
}

const producto1 = {
    nombre: "Lechuga",
    categoria: "Verduras",
    precio: 50,
};

const [porcentaje, nuevoPrecioProducto] = calcularAumentoDePrecio(producto1);

console.log(porcentaje);
console.log(nuevoPrecioProducto);
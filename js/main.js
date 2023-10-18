// const nombresDeProductos = [
//     "Arroz",
//     "Leche",
//     "Yogurt",
//     "Fideos",
//     "Zanahoria",
// ];
// const preciosDeProductos = [100, 200, 300, 400, 500, 600];

// Acceder a los elementos individualmente
// console.log(nombresDeProductos[0]);
// console.log(preciosDeProductos[2]);

// Recorrer los nombres de los productos
// for (let i = 0; i < 4; i++) {
//     console.log(nombresDeProductos[i]);
// }

// for (let i = 0; i < 6; i++) {
//     console.log(preciosDeProductos[i]);
// }

// Propiedad LENGTH
// for (let i = 0; i < nombresDeProductos.length; i++) {
//     console.log(nombresDeProductos[i]);
// }

// Agregar elementos al array

// Agregar al final
// nombresDeProductos.push("Azucar");
// nombresDeProductos.push("Cereales");
// Agregar al principio
// nombresDeProductos.unshift("Papa");

// for (let i = 0; i < nombresDeProductos.length; i++) {
//     console.log(nombresDeProductos[i]);
// }

// Quitar los elementos
// console.log(nombresDeProductos);
//
// nombresDeProductos.shift();
// nombresDeProductos.pop();
//
// console.log(nombresDeProductos);

// Eliminar varios elementos
// const nombresDeProductos = [
//     "Arroz",
//     "Zanahoria",
//     "Papa",
//     "Huevo",
//     "Yogurt",
// ];

// nombresDeProductos.splice(2, 2);

// Mostrar elementos como string
// const listaDeProductos = nombresDeProductos.join(" - ");
//
// console.log(listaDeProductos);

// Concatenar arrays
// const nombresDeProductos = [
//     "Arroz",
//     "Zanahoria",
//     "Papa",
//     "Huevo",
//     "Yogurt",
// ];
// const otrosNombresDeProductos = [
//     "Cereales",
//     "Azucar",
// ];
//
// const combinacionDeNombresDeProductos = nombresDeProductos.concat(otrosNombresDeProductos);
//
// console.log(nombresDeProductos);
// console.log(otrosNombresDeProductos);
// console.log(combinacionDeNombresDeProductos);

// Obtener copia de array
// const nombresDeProductos = [
//     "Arroz",
//     "Zanahoria",
//     "Papa",
//     "Huevo",
//     "Yogurt",
// ];
//
// const copiaDeProductos = nombresDeProductos.slice(1, 4);
//
// console.log(copiaDeProductos);

// Obtener índice dónde se encuentra el elemento
// const nombresDeProductos = [
//     "Arroz",
//     "Zanahoria",
//     "Papa",
//     "Huevo",
//     "Yogurt",
// ];
//
// const indiceDeHuevo = nombresDeProductos.indexOf("Arroz");
//
// console.log(indiceDeHuevo);

// Chequear si existe el elemento
// const nombresDeProductos = [
//     "Arroz",
//     "Zanahoria",
//     "Papa",
//     "Huevo",
//     "Yogurt",
// ];
//
// if (nombresDeProductos.includes("Zanahoria")) {
//     console.log("Se encuentra zanahoria");
// }

// Reverse
// const nombresDeProductos = [
//     "Arroz",
//     "Albahaca",
//     "Huevo",
//     "Papa",
//     "Yogurt",
//     "Zanahoria",
// ];

// console.log(nombresDeProductos);

// nombresDeProductos.reverse();
//
// console.log(nombresDeProductos);

// For of
// const nombresDeProductos = [
//     "Arroz",
//     "Albahaca",
//     "Huevo",
//     "Papa",
//     "Yogurt",
//     "Zanahoria",
// ];
//
// for (const nombreDeProducto of nombresDeProductos) {
//     console.log(nombreDeProducto);
// }

/**
 * EJEMPLO 1 SIN CHEQUEAR STOCK
 */

// // Objetos
// class Producto {
//
//     constructor (nombre, precio, stock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }
//
// }
//
// // Funciones
// function existeElProducto(nombreDeProducto) {
//
//     let encontrado = false;
//
//     for(const producto of listaDeProductos) {
//
//         // Si la propiedad nombre del objeto, es igual al nombre que paso por parámetro
//         if(producto.nombre === nombreDeProducto) {
//             encontrado = true;
//             break;
//         }
//
//     }
//
//     return encontrado;
// }
//
// function agregarUnProducto() {
//
//     // Le pido el nombre del producto al usuario
//     let productoAIngresar = prompt("Ingrese el nombre del producto que quiere agregar.");
//
//     // Mientras no exista un producto con el nombre que ingresó el usuario, se lo vuelvo a pedir
//     while (!existeElProducto(productoAIngresar)) {
//         productoAIngresar = prompt("Ingrese un nombre válido de un producto");
//     }
//
//     // Pedirle el stock
//     let stock = parseInt(prompt("Ingrese el stock que quiere agregar."));
//
//     while (stock <= 0) {
//         stock = parseInt(prompt("Ingrese un stock válido (Mayor a 0)"));
//     }
//
//     // Una vez que tenemos el nombre y el stock del producto a agregar, lo cargamos al carrito
//     carrito.push({
//         nombre: productoAIngresar,
//         cantidad: stock,
//     });
//
//     alert("PRODUCTO AGREGADO CON ÉXITO :D");
//
// }
//
// function finalizarCompra() {
//
//     let mensaje = "Los productos que agregó son: \n";
//
//     for(const productoAgregadoAlCarrito of carrito) {
//
//         mensaje += productoAgregadoAlCarrito.nombre + " - Cantidad: " + productoAgregadoAlCarrito.cantidad + "\n";
//
//     }
//
//     alert(mensaje);
//
// }
//
// // Inicio del programa
// const listaDeProductos = [
//     new Producto("Arroz", 50, 5),
//     new Producto("Albahaca", 25, 10),
//     new Producto("Huevo", 35, 2),
//     new Producto("Papa", 20, 30),
//     new Producto("Yogurt", 75, 2),
// ];
// const carrito = [];
//
// let operacion = prompt("Ingrese la operación que quiere realizar: 1- Agregar un producto / 2- Finalizar la compra / 0- Salir");
//
// while (operacion !== "0") {
//
//     // Chequeamos que operación ingresó
//     switch(operacion) {
//
//         case "1":
//
//             agregarUnProducto();
//
//             break;
//
//         case "2":
//
//             finalizarCompra();
//
//             break;
//
//         default:
//
//             alert("OPCIÓN INCORRECTA");
//             break;
//     }
//
//     // Volvemos a solicitar la operación
//     operacion = prompt("Ingrese la operación que quiere realizar: 1- Agregar un producto / 2- Finalizar la compra / 0- Salir");
// }

/**
 * EJEMPLO 2 COMPLETO CHEQUEANDO STOCK
 */

// Objetos
class Producto {

    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

}

// Funciones

function obtenerProducto(nombreDeProducto) {

    let encontrado = false;

    for(const producto of listaDeProductos) {

        // Si la propiedad nombre del objeto, es igual al nombre que paso por parámetro
        if(producto.nombre === nombreDeProducto) {
            encontrado = producto;
            break;
        }

    }

    return encontrado;
}

function agregarUnProducto() {

    // Le pido el nombre del producto al usuario
    let productoAIngresar = prompt("Ingrese el nombre del producto que quiere agregar.");

    // Mientras no obtenga un producto con el nombre que ingresó el usuario, se lo vuelvo a pedir
    let producto = obtenerProducto(productoAIngresar);
    while (!producto) {
        productoAIngresar = prompt("Ingrese un nombre válido de un producto");
        producto = obtenerProducto(productoAIngresar);
    }

    // Pedirle el stock
    let stock = parseInt(prompt("Ingrese el stock que quiere agregar."));

    while (stock <= 0 || stock > producto.stock) {
        stock = parseInt(prompt("Ingrese un stock válido (Mayor a 0)"));
    }

    // Una vez que tenemos el nombre y el stock del producto a agregar, lo cargamos al carrito
    carrito.push({
        nombre: productoAIngresar,
        cantidad: stock,
    });

    alert("PRODUCTO AGREGADO CON ÉXITO :D");

}

function finalizarCompra() {

    let mensaje = "Los productos que agregó son: \n";

    for(const productoAgregadoAlCarrito of carrito) {

        mensaje += productoAgregadoAlCarrito.nombre + " - Cantidad: " + productoAgregadoAlCarrito.cantidad + "\n";

    }

    alert(mensaje);

}

// Inicio del programa
const listaDeProductos = [
    new Producto("Arroz", 50, 5),
    new Producto("Albahaca", 25, 10),
    new Producto("Huevo", 35, 2),
    new Producto("Papa", 20, 30),
    new Producto("Yogurt", 75, 2),
];
const carrito = [];

let operacion = prompt("Ingrese la operación que quiere realizar: 1- Agregar un producto / 2- Finalizar la compra / 0- Salir");

while (operacion !== "0") {

    // Chequeamos que operación ingresó
    switch(operacion) {

        case "1":

            agregarUnProducto();

            break;

        case "2":

            finalizarCompra();

            break;

        default:

            alert("OPCIÓN INCORRECTA");
            break;
    }

    // Volvemos a solicitar la operación
    operacion = prompt("Ingrese la operación que quiere realizar: 1- Agregar un producto / 2- Finalizar la compra / 0- Salir");
}

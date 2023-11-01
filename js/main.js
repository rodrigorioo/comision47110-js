/**
 * DEFINIR EVENTO
 */

// const boton = document.getElementById("botonsito");
// const boton = document.querySelector("#botonsito");

// Forma 1
// function mostrarMensaje() {
//     console.log("Se hizo click en el botonsito");
// }
//
// boton.addEventListener("click", mostrarMensaje);

// Forma 2
// boton.addEventListener("click", () => {
//     console.log("Se hizo click en el botonsito");
// });

/**
 * EVENTOS DE MOUSE
 */

// const cajita = document.querySelector('.cajita');

// cajita.addEventListener("mousedown", () => {
//     console.log("APRETASTE EL MOUSE EN LA CAJITA");
// });
//
// cajita.addEventListener("click", () => {
//     console.log("CLICK ELEMENTO");
// });
//
// cajita.addEventListener("mouseup", () => {
//     console.log("SOLTASTE EL MOUSE EN LA CAJITA");
// });

// cajita.addEventListener("mouseover", () => {
//     cajita.className = "cajita bg-dark";
// });
//
// cajita.addEventListener("mouseout", () => {
//     cajita.className = "cajita";
// });

// cajita.addEventListener("mousemove", () => {
//     console.log("moviste el puntero sobre el elemento");
// });

/**
 * EVENTOS DE TECLADO
 */

// const inputsito = document.querySelector(".inputsito");
//
// inputsito.addEventListener("keydown", (e) => {
//
//     const vocales = ['A', 'E', 'I', 'O', 'U'];
//
//     if(vocales.includes(e.key.toUpperCase())) {
//         e.preventDefault();
//     }
//
//     console.log("SE EJECUTA KEYDOWN");
// });

// inputsito.addEventListener("keyup", () => {
//     console.log("SE EJECUTA KEYUP");
// });
//
// inputsito.addEventListener("change", () => {
//     console.log("SE EJECUTA CHANGE");
// });

/**
 * EVENTO DE SUBMIT
 */

// const form = document.querySelector(".formsito");
//
// form.addEventListener("submit", (e) => {
//
//     e.preventDefault();
//
//     console.log("SE HIZO SUBMIT DEL FORMULARIO");
// });

/**
 * EJEMPLO COMPLETO
 */

// Clases
class Producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

// Funciones
function ordenarPorPrecio() {

    const productosOrdenados = listadoDeProductos.sort( (productoA, productoB) => {

        if(productoA.precio < productoB.precio) {
            return 1;
        } else if(productoA.precio > productoB.precio) {
            return -1;
        }

        return 0;
    });

    // Renderizo los productos
    renderizarProductos(productosOrdenados);
}

function inicializarSelect() {
    const select = document.getElementById("selectOrden");

    select.addEventListener("change", () => {

        const value = select.value;

        switch(value) {

            case 'precio':

                ordenarPorPrecio();

                break;

            case 'nombre':

                // Ordenamos por nombre...
                break;
        }
    });
}

function inicializarInput() {

    const input = document.getElementById("buscarProducto");

    input.addEventListener("keyup", () => {

        // Filtramos los productos por lo que puso el usuario en el input
        const value = input.value;

        const productosFiltrados = listadoDeProductos.filter( (producto) => {
            return producto
                .nombre
                .toLowerCase()
                .includes(
                    value.toLowerCase()
                );
        });

        // Renderizo los productos
        renderizarProductos(productosFiltrados);

    });
}

function renderizarProductos(productos) {

    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    for(const producto of productos) {

        // Creamos los elementos dinámicamente
        const divPadre = document.createElement("div");
        divPadre.className = "col-12 col-sm-4 mb-2";

        const divCard = document.createElement("div");
        divCard.className = "card";

        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = producto.nombre;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `<strong>Precio:</strong> $${producto.precio} - <strong>Stock:</strong> ${producto.stock}`;

        const button = document.createElement("button");
        button.className = "btn btn-primary";
        button.innerText = "Comprar";

        // Insertar elementos adentro de otro
        divCardBody.append(h5, p, button);
        divCard.append(divCardBody);
        divPadre.append(divCard);
        contenedor.append(divPadre);
    }

}

// Inicio del programa
const listadoDeProductos = [
    new Producto("Lentejas", 100, 2),
    new Producto("Yogurt", 200, 5),
    new Producto("Remera", 500, 10),
    new Producto("Buzo", 1000, 2),
    new Producto("Arroz", 250, 4),
];

renderizarProductos(listadoDeProductos);
inicializarInput();
inicializarSelect();

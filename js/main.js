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

function eliminarProducto(producto) {

    // Busco el producto a eliminar del carrito por el nombre
    const indiceProductoAEliminar = carrito.findIndex( (el) => {
        return producto.nombre === el.nombre;
    });

    // Si el índice del producto a eliminar existe
    if(indiceProductoAEliminar !== -1) {

        // Elimino el producto del carrito
        carrito.splice(indiceProductoAEliminar, 1);

        // Actualizo localStorage
        localStorage.setItem("carrito", JSON.stringify(carrito));

        renderizarTablaCarrito(carrito);
    }
}

function obtenerProductosEnLS() {

    carrito = JSON.parse(localStorage.getItem("carrito"));

    if(carrito) {
        renderizarTablaCarrito(carrito);
    }
}

function guardarProductoEnLS(producto, cantidad) {

    const productoAAgregar = {
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: parseInt(cantidad),
    };

    // No hay productos en local Storage
    if(carrito === null) {

        carrito = [productoAAgregar];

    } else {

        // Busco el índice del producto en el array del localstorage para editarlo si existe
        const indiceExisteProducto = carrito.findIndex( (el) => {
            return el.nombre === productoAAgregar.nombre;
        });

        // Si el producto no existe en el localstorage, lo agrego
        if(indiceExisteProducto === -1) {
            carrito.push(productoAAgregar);
        } else {
            // Si existe, a la cantidad del producto que está en localstorage, le sumo la nueva cantidad
            carrito[indiceExisteProducto].cantidad += parseInt(cantidad);
        }
    }

    // Actualizo localStorage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    renderizarTablaCarrito(carrito);

}

function renderizarTablaCarrito(productosCarrito) {

    const tbody = document.querySelector("#carrito table tbody");
    tbody.innerHTML = "";

    for(const productoCarrito of productosCarrito) {

        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        tdNombre.innerText = productoCarrito.nombre;

        const tdPrecio = document.createElement("td");
        tdPrecio.innerText = `$${productoCarrito.precio}`;

        const tdCantidad = document.createElement("td");
        tdCantidad.innerText = productoCarrito.cantidad;

        const tdEliminar = document.createElement("td");

        const botonEliminar = document.createElement("button");
        botonEliminar.className = "btn btn-danger";
        botonEliminar.innerText = "Eliminar";

        // Agregar evento al boton
        botonEliminar.addEventListener("click", () => {
            eliminarProducto(productoCarrito);
        });

        // Agregar elementos uno adentro de otro
        tdEliminar.append(botonEliminar);
        tr.append(tdNombre, tdPrecio, tdCantidad, tdEliminar);

        tbody.append(tr);
    }
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

        const divAgregarAlCarrito = document.createElement("div");
        divAgregarAlCarrito.className = "d-flex align-items-center";

        const button = document.createElement("button");
        button.className = "btn btn-primary flex-shrink-0 me-3";
        button.innerText = "Agregar al carrito";

        const inputCantidad = document.createElement("input");
        inputCantidad.type = "number";
        inputCantidad.className = "form-control";
        inputCantidad.value = 1;

        // Agregar al carrito
        button.addEventListener("click", () => {

            // Obtenemos la cantidad del input
            const cantidad = inputCantidad.value;

            if(cantidad > producto.stock) {

                alert("NO HAY SUFICIENTE STOCK");

            } else {

                // Agregar producto a Local Storage
                guardarProductoEnLS(producto, cantidad);
            }


        });

        // Insertar elementos adentro de otro
        divAgregarAlCarrito.append(button, inputCantidad);
        divCardBody.append(h5, p, divAgregarAlCarrito);
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
let carrito = [];

renderizarProductos(listadoDeProductos);
inicializarInput();
inicializarSelect();
obtenerProductosEnLS();

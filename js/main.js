class Producto {

    constructor(nombre, categoria, precio) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.precio = precio;
    }
}

const productos = [
    new Producto("Remera 1", "Ropa", 100),
    new Producto("Lechuga", "Verduras", 200),
    new Producto("Yogurt", "Lacteos", 500),
    new Producto("Buzo 3", "Ropa", 200),
    new Producto("Arroz", "Legumbres", 700),
];

// Cargar nuestros productos al front
function renderizarProductos(productos) {

    const contenedor = document.getElementById("contenedor");

    for(const producto of productos) {

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
        p.innerHTML = `<strong>Precio:</strong> $${producto.precio}`;

        // Insertar elementos uno adentro de otro
        divCardBody.append(h5, p);
        divCard.append(divCardBody);
        divPadre.append(divCard);

        contenedor.append(divPadre);
    }

}

// Inicio del programa
renderizarProductos(productos);

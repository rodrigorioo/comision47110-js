// Funciones
function concatenarCodigo(codigoDeProducto) {

    if(codigosDeProducto !== "") {
        codigosDeProducto += ", ";
    }

    codigosDeProducto += codigoDeProducto;
}

function agregarUnNuevoProducto () {

    let codigoDeProducto = pedirCodigo();

    while(codigoDeProducto !== "0") {

        switch(codigoDeProducto) {

            case "0001":
                concatenarCodigo(codigoDeProducto);
                total += 10;
                break;

            case "0002":
                concatenarCodigo(codigoDeProducto);
                total += 20;
                break;

            case "0003":
                concatenarCodigo(codigoDeProducto);
                total += 30;
                break;

            case "0004":
                concatenarCodigo(codigoDeProducto);
                total += 40;
                break;

            default:
                alert("CÓDIGO INCORRECTO");
                break;
        }

        // Volvemos a solicitar el código
        codigoDeProducto = pedirCodigo();
    }

}

function mostrarElTotal () {
    alert("Los productos agregados son: " + codigosDeProducto + ". El total de los productos es: $" + total);
}

function restarValorDelTotal (monto) {

    if(monto > total) {
        alert("El monto es mayor al total. Ingrese un monto menor");
    } else {

        total = total - monto;

    }

}

function sacarProducto() {
    let codigoDeProducto = pedirCodigo();

    while(codigoDeProducto !== "0") {

        switch(codigoDeProducto) {

            case "0001":
                restarValorDelTotal(10);
                break;

            case "0002":
                restarValorDelTotal(20);
                break;

            case "0003":
                restarValorDelTotal(30);
                break;

            case "0004":
                restarValorDelTotal(40);
                break;

            default:
                alert("CÓDIGO INCORRECTO");
                break;
        }

        // Volvemos a solicitar el código
        codigoDeProducto = pedirCodigo();
    }
}

function pedirOperacion() {
    return prompt("Que operación desea realizar? 1- Ingresar un nuevo producto / 2- Quiere ver el total de los productos ingresados / 3- Sacar producto / 0- Quiere SALIR");
}

function pedirCodigo() {
    return prompt("Ingrese del producto / 0001 - $10 / 0002 - $20 / 0003 - $30 / 0004 - $40 / 0 - SALIR");
}

// Inicio del programa
let codigosDeProducto = "";
let total = 0;
let operacion = pedirOperacion();

while(operacion !== "0") {

    // Chequeamos la operación que ingresó el usuario
    switch(operacion) {

        case "1":

            agregarUnNuevoProducto();
            break;

        case "2":

            mostrarElTotal();
            break;

        case "3":
            sacarProducto();
            break;

        default:

            alert("OPCIÓN INCORRECTA");
            break;
    }

    // Volvemos a solicitar la operación
    operacion = pedirOperacion();

}

alert("GRACIAS POR UTILIZAR NUESTROS SERVICIOS");

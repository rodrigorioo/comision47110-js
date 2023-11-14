/**
 * SWEET ALERT
 */

// const botonsito = document.getElementById("botonsito");
//
// botonsito.addEventListener("click", () => {
//     Swal.fire({
//         title: 'Eliminar',
//         text: '¿Está seguro que quiere eliminar el elemento?',
//         icon: 'error',
//         confirmButtonText: 'SÍ',
//         showDenyButton: true,
//         denyButtonText: 'NO',
//     }).then( (response) => {
//
//         if(response.isConfirmed) {
//             alert("ELIMINA EL ELEMENTO");
//         }
//
//         if(response.isDenied || response.isCancel) {
//             alert("NO SE ELIMINA EL ELEMENTO");
//         }
//
//     });
// });

/**
 * TOASTIFY
 */

// const botonsito2 = document.getElementById("botonsito2");
//
// botonsito2.addEventListener("click", () => {
//     Toastify({
//         text: "NOTIFICACIÓN",
//         duration: 3000,
//         // destination: "https://github.com/apvarun/toastify-js",
//         // newWindow: true,
//         close: true,
//         position: "right",
//         gravity: "top",
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//         onClick: function(){
//             Swal.fire({
//                 title: 'CLICK',
//                 text: 'CLICK EN SWEET ALERT',
//                 icon: 'error',
//             });
//         }
//     }).showToast();
// });

/**
 * LUXON
 */

const DateTime = luxon.DateTime;
//
// const fechaDeHoy = DateTime.now();
// const fechaDeAyer = DateTime.local(2023, 11, 13, 20, 0, 0);
// const fechaDiciembre = DateTime.local(2023, 12, 24, 20, 0, 0);
//
// // console.log(fechaDiciembre.daysInMonth);
//
// const fecha1 = DateTime.local(2023, 11, 14, 15);
//
// const fecha2 = fecha1.plus({
//     hours: 24,
// });

// console.log(fecha2.toString());

// console.log(fecha2.setLocale('en-US').toLocaleString());

// console.log(fecha1.toFormat("dd---LL---yyyy"));

// PARSEO
// const formatoFecha = "14///11//2023 - 20:15:00";
//
// const fechaFormateada = DateTime.fromFormat(formatoFecha, "dd///LL//yyyy - HH:mm:ss");
//
// console.log(fechaFormateada.toString());

/*
DURATION
 */

// const Duration = luxon.Duration;
//
// const duracion = Duration.fromObject({
//     hours: 5,
//     minutes: 15,
// });

// const duracion2 = duracion.plus({
//     hours: 1,
//     minutes: 20,
//     seconds: 30,
// });
// const duracion2 = duracion.minus({
//     hours: 1,
//     minutes: 30,
// })
//
// console.log(duracion2);

/*
INTERVAL
 */

// const Interval = luxon.Interval;
//
// const fecha1 = DateTime.local(2023, 10, 1);
// const fecha2 = DateTime.local(2023, 8, 30);
// const diferencia = Interval.fromDateTimes(fecha2, fecha1);
//
// console.log(diferencia.length("months"));

/**
 * TYPE DATE
 */

const fechita = document.getElementById("fechita");

fechita.addEventListener("change", () => {

    const valor = fechita.value;

    console.log(valor);

    // Formatear a luxon
    const fechaLuxon = DateTime.fromFormat(valor, "yyyy-LL-dd");
});


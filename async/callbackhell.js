function hola(nombre, cb) {
  setTimeout(() => {
    console.log('Hola ' + nombre);
    cb(nombre);
  }, 1500);
}

function hablar(cbHablar) {
  setTimeout(() => {
    console.log('bla bla bla bla.....');
    cbHablar();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    callback(nombre, function () {
      console.log('terminando proceso');
    });
  }
}

function adios(nombre, cb) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    cb();
  }, 1000);
}
console.log('Iniciando');

hola('Daniel', function (nombre) {
  conversacion(nombre, 3, adios);
});

// hola('Daniel', function (nombre) {
//   hablar(function () {
//     hablar(function () {
//       hablar(function () {
//         adios(nombre, function () {
//           console.log('Terminando');
//         });
//       });
//     });
//   });
// });

// adios('Daniel', function () {
//   console.log('Termino el proceso');
// });

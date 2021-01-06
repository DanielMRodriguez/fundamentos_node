function hola(nombre, cb) {
  setTimeout(() => {
    console.log('Hola ' + nombre);
    cb(nombre);
  }, 1500);
}

function adios(nombre, cb) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    cb();
  }, 1000);
}
console.log('Iniciando');
hola('Daniel', function (nombre) {
  adios(nombre, function () {
    console.log('terminando');
  });
});

// adios('Daniel', function () {
//   console.log('Termino el proceso');
// });

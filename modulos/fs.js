const fs = require('fs');

function leer(path, cb) {
  fs.readFile(path, (err, data) => {
    cb(data.toString());
  });
}

function escribir(path, contenido, cb) {
  fs.writeFile(path, contenido, function (err) {
    if (err) {
      console.error('No eh podido escribir', err);
    } else {
      console.log('Termine de escribir');
    }
  });
}
function borrar(path, cb) {
  fs.unlink(path, cb);
}
// borrar(__dirname + '/archivo.txt', console.log);
// leer(__dirname + '/archivo1.txt', console.log);
// escribir(__dirname + '/archivo1.txt', 'I want to writed', console.log);

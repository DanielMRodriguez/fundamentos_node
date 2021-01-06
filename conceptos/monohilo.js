console.log('Hola mundo');
let i = 0;

//Manejo de errores NO se detiene la ejecición
setInterval(() => {
  console.log(i);
  i++;

  if (i === 5) {
    try {
      let a = i + z;
    } catch (err) {
      console.log(err);
    }
  }
}, 1000);

console.log('Segunda instrucción');

//No se captra el error y se detiene el hilo
// setInterval(() => {
//   console.log(i);
//   i++;

//   if (i === 5) {
//     let a = i + z;
//   }
// }, 1000);

// Escribe una función que, al recibir un array como parámetro, elimine los strings repetidos del mismo.

// No se permite hacer uso de Set ni Array.from().

// // Ejemplo

'use strict';

const names = [
  'A-Jay',
  'Manuel',
  'Manuel',
  'Eddie',
  'A-Jay',
  'Su',
  'Reean',
  'Manuel',
  'A-Jay',
  'Zacharie',
  'Zacharie',
  'Tyra',
  'Rishi',
  'Arun',
  'Kenton',
];

// Solución:

let nombresUnicos = names.filter((item, index) => {
  return names.indexOf(item) === index;
});
console.log(nombresUnicos);

// Crea un programa que reciba un número en decimal o binario y devuelva la conversión:

// -   Si le pasamos un nº en decimal debe retornar la conversión a binario.

// -   Si le pasamos un nº en binario deberá devolver su equivalente decimal.

// Para ello la función deberá recibir un segundo parámetro que indique la base: 10 (decimal) o 2 (binario).

// No se permite utilizar el método parseInt().

'use strict';

function decinario(params) {
  // Pedir un Nº al usuario mediante prompt
  const num = prompt(
    'Dime un número DECIMAL o BINARIO (Recuerda que los binarios empiezan por 0b (cero-letra Be)'
  );

  // Pasarlo la string a number
  numero = Number(num);

  // Mostrarlos por un alert
  console.log(typeof num, typeof numero, numero);
  alert(
    'El Nº en DECIMAL es: ' +
      numero +
      ' y el Nº en BINARIO es: ' +
      '0b' +
      numero.toString(2)
  );
}
decinario();

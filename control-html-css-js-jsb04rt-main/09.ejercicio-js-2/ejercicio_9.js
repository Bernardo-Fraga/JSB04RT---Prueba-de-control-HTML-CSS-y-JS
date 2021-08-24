// # Ejercicio 2

// Crea un programa que imprima cada 5 segundos el tiempo desde la ejecución del mismo.
// Formatea el tiempo para que se muestren los segundos, los minutos, las horas y los días
// desde la ejecución.
'use strict';
function cronometro() {
  // Partir de una marca de tiempo (momento de inicio)
  const inicioCrono = new Date();
  // Establecer setInterval
  setInterval(() => {
    // Iniciar el cronometro
    const now = new Date();

    // Tiempo cronometrado:
    let crono = now - inicioCrono;

    // Traducir los milisegundos a teimpo desde 1970
    const tiempo = new Date(crono);

    //crear las variables
    const segundos = tiempo.getSeconds();
    const minutos = tiempo.getMinutes();
    const horas = tiempo.getHours() - 1;
    const dias = tiempo.getDate() - 1;
    // Mostrar el resultado por consola
    console.log(
      'Cronómetro en funcionamiento. Han pasado ' +
        segundos +
        ' segundos, ' +
        minutos +
        ' minutos, ' +
        horas +
        ' horas y ' +
        dias +
        ' días desde el inicio.'
    );
  }, 5000);
}
cronometro();

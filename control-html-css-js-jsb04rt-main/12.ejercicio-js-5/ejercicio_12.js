// # Ejercicio 5

// Consigue una lista con los nombres de los personajes de la serie Rick and Morty que
// aparecen en los episodios lanzados en el mes de enero (el año no importa).
// Utiliza llamadas a la API: 'https://rickandmortyapi.com/api/'

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////          SIN TERMINAR           /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

'use strict';
let personajes = [];
const personajesRM = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/episode');
    const { results } = await response.json();
    console.log(results);
    ///////////////////////////////////////////////////////////////////////
    const episodios = results.filter((episodio) =>
      episodio.air_date.includes('January')
    );
    console.log(episodios);
    ////////////////////////////////////////////////////////////////////////
    for (const episodio of episodios) {
      personajes = {
        personaje: episodio.characters,
      };
      console.log(personajes);

      //////////////////////////////////////////////////////////////////////
    }

    //////////////////////////////////////////////////////////////////////////
  } catch (error) {
    console.log(error);
  }
  ////////////////////////////////////////////////////////////////////////////
  // const iterarPersonajes = (personajes) => {
  //   for (let i = 0; (i = personajes.length - 1); i++) {
  //     personajeEnCapitulo = personajes[i];
  //     console.log(personajeEnCapitulo);
  //   }
  // };
  ////////////////////////////////////////////////////////////////////////////
};
/////////////////////////////////////////////////////////////////////////////
const capitulosDePersonajes = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();
    console.log(results);
  } catch (error) {
    console.log('Fallo inesperado');
  }
};
////////////////////////////////////////////////////////////////////////////////
personajesRM();
//console.log(personajes);

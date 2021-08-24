'use strict';

let usuarios = Number(prompt('Seleccione cantidad de usuarios...'));
let usuariosArray = [];

const obtenerUsuarios = async (usuarios) => {
  try {
    const response = await fetch(
      `https://randomuser.me/api/?results=${usuarios}`
    );
    const { results } = await response.json();
    //console.log(results);
    for (const user of results) {
      const dataUser = {
        username: user.login.username,
        name: user.name.first,
        surname: user.name.last,
        gender: user.gender,
        country: user.location.country,
        email: user.email,
        picture: user.picture.large,
      };
      usuariosArray.push(dataUser);
    }
  } catch (error) {
    console.error('Incorrecto');
  }
};
obtenerUsuarios(usuarios);
console.log(usuariosArray);

//  Contador de turnos con closure

function crearTurnos(taller) {
  let numero = 0;

  return () => {
    numero++;
    return `${taller} turno ${numero}`;
  };
}

const turnoPan = crearTurnos("Panadería");
const turnoTarta = crearTurnos("Tartas");

console.log(turnoPan());
console.log(turnoPan());
console.log(turnoTarta());
console.log(turnoPan());
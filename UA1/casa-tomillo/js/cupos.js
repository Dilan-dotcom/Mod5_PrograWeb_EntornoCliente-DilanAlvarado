// Constantes
const nivel = "Inicial";
const cupos = 6;

//  Condicional if / else if / else para el estado de los cupos
if (cupos === 0) {
  console.error("Taller lleno");
} else if (cupos <= 2) {
  console.warn("¡Últimos cupos!");
} else {
  console.log("Hay cupos disponibles");
}

//  Operador ternario para la cantidad exacta
const mensajeCupos = cupos === 1 ? "Queda 1 cupo" : `Quedan ${cupos} cupos`;
console.log(mensajeCupos);

//  Estructura switch para el requisito según el nivel
switch (nivel) {
  case "Inicial":
    console.log("No necesita experiencia");
    break;
  case "Intermedio":
    console.log("Requiere el nivel inicial");
    break;
  default:
    console.log("Consulte con la escuela");
    break;
}

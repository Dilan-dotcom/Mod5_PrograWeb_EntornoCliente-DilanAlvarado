// grupos.js — Llenar 8 cupos de 3 en 3 usando while

let cupos = 8; // Cupos disponibles al inicio
let ronda = 1; // Contador de rondas

while (cupos > 0) {
  const inscritos = Math.min(3, cupos); // Inscribe 3, o los que queden si son menos de 3
  cupos -= inscritos;                   // Resta los inscritos a los cupos restantes
  console.log(`Ronda ${ronda}: ${inscritos} personas — quedan ${cupos}`); // Muestra avance de la ronda
  ronda++;                              // Pasa a la siguiente ronda
}

console.log("Taller lleno"); // Mensaje final cuando ya no quedan cupos
// semana.js — Matriz de talleres por día de la semana

const semana = [
  ["Martes", "Cocina inicial", "Tartas"],      // Fila 0: día y 2 talleres
  ["Miércoles", "Masa madre"],                 // Fila 1: día y 1 taller
  ["Jueves", "Cocina intermedia"],             // Fila 2: día y 1 taller
  ["Viernes", "Pan de campo"],                 // Fila 3: día y 1 taller
  ["Sábado", "Bollería", "Decoración"]         // Fila 4: día y 2 talleres
];

for (const dia of semana) {
  const cantidad = dia.length - 1;             // Resta 1 porque la posición 0 es el nombre del día
  console.log(`${dia[0]} (${cantidad}): ${dia.slice(1).join(", ")}`); // Muestra día, cantidad y talleres
}
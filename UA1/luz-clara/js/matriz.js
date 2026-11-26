//una matriz es un vector de vectores (filas y columnas basicamente )

const dias = ["Lunes", "Martes"]; //nombre de cada fila
const agenda = [
  //filas:dias ,colummas:horas
  ["Retrato", "Libre", "Perfil"], //fila 0 cer

  ["Libre", " Familiar", "Libre"], //fila 1 uno
];
console.log(agenda[1][1]); //imprime desde la filla 1, columna 1
for (let f = 0; f < agenda.length; f++) {
  //con esto recorremos la filas
  console.log(`${dias[f]}: ${agenda[f].join("|")}`);
  //esto con f recorre las posiciones de dias y agendas
}
console.log("fuera de ciclo");

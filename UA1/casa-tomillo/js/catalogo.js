//usando objetos mostrar 7 talleres de tipo oobjetos  con precios calcular el promedio de cuantos cuestan mas de 80000 y averiduar cual es el mas caro
const talleres = [
  { nombre: "Cocina de la casa · Inicial", precio: 68000 },
  { nombre: "Cocina de la casa · Intermedio", precio: 72000 },
  { nombre: "Panadería ·Masa madre", precio: 95000 },
  { nombre: "Panadería · Pan de campo", precio: 70000 },
  { nombre: "Panadería · Bollería", precio: 88000 },
  { nombre: "Repostería ·Tartas", precio: 82000 },
  { nombre: "Repostería ·Decoracion", precio: 58000 },
];

const suma = 0;
const caros = 0;
const masCaro = talleres[0];
//los objetos se sacan de un mismo tipo y buscando lo que tenga adentron en este caso de los talleres se necesita el nombre del taller la informacion y el precio
for (const a of talleres) {
  console.log(`${a.nombre}: ${a.precio}`);
}
console.log(talleres, nombre.length);

//primer ejercicio panaderia ,cusnto se paga , cuentas y cuantos cursos quedan
//constantes
const curso = "Panadería: masa madre";
const precio = 95000; //entero number
const MATRICULA = 10000; //entero number
const personas = 2; //entero number

//variables que cambian
let cupos = 8;
let preciopersona = 0;
let total = 0;
let totalpeople = 0;
//parte logica
preciopersona = precio + MATRICULA;
total = preciopersona * personas;
totalpeople = cupos - personas;
//salida de datos

console.log("\t======CASA DEL TOMILLO======");
console.log("Taller:", curso);
console.log("Precio curso :", curso);
console.log("Precio de matricula :", MATRICULA);
console.log("Precio total :", preciopersona);
console.log("Precio por persona");
console.log("¿Hay cupos?", cupos > 0);

console.log("Cupos disponibles :", totalpeople);
console.log(
  "¿Menos de 250 000colones y con cupos?",
  total < 250000 && cupos > 0,
);
console.log("Total para personas ", personas, "personas", total);

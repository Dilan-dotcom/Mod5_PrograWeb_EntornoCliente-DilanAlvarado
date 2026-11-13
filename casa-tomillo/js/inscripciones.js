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

//parte logica
preciopersona = precio + MATRICULA;
total = preciopersona * personas;
//salida de datos

console.log("\t======CASA DEL TOMILLO======");
console.log("taller:", curso);
console.log("Precio curso :", curso);
console.log("Precio de matricula :", MATRICULA);
console.log("Precio total :", preciopersona);

//logica
console.log("¿Hay cupos?", cupos > 0);
console.log("Cupos disponibles :", cupos);

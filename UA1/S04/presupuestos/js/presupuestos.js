//presupuestos Pedir los dos datos con prompt convertir la cantidad con Number  ,mostrar saludo, personas, total y si es grupo Probar con Luis y 3.

//constantes
const precioPersona = 105000;
const cantidadPersonas = 3;

//variables
let total = 0;
//entrada de datos
const nombre = prompt("¿Cual es su nombre? "); //da texto
const personas = prompt("¿Cantidad de personas?");

total = precioPersona * cantidadPersonas;

Number(personas) * precioPersona; //cuando se usa prompt casi siempre se pasa  a texto lo que se hace con number es pasarlo a numero(se castea)

//salida
console.log("Hola," + nombre + ".");
console.log("Personas," + personas + ".");
console.log("Total :", total);
console.log("¿Es grupo (3 o más)? ", personas > cantidadPersonas);

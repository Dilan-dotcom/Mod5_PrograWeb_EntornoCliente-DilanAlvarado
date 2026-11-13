//pedir datos con prompt

const nombre = prompt("¿Cual es su nombre?");
const fotos = prompt("¿Cuantas fotos impresas?"); //devuelve texto
console.log("hola ," + nombre + "."); // el + une cadenas
console.log("fotos +1 :", fotos); // +une pero no suma
console.log("fotos +1 :", Number(fotos) + 1); // +suma
console.log("Pidio fotos? :", Number(fotos) > 0);
comparar;

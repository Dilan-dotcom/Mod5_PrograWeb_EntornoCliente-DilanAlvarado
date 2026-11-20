const precio = 105000; // Costo por persona
const pago = parseFloat(prompt("¿Con cuánto paga?")); // Convierte el pago a decimal
const personas = parseInt(prompt("¿Cuántas personas?")); // Convierte las personas a entero
const aPagar = precio * personas; // Calcula el total a pagar
const vuelto = pago - aPagar; // Calcula el vuelto

console.log(`Personas: ${personas}`); // Muestra personas
console.log(`A pagar: ${aPagar.toLocaleString("es-CR")}`); // Muestra total con separador de miles
console.log(`Pagó: ${pago.toFixed(2)}`); // Muestra pago con dos decimales
console.log(`Vuelto: ${vuelto.toFixed(2)}`); // Muestra vuelto con dos decimales

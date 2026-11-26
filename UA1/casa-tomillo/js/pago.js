const nombre = "panadería: masa madre".trim().toUpperCase(); // Quita espacios y pasa a mayúsculas
const fecha = new Date(2026, 10, 21); // Noviembre es el mes 10
const largo = { dateStyle: "full" }; // Formato de fecha larga
const total = 105000; // Total del taller más matrícula
const cuotas = 4; // Cantidad de cuotas
const cuota = total / cuotas; // Monto de cada cuota
const colones = new Intl.NumberFormat("es-CR", {
  style: "currency",
  currency: "CRC",
}); // Formato en colones

console.log(`Taller: ${nombre}`); // Muestra el taller en mayúsculas
console.log(`Inicia: ${fecha.toLocaleDateString("es-CR", largo)}`); // Muestra la fecha larga
console.log(`Total: ${colones.format(total)}`); // Muestra el total con formato
console.log(`${cuotas} cuotas de ${colones.format(cuota)}`); // Muestra cuotas y monto
console.log(`¿Cuota exacta? ${Number.isInteger(cuota)}`); // Revisa si la cuota es entera
console.log(`Con 3 cuotas: ${Math.ceil(total / 3)} cada una`); // Redondea hacia arriba con 3 cuotas

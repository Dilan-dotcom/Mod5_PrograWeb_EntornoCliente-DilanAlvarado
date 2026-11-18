// descuento.js  Error de lógica corregido
const monto = 120000; // una compra grande
let descuento = 0;

if (monto >= 100000) {
  // Se evalúa primero la condición más restrictiva (compra grande)
  descuento = 10;
} else if (monto >= 50000) {
  // Luego la compra mediana
  descuento = 5;
}

console.log(`Descuento: ${descuento} %`); // Ahora muestra 10 %

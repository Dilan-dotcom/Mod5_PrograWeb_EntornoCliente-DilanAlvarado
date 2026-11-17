// textos.js - Métodos de las cadenas y plantillas
const escrito = "  retrato familiar  ";
const servicio = escrito.trim();
console.log(servicio.toUpperCase());
// con espacios de más
// quita los espacios
console.log(escrito.length, servicio.length); // cantidad de letras
// todo en mayúscula
console.log(servicio.includes("familiar")); // ¿contiene?
console.log(servicio.slice(0, 7));
console.log(`Servicio: ${servicio}`);
// de la letra 0 a la 6
// plantilla con ${ }

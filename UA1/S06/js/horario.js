try {
  //  Pedir el día y normalizarlo (quitar espacios y pasar a minúsculas)
  const entrada = prompt("Escriba un día de la semana:");
  const dia = entrada.trim().toLowerCase();

  //  Evaluar el día con switch (agrupando domingo y lunes)
  switch (dia) {
    case "domingo":
    case "lunes":
      console.log(`El ${dia} está cerrado`);
      break;
    default:
      console.log(`El ${dia} abre de 10:00 a. m. a 7:00 p. m.`);
      break;
  }
} catch (error) {
  // Capturar el error si el usuario presiona "Cancelar"
  console.warn("No se indicó un día.");
} finally {
  // Se ejecuta siempre, haya error o no
  console.log("Casa Tomillo · Barrio Amón");
}

//funciones para cotizar
function formatoColones(monto) {
  //declaracion
  return `₡${monto.toLocaleString("es-CR")}`; //TEXTO CON FORMATO
}
const precioConIvA = (monto) => Math.round(monto * 1.13); //flecha
function totalSesiones(monto, cantidad) {
  // 2 parametros
  if (isNaN(cantidad) || cantidad <= 1) {
    //validacion de cantidad
    return "cantidad no valida";
  }
  const total1 = precioConIvA(monto) * cantidad; //este dato es local
  return formatoColones(total1);
}
console.log(formatoColones(45000)); //debe de aparecer 45000
console.log(totalSesiones(45000, 2)); //101 700
console.log(totalSesiones(75000, 0)); //cantidad no valida

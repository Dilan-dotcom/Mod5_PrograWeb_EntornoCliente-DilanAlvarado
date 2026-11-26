//funciones para cotizar
function enColones(monto) {
  //declaracion
  return `₡${monto.toLocaleString("es-CR")}`; //TEXTO CON FORMATO
}
const conMatricula = (monto) => monto + 10000; //flecha
function costoGrupo(monto, cantidad) {
  // 2 parametros
  let desc = 0;
  if (isNaN(cantidad) || cantidad < 1 || cantidad > 8) {
    //validacion de cantidad
    return "cantidad no valida";
  }

  if (cantidad >= 3) {
    desc = 0.1;
  } else {
    desc = 0;
  }

  return enColones(conMatricula(monto) * cantidad - ((conMatricula(monto) * cantidad) * desc));
}

console.log(enColones(95000));
console.log(conMatricula(68000));
console.log(costoGrupo(68000, 2));
console.log(costoGrupo(95000, 3));
console.log(costoGrupo(95000, 9));

// funciones.js — Funciones para cotizar (final de cursos.html)

//  Formatea el monto en colones (Costa Rica)
function enColones(monto) {
  return monto.toLocaleString("es-CR");
}

//  Función flecha que suma los 10 000 de matrícula
const conMatricula = (monto) => monto + 10000;

//  Valida la cantidad, suma matrícula y aplica 10% de descuento si son 3 o más
function costoGrupo(monto, cantidad) {
  if (isNaN(cantidad) || cantidad < 1 || cantidad > 8) {
    return "Cantidad inválida";
  }

  let costo = conMatricula(monto) * cantidad;

  if (cantidad >= 3) {
    costo = costo * 0.9;
  }

  return enColones(Math.round(costo));
}

// Llamadas de prueba
console.log(enColones(95000));
console.log(conMatricula(68000));
console.log(costoGrupo(68000, 2));
console.log(costoGrupo(95000, 3));
console.log(costoGrupo(95000, 9));
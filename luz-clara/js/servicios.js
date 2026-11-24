//tarifas con call back

const tarifas = [
  //esto es un vector de objetos
  { servicio: "Individula", monto: 45000 },
  { servicio: "Familiar", monto: 75000 },
  { servicio: "Perfil profesional", monto: 45000 },
  { servicio: "Catalogo basico", monto: 38000 },
  { servicio: "Media jornada", monto: 120000 },
];
//se recorre el vector con un forEach
tarifas.forEach((t) => {
  console.log(`${t.servicio}:${formatoColones(t.monto)}`);
});
const nombres = tarifas.map((t) => t.servicio);
console.log(`servicios ${nombres.join(",")}`);
const economicos = tarifas.filter((t) => t.monto < 50000);
console.log(`Menos de 50000: ${economicos.length}`);

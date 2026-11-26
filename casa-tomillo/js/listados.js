//  Callbacks sobre el catálogo 

//  Talleres de menos de 75 000
const economicos = talleres.filter((t) => t.precio < 75000);

//  Mostrar cada taller económico con su precio formateado
economicos.forEach((t) => {
  console.log(`${t.nombre}: ${enColones(t.precio)}`);
});

//  Mostrar cuántos talleres económicos son
console.log(`Económicos: ${economicos.length}`);

//  Vector nuevo con precio + matrícula de cada taller
const conMatriculas = talleres.map((t) => conMatricula(t.precio));
console.log(`Con matrícula: ${conMatriculas.join(", ")}`);
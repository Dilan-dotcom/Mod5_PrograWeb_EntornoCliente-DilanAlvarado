//recorrer un vector con for y for of
const valor = [45000, 75000, 38000]; //tarifas
let total = 0;

for (let i = 0; i < valor.length; i++) {
  //aqui no hace falta iniciar i,trae los indices 0 1 y 2
  total += valor[i]; //suma cada precio dentro de la const precio
}

console.log("Total", total);
//esta es otras variable que trae el valor de las demas variables
for (const valores of valor) {
  console.log("precio", valores);
}

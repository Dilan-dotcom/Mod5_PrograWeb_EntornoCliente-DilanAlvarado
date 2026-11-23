//continue salta una vuelta ;break termina el ciclo

const servicioss = ["Retrato", "Familiar", "Eventos", "Perfil"];
for (const s of servicioss) {
  if (s === "Familiar") continue; //salta a la siguiente linea
  if (s === "Perfil") break; //finaliza e ciclo
  console.log(s);
}
console.log("Fuera de ciclo");
/*Retrato saltar.js:7:11
Eventos saltar.js:7:11
Fuera de ciclo
esto es lo que suelta*/

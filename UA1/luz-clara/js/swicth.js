//elegir entre varios casos
const dias = "sabado"; //variable char va en ""

switch (dias) {
  case "sabado":
    console.log("tarifa de fin de semana");
    break; //cada que termine un caso usa break
  case "domingo":
    console.log("estudio cerrado de fin de semana");
    break; //cada que termine un caso usa break
  default:
    console.log("Tarifa normal");
    break;
}

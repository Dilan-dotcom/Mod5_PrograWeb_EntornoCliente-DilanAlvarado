//en este archivo hay un error encuentralo con el put de interrupcon

const precio = 45000;
const descuento = 0.1; //el error esta aqui habia un 10 en bvez de 10%
const rebaja = precio * descuento;
const total = precio - rebaja;
console.log("total :", total);
//el error aqui es de logica puesto que nos suelta el numero errorneo de
//total : -405000 lo cual esta  mal

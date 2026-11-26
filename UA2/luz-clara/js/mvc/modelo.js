//modelo los datos de las reservas y sus reglas y condiciones
class Reserva {//clase con su nombre
  constructor(cliente,servicio,precio){//constrctor y sus metodod
    this.cliente=cliente;//this. el objeto se esta creando .cliente o mejor dicho la propiedad del objeto 
     this.servicio=servicio;//=cliente el parametro copia dentro del objeto
      this.precio=precio;
  }
}
class Reservas{//segunda clase del modelo. es el conjunto de todas las reseervas en plural 
  constructor(){
    this.lista=[];//todas las reservas .propiedad vector empieza vacia y guarda objetos de reserva 
  }
  agregar(reserva){//metodo con parametro en una clase , se escriben sin la palabra funtion
    if (reserva.precio<=0){//regla de negocio reseerva.precio es propiedad de otro objeto .reseerva es el objeto  que llego como argumento
      return false;//no se guarda
    }
    this.lista.push(reserva);//push sobre la propiedad. guarda la reserva en la lista de  este objeto
    return true;
  }
  ingresos(){
    let suma=0;
    this.lista.forEach((r)=>{ suma += r.precio;}); //forEach con callback. r es cada reserva; se suma su precio
    return suma;
  }
}



//el controlador recibe la accion y coordina 

class  ControladorReservas{
  constructor(modelo,vista){
    this.modelo=modelo;//guarda los 2 modelos 
    this.vista = vista;
  }
  reservar(cliente,servicio,precio){
    const nueva=new Reserva(cliente,servicio,precio);//crea una instacia y usa una clase modelo
    if (!this.modelo.agregar(nueva)) {///!:no logico y revierte el boleano
      this.vista.error(`Precio invalido para ${cliente}`);
    }
  }
  actualizar(){
    this.vista.mostrar(this.modelo.lista);
    this.vista.mostrarIngresos(this.modelo.ingresos());
  }
}
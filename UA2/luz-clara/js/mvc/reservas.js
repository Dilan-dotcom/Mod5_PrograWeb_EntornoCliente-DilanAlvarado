//el arranque une el modelo la vista hy el controlador 
const modelo= new Reservas();//instancia del modelo parentesis vacio porque el constructor no recibe datos 
const vista  = new VistaReservas();
const reservas = new ControladorReservas(modelo,vista)//instancia del controlador

reservas.reservar("Ana Rodrigez","Familiar",75000);//metodo del controlador, es la accion del ususaruio
reservas.reservar("luis mora","perfil profesional",38000);
reservas.reservar("prueba","Faindividualmiliar",0);
reservas.actualizar();
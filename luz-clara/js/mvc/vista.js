//vista:muestra los datos (en consola por ahora)
class vistaRservas{
  mostrar(lista){//i:posicion 
    lista.forEach((r,i)=>{console.log(`${i+1}.${r,cliente}. ${r.servicio}`);
    })
  }
  mostrarIngresos(monto){
    console.log(`ingresos :₡${monto.toLocalString(es-CR)}`);
    
  }
  error(texto){
    console.error(texto);//mensaje en rojo

  
    
  }
  
}
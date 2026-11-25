//vista:muestra los datos (en consola por ahora)
class vistaRservas{//la clase de la vista. No tiene constructor porque no necesita guaradr datos propios .js  le pone un vacio 
  mostrar(lista){//i:posicion 
    lista.forEach((r,i)=>
      //forEach  entrega el elemento (r) y su posiciom i que empieza en cero
      {console.log(`${i+1}.${r,cliente}. ${r.servicio}`);//i es la pocision (r,i) dos parametros del callback
    })//r.cliente r.servicio son propiedades de cada reseerva. la vista solo lee datos, no los cambia 
  }
  mostrarIngresos(monto){
    console.log(`ingresos :₡${monto.toLocalString(es-CR)}`);
    
  }
  error(texto){
    console.error(texto);//mensaje en rojo

  
    
  }
  
}
//vista.js - VISTA: Muestra los datos (por ahora en consola)
class VistaReservas {
  //recibe la ista de reservas del modelo y la escribe en el <ol>
  mostrar(lista) {
    //el <ol> id="lista-reservas" que se agregó en contacto.html
    const ol = document.getElementById("lista-reservas");
    //varciar el ol para no repetir reservas
    ol.innerHTML = "";
    //r: cada reserva (objeto Reserva del modelo)
    lista.forEach((r) => {
      const li = document.createElement("li");
      //el texto: cliente y servicio de la reserva
      li.textContent = `${r.cliente} . ${r.servicio}`;
      //Lo agrega al final de <ol>
      ol.append(li);
    });
  }
  //Recibe el total de ingresos y los va escribir en <p id="ingresos">
  mostrarIngresos(monto) {
    const p = document.getElementById("ingresos");
    const m = monto.toLocaleString("es-CR");
    //innerHTML porque lleva la etiqueta <strong>
    p.innerHTML = `Ingresos: <strong>¢${m}</strong>`;
  }
  error(texto) {
    const aviso = document.getElementById("aviso-reservas");
    aviso.textContent = texto;
    console.error(texto);
  }
}
 /*   

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
  */
// nombre.js - Controles con el mismo name (final de contacto.html)
//.getElementsByName=los 3 botonres de opciones con name="lugar""
const lugares = document.getElementsByName("lugar");
console.log(`Opciones de "lugar": ${lugares.length}`);

//.value= lo que el formulario envia por cad opcion(cuando se llena un formullario lo que lleva dentro pues eso el nombre correo etc)
lugares.forEach((r) => console.log(`value de una opción: ${r.value}`));
//los textos que si se ven estan es las etiquetas 
const etiquetas = document.querySelectorAll(".opcion-etiqueta");

//etiquetas[0]=esta llamando a la primera etiqueta (posicion cero)
console.log(`Texto de la 1.ª opción: ${etiquetas[0].textContent}`);

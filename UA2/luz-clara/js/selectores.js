// selectores.js - Seis formas de buscar nodos (final de index.html)
//.getElementById=un nodo por su id (sen escribir el #)<header id="cabecera">
const cabecera = document.getElementById("cabecera");
console.log(`Por id "cabecera": <${cabecera.tagName}>`);
//.getElementsByClassName =un nodo por clase sin punto 
const tarjetas = document.getElementsByClassName("tarjeta");
console.log(`Por clase "tarjeta": ${tarjetas.length} tarjetas`);
//length=Cuantas tarjetas de servicio encontro

//.getElementsByTagName=todas las etiquetas section
const secciones = document.getElementsByTagName("section");
console.log(`Por etiqueta <section>: ${secciones.length} secciones`);
//.querySelector= el primer nodo que cumple el selector CSS(ESTA VEZ CON PUNTO)
const titulo = document.querySelector(".tarjeta-titulo");
console.log(`El primer .tarjeta-titulo dice: ${titulo.textContent}`);
//.querySelectorAll=todos los que cumplen
const todos = document.querySelectorAll(".tarjeta-titulo");
todos.forEach((t) => console.log(`Título de tarjeta: ${t.textContent}`));
//.querySelector("#portada h1"); selector de css compuetso y es compuesto por acceder al h1 de id portada 
const h1 = document.querySelector("#portada h1");
console.log(`El <h1> de la portada dice: ${h1.textContent}`);

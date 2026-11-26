// dom.js - Recorre el árbol de nodos de index.html (al final del body)

console.log(`Título de la página: ${document.title}`);//muestra el texto dentro del la etiqueta title

const raiz = document.documentElement;
console.log(`Raíz: ${raiz.tagName} · hijos: ${raiz.children.length}`);
//la raiz es el html y uen la pate de los hijos son lo que esta dentro de html(html es el nodo :la raiz de todos los elementos )

//en esta parte accedemos al body y recorre los hijos de body o saltando los nodos llamados scripts
const cuerpo = document.body;
for (const hijo of cuerpo.children) {
  if (hijo.tagName !== "SCRIPT") {
    //muestra la etiqueta del hijo y su id, de ejemplo podemos poner la etiqueta main ,is contenido o lo que sea que conforme el body(el primer el hijo 0 hijo es eel header)
    console.log(`Hijo de <body>: ${hijo.tagName} · id ${hijo.id}`);
  }
}
//cuerpo.children=se esta llamado al segundo hijo del body en este caso el main(recuerda la posiicon cero es el headder y la posicion 1 uno es el main)
const principal = cuerpo.children[1];
console.log(`Padre de <main>: ${principal.parentElement.tagName}`);//principal.parentElement.tagName =llama al pader del main osea el body 
console.log(`Primer hijo de <main>: ${principal.firstElementChild.id}`);//principal.firstElementChild.=dubica al primer hijo del main con id 
console.log(`Secciones dentro de <main>: ${principal.children.length}`);//principal.children.length busca cuantas secciones hay dentro de main 

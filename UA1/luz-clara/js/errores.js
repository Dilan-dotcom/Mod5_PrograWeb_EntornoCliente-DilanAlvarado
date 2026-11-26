//errores .js

try {
  console.log("inicio");
  const nombre = null;
  console.log(nombre.toUpperCase()); //falla porque null no tiene metodos
  console.log("Esta linea no se muestra y el programa no se detiene");
} catch (error) {
  console.log("se atrapo:", error.message);
} finally {
  console.log("fin del programa");
}
console.log("el programa sigue");

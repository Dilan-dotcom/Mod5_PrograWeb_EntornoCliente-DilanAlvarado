///un vector (o tambien conocido como arreglo)guarda varios arreglo en orden

const servicios = ["Retrato", "familiar", "Eventos"];

console.log(servicios[0]); //posicion 0 osea retrato
console.log(servicios.length); //cantidad de elementos del vector(da 3 por ser 3 palabras)

servicios.push("perfil"); //el comando .push agregar un vector al final del arreglo en este caso la palabra perfil
console.log(servicios.join(",")); //esta linea separa las palabras por lo que esta dentro de los parentesis osea las comas a la hora de ponerlo en la terminal la limnea seria Retrato,familiar,Eventos,perfil

const ultimo = servicios.pop(); //quita la ultima variable
console.log(ultimo, servicios.length);
console.log(servicios.join(",")); //aqui se comprueba que la palabra que desapareciio en perfil

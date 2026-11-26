//primer contacto con un vector de objetos

const tarifas = [
  { atencion: "individual", precio: 45000 },

  { atencion: "familiar", precio: 75000 },
];
for (const a of tarifas) {
  console.log(`${a.atencion}: ${a.precio}`);
}
/*individual: 45000 objeto.js:9:11
familiar: 75000 objeto.js:9:11
lo que debe mostrar*/

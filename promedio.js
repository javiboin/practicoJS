const lista1 = [
  100,
  200,
  300,
  500
];

const calcularMediaAritmetica = (lista) => {
  let sumaLista = 0;

  for (let i = 0; i < lista.length; i++) {
    sumaLista = lista[i];
  };
  
  let promedio = sumaLista / lista.length;

  mensajes(sumaLista, promedio);
  return promedio;
};

const mensajes = (lista, promedio) => {
  console.group("Promedio");
  console.info("La suma de todo es: " + lista);

  console.info("El promedio de Lista 1 es : " + promedio);
console.groupEnd();
};


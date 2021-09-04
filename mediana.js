const lista1 = [
  100,
  200,
  500,
  400000000
];

lista1.sort((a, b) => a - b);
console.log(lista1);

const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
      });
    
    let promedio = sumaLista / lista.length;

    return promedio
  };
  


const mitadLista1 = parseInt(lista1.length / 2);

const esPar = (numerito) => {
  if (numerito % 2 === 0){
    return true
  } else {
    return false
  }
};

const mensajes = (mediana) => {
  console.group("Mediana");

  console.info("La Mediana de Lista 1 es : " + mediana);
console.groupEnd();
};

let mediana;

if (esPar(lista1.length)){
  /* tomar los 2 datos del medio */
  const elemento1 = lista1[mitadLista1 -1];
  const elemento2 = lista1[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([
    elemento1,
    elemento2
  ]);

  mediana = promedioElemento1y2;
  mensajes(mediana)
}else{
  mediana = lista1[mitadLista1];
};


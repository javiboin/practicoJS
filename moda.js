const lista1 = [
  1,
  2,
  3,
  4,
  2,
  2,
  7,
  2,
  4,
  1,
  1
];

const lista1Count = {};

lista1.map(
  function (elemento) {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  }
);

const lista1Array = Object.entries(lista1Count).sort(
  function (elementoA, elementoB) {
      return (elementoA[1] - elementoB[1]);
  });

/* Objetct.entries: A partir de un objeto, crear un array */

const moda = lista1Array[lista1Array.length -1];

console.group('MODA');
  console.log('La moda es:');
  console.log(moda);
console.groupEnd();


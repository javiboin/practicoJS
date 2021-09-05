const salariosARG = argentina.map(
  function (personita) {
    return personita.salary;
  }
);

const salariosARGSorted = salariosARG.sort(
  function (salaryA, salaryB){
    return salaryA - salaryB;
  }
);

const esPar = (numerito) => {
  return (numerito % 2 === 0);
};

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento){
      return valorAcumulado + nuevoElemento;
    });
  
  let promedio = sumaLista / lista.length;

  return promedio
};

const medianaSalarios = (lista) => {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personitaMitad1 = lista[mitad -1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
};

console.log(
  medianaSalarios(salariosARGSorted)
);
const lista1 = [
  100,
  200,
  300,
  500
];

let sumaLista1 = 0;

for (let i = 0; i < lista1.length; i++) {
  sumaLista1 = lista1[i];
};

let promedio = sumaLista1 / lista1.length;

console.group("Promedio");
  console.info("La suma de todo es: " + sumaLista1);

  console.info("El promedio de Lista 1 es : " + promedio);
console.groupEnd();
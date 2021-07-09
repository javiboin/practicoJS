/* CÓDIGO DEL CUADRADO */

console.group("Cuadrados");
const ladoCuadrado = 5;

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El Perimétro del cuadrado es: ${perimetroCuadrado} cm.`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El Área del cuadrado es: ${areaCuadrado} cm^2.`);
console.groupEnd();

/* CÓDIGO DEL TRIÁNGULO */

console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

/* const perimetroCuadrado = ladoCuadrado * 4; */
console.log(
    "Los lados del triángulo miden: "
    + ladoTriangulo1 +"cm, "
    + ladoTriangulo1 + " cm, "
    + baseTriangulo + " cm."
);

const alturaTriangulo = 5.5;
console.log("La Altura del triángulo es de: " + alturaTriangulo + " cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del cuadrado es: " + perimetroTriangulo + " cm.");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El Área del triángulo es: ${areaTriangulo} cm^2.`);

console.groupEnd();

/* CÓDIGO DEL CIRCULO */

console.group("Circulos");

// Radio

const radioCirculo = 4;
console.log("El Radio del círculo es: " + radioCirculo + " cm.");

// Diámetro

const diametroCirculo = radioCirculo * 2;
console.log("El Diametro del círculo es de: " + diametroCirculo + " cm.");

// PI

//const PI = 3.1415;
const PI = Math.PI;
console.log("PI vale: " + PI + " cm.");

// Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es: " + perimetroCirculo + " cm.");

// Área

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El Área del círculo es: " + areaCirculo + " cm^2.");

console.groupEnd();
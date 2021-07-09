/* CÓDIGO DEL CUADRADO */

console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
};

function areaCuadrado(lado){
    return lado * lado;
};

console.groupEnd();

/* CÓDIGO DEL TRIÁNGULO */

console.group("Triángulos");

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
};

function areaTriangulo(base,altura){
    return (base * altura) / 2;
};

console.groupEnd();

/* CÓDIGO DEL CIRCULO */

console.group("Circulos");

function diametroCirculo(radio){
    return radio * 2;
};

// PI
const PI = Math.PI;
console.log("PI vale: " + PI + " cm.");

// Circunferencia

function perimetroCirculo (radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

// Área

function areaCirculo (radio) {
    return (radio * radio) *PI
};

console.groupEnd();
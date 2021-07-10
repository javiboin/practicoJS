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

/* Aquí interactuamos con el HTML */

/* Cuadrado */

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

/* Triángulo */

function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const lado1 = parseInt(inputLado1.value);

    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const lado2 = parseInt(inputLado2.value);

    const inputBase = document.getElementById("inputTrianguloBase");
    const base = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(lado1, lado2, base);     
    alert(perimetro);
};

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("inputTrianguloBase");
    const base = parseInt(inputBase.value);

    const inputAltura = document.getElementById("inputTrianguloAltura");
    const altura = parseInt(inputAltura.value);

    const area = areaTriangulo(base, altura);
    alert(area);
};

/* Circulo */

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
};

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCCirculo(value);
    alert(area);
};
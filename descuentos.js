/* PASOS
1. Definir Variables
    precio original del producto
    porcentaje de descuento
2. Convertimos nuestras variables en funciones
 */

/* const precioOriginal = 100;
const descuento = 20; */

function calcularPrecioConDescuento(precio, descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
  //return (precio * (100 - descuento) ) / 100;
  // esto no es tan legible como lo anterior.
}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.Value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.Value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son $ " + precioConDescuento;
};


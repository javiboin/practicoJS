/* array de cupones, despues los usaremos para el reto de la clase 11 */
const coupons = [
  "JavierEsBatman",
  "peroNoLeDigasANadie",
  "esUnSecreto"
];

/* Tomo lo que hay en el input y lo guardo en una variable en JS */
const inputCoupon = document.getElementById("InputCoupon"); // tomar lo que hay en el input
// LINEA IMPORTANTE, NO OLVIDAR
const couponValue = inputCoupon.Value;// valor del input

/* crear una variable de descuento y asignarle un valor distinto con un switch */
function onClickButtonPriceDiscount(){
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.Value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.Value;

  let descuento;

  switch(couponValue){
    case "JavierEsBatman":
      descuento = 15;
    break;

    case "peroNoLeDigasANadie":
      descuento = 30;
    break;

    case "esUnSecreto":
      descuento = 25;
    break;
  };

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
};
/* FIN DE SOLUCION 1 */

/* SOLUCION 2 */
if (!coupons.includes(userCouponValue)) {
  alert("El cupón " + couponValue + "no es válido");
};

if (!coupons.includes(couponValue)) {
  alert("El cupón " + couponValue + "no es válido");
} else if (couponValue === "JuanDC_es_Batman") {
  descuento = 15;
} else if (couponValue === "pero_no_le_digas_a_nadie") {
  descuento = 30;
} else if (couponValue === "es_un_secreto") {
  descuento = 25;
};

/* SOLUCION 3 */
const coupons = [
  {
      name: "JuanDC_es_Batman",
      discount: 15,
  },
  {
      name: "pero_no_le_digas_a_nadie",
      discount: 30,
  },
  {
      name: "es_un_secreto",
      discount: 25,
  },
];

const isCouponValueValid = function (coupon) {
  return coupon.name === couponValue;
};

const userCoupon = coupons.find(isCouponValueValid);

if (!userCoupon) {
  alert("El cupón " + userCouponValue + "no es válido");
};

if (!userCoupon) {
  alert("El cupón " + userCouponValue + "no es válido");
} else {
  const descuento = userCoupon.discount;
  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
};

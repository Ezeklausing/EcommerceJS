// calcular porcentajes sobre la 2da,3ra y 4ta unidad.

function descuento(producto, porcentajeDescuento) {
  return producto * (porcentajeDescuento / 100);
}

function precioTotal(cantProductos, producto) {
  switch (cantProductos) {
    case 2:
      return producto * 2 - descuento(producto, porcentajeDescuento);
      break;
    case 3:
      return producto * 3 - descuento(producto, porcentajeDescuento);
      break;
    case 4:
      return producto * 4 - descuento(producto, porcentajeDescuento);
      break;
  }
}

// let preguntar = prompt(
//   "Desea ingresar productos en promocion? , sino ingrese `ESC` "
// );

// while (preguntar.toLocaleLowerCase() != "esc") {
let producto = parseFloat(prompt("Ingrese el valor del producto"));
let cantProductos = parseInt(
  prompt("Ingrese cantidad de productos promocion, 2 hasta 4")
);
let porcentajeDescuento = parseInt(
  prompt("Ingrese el porcentaje de descuento")
);

alert(`El descuento total es de ${descuento(producto, porcentajeDescuento)}`);
alert(
  `El precio total, con el descuento incluido es de ${precioTotal(
    cantProductos,
    producto
  )} `
);
// }

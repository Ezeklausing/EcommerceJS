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

// // let preguntar = prompt(
// //   "Desea ingresar productos en promocion? , sino ingrese `ESC` "
// // );

// // while (preguntar.toLocaleLowerCase() != "esc") {
// let producto = parseFloat(prompt("Ingrese el valor del producto"));
// let cantProductos = parseInt(
//   prompt("Ingrese cantidad de productos promocion, 2 hasta 4")
// );
// let porcentajeDescuento = parseInt(
//   prompt("Ingrese el porcentaje de descuento")
// );

// alert(`El descuento total es de ${descuento(producto, porcentajeDescuento)}`);
// alert(
//   `El precio total, con el descuento incluido es de ${precioTotal(
//     cantProductos,
//     producto
//   )} `
// );
// // }

const CARRITO = [];

function elegirRemera() {
  let seleccion =
    prompt(`Seleccione el numero del modelo a elegir para agregar al carrito.

  1. ${REMERAS[0].nombre}, precio: ${REMERAS[0].precio},

  2. ${REMERAS[1].nombre}, precio: ${REMERAS[1].precio},
  
  3. ${REMERAS[2].nombre}, precio: ${REMERAS[2].precio},
  
  4. ${REMERAS[3].nombre}, precio: ${REMERAS[3].precio},
  
  5. ${REMERAS[4].nombre}, precio: ${REMERAS[4].precio},
  `);

  elegirTalle(seleccion);
}

function elegirTalle(seleccion) {
  switch (seleccion) {
    case "1":
      preguntarTalle("1");
      break;
    case "2":
      preguntarTalle("2");
      break;
    case "3":
      preguntarTalle("3");
      break;
    case "4":
      preguntarTalle("4");
      break;
    case "5":
      preguntarTalle("5");
      break;

    default:
      alert("Ingrese una opcion valida.");
      elegirRemera();
      break;
  }
}

function preguntarTalle(caso) {
  let talle = "";
  switch (caso) {
    case "1":
      talle = prompt(
        `Seleccione el numero del talle a elegir
        talle
        1. talle ${REMERAS[0].talles.talleM}
        2. talle ${REMERAS[0].talles.talleL}
        3. talle ${REMERAS[0].talles.talleXL}`
      );
      CARRITO.push(REMERAS[0]);
      console.log(CARRITO);
      totalCarrito(caso);
      break;
    case "2":
      talle = prompt(
        `Seleccione el numero del talle a elegir
        talle
        1. talle ${REMERAS[2].talles.talleL}
        2. talle ${REMERAS[2].talles.talleM}
        3. talle ${REMERAS[2].talles.talleXL}`
      );
      CARRITO.push(REMERAS[1]);
      console.log(CARRITO);
      totalCarrito(caso);
      break;
    case "3":
      talle = prompt(
        `Seleccione el numero del talle a elegir
        talle
        1. talle ${REMERAS[3].talles.talleM}
        2. talle ${REMERAS[3].talles.talleL}
        3. talle ${REMERAS[3].talles.talleXL}`
      );
      CARRITO.push(REMERAS[3]);
      console.log(CARRITO);
      totalCarrito(caso);
      break;
    case "4":
      talle = prompt(
        `Seleccione el numero del talle a elegir
        talle
        1. talle ${REMERAS[4].talles.talleM}
        2. talle ${REMERAS[4].talles.talleL}
        3. talle ${REMERAS[4].talles.talleXL}`
      );
      CARRITO.push(REMERAS[4]);
      console.log(CARRITO);
      totalCarrito(caso);
      break;
    case "5":
      talle = prompt(
        `Seleccione el numero del talle a elegir
        talle
        1. talle ${REMERAS[5].talles.talleM}
        2. talle ${REMERAS[5].talles.talleL}
        3. talle ${REMERAS[5].talles.talleXL}`
      );
      CARRITO.push(REMERAS[5]);
      console.log(CARRITO);
      totalCarrito(caso);
      break;
    default:
      alert("Ingrese un numero valido");
      preguntarTalle(caso);
      break;
  }
}

function totalCarrito(caso) {
  let continuaCompra = "";

  switch (caso) {
    case "1":
      continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
      if (continuaCompra === "si") {
        elegirRemera();
      } else {
        alert("Gracias por tu compra");
      }
      break;
    case "2":
      continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
      if (continuaCompra === "si") {
        elegirRemera();
      } else {
        alert("Gracias por tu compra");
      }
      break;
    case "3":
      continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
      if (continuaCompra === "si") {
        elegirRemera();
      } else {
        alert("Gracias por tu compra");
      }
      break;
    case "4":
      continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
      if (continuaCompra === "si") {
        elegirRemera();
      } else {
        alert("Gracias por tu compra");
      }
      break;
    case "5":
      continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
      if (continuaCompra === "si") {
        elegirRemera();
      } else {
        alert("Gracias por tu compra");
      }
      break;
    default:
      alert("Ingrese un numero valido");
      totalCarrito(caso);
      break;
  }

  CARRITO.forEach((producto) => {
    alert(`${producto.nombre} - $${producto.precio}`);
  });

  alert(`El total de la compra es: $ ${totalCompra()}`);
}

function totalCompra() {
  let total = CARRITO.reduce((total, remera) => total + remera.precio, 0);
  return total;
}

alert(elegirRemera());

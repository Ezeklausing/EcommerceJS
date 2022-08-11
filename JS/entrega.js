// function elegirRemera() {
//   let seleccion =
//     prompt(`Seleccione el numero del modelo a elegir para agregar al carrito.

//   1. ${REMERAS[0].nombre}, precio: ${REMERAS[0].precio},

//   2. ${REMERAS[1].nombre}, precio: ${REMERAS[1].precio},

//   3. ${REMERAS[2].nombre}, precio: ${REMERAS[2].precio},

//   4. ${REMERAS[3].nombre}, precio: ${REMERAS[3].precio},

//   5. ${REMERAS[4].nombre}, precio: ${REMERAS[4].precio},
//   `);

//   elegirTalle(seleccion);
// }

// function elegirTalle(seleccion) {
//   switch (seleccion) {
//     case "1":
//       preguntarTalle("1");
//       break;
//     case "2":
//       preguntarTalle("2");
//       break;
//     case "3":
//       preguntarTalle("3");
//       break;
//     case "4":
//       preguntarTalle("4");
//       break;
//     case "5":
//       preguntarTalle("5");
//       break;

//     default:
//       alert("Ingrese una opcion valida.");
//       elegirRemera();
//       break;
//   }
// }

// function preguntarTalle(caso) {
//   let talle = "";
//   switch (caso) {
//     case "1":
//       talle = prompt(
//         `Seleccione el numero del talle a elegir
//         talle
//         1. talle ${REMERAS[0].talles.talleM}
//         2. talle ${REMERAS[0].talles.talleL}
//         3. talle ${REMERAS[0].talles.talleXL}`
//       );

//       CARRITO.push(REMERAS[0]);
//       console.log(CARRITO);
//       totalCarrito(caso);
//       break;
//     case "2":
//       talle = prompt(
//         `Seleccione el numero del talle a elegir
//         talle
//         1. talle ${REMERAS[2].talles.talleL}
//         2. talle ${REMERAS[2].talles.talleM}
//         3. talle ${REMERAS[2].talles.talleXL}`
//       );
//       CARRITO.push(REMERAS[1]);
//       console.log(CARRITO);
//       totalCarrito(caso);
//       break;
//     case "3":
//       talle = prompt(
//         `Seleccione el numero del talle a elegir
//         talle
//         1. talle ${REMERAS[3].talles.talleM}
//         2. talle ${REMERAS[3].talles.talleL}
//         3. talle ${REMERAS[3].talles.talleXL}`
//       );
//       CARRITO.push(REMERAS[3]);
//       console.log(CARRITO);
//       totalCarrito(caso);
//       break;
//     case "4":
//       talle = prompt(
//         `Seleccione el numero del talle a elegir
//         talle
//         1. talle ${REMERAS[4].talles.talleM}
//         2. talle ${REMERAS[4].talles.talleL}
//         3. talle ${REMERAS[4].talles.talleXL}`
//       );
//       CARRITO.push(REMERAS[4]);
//       console.log(CARRITO);
//       totalCarrito(caso);
//       break;
//     case "5":
//       talle = prompt(
//         `Seleccione el numero del talle a elegir
//         talle
//         1. talle ${REMERAS[5].talles.talleM}
//         2. talle ${REMERAS[5].talles.talleL}
//         3. talle ${REMERAS[5].talles.talleXL}`
//       );
//       CARRITO.push(REMERAS[5]);
//       console.log(CARRITO);
//       totalCarrito(caso);
//       break;
//     default:
//       alert("Ingrese un numero valido");
//       preguntarTalle(caso);
//       break;
//   }
// }

// function totalCarrito(caso) {
//   let continuaCompra = "";
//   switch (caso) {
//     case "1":
//       continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
//       if (continuaCompra === "si") {
//         elegirRemera();
//       } else if (continuaCompra === "no") {
//         alert("Gracias por tu compra");
//       } else {
//         alert("Por favor ingrese una opcion valida");
//         totalCarrito(caso);
//       }
//       break;
//     case "2":
//       continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
//       if (continuaCompra === "si") {
//         elegirRemera();
//       } else if (continuaCompra === "no") {
//         alert("Gracias por tu compra");
//       }
//       break;
//     case "3":
//       continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
//       if (continuaCompra === "si") {
//         elegirRemera();
//       } else if (continuaCompra === "no") {
//         alert("Gracias por tu compra");
//       }
//       break;
//     case "4":
//       continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
//       if (continuaCompra === "si") {
//         elegirRemera();
//       } else if (continuaCompra === "no") {
//         alert("Gracias por tu compra");
//       }
//       break;
//     case "5":
//       continuaCompra = prompt("Desea seguir comprando  si/no").toLowerCase();
//       if (continuaCompra === "si") {
//         elegirRemera();
//       } else if (continuaCompra === "no") {
//         alert("Gracias por tu compra");
//       }
//       break;
//     default:
//       alert("Ingrese un numero valido");
//       totalCarrito(caso);
//       break;
//   }

//   CARRITO.forEach((producto) => {
//     alert(`${producto.nombre} - $${producto.precio}`);
//   });

//   alert(`El total de la compra es: $ ${totalCompra()}`);
// }

// function totalCompra() {
//   let total = CARRITO.reduce((total, remera) => total + remera.precio, 0);
//   return total;
// }

let divArticulos = document.getElementById("articulos");

REMERAS.forEach((remera) => {
  let nuevoArticulo = document.createElement("div");
  nuevoArticulo.innerHTML = `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${remera.imagen}" alt="${remera.nombre} ${remera.id}" >
  <div class="card-body">
    <h5 class="card-title">Precio $ ${remera.precio}</h5>
    <p class="card-text">${remera.nombre}</p>
    <a href="#" id = "agregaBtn" class="btn btn-primary">Agregar al carrito</a>
  </div>
  </div>
  <br>
  `;

  divArticulos.appendChild(nuevoArticulo);
});

class producto {
  constructor(id, nombre, precio, descuento, imagen, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
    this.imagen = imagen;
    this.stock = stock;
  }

  restaStock() {
    this.stock = this.stock - 1;
  }
}

// class productoCarrito {
//   constructor(articulo, cantidad, descuento) {
//     this.articulo = articulo;
//     this.cantidad = cantidad;
//     this.descuento = descuento;
//   }
// }

// function agregaCarrito(event) {
//   const preCarrito = REMERAS;
//   CARRITO.push(preCarrito);
// }

const botonAgregar = document.querySelectorAll("#agregaBtn");

botonAgregar.forEach((botonAgregarAlCarrito) => {
  botonAgregarAlCarrito.addEventListener("click", () => {
    alert("agregaste este articulo al carrito.");
  });
});

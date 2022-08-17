/*constructor producto */

class producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  restaStock() {
    this.stock = this.stock - 1;
    console.log(`El stock de ${this.nombre} ha sido actualizado`);
  }
}

/* instanciar (crear) objeto manualmente */

const producto0 = new producto(0, "cd 1", 450, 45);
const producto1 = new producto(1, "cd 2", 540, 45);
const producto2 = new producto(2, "cd 3", 580, 45);

const CDS = [producto0, producto1];

CDS.push(producto2);

console.log(CDS);

/*hace una pasada x el array y hace algo */
// crea cards feuchas.
for (elemento of CDS) {
  let card = document.createElement("div");
  card.innerHTML = `<h2>Compra ${elemento.nombre}</h2>
  <input type= "button" value="comprar" onclick="elemento.restaStock()">`;
  document.body.append(card);
}

// ciclo for para crear una card con bstp.
//sacar codigo de bstp e ir modificando

// for (e of productos){
//     let card = document.createElement("div")
//     card.innerHTML = `<div class="card" style="width: 18rem;">
//                         <img src="..." class="card-img-top" alt="Acá va la imagen de ${e.nombre}">
//                         <div class="card-body">
//                         <h5 class="card-title">${e.nombre}</h5>
//                         <p class="card-text">Llevatelo por tan solo ${e.precio}</p>
//                         <a onClick="e.restaStock()" class="btn btn-primary">Compra ya, sólo quedan ${e.stock}</a>
//                         </div>
//                     </div>`
//     document.body.append(card)
// }

// class Carrito {
//   constructor(producto, cant) {
//     this.producto = producto;
//     this.cantidad = cant;
//   }
// }

// const arrayCarrito = [];

// function agregaCarrito(prod) {
//   const alCarrito = new objCarrito(prod, 1);
//   arrayCarrito.push(alCarrito);
// }

// /* ver problema con string y numero*/

// let padre = document.getElementById("familia");
// familia = ["eze", "prisci", "benja", "fabiana"];

// for (const integrante of familia) {
//   let li = document.createElement("li");
//   li.innerHTML = integrante;
//   padre.append(li);
// }

// let estructuraImg = document.getElementById("estructura");

// estructuraImg.innerHTML = `<div class="card" style="width: 18rem;">
// <img src="./assets/estructura HTML.JPG" class="card-img-top" alt="">
// <div class="card-body">
//   <h5 class="card-title">estructura del DOM</h5>
//   <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   <a href="#" class="btn btn-primary">Go somewhere</a>
// </div>
// </div>`;

// let parrafo = document.createElement("p");
// parrafo.innerHTML = `<p>
//     Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae rerum eius
//     recusandae velit excepturi dolorum aspernatur libero ratione vel maxime!
//     Fugit vitae unde cumque expedita alias sequi quis architecto temporibus!
//   </p>`;
// document.body.appendChild(parrafo);
// parrafo.remove();

// let botonCard = document.getElementById("estructura");
// botonCard.addEventListener("click", () => {
//   console.log("respuesta arrow");
// });

/**--------- */

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

// const botonAgregar = document.querySelectorAll("#agregaBtn");

// botonAgregar.forEach((botonAgregarAlCarrito) => {
//   botonAgregarAlCarrito.addEventListener("click", () => {
//     alert("agregaste este articulo al carrito.");
//   });
// });

/**---------------------------------------------------------------- */
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

// class producto {
//   constructor(id, nombre, precio, descuento, imagen, stock) {
//     this.id = id;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.descuento = descuento;
//     this.imagen = imagen;
//     this.stock = stock;
//   }

//   restaStock() {
//     this.stock = this.stock - 1;
//   }
// }

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

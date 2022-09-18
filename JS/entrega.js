/*Iniciar array Remeras en localstorage */

// if (localStorage.getItem("remeras")) {
//   remeras = JSON.parse(localStorage.getItem("remeras"));
// } else {
//   localStorage.setItem("remeras", JSON.stringify(remeras));
// }

/*Iniciar array carrito en localstorage */

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/*Dom */

let divArticulos = document.getElementById("articulos");
let carritoBody = document.getElementById("carritoBody");
let botonVerCarrito = document.getElementById("fullCarrito");
let totalDelCarrito = document.getElementById("totalEnCarrito");
let botonResetCarrito = document.getElementById("resetCarrito");
let botonAvanzaCompra = document.getElementById("avanzaCompra");
let formularioDelCarrito = document.getElementById("formularioCompra");

/* Evento Boton ver carrito*/
botonVerCarrito.addEventListener("click", () => {
  pushAlCarrito(carrito);
  totalCompra();
});

/* Productos en stock catalogo*/
function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  pushAlCarrito(carrito);
}

/* Funcion para calcular total de compra*/
function totalCompra() {
  totalDelCarrito.innerHTML = "";
  let total = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );
  totalDelCarrito.innerHTML = `<p>Cantidad de articulos en carrito ${carrito.length}.</p>
  <p>El total de su compra es $${total}</p>`;
}
/*FETCH */
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const resp = await fetch("../JS/remeras.json");
    const remeras = await resp.json();
    catalogo(remeras);
  } catch (error) {
    console.log(error);
  }
};
/*CATALOGO*/
const catalogo = (remeras) => {
  divArticulos.innerHTML = "";
  remeras.forEach((producto) => {
    let nuevoArticulo = document.createElement("div");
    nuevoArticulo.innerHTML = `<div id = "${producto.id}" class="card" style="width: 18rem;">
    <figure><img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}"></figure>
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">Precio $${producto.precio}</p>
      <a href="#" id = "agregaBtn ${producto.id}" class="btn btn-primary">Agregar al carrito</a>
    </div>
    </div>
    <br>
    `;
    divArticulos.appendChild(nuevoArticulo);
    let botonAgregar = document.getElementById(`agregaBtn ${producto.id}`);
    botonAgregar.addEventListener("click", () => {
      Swal.fire({
        title: "Agregar articulo al carrito?",
        text: `${producto.nombre}`,
        imageUrl: `${producto.imagen}`,
        imageWidth: 200,
        imageHeight: 200,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Agregar",
      }).then((result) => {
        if (result.isConfirmed) {
          let productoAgregado = carrito.find(
            (articulo) => articulo.id == producto.id
          );
          if (productoAgregado == undefined) {
            Swal.fire("Tu articulo se agrego al carrito");
            agregarAlCarrito(producto);
          } else {
            Swal.fire({
              title:
                "El articulo ya esta en el carrito, desea agregar mas unidades?",
              text: `${producto.nombre}`,
              icon: "info",
              showCancelButton: true,
              confirmButtonColor: `green`,
              cancelButtonColor: "#d33",
              confirmButtonText: "Agregar",
            }).then((result) => {
              if (result.isConfirmed) {
                let productoAgregado = carrito.find(
                  (articulo) => articulo.id == producto.id
                );
                productoAgregado.cantidad = productoAgregado.cantidad + 1;
                localStorage.setItem("carrito", JSON.stringify(carrito));
                pushAlCarrito(carrito);
              }
            });
          }
        }
      });
    });
  });
};

//funcion catalogo
// function catalogo() {
//   divArticulos.innerHTML = "";
//   remeras.forEach((producto) => {
//     let nuevoArticulo = document.createElement("div");
//     nuevoArticulo.innerHTML = `<div id = "${producto.id}" class="card" style="width: 18rem;">
//     <figure><img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}"></figure>
//     <div class="card-body">
//       <h5 class="card-title">${producto.nombre}</h5>
//       <p class="card-text">Precio $${producto.precio}</p>
//       <a href="#" id = "agregaBtn ${producto.id}" class="btn btn-primary">Agregar al carrito</a>
//     </div>
//     </div>
//     <br>
//     `;
//     divArticulos.appendChild(nuevoArticulo);
//     let botonAgregar = document.getElementById(`agregaBtn ${producto.id}`);
//     botonAgregar.addEventListener("click", () => {
//       Swal.fire({
//         title: "Agregar articulo al carrito?",
//         text: `${producto.nombre}`,
//         imageUrl: `${producto.imagen}`,
//         imageWidth: 200,
//         imageHeight: 200,
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Agregar",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           let productoAgregado = carrito.find(
//             (articulo) => articulo.id == producto.id
//           );
//           if (productoAgregado == undefined) {
//             Swal.fire("Tu articulo se agrego al carrito");
//             agregarAlCarrito(producto);
//           } else {
//             Swal.fire({
//               title:
//                 "El articulo ya esta en el carrito, desea agregar mas unidades?",
//               text: `${producto.nombre}`,
//               icon: "info",
//               showCancelButton: true,
//               confirmButtonColor: `green`,
//               cancelButtonColor: "#d33",
//               confirmButtonText: "Agregar",
//             }).then((result) => {
//               if (result.isConfirmed) {
//                 let productoAgregado = carrito.find(
//                   (articulo) => articulo.id == producto.id
//                 );
//                 productoAgregado.cantidad = productoAgregado.cantidad + 1;
//                 localStorage.setItem("carrito", JSON.stringify(carrito));
//                 pushAlCarrito(carrito);
//               }
//             });
//           }
//         }
//       });
//     });
//   });
// }

// catalogo();

//funcion items en el carrito
function pushAlCarrito(storage) {
  carritoBody.innerHTML = " ";
  storage.forEach((producto) => {
    carritoBody.innerHTML += `<div id="producto ${producto.id}" class="producto">
    <figure><img src="${producto.imagen}" alt="${producto.nombre}" /></figure>
    <div class="descripcion">
    <p>${producto.nombre}</p>
    <p>$ ${producto.precio}</p>
    <p>cantidad: <span id="cantidad ">${producto.cantidad}</span></p>
    </div>

    <button id = "deleteButton ${producto.id}" type="button" class="btn btn-outline-danger">Quitar</button>
  </div>
  `;
  });

  //Evento boton quitar en el carrito//
  storage.forEach((producto, indice) => {
    let borrarArticuloBtn = document.getElementById(
      `deleteButton ${producto.id}`
    );
    borrarArticuloBtn.addEventListener("click", () => {
      Swal.fire({
        title: "Eliminar el articulo del carrito?",
        text: `${producto.nombre}`,
        imageUrl: `${producto.imagen}`,
        imageWidth: 200,
        imageHeight: 200,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Tu articulo se removio del carrito");
          let item = document.getElementById(`producto ${producto.id}`);
          console.log(item);
          item.remove(); //si es el mismo producto no te lo va a quitar.
          carrito.splice(indice, 1);
          localStorage.setItem("carrito", JSON.stringify(carrito));
          pushAlCarrito(carrito);
          totalCompra();
        }
      });
    });
  });
}

//Evento btn reset carrito//
botonResetCarrito.addEventListener("click", () => {
  Swal.fire({
    title: "Borrar articulos en carrito?",
    text: "No se puede revertir!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, borrar!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Borrado!", "El carrito esta vacio");
      carrito = [];
      localStorage.setItem("carrito", JSON.stringify(carrito));
      pushAlCarrito(carrito);
      totalCompra();
    }
  });
});

// Evento btn avanzar compra

botonAvanzaCompra.addEventListener("click", () => {
  (async () => {
    const { value: email } = await Swal.fire({
      title: "Felicitaciones, compra confirmada!",
      input: "email",
      inputLabel: "Enviaremos un detalle del pedido a su correo",
      inputPlaceholder: "Enter your email address",
    });

    if (email) {
      Swal.fire(`El correo fue enviado a la casilla: ${email}`);
      formularioDelCarrito.innerHTML = ``;
    }
  })();
});

// let existe = carrito.some((remera) => remera.id === remera.id);
//           if (existe) {
//             remera.cantidad++;

/*Iniciar array Remeras en localstorage */
if (localStorage.getItem("remeras")) {
  remeras = JSON.parse(localStorage.getItem("remeras"));
} else {
  localStorage.setItem("remeras", JSON.stringify(remeras));
}

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
function agregarAlCarrito(remera) {
  carrito.push(remera);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  pushAlCarrito(carrito);
}
/* Funcion para calcular total de compra*/
function totalCompra() {
  totalDelCarrito.innerHTML = "";
  let total = carrito.reduce((total, remera) => total + remera.precio, 0);
  totalDelCarrito.innerHTML = `<p>El total de su compra es $${total}</p>`;
}
//funcion catalogo
function catalogo() {
  divArticulos.innerHTML = "";
  remeras.forEach((remera) => {
    let nuevoArticulo = document.createElement("div");
    nuevoArticulo.innerHTML = `<div id = "${remera.id}" class="card" style="width: 18rem;">
    <figure><img class="card-img-top" src="${remera.imagen}" alt="${remera.nombre}"></figure>
    <div class="card-body">
      <h5 class="card-title">Precio $ ${remera.precio}</h5>
      <p class="card-text">${remera.nombre}</p>
      <a href="#" id = "agregaBtn ${remera.id}" class="btn btn-primary">Agregar al carrito</a>
    </div>
    </div>
    <br>
    `;
    divArticulos.appendChild(nuevoArticulo);
    let botonAgregar = document.getElementById(`agregaBtn ${remera.id}`);
    botonAgregar.addEventListener("click", () => {
      Swal.fire({
        title: "Agregar articulo al carrito?",
        text: `${remera.nombre}`,
        imageUrl: `${remera.imagen}`,
        imageWidth: 200,
        imageHeight: 200,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Agregar",
      }).then((result) => {
        if (result.isConfirmed) {
          agregarAlCarrito(remera);
          Swal.fire("Tu articulo se agrego al carrito");
        }
      });
    });
  });
}

catalogo();

//funcion items en el carrito
function pushAlCarrito(storage) {
  carritoBody.innerHTML = " ";
  storage.forEach((remera) => {
    carritoBody.innerHTML += `<div id="producto ${remera.id}" class="producto">
    <figure><img src="${remera.imagen}" alt="${remera.nombre}" /></figure>
    <div class="descripcion">
    <p>${remera.nombre}</p>
    <p>$ ${remera.precio}</p>
    </div>

    <button id = "deleteButton ${remera.id}" type="button" class="btn btn-outline-danger">Quitar</button>
  </div>
  `;
  });

  //Evento boton quitar en el carrito//
  storage.forEach((remera, indice) => {
    let borrarArticuloBtn = document.getElementById(
      `deleteButton ${remera.id}`
    );
    borrarArticuloBtn.addEventListener("click", () => {
      Swal.fire({
        title: "Eliminar el articulo del carrito?",
        text: `${remera.nombre}`,
        imageUrl: `${remera.imagen}`,
        imageWidth: 200,
        imageHeight: 200,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Tu articulo se removio del carrito");
          let producto = document.getElementById(`producto ${remera.id}`);
          producto.remove(); //si es el mismo producto no te lo va a quitar.
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
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  pushAlCarrito(carrito);
  totalCompra();
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

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
let divProductosEnCarrito = document.getElementById("productosEnCarrito");
let divCompraTotal = document.getElementById("totalEnCarrito");

/* Productos en stock */
function catalogo() {
  divArticulos.innerHTML = "";
  remeras.forEach((remera) => {
    let nuevoArticulo = document.createElement("div");
    nuevoArticulo.innerHTML = `<div id = "${remera.id}" class="card" style="width: 18rem;">
    <img class="card-img-top" src="${remera.imagen}" alt="${remera.nombre}">
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

function agregarAlCarrito(remera) {
  carrito.push(remera);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  let nuevoArticulo = document.createElement("div");
  nuevoArticulo.innerHTML = `<div class="producto">
        <img src="${remera.imagen}" alt="${remera.nombre}" />
        <div class="descripcion">
        <p>${remera.nombre}</p>
        <p>$ (${remera.precio})</p>
        </div>
        <button id = "deleteButton ${remera.id}" type="button" class="btn btn-outline-danger">Quitar</button>
      </div>
      `;
  divProductosEnCarrito.appendChild(nuevoArticulo);
}

/* Productos en el carrito - Pushbar */ /* ver de simpliflicar */

carrito.forEach((remera) => {
  let nuevoArticulo = document.createElement("div");
  nuevoArticulo.innerHTML = `<div class="producto">
        <img src="${remera.imagen}" alt="${remera.nombre}" />
        <div class="descripcion">
        <p>${remera.nombre}</p>
        <p>$ ${remera.precio}</p>
        </div>
        <button id = "deleteButton ${remera.id}" type="button" class="btn btn-outline-danger">Quitar</button>
      </div>
      `;
  divProductosEnCarrito.appendChild(nuevoArticulo);
});

function totalCompra() {
  let total = carrito.reduce((total, remera) => total + remera.precio, 0);
  console.log(total);
  let nuevoArticulo = document.createElement("div");
  nuevoArticulo.innerHTML = `<p>El total de su compra es $${total}</p>`;
  console.log(nuevoArticulo);
}

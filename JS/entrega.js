class producto {
  constructor(id, nombre, precio, descuento, imagen, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
    this.imagen = imagen;
    this.stock = stock;
  }
}

/*Iniciar array Remeras en localstorage */

if (localStorage.getItem("remeras")) {
  remeras = JSON.parse(localStorage.getItem("remeras"));
} else {
  localStorage.setItem("remeras", JSON.stringify(remeras));
}

/*Iniciar array carrito en localstorage */

if (localStorage.getItem("carrito")) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
  localStorage.setItem("carrito", []);
}

/*Dom */

let divArticulos = document.getElementById("articulos");
let divProductosEnCarrito = document.getElementById("productosEnCarrito");

/* Productos en stock */
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
    agregarAlCarrito(remera);
  });
});

function agregarAlCarrito(remera) {
  alert(
    `Se agrego al carrito articulo: ${remera.nombre}, Id producto nro ${remera.id} `
  );
  carrito.push(remera);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(carrito);
  let nuevoArticulo = document.createElement("div");
  nuevoArticulo.innerHTML = `<div class="producto">
        <img src="${remera.imagen}" alt="${remera.nombre}" />
        <div class="descripcion">
        <p>${remera.nombre}</p>
        <p>$ ${remera.precio}</p>
        </div>
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
      </div>
      `;
  divProductosEnCarrito.appendChild(nuevoArticulo);
});

function totalCompra() {
  let total = carrito.reduce((total, remera) => total + remera.precio, 0);
  console.log(total);
}

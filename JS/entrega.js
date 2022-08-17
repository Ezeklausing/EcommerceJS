let divArticulos = document.getElementById("articulos");

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
}
/* Productos en el carrito - Pushbar */
let divProductosEnCarrito = document.getElementById("productosEnCarrito");

carrito.forEach((remera) => {
  let nuevoArticulo = document.createElement("div");
  nuevoArticulo.innerHTML = `<div class="producto">
  <img src="./assets/remera negra.jpg" alt="" />
  <div class="descripcion">
  <p>Remera Negra</p>
  <p>Precio 2000</p>
  </div>
</div>
`;
  divProductosEnCarrito.appendChild(nuevoArticulo);
  // let botonAgregar = document.getElementById(`agregaBtn ${remera.id}`);
  // botonAgregar.addEventListener("click", () => {
  //   agregarAlCarrito(remera);
  // });
});

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

function totalCompra() {
  let total = carrito.reduce((total, remera) => total + remera.precio, 0);
  console.log(total);
}

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

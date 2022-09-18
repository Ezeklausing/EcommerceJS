class articulos {
  constructor(id, nombre, precio, descuento, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
    this.imagen = imagen;
    this.cantidad = 1;
  }
}

// for (let remera of productos) {
//   let remeraNueva = new producto(
//     remera.id,
//     remera.nombre,
//     remera.precio,
//     remera.descuento,
//     remera.imagen
//   );
//   remeras.push(remeraNueva);
// }

// document.addEventListener("DOMContentLoaded", () => {
//   fetchData();
// });

// const fetchData = async () => {
//   try {
//     const resp = await fetch("../JS/remeras.json");
//     const productos = await resp.json();
//     pintarCards(productos);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const pintarCards = (productos) => {
//   console.log(productos);
// };

class producto {
  constructor(id, nombre, precio, descuento, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
    this.imagen = imagen;
  }
}

let remeras = [];

fetch("../JS/productos.json")
  .then((response) => response.json())
  .then((productos) => {
    console.log(productos);

    for (let remera of productos) {
      let remera = new producto(
        remera.id,
        remera.nombre,
        remera.precio,
        remera.descuento,
        remera.imagen,
        remera.stock
      );
      remeras.push(remera);
    }
  });

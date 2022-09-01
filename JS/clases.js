class producto {
  constructor(id, nombre, precio, descuento, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
    this.imagen = imagen;
  }
}

let buzos = [];

fetch("../JS/productos.json")
  .then((response) => response.json())
  .then((productos) => {
    for (let buzos of productos) {
      let buzoNuevo = new producto(
        buzo.id,
        buzo.nombre,
        buzo.precio,
        buzo.descuento,
        buzo.imagen
      );
      buzos.push(buzoNuevo);
    }
    console.log(buzo);
  });

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

const pedirArray = async () => {
  const resp = await fetch("../JS/productos.json");
  const productos = await resp.json();
  for (let remera of productos) {
    let remeraNueva = new producto(
      remera.id,
      remera.nombre,
      remera.precio,
      remera.descuento,
      remera.imagen
    );
    remeras.push(remeraNueva);
  }
};

pedirArray();

console.log(remeras);

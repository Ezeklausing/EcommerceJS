/* Clase 1 y 2 ------------------------------------------------ */

// console.log("segunda forma de crear codigo");
// var perro = "bonzo";
// console.log(perro);

// let perro2 = "leon";
// console.log(perro2);

/* condicionales  */

// if (true) {
//   console.log("el codigo se muestra");
// }
// /*dos iguales compara / 1 igual asigna */
// let preguntaEdad = prompt("usted es mayor de edad");
// if (preguntaEdad == "si") {
//   console.log("el codigo se muestra");
// }

// /* Variable booleana*/
// let numero2 = 10;
// let mayor5 = numero2 > 5;

// if (mayor5) {
//   console.log("el numero es mayor a 5 ");
// } else {
//   console.log("el numero no es mayor a 5");
// }

// let color = "violeta";

// if (color == "rojo" || color == "azul" || color == "amarillo") {
//   console.log("es un color primario");
// } else {
//   console.log("no es un color primario");
// }

/* CLASE 3/4*--------------------------------------------/

/*ciclos */

/*
for (desde; hasta; actualizacion){
}
*/

// let numTabla = parseInt(prompt("ingrese el numero de tabla"));
// for (let i = 0; i <= 10; i++) {
//   console.log(`${numTabla} X ${i} = ${numTabla * i}`);
// }

/*REALIZAR EJ. ciclo for un programa que pida 3 notas al usuario y
calcule total y promedio*/

// let cantNotas = parseInt(prompt("Ingrese cantidad de notas"));
// let nota = 0;
// let acum = 0;
// let promedio = 0;

// for (i = 0; i < cantNotas; i++) {
//   nota = parseFloat(prompt("ingrese su nota"));
//   acum = acum + nota;
// }
// promedio = acum / 3;
// alert(`Sus notas suman ${acum}`);
// alert(`Su promedio es ${promedio}`);

// let pregunta = prompt("desea ingresar una nota");

// while (pregunta != "ESC") {
//   let notaWhile = parseInt(prompt("ingrese una nota"));
//   console.log("la nota ingresada es " + notaWhile);
//   pregunta = prompt("desea seguir ingresando nota?");

//   let condicion = true;

//   do {
//     let adivinanza = prompt("que tiene 6 caras y 21 ojos");
//     if (adivinanza.toLocaleLowerCase() == "dado") {
//       console.log("su respuesta es correcta");
//       condicion = false;
//     } else {
//       console.log("respuesta incorrecta, vuelva intentar");
//     }
//   } while (condicion);
// }

/*ex 3 */

// let acumulador = 0;
// let bandera = true;

// while (bandera) {
//   let numIngresado = parseInt(prompt("ingrese numero a sumar"));
//   acumulador = acumulador + numIngresado;
//   if (acumulador >= 100) {
//     console.log("felicitaciones a llegado a 100");
//     bandera = false;
//   }
// }

// switch (color) {
//   case "rojo":
//     console.log("es el color rojo y es primario");
//     break;
//   case "azul":
//     console.log("es el color azul y es primario");
//     break;
//   case "amarillo":
//     console.log("es el color amarillo y es primario");
//     break;
//   default:
//     console.log("no es color primario");
//     break;
// }

// function sumar(numero1, numero2) {
//   return numero1 + numero2;
// }
// let resultado = sumar(4, 4);

/* Clase 5 - Objetos --------------------------------------------*/

// /*objetos literales */

// const integrante1 = {
//   nombre: "gonza",
//   edad: 29,
//   rol: "profe",
// };
// // mostrar propiedades objeto

// console.log(integrante1);
// alert(integrante1.rol);

// const integrante2 = {
//   nombre: "Felipe",
//   edad: 27,
//   rol: "alumno",
//   ciudad: "tucuman",
// };

// // otra forma de acceder a propiedad
// console.log(integrante2["rol"]);

// // cambiar una propiedad - tambien se puede con los corchetes, como para acceder.

// integrante2.rol = "profe";

// // funcion constructora y new

// function Persona(nombre, edad, calle) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;
// }

// const persona3 = new Persona("homero", 39, "Av.siempreviva 742");

// // metodos- funciones dentro del objeto. solo a la funcion constructora participante.

// function Participante(nombre, edad, calle, rol) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.calle = calle;
//   this.rol = rol;
//   this.hablar = function () {
//     console.log("hola soy " + this.nombre);
//   };
//   this.ayuda = function () {
//     if (this.rol == "estudiante") {
//       console.log("Bienvenido a coder");
//     }
//   };
// }
// const ezequiel = new Participante("Ezequiel", 30, "Zabala 1975", "estudiante");
// // llamo a la funcion metodo ayuda
// ezequiel.ayuda();

// // operadore in y for.. in // un ciclo for para pasar por todas las propiedades de un objeto. puede ser con Const o LET

// for (const propiedad in integrante1) {
//   console.log(persona1.propiedad);
// }

// // objetos con class - similar a la funcion constructura -- tiene pequeñas dif.

// class Tipo {
//   constructor(nombre, edad, calle) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
//   }
//   //   metodo por fuera
//   hablar() {
//     console.log("hola soy " + this.nombre);
//   }
// }

// Clase 6 Arrays ------------------------------------------------

// const primerArray = [1, 2, 3, 4];
// console.log(primerArray);

// recorro todo el array con el metodo lenght

// for (let i = 0; i < primerArray.length; i++) {
//   console.log(primerArray[i]);
// }

// metodo .push - agrega un elemento al array

// primerArray.push("alFinal");

// metodo. unshifht - agrega un elemento al principio

// primerArray.unshift("alprincipio");
// console.log(primerArray);

// metodos pop y shift - borran al final y al principio respectivamente

// primerArray.pop();
// primerArray.shift();
// console.log(primerArray);

// demas metodos en diapositivas

//METODOS: console.log(numeros.join(" / "))let arrayGrande = primerArray.concat(numeros)console.log(arrayGrande)//
// Splice, donde se posiciona y cuantos eliminanumeros.splice(1,2)
// console.log(numeros)let otrosnumeros =numeros.slice(0,2)console.log(otrosnumeros)
// COPIAR CODIGO DE CLASE

// arrays de objetos
//   crear una funcion que permita al usuario agregar un libro.

// declaracion de la clase

//Declaración de la clase

// class Libros {
//   constructor(id, autor, año, titulo, precio) {
//     //propiedades o atributos de nuestra clase
//     (this.id = id),
//       (this.autor = autor),
//       (this.año = año),
//       (this.titulo = titulo),
//       (this.precio = precio);
//   }
//Métodos de nuestra clase
//   mostrarDatos() {
//     console.log(
//       `El autor es ${this.autor} su libro es ${this.titulo} y vale ${this.precio}. La id del libro es ${this.id}`
//     );
//   }
// }
// //Instanciación de objetos -- respetamos orden y cantidad de atributos
// let biblioteca = [];
// const libro1 = new Libros(1, "Jorge Luis Borges", 1949, "Aleph", 2000);
// biblioteca.push(libro1);
// const libro2 = new Libros(
//   2,
//   "Gabriel García Marquez",
//   1967,
//   "Cien años de Soledad",
//   4500
// );
// biblioteca.push(libro2);
// const libro3 = new Libros(3, "Isabel Allende", 1994, "Paula", 2800);
// biblioteca.push(libro3);
// const libro4 = new Libros(4, "Jorge Luis Borges", 1944, "Ficciones", 1400);
// biblioteca.push(libro4);
// const libro5 = new Libros(5, "Mario Benedetti", 1996, "Andamios", 2000);
// biblioteca.push(libro5);
// const libro6 = new Libros(
//   6,
//   "Mario Vargas Llosa",
//   1963,
//   "La ciudad y los perros",
//   2000
// );
// biblioteca.push(libro6);

//Cargar array forma directa
//estanteria es nuestro array de objetos
// const estanteria = [libro1, libro2, libro3, libro4, libro5, libro6];

//DECLARACIÓN DE FUNCIONES:

//Crear una function que permita al usuario agregar un libro
// function nuevoLibro() {
//   let autorIngresado = prompt("Ingrese el autor");
//   let añoIngresado = parseInt(prompt("Ingrese el año"));
//   let tituloIngresado = prompt("Ingrese el titulo");
//   let precioIngresado = parseInt(prompt("Ingrese el precio"));
//   //Utilizamos método length para id dinámica
//   let libroCreado = new Libros(
//     estanteria.length + 1,
//     autorIngresado,
//     añoIngresado,
//     tituloIngresado,
//     precioIngresado
//   );
//   console.log(libroCreado);
//   //Push de libroCreado al array
//   estanteria.push(libroCreado);
// }
//mostrar catálogo

// function mostrarCatalogo() {
//   alert(`Podrá ver nuestro catálogo en la consola:`);
//   //For of array de objetos
//   for (let libro of estanteria) {
//     //Accedo a atributos de mi array de objetos
//     libro.mostrarDatos();
//   }
// }
// function eliminarLibro() {
//   //pregunte id a usuario
//   //busque por id
//   //elimine por id seleccionada
//   let idEliminar = prompt("Ingrese la id del libro a eliminar");
//   for (let libroBuscado of estanteria) {
//     if (libroBuscado.id == idEliminar) {
//       console.log("Este es el libro " + libroBuscado.titulo);
//       estanteria.splice(idEliminar - 1, 1);
//       console.log(estanteria);
//     }
//   }
// }
// //Function que consulte al usuario opción deseada
// function preguntarOpcion() {
//   let opcion = parseInt(
//     prompt(`Ingrese el número de la opción que desea realizar:
//                         1 - Ver catálogo de libros
//                         2 - Agregar un libro a nuestro catálogo
//                         3 - Eliminar un libro de nuestro catálogo
//                         4 - Buscar libros disponibles por autor:
//                         5 - Buscar coincidencias:
//                         0 - Para salir
//                         `)
//   );
//   menu(opcion);
// }

// //Function que ofrezca un menú
// function menu(opcionSeleccionada) {
//   switch (opcionSeleccionada) {
//     case 0:
//       salir = true;
//       alert(`Gracias por visitarnos, vuelva pronto :D`);
//       break;
//     case 1:
//       mostrarCatalogo();

//       break;
//     case 2:
//       nuevoLibro();
//       break;
//     case 3:
//       eliminarLibro();
//       break;
//     case 4:
//       break;
//     case 5:
//       break;
//     default:
//       alert(`Ingrese una opción correcta`);
//   }
// }

// //CÓDIGO:
// let salir;
// while (salir != true) {
//   preguntarOpcion();
// }

// for of - element seria como un index.

// for (let element of primerArray) {
//   console.log(element);
// }

// ---------------------------------------------

// FUNCIONES DE ORDEN SUPERIOR- pueden recibir funciones como parametros y retornar funciones tambien.

// const numeros = [1, 2, 3, 4, 5];

// function porCadaUno(primerPar, segundoPar) {
//   for (let elem of primerPar) {
//     segundoPar(elem);
//   }
// }

// porCadaUno(numeros), (a) => console.log(a * 2);

// METODOS DE BUSQUEDA Y TRANSFORMACION

// for each

// numeros.forEach((num) => {
//   console.log(num);
// });

// FIND busca un elemento y devuelve la primera coincidencia.

// const productos = [
//   { nombre: "Laptop", precio: 1000 },
//   { nombre: "Mouse", precio: 50 },
//   { nombre: "Teclado", precio: 100 },
// ];

// // buscar con find
// let productoEncontrado = productos.find((n) => {
//   return n.precio > 100;
// });

// // buscar con find el nombre laptop
// const laptop = productos.find(function (n) {
//   return n.nombre === "Laptop";
// });

// FILTER busca un elemento y devuelve todas las coincidencias.

// SOME / EVERY COPIAR DEL CODIGO CLASE.
// MAP /

// REDUCE
// const productos = [
//     { nombre: "Laptop", precio: 1000 },
//     { nombre: "MouseXOR", precio: 3550 },
//     { nombre: "TecladoRRR", precio: 4000 },
//     { nombre: "Mouse", precio: 50 },
//     { nombre: "Teclado", precio: 100 }
// ]

// // Con esta funcion acumuladomos todos los precios del array
// const acumuladorReduce = productos.reduce((acumulador, producto) => {
//     return acumulador + producto.precio;
// }, 0);

// console.log(acumuladorReduce);

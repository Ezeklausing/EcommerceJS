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

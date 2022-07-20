let numero = 0;
let resultado = 0;

while (resultado <= 100) {
  numero = parseInt(prompt("ingrese un numero"));
  resultado = resultado + numero;
  if (resultado <= 100) {
    alert(`su parcial es" ${resultado}`);
  } else if (resultado > 100) {
    alert("te pasaste de 100");
  }
}

/** */

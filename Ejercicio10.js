const prompt = require("prompt-sync")();

let numero = prompt("Por favor ingresa un numero para ver su tabla: ");
numero = Number(numero);

for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
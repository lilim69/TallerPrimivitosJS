const prompt = require("prompt-sync")();

let numLimite = prompt("Por favor ingresa hasta que numero deseas contar: ");
numLimite = Number(numLimite);
let contador = 1;

while (contador <= numLimite) {
    console.log(contador);
    contador = contador + 1;
}

const prompt = require("prompt-sync")(); 
let numero1 = prompt("Por favor ingresa el primer numero: ");
let numero2 = prompt("Por favor ingresa el segundo numero: ");

numero1 = Number (numero1);
numero2 = Number (numero2);

let suma = numero1 + numero2;

console.log("La suma es: ", suma);

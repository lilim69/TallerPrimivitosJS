const prompt = require("prompt-sync")();

let año_nacimiento = prompt("Por favor ingrese su año de nacimiento: ");
año_nacimiento = Number(año_nacimiento);
let edad = 2025 - año_nacimiento;

console.log("Tu edad es: ", edad);

const prompt = require("prompt-sync")();

let contraseña = prompt("Por favor ingresa la contraseña: ");

while (contraseña !== "1234") {
  contraseña = prompt("Contraseña incorrecta. Intenta de nuevo: ");
}

console.log("Contraseña correcta");
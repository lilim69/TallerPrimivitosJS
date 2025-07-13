const prompt = require("prompt-sync")();

let edad = prompt("Por favor ingresa tu edad: ");
edad = Number(edad);

if (edad >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}
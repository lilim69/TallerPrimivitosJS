const prompt = require("prompt-sync")();

let numero = prompt("Por favor ingresa un numero: ");
numero = Number(numero);

if (numero > 0){
    console.log("Es positivo");
    
} else if (numero < 0){
    console.log("Es negativo");
} else{
    console.log("Es cero");
}

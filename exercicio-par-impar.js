const prompt = require('prompt-sync')();

const numero = prompt("Coloque um numero: ")

if (numero%2 == 0) {
    console.log("Numero par")
} else {
    console.log("Numero impar")
}
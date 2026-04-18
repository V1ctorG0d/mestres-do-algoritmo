const prompt = require('prompt-sync')();

const idade = prompt("Qual sua idade? ")

if (idade >= 18) {
    console.log("Acesso permitido");
}else{
    console.log("Acesso negado");
}
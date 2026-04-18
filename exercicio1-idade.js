const prompt = require('prompt-sync')();

const idade = prompt("Digite qual é a sua idade: ");
const diasVividos = idade*365;
console.log(`Você tem ${idade} anos então já viveu ${diasVividos} dias`)
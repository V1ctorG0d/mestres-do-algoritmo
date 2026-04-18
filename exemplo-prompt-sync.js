const prompt = require('prompt-sync')();

const nome = prompt('Qual seu nome? ');
const idade = prompt('Qual sua idadde? ');
console.log(`Interresante... ${nome} é um nome bonito e você tem ${idade} anos de idade`);
const prompt = require('prompt-sync')();

const ListaCompras = ["Arroz ", "Feijão ", "Batata ", "Salada ", "Ovos Podres ", "Aveia "]
let invertido = ListaCompras.toReversed()
console.log(`primeiro item da lista é ${ListaCompras[0]} \n segundo item da lista é ${invertido[0]}`)

let mudarItem = prompt("O que colocar no lugar de ovos podres? ")
ListaCompras[4] = mudarItem;

console.log(`Agora a Lista de Compras tem os seguintes itens: ${ListaCompras}`)
const prompt = require('prompt-sync')();

let valorProdutos;
let totalProdutos = 0;

// do {
//     valorProdutos = parseFloat(prompt("qual valor do Produto? (Digite 0/zero para sair) \n"));
//     totalProdutos += valorProdutos
// } while (valorProdutos === 0);


while (valorProdutos !== 0) {
    valorProdutos = parseFloat(prompt("qual valor do Produto? (Digite 0/zero para sair) "));
    if (valorProdutos <= -1) {
        console.log("Erro: Digite um valor valido")
    }else{
        totalProdutos += valorProdutos
    }
}

console.log(`Total produtos: ${totalProdutos}`)
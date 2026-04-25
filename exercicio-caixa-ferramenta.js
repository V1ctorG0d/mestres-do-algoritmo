const prompt = require('prompt-sync')();

const caixaFerramenta = []
let adicionarFerramenta;

do {
    adicionarFerramenta = prompt("Coloque a ferramenta na caixa: (Digite 'parar' para sair do programa)");
    if (adicionarFerramenta == "parar") {
        console.log("Saindo do programa...")
        console.log(`Quantidade de Ferramentas na caixa é ${caixaFerramenta.length}`)
        console.log(`As ferramentas são ${caixaFerramenta}`)
    } else {
        caixaFerramenta.push(adicionarFerramenta);
        console.log(`Ferramenta ${adicionarFerramenta} adicionada com sucesso!!!`)
    }
    
} while (adicionarFerramenta !== "parar");
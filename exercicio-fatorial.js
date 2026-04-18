const prompt = require('prompt-sync')();

const NumFatorial = prompt('Digite o número para calcular o Fatorial: ');

let ResultFatorial = NumFatorial;

for (let i = NumFatorial-1; i > 0; i--) {

    console.log(`${NumFatorial}!: ${NumFatorial}x${i} = ${NumFatorial*i}`);

    ResultFatorial = ResultFatorial * i;
}

console.log(`Fatorial de ${NumFatorial}! = ${ResultFatorial}`);
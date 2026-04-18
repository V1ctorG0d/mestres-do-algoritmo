const prompt = require('prompt-sync')();
let senha;

do {
    senha = prompt("Digite novamente uma senha de 4 digitos: ");

    if (senha.length < 4) {
        console.log("Senha curta, tente novamente!")
    }

} while (senha.length < 4);

console.log("Senha cadastrada com Sucesso!");

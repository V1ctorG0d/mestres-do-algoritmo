const prompt = require('prompt-sync')();

//let quantidadeAlunos;
let quantidadeAlunos = parseInt(prompt("qual a quantidade de alunos? "));
let notaAluno;
let somaNota = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
    notaAluno = parseFloat(prompt(`Digite a nota do Aluno ${i+1}: `))
    somaNota += notaAluno
}

let mediaAlunos = somaNota/quantidadeAlunos

console.log(mediaAlunos)
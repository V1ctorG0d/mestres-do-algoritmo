const prompt = require('prompt-sync')();

const nota = Number(prompt("Digite sua nota: "))

if (nota > 8.9) {
    console.log("Excelente! Nota A")
} else if(nota >= 6){
    console.log("Aprovado!")
} else{
    console.log("Reprovado")
}
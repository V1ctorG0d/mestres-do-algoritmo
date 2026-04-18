const prompt = require('prompt-sync')();

const peso = prompt("Qual o seu peso? \n");
const altura = prompt("Qual sua altura? \n");
const imc = (peso/altura**2).toFixed(2);

if (imc<18.5) {
    console.log(`\n IMC: ${imc} \n Classifciação: Magraza \n Obesidade(Grau): 0`)
} else if(imc>=18.5 && imc<=24.9) {
    console.log(`\n IMC: ${imc} \n Classifciação: Normal \n Obesidade(Grau): 0`)
} else if(imc>=25 && imc<=29.9) {
    console.log(`\n IMC: ${imc} \n Classifciação: Sobrepeso \n Obesidade(Grau): 1`)
} else if(imc>=30 && imc<39.9) {
    console.log(`\n IMC: ${imc} \n Classifciação: Obesidade \n Obesidade(Grau): 2`)
} else{
    console.log(`\n IMC: ${imc} \n Classifciação: Obesidade Grave \n Obesidade(Grau): 3`)
}

console.log(`Com um peso de ${peso}Kg e uma altura de ${altura}m você tem um IMC de ${imc}`)
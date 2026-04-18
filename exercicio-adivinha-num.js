const prompt = require('prompt-sync')();

const compNum = Math.floor(Math.random()*2)+1;
console.log(compNum)
const userNum = prompt("Advinhe o número: ")

if (userNum == compNum){
    const som = new Audio('sound/som_vitoria.mp3');
    som.play();
    console.log("Parabéns você aceitou")
}else{
    console.log("Você errou o número é", compNum)
}


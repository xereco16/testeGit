const {
    ler,
    escrever
} = require('./utils/utils');


let nome = String(ler("Qual é seu nome? "))
let peso = Number(ler("Qual é seu peso em KG? "))
let idade = Number(ler("Qual é a sua idade? "))

while (peso < 30 && idade < 18) {
    if (peso < 30 && idade < 18){
        escrever("Seu peso não é igual a 30KG e sua idade não é igual a 18 anos!! por favor digite novamente")
        peso = Number(ler("Qual é seu peso em KG? "))
        idade = Number(ler("Qual é a sua idade? "))
    }else if (peso < 30){
        escrever("Seu peso não é igual a 30KG!! por favor digite novamente")
        peso = Number(ler("Qual é seu peso em KG? "))
    }else if (idade < 18 ){
        escrever ("Sua idade não é igual a 18 anos!! por favor digite novamente")
        idade = Number(ler("Qual é a sua idade? "))
    }
}

// escrever("Olá "+nome+"você tem "+peso+"KG e "+idade+" anos, sua entrada foi liberada")
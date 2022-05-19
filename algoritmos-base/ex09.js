const {
    ler,
    escrever
} = require('./utils/utils');

let contador = 1
let limite = 5
let soma = 0
let numeros = []

while (contador <= limite){
    let nome = String(ler("Qual seu nome? "))
    if (nome == "finaliza") {
        break;
    }
    let salario = Number(ler("Qual é o seu salário nessa empresa? "))
    contador++
    numeros.push(salario)
}

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]
    soma = soma + numero  
}

let media = soma / numeros.length
escrever("A média salarial da empresa é R$"+media)
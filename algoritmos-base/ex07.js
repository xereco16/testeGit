const {
    ler,
    escrever
} = require('./utils/utils');


let contador = 1
let limite = 10
let maiorNumero = 0
let numeros = []

while (contador <= limite){
    let numb = Number(ler("Digite um número: "))
    if (numb == 0){
        break;
    }
    contador++
    numeros.push(numb)
}

for (let i=0; i < numeros.length; i++){
    
    let numero = numeros[i]

    if (numero > maiorNumero){
        maiorNumero = numero
    }
}

escrever("o maior número digitado é "+maiorNumero)
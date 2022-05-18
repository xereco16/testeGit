const {
    ler,
    escrever
} = require('./utils/utils');


let limite = 10
let contador = 1
let soma = 0

while (contador <= limite){
    soma += contador;
    contador += 1;
    escrever(soma)
}

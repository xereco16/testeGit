const {
    ler,
    escrever
} = require('./utils/utils');


let limite = 5
let contador = 1
let soma = 0

while (contador <= limite){
    let numb = Number(ler("Digite um número: "))
    if (numb== 0 ) {
         break;
      }
    soma += numb;
    contador = contador + 1
}
escrever(soma)
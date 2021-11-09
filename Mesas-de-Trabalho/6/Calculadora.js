//CALCULADORA.JS

//   *  D E S A F I O  1  * 

// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicao(pNum1, pNum2){
    return (pNum1+pNum2)
}
// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtracao(pNum1, pNum2){
    return (pNum1-pNum2)
}
// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicacao(pNum1, pNum2){
    return (pNum1*pNum2)
}
// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function divisao(pNum1, pNum2){
    return (pNum1/pNum2)
}

//   *  D E S A F I O  2  * 


// No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
// console.log ("-------------- Teste de Operações / Calculadora --------------")
// Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
// Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
// Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
// Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.

console.log("-------------- Teste de Operações / Calculadora --------------")
console.log(adicao(7,2))
console.log(subtracao(7,2))
console.log(multiplicacao(7,2))
console.log(divisao(7,2))

//   *  D E S A F I O  3  *

// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().

function quadradoDoNumero(pNum){
    return multiplicacao(pNum, pNum)
}
console.log(quadradoDoNumero(7,7))

// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function mediaDeTresNumeros(pNum){
    triplo = adicao(pNum,pNum)+pNum
    return (triplo/3)
}
console.log(mediaDeTresNumeros(10))
// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 
// Importante: calculaPorcentagem() você precisará usar algumas funções criadas anteriormente em nossa calculadora.

function calculaPorcentagem(pTotal, pPorcent){
    return(pPorcent%pTotal)
}
console.log(calculaPorcentagem(300,15))

// Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá retornar a porcentagem do primeiro em relação ao segundo parâmetro.
// Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).

function geradorDePorcentagem(pTotal, pPorcent){
    return(pTotal%pPorcent)
}
console.log(geradorDePorcentagem(2, 200))

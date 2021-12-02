// Concurso.

// Um cliente nos pede para fazer um aplicativo que possa determinar os vencedores de
// um concurso que foi realizado no fim de semana.
// Para isso, precisaremos seguir as seguintes instruções e informações para poder
// desenvolver nosso aplicativo.
// Cada participante tem '5 notas', dos quais suas pontuações individuais serão
// formadas, os participantes com suas respectivas pontuações são:
// ● Participante A: 5, 8, 4, 9, 5
// ● Participante B: 8, 7, 8, 6, 8
// ● Participante C: 7, 5, 10, 8, 3

// O concurso consiste em 2 modalidades de seleção para um vencedor:

// Com essas informações, nosso líder de Tecnologia nos pergunta o seguinte:

let participanteA = [5, 8, 4, 9, 5]
let participanteB = [8, 7, 8, 6, 8]
let participanteC = [7, 5, 10, 8, 3]

// ● Melhor média (a maior pontuação média entre os concorrentes)
// ● Maior e-tip(a maior pontuação entre as 5 notas de cada participante)

// 1. Determine qual seria a maneira ideal de representar cada participante com
// suas pontuações.
let soma = 0;
let somaA = 0;
let somaB = 0;
let somaC = 0;

function melhorMedia(a,b,c){

    for(var i=0; i<=a.length;i++){
        somaA = somaA + a[i]
    }
    for(var i=0; i<=b.length;i++){
        somaB = somaB + b[i]
    }
    for(var i=0; i<=c.length;i++){
        somaC = somaC + c[i]
    }
    
    if(somaA > somaB && somaA > somaC){
        return console.log("A é o maior com: "+somaA)
    }else if (somaB > somaA && somaB > somaC){
        return console.log("B é o maior com: "+somaB)
    }else if(somaC > somaA && somaC > somaB){
        return console.log("C é o maior com: "+somaC)
    }else{
        return console.log("ERRO!")
    }
    
}

function maiorETIP(a){
    for(var i=0; i<=a.length;i++){
        soma += a[i]
    }
    return soma
}

melhorMedia(participanteA,participanteB,participanteC)

maiorETIP(participanteA)
maiorETIP(participanteB)
maiorETIP(participanteC)

// 2. Crie uma função pontuacaoMedia à qual receba um participante por parâmetro
// e deve calcular e devolver a pontuação média dele.

function pontuacaoMedia(participante){
    let somaParticipante = 0;
    for(var i=0;i<=participante.length;i++){
        somaParticipante += participante[i]
    }
    return somaParticipante;
}

// 3. Crie uma função pontuacaoMaior que receba um participante por parâmetro e
// deve calcular e devolver a pontuação mais alta que o participante tem.

// 4. Logo nosso líder tecnológico nos pede para criar essas duas funções geramos
// uma nova funcionalidade chamada competição que receberá os 3 participantes
// por parâmetros, e executará as duas funções criadas anteriormente para
// calcular as médias e pontuações mais altas de cada uma, e deve anunciar
// (mostrar pelo console) o vencedor de cada modalidade de pontuação.





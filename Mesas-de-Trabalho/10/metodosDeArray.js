// Acessar elementos específicos de um array.
/*
let meuArray = ["batata", "banana", "feijao", "cinzas", "e", "amor"];

console.log(meuArray[3]);

// Modificar cada um dos elementos de um array e imprimi-los no console.

console.log(meuArray.sort());

// Adicionar elementos a um array.

meuArray.push("vida");
console.log(meuArray);
// Extrair elementos de um array.

meuArray.pop("vida");
console.log(meuArray);

// Comparar elementos de um array com os elementos de outro. 

let outroArray = [1,2,"zé",3,4,"pedro"];

if(meuArray === outroArray){
    console.log("é igualzin.");
}else{
    console.log("non és.");
}

// PÁGINA 2

//1 - 6
//2 - "Spiderman"
//3 - "UNA STRING QUALQUER"


// ARRAY INVERTIDO

// Questão 1:

let tamanhoArray = meuArray.length;
let numero = tamanhoArray-1;

for(let i = 0;i < tamanhoArray;i++){
    console.log("Item numero "+numero+": "+meuArray[numero]);
    numero--;
}

// Questão 2:

function imprimirInverso(pArray){
    return console.log("Array em ordem: "+pArray+"\nArray reverso: "+pArray.reverse());
}

imprimirInverso(meuArray);

// Questão 3:

function somarArray(pArray){
    var soma = 0; 
    for(i=0;i<pArray.length;i++){
        soma+= pArray[i];
    }
    return console.log(soma);
}
somarArray([1,2,3]);
somarArray([10, 3, 10, 4]);
somarArray([-5,100]);
*/
let meusFilmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];
outroArray = [1,2,"zé",3,4,"pedro"];

for(i=0; i<outroArray.length; i++){
    meusFilmes.push(outroArray[i])
}

// if(){

// }


console.log(meusFilmes);
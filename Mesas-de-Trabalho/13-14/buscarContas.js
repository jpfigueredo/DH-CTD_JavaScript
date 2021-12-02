const listaConstas = require("./criarConta");

function buscarContas(nome){
    for(let i = 0 ; i<listaConstas.length;i++){
        if(listaContas[i].titular == nome){
            return listaContas[i];
        }
    }
}

console.log(buscarContas("1"));
console.log(buscarContas("2"));
console.log(buscarContas("10"));


// module.exports(buscarContas);
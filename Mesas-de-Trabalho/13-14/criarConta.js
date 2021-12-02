const ContaBancaria = require("./contaBancaria");

var listaContaBancaria = [
    new ContaBancaria(1,"1",1,"1"),
    new ContaBancaria(2,"2",2,"2"),
    new ContaBancaria(3,"3",3,"3"),
    new ContaBancaria(4,"4",4,"4"),
    new ContaBancaria(4,"4",4,"4"),
    new ContaBancaria(5,"5",5,"5"),
    new ContaBancaria(6,"6",6,"6"),
    new ContaBancaria(7,"7",7,"7"),
];
console.log(listaContaBancaria);

var listaConta = [];
let conta1 = new ContaBancaria(1,"1",1,"1");
let conta2 = new ContaBancaria(2,"2",2,"2");
listaConta.push(conta1,conta2);
console.log(listaConta);
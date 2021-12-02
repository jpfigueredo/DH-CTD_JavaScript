// // 1
// function soma(a=1,b=3){
//     return a+b;
// }
// console.log(soma());
// console.log(soma(3));
// console.log(soma(1,2));

// // 2
// // + === ! &&

// // 3
// let numeros = [10, 8, 7, 99, 0, 1, 6];
// // [ 99, 10, 8, 7, 6, 1, 0]
// numeros.sort(
//     function(a,b){return b-a;})
//     ;

// console.log(numeros);

// var z=0;
// for(i=20;i<50;i+=10){
//     z+=i;
// }
// console.log(z);

// // 5
// // O operador ++ incrementa -1, o operador -- decrementa 1, o operador % calcula o resto, o operador + concatena ou soma

// let frutasAmarelas=['Melão','Mamão','Limão siciliano'];
// let frutasVermelhas=['Morango','Cereja','Maçã red'];
// let frutasVerdes=['Limão','Kiwi','Maçã verde'];

// frutasVermelhas1 = frutasVermelhas.map(fruta => fruta.toUpperCase());
// console.log(frutasVermelhas1)
// let todasFrutas =[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
// console.log(todasFrutas)


// // 9

// let valor= 5;
// let fatorial = 1;

// for(let i= valor; i > 1; i--){
//     fatorial*=i
//     console.log(fatorial)
// }
// console.log("Fatorial é: "+fatorial);

// 12
let frutasAmarelas = ['Melão','Mamão','Limão'];
let [fruta1,fruta2,fruta3] = frutasAmarelas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(frutasAmarelas);

let x=5;
let y = x++ + ++x;
console.log("y ="+y);
x =3
y=x*(x+1)*x++;
x=5;
y=3;
y*=x+1;
console.log("x= "+x);
console.log("y= "+y);
console.log("");

for(var i=0;i<50;i+=10){
    console.log(i);
}
console.log(i);
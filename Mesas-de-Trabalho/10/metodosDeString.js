var variavel = "oi, tudo bem?";
var variavel2 = " oi, tudo bem? "; // para o trim

//length
console.log(variavel.length); // 13

//indexOf
console.log(variavel.indexOf("t")); // 4
console.log(variavel.indexOf("bem")); // 9  - 9 == "b".length , pega o primeiro

//slice
console.log(variavel.slice(4,12)); // último não é incluído

//trim
console.log(variavel2.trim);
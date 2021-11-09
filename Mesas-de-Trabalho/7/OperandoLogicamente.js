// Ex1. O que cada expressão retorna?
// Dê uma olhada nestes exemplos e pense sobre o que cada um retorna:

// !true
// !false
// !!false
// !!true
// !1
// !!1
// !0
// !!0
// !!"" 

// Ex2. O que cada expressão retorna?
// Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false?

let x = 5 ;
let y = 9;

// x=10;
// y ="a";
// x=3;
// y=8;

let str = "";
let msg = "haha!";
let eBonito = "false";
let ehVerdade = true;

switch(x , y , str, msg, eBonito){
    case (x < 10 && x!==5):
        ehVerdade = true;
        break;
    case (x>9 || x===5):
        ehVerdade = true;
        break;
    case (!(x===y)):
      ehVerdade = true;
        break;
    case (y === "b" || x >= 10):
        ehVerdade = true;
        break;
    case (!(x == "3" || x === y) && !(y !== 8 && x <= y)):
        ehVerdade = true;
        break;
    case (!((str || msg) && eBonito)):
        ehVerdade = true;
        break;
    default:
        console.log("Opção inválida.");
        break;
}
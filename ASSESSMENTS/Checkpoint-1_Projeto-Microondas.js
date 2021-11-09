//  1 - Pipoca – 10 segundos (padrão);
//  2 - Macarrão – 8 segundos (padrão);
//  3 - Carne – 15 segundos (padrão);
//  4 - Feijão – 12 segundos (padrão);
//  5 - Brigadeiro – 8 segundos (padrão);

// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente";
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabum”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

function esquentarNoMicroondas(opcao, tempo){
    switch(opcao){
        case "Pipoca":
            if(tempo < 10){
                return console.log("tempo insuficiente")
            }else if(tempo == 10){
                return console.log("Prato pronto, bom apetite!!!")
            }else if(tempo >= 10*3){
                return console.log("kabum")
            }else{
                return console.log("Prato queimado.")
            }
        case "Macarrão":
        case "Brigadeiro":
            if(tempo < 8){
                return console.log("tempo insuficiente")
            }else if(tempo == 8){
                return console.log("Prato pronto, bom apetite!!!")
            }else if(tempo >= 8*3){
                return console.log("kabum")
            }else{
                return console.log("Prato queimado.")
            }
        case "Carne":
            if(tempo < 15){
                return console.log("tempo insuficiente")
            }else if(tempo == 15){
                return console.log("Prato pronto, bom apetite!!!")
            }else if(tempo >= 15*3){
                return console.log("kabum")
            }else{
                return console.log("Prato queimado.")
            }
        case "Feijão":
            if(tempo < 12){
                return console.log("tempo insuficiente")
            }else if(tempo == 12){
                return console.log("Prato pronto, bom apetite!!!")
            }else if(tempo >= 12*3){
                return console.log("kabum")
            }else{
                return console.log("Prato queimado.")
            }
        default:
            return console.log("Prato inexistente!")
    }
}

let opcao = "Brigadeiro";
let tempo = 8; // segundos

esquentarNoMicroondas(opcao, tempo);
console.log("Seu prato está pronto!")

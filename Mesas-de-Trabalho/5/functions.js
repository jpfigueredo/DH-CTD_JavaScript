function polegada_para_cm(pPolegada){
    return pPolegada*2.54;
}

function string_para_url(pString){
    // return console.log(`http://www.${pString}.com.br`);
    return console.log("http://www."+pString+".com.br");
}

string_para_url("joao");

function adicionar_exclamacao(pFrase){
    return pFrase + " !";
}

function calcula_idade_cachorro(pIdade){
    return pIdade * 7;
}

function calcula_valor_hora_salario(pSalarioMensal){
    return (pSalarioMensal/160);
}

function calcula_imc(pAltura, pPeso){
    return (pPeso/pAltura*pAltura);
}

function lower_to_upper(pString){
    return pString.toUpperCase();
}

function lower_to_upper(pParam){
    return typeof(pParam);
}

function calcula_circunferencia(pRaio){
    return (2*Math.PI*pRaio);
}
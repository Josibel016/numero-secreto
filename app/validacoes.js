function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;

    if (chuteforInvalido(numero)){
        console.log('valor invalido')
    }

    if (numeroForMaiorQueOPermitido(numero)){
        console.log(`valor invalido: o numero precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteforInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}
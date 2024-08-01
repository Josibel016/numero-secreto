function verificaSeOChutePossuiValorValido(chute){
    const numero = +chute;

    

    if (chuteforInvalido(numero)) {
        elementoChute.innerHTML += `<div>valor inválido</div>`;
        return
    }

    if (numeroForMaiorQueOPermitido(numero)){
        elementoChute.innerHTML +=`<div>valor invalido: o numero precisa estar entre ${menorValor} e ${maiorValor}</div>`
    return
    }
    if (numero === numeroSecreto){
        document.body.innerHTML=`
        <h2> Voce Acertou!!!</h2>
        <h3> o numero secreto era ${numeroSecreto}</h3> 
        <button id=jogar-novamente class="btn-jogar">jogar Novamente</button>
        `
        

    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    } else{
        elementoChute.innerHTML += `
            <div>O número secreto é menos <i class="fa-solid fa-down-long"></i></div>`;

    }
    }

function chuteforInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click',e =>{
    if(e.target.id =='jogar Novamente'){
        window.location.reload()
    }

})

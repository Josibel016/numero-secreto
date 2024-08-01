function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute;

    if (chuteforInvalido(numero)) {
        if (chute.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `
                <h2> Game Over </h2>
                <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `;
            document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += `<div>valor inválido</div>`;
            return;
        }
    }

    if (numeroForMaiorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>valor inválido: o número precisa estar entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você Acertou!!!</h2>
            <h3> O número secreto era ${numeroSecreto}</h3> 
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`;
    }
}

function chuteforInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorQueOPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
});

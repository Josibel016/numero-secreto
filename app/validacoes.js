function verificaSeOChutePossuiValorValido(chute) {
    const numero = +chute;

    if (chuteforInvalido(numero)) {
        if (chute.toUpperCase() === 'GAME OVER') {
            document.body.innerHTML = `
                <h2> Game Over </h2>
                <button id="jogar-novamente" class="btn-jogar">play again</button>
            `;
            document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += `<div>valor inválido</div>`;
            return;
        }
    }

    if (numeroForMaiorQueOPermitido(numero)) {
        elementoChute.innerHTML += `<div>invalid value: the number must be between ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> You got it right!!!</h2>
            <h3> the secrect number was ${numeroSecreto}</h3> 
            <button id="jogar-novamente" class="btn-jogar">Play again</button>
        `;
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += `
            <div>The secret number is greater <i class="fa-solid fa-up-long"></i></div>`;
    } else {
        elementoChute.innerHTML += `
            <div>The secret number is lower <i class="fa-solid fa-down-long"></i></div>`;
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

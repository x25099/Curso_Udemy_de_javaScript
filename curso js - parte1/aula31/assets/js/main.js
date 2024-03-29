// capturar evento de submit do formulário.

const form = document.querySelector(`#form`);

form.addEventListener(`submit`, function (evento) {
    evento.preventDefault();
    const inputPeso = evento.target.querySelector('#peso');
    const inputAltura = evento.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const mensagem = `Seu iMC é ${imc} (${nivelImc}).`;

    setResultado(mensagem, true);

})


function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5)  return nivel[0];
}

function getImc(peso, altura) {
    const imc = peso / altura **  2;
    return imc.toFixed(2);
}

function criaP (className) {
    const p = document.createElement('p');
    return p;
}

function setResultado(mensagem, isValid) {
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    
    
    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    }else {
        p.classList.add('bad');
    }

    p.innerHTML = mensagem
    resultado.appendChild(p);
}

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 10000);

setTimeout(function () {
    console.log("Olá mundo");
}, 5000); 

/*------------------ Comando setInterval() --------------------
Crie um intervalo para executar algo de forma constante: 

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}
function funcaoDoInterval() {
    console.log(mostraHora());
}
setInterval(funcaoDoInterval, 1000);

no exemplo acima ele executara a função "funcaoDoInterval" em 1000 milisegundo que é igual a 1 segundo, ou seja, o comando irá executar a função de 1 em 1 segundo.

*/ 

/*------------------------ Comando setTimeout()--------------------------
Cria um intervalo de tempo para executar algo, mas diferente do setInterval(), setTimeout() executa apenas uma vez o comando: 

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 10000);

No caso acima o clear vai fazer o bloqueio do comando exatamente em 10000 milisegundo, ou seja, 10 segundos. 

---------------------------------------------////////////////////-------------------------------------------------------------

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 10000);

setTimeout(function () {
    console.log("Olá mundo");
}, 5000); 

No caso acima além de bloquar o código em 10000 milisegundo, também irá mostrar um texto em 5000 milisegundo, ou seja em 5 segundos pela mostrará o texto "Olá mundo".


*/ 
/*
const h1 = document.querySelector(`.container h1`);
const data = new Date();


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto2;
    switch(diaSemana) {
        case 0:
            diaSemanaTexto2 = `Domingo`;
            break;
        case 1:
            diaSemanaTexto2 = `Segunda-feira`;
            break;
        case 2:
            diaSemanaTexto2 = `Terça-feira`;
            break;
        case 3:
            diaSemanaTexto2 = `Quarta-feira`;
            break;
        case 4:
            diaSemanaTexto2 = `Quinta-feira`;
            break;
        case 5:
            diaSemanaTexto2 = `Sexta-feira`;
            break;
        case 6:
            diaSemanaTexto2 = `Sábado`;
            break;
        default:
            diaSemanaTexto2 = `Número inválido`;
            break;
        }
        return diaSemanaTexto2;
}

function getNomeMes(numeroMes) {
    let mesTexto;
    switch(numeroMes) {
        case 0:
            mesTexto = `Janeiro`;
            break;
        case 1:
            mesTexto = `Fevereiro`;
            break;
        case 2: 
            mesTexto = `Março`;
            break;
        case 3: 
            mesTexto = `Abril`;
            break;
        case 4: 
            mesTexto = `Maio`;
            break;
        case 5: 
            mesTexto = `Junho`;
            break;
        case 6: 
            mesTexto = `Julho`;
            break;
        case 7: 
            mesTexto = `Agosto`;
            break;
        case 8: 
            mesTexto = `Setembro`;
            break;
        case 9: 
            mesTexto = `Outubro`;
            break;
        case 10: 
            mesTexto = `Novembro`;
            break;
        case 11: 
            mesTexto = `Dezembro`;
            break;
        default:
            mesTexto = `Número inválido`;
            break;
    }

    return mesTexto;
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:` +
    `${zeroAEsquerda(data.getMinutes())}
    `);
}


h1.innerHTML = criaData(data);
*/

/* Jeito mais simples*/

/*
const h1 = document.querySelector(`.container h1`);
const data = new Date();
const opcoes = {
    dateStyle: `full`,
    timeStyle: `short`
};

h1.innerHTML = data.toLocaleString("pt-BR", opcoes);

*/

/* Como adicionar data no formato da sua região

Utilizamos a função toLocaleString(`região`, comandos);

veja exemplo acima e abra o index.html para entender
melhor:
*/

/* Terceira forma */

const h1 = document.querySelector(`.container h1`);
const data = new Date();


function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto = [`domingo`, `segunda-feira`,
        `terça-feira`, `quarta-feira`, `quinta-feira`,
        `sexta-feira`, `Sábado`
    ];

    return diaSemanaTexto[diaSemana];

}

function getNomeMes(numeroMes) {
    const meses = [`Janeiro`, `Fevereiro`, `Março`, `Abril`,
        `Maio`, `Junho`, `Julho`, `Agosto`, `Setembro`, `Outubro`,
        `Novembro`, `Dezembro`
    ];
    return meses[numeroMes];
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();
    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return (
        `${nomeDia}, ${data.getDate()} de ${nomeMes}` +
    ` de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:` +
    `${zeroAEsquerda(data.getMinutes())}
    `);
}


h1.innerHTML = criaData(data);
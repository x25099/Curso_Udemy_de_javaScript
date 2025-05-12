/* Avaliação de Curto-Circuito 

&& -> true && false -> retorna o valor mesmo falso
|| -> true || false -> retorna o primeiro valor mesmo verdadeiro
*/ 

/* Valores avaliados em falso 

FALSY -> Nãi literal
false -> literal
0 -> zero
"" `` ´´ -> aspas ou crases vazias
null ou undefined 
*/

console.log(`Luiz` && `Maria`); //Por não ter nada para retornar, ele retornará o ultimo valor
console.log(`` && `Maria`);

function falaOi() {
    return `Oi`;
};

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());
console.log(vaiExecutar || falaOi());

let corUsuario = null; //Se o valor setar um valor ele será subtituido, do contrario será usado a cor padrão que é null
//corUsuario = `vermelho`
const corPadrao = corUsuario || `preto`;

console.log(corPadrao);


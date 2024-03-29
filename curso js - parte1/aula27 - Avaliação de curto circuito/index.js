
/*
&& -> false && true -> false "o valor mesmo".
Valores FALSY:
false -> valor literal.
0
"", '', `` -> Aspas vazias
null / undefined
NaN -> Not a Number

*/ 

function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'joãozinho';

console.log(vaiExecutar && falaOi());

/*OR
|| -> true || false  -> Vai retornar o valor verdadeiro.
*/

console.log(0 || false || null || "Luiz Otávio" || true);

const corUsuario = `vermelho`;
const corPadrao = corUsuario || `preto`;

console.log(corPadrao);


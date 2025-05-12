/* Operação Ternária 

Operação ternária em JavaScript sempre é representada
por "?" e ":" Utilizamos dessa forma

condição ? o que vai ser apresentado se a condição for aceita : o que vai ser apresentado se for negada

Exemplo:
*/

const pontuacaoUsuario = 999;
const pontuacaoUsuario2 = 1000;

/* Como escrever o seguinte código em uma única linha

if(pontuacaoUsuario >= 1000){
    console.log(`Usuário VIP`)
}else{
    console.log(`Usuário normal`)
}

*/

/* Utilizanos "?" e ":" 

no seguinte código utilizamos a "?" como se a condição
anterior for aceita é para apresentar o texto seguinte
do contrário utilizamos os ":" como se a condição
anterior for negada(não aprovada) com isso apresentará
o texto a partir dele
*/
const nivelUsuario = pontuacaoUsuario >= 1000 ? `Usuário VIP` : `Usuário normal`;
const nivelUsuario2 = pontuacaoUsuario2 >= 1000 ? `Usuário VIP` : `Usuário normal`;

console.log(nivelUsuario);
console.log(nivelUsuario2);

const corUsuario = null;
const corPadrao = corUsuario || `Preta`;

console.log(nivelUsuario, corPadrao);

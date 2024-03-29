/*A operação ternaria se trata dos seguintes símbolos
? e :

(condição) ? "Valor no caso de ser verdadeiro" : "Valor no caso de ser falso";

eles podem ser substituir o if e else
*/


const pontuacaoUsuario = 1000;
const nivelUsuario = pontuacaoUsuario >= 1000 ? "Usuário VIP" : "Usuário normal";
const corUsuario = null;
const corPadrao = corUsuario || "Preta";
console.log(nivelUsuario, corPadrao);

/*
if (pontuacaoUsuario >= 1000) {
    console.log("Usuário VIP");
}else {
    console.log("Usuário normal");
}
*/
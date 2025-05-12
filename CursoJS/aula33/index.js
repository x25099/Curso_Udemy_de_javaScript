/* Mais sobre Var let e const */
/*
let nome = `Luiz`;
var nome2 = `Luiz`;
*/

/* Não podemos declara variávereis com o mesmo nome

let nome = `Luiz`;
let nome = `Matheus`;

Isto vai gerar um erro informando que let nome não pode
ser redeclarado, pois já existe uma variável com este
nome
*/

/* let tem escopo de bloco {...bloco} 

No caso de redeclararmos uma variável dentro de um
bloco, ou seja, dentro de chaves, não gerará um erro
no caso se tivermos uma variável dentro e fora do bloco
e pedirmos que seja executado algo dentro do bloco com 
a nova variável que tem o mesmo nome que a variável
que está do lado de fora do bloco, será executado a
que está dentro do bloco.

Ressalto que ao redeclarar uma variável(let) dentro de um
bloco, ressalto que não estamos exatamente redeclarando a
variável, mas sim criando uma nova variável, ou seja, tudo
o que está fora do bloco, não consegue mexer em nada que
está dentro do bloco, mas tudo o que está dentro do 
bloco, pode alterar absolutamente tudo que está tanto fora
como dentro do bloco.

Informo novamente que os blocos analisaram o seguinte
será verificado se a variável que você está procurando
está dentro do bloco em que foi excutado a ação
se não estiver ele vai procurar dentro do outro bloco
(será procurado em outro bloco se a ação em que foi
excecutada estiver dentro de outro bloco por exemplo:

if(verdadeiro){
    if(verdadeiro){
    }
}
), no caso de ele procurar dentro dos blocos e não
for encontrado nenhuma variável com o nome procurado
então será procurado no escopo global, ou seja, fora de
todo bloco e função

Veja Exemplo:
*/

let nome = `Luiz`;
var nome3 = `Luiz`;
const verdadeiro = true;

if(verdadeiro) {
    let nome = `Matheus`;
    console.log(nome, nome3);

    if(verdadeiro){
        let nome = `Outra coisa`;
        console.log(nome, nome3)
    }
}

/* Var tem apenas escopo de função */

/* Informo que var pode ser redeclarado quantas
vezes quisermos, porém informo que ao redeclarar uma
var com o mesmo nome que outra variável var, ao invés
de redeclararmos, estariamos recriando a variável

veja exemplo:
*/

/*

var nome2 = `Luiz`;
console.log(nome2);

var nome2 = `Matheus`;
console.log(nome2)

*/

/* No caso de colocarmos var dentro de um bloco
também estariamos redeclarando(recriando) a variável,
por isso é usado o let ao invés de var, por ser mais
dinâmico e eficiente
*/

/* Para executarmos um código com uma variável
devemos primeiro declara-la antes de executar e não
executar e depois declarar, exemplo

console.log(nome)
let nome = `Matheus`;

Esse código acima vai gerar erro, maneira correta:

let nome = `Matheus`;
console.log(nome)
*/

/* Testando var em escopo de função 

O bloco de uma função é especial, isso porque o bloco
protege tudo o que está dentro e faz com que nada que 
esteja fora dele altere algo que está dentro dele.

e dentro da função podemos alterar algo que está fora
dela, então, tudo o que está dentro de uma função
não pode ser alterado fora dela, as tudo o que estiver
fora de uma função, podemos modificar dentro de uma
função
*/

/*

function falaOi() {
    var nome = `Luiz`;
    console.log(nome);
}

falaOi();

*/

/*Situação Hoister */

console.log(sobrenome);

var sobrenome = `Miranda`;

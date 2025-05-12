/* Funções 

Quando falamos em funções devemos por em mente que, uma
função executa uma ação
*/

/* Criação de uma função

Para criarmos uma função utilizamos a palavra "function"
e de pois damos um nome à ela, vale ressaltar que quanto
ao nome da função, ela tem as mesmas regras que dar um
no à uma variável, ou seja, sem números, sem espaços, etc

e depois abrimos e fechamos parêntes e logo abrimos e
fechamos chaves

Exemplo:

function saudacao() {}

Para executarmos qualquer tipo de função, utilizamos
o nome da função e junto dela colocamos os parênteses

saudacao()
alert()
prompt()
*/

/*

function saudacao() {
    console.log(`Bom dia!`);
}

saudacao();

*/

/* Parâmetros

Parâmetros vão entre os parênteses e também são muito
similares as variáveis 

function saudacao(Parâmentro aqui) {}
*/

/* Como colocar valores nos parâmetros

Na verdade é bem simples para realizar essa, damos um
valor ao parâmetro quando chamamos a função, e por darmos
um valor ao parâmetro, então podemos utilizar o valor
do parâmetro da forma que quisermos dentro da função:

segue exemplo:
*/

/*
function saudacao(nome) {
    console.log(`Bom dia, ${nome}`);
}

saudacao(`Matheus`);

*/

// saudacao(`Maria`); e a parte boa é que podemos repetir esse código quantas vezes quisermos
// saudacao(`Ronaldo`); 

/* Atenção ao armazenar a função em uma variável

Quando tentamos armazer a função dentro de uma variável
sem especificar o que queremos o que a mesma retorne,
neste caso teremos como resultado o valor de undefined
*/

/*
function saudacao2(nome) {
    console.log(`Bom dia, ${nome}`);
}

const variavel2 = saudacao2(`Matheus`);
console.log(variavel2)

*/

/* Como retornar um determinado valor de uam variável

Para isso utilizamos a palavra "return" dentro do 
escopo da função e ao lado dela colocamos o que 
queremos retornar

vale ressaltar que que ao usar o return dentro de
função estamos dizendo ao JavaScript que a função
termina ali, ou seja, se tiver mais comando depois
do return, não serão executados

segue exemplo:
*/

/*
function saudacao(nome) {
    return `Bom dia, ${nome}`;//Ressalto que apaguei o console.log() pois realizamos a solicitação diretamente no return
}

const variavel = saudacao(`Matheus`);
console.log(variavel);

*/

function soma(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}

// console.log(soma(2, 2));
// console.log(soma(5, 2));
// console.log(soma(8, 3));


/* Não podemos editar nada que está dentro da função

Este sentido vale para o caso de terntarmos editar
algum comando da função, fora da função 

Exemplo:

function soma(num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}

resultado = 2; 

Isso não ocorre pois todos os comando que estão 
dentro da função estão "protegidos"
*/

/* Se tentarmos realizar um calculo sem estabeler os
valores do parâmetro, neste caso então, teremos como 
resultado o NaN, pois como estamos tentar realizar um 
calculo sem número, então o JavaScript indicara que 
Não a número -> NaN

Isso acontece mesmo que mandemos o valor incompleto,
ou seja em caso de dois parâmetros, ainda teremos como 
resultado NaN se não estabelecermos o valor dos dois 
parâmetros

Para evitar ste tipo de problema podemos estabelecer
um valor no caso de o usuáriuo não informar os dois 
números

exemplo:
*/

function soma(num1 = 1, num2 = 1) {
    const resultado = num1 + num2;
    return resultado;
}

const resultado = soma();
console.log(resultado);

//Novamente informando que, o que está dentro da função, nçao tem nada a ver com o que está fora

/* Criando uma função anônima

Para criar a função faremos o seguinte,

segue exemplo:
*/

/*
const raiz = function (n) {
    return n ** 0.5;
}; //ressaltando que neste caso é obrigatório ter o ponto e vírgula para que não haja erro

console.log(raiz(9))// a forma de executar é o mesmo indicaremos o nome da função, que neste caso tem o mesmo nome da variável.

*/

/* Criando uma arrow function 

No caso é da mesma forma que a function anônima, porém
não colocamos a palavra "function" utilizamos um sinal
se "=>" após os parênteses

segue exemplo:
*/

const raiz = n => n ** 0.5

console.log(raiz(9))// a forma de executar é o mesmo indicaremos o nome da função, que neste caso tem o mesmo nome da variável.

//Geralmente arrow function tem poucas linhas de código, com isso, podemos escrever como está acima
// ou podemos escrever como está abaixo

const raiz2 = (n) => {
    return n ** 0.5;
};

console.log(raiz2(9));


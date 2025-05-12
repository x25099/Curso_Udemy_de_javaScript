/* Objetos

em uma constante podemos alterar umm código dentro da 
constante como array, porém não podemos mudar o seu
tipo de código,

por exemplo:

const array = [1, 2, 3];
array[0] = `Matheus` -> Isso pode
array = `Qualquer coisa` -> Isto não pode
*/

/*
const array = [1, 2, 3];
array.push(4);
array[0] = `Matheus`
// array = `Qualquer coisa` -> Isto não pode

console.log(array);
*/

/* Veja o seguinte código:

const nome01 = `Matheus`;
const sobrenome01 = `Ribeiro`;
const idade01 = 25;

const nome02 = `Luiz`;
const sobrenome02 = `Otávio`;
const idade02 = 55;

Imagine que temos que armazenar mais de 1000 pessoas
e fazr isso de um por um, pode ser demorado,  então e se
acharmos um jeito de fazer isso sem ter que escrever
um por um

Veja:

*/

/*Criação de objeto 

Quando criamos um array utilizamos "[]", porém para 
criar objetos utilizamos as chaves "{}"

Para criar algum elemento dentro do objeto damos um nome
como se fosse uma variável e depois colocamos os : e ao
lado colocamos o valor do elemento, para separar os
elementos utilizamos a "," ao invés do ";"

segue exemplo:
*/

/*

const pessoa1 = {
    nome: `Matheus`,
    sobrenome:  `Ribeiro`,
    idade: 25
};

*/

/* Para executarmos e vermos o que tem dentro de um
elemento que está dentro do objeto, colocamos o nome
do objeto "." nome do elemento que tem o valor

Segue exemplo:
*/

/*

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

*/

/* Criando uma função para criar objetos */


//                  Parâmetro
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,// os ":" funciona como o "=" Para atribuição
        sobrenome: sobrenome,
        idade: idade
        /* 
        Ou podemos fazer
        nome,
        sobrenome,
        idade

        Isso funciona da mesma forma pois o JavaScript
        entende que queremos dizer que nome(dentro do 
        objeto) recebe nome(parâmetro). as mesma coisa 
        para os demais códigos
        */
    };
}

//                         Argumento
const pessoa1 = criaPessoa("Matheus", `Ribeiro`, 19);
const pessoa2 = criaPessoa("Luiz", `Otávio`, 25);
const pessoa3 = criaPessoa("Maria", `Cruz`, 55);
const pessoa4 = criaPessoa("Cristiano", `Ronaldo`, 32);
const pessoa5 = criaPessoa("Carlos", `Nascimento`, 62);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);


/* Objetos podem receber funções dentro delas 

Para criar uma função dentro do objeto, apenas declaramos
o nome da função abrimos os parênteses "()" e abrimos
as chaves "{}". Ou seja não temos a necessidade de colocar a
palavra function

Exemplo:

*/

/*
const humano1 = {
    nome: `Matheus`,
    sobrenome: `Ribeiro`,
    idade: 19,

    fala () {
        console.log(`Olá mundo!`);
    },
}

*/

/* Para executar uma função que está dentro de um
objeto


Faremos o seguinte: Primeiro digitamos o nome do objeto
"." e depois digitamos o nome da função e abrimos
parêntese para executar a função

Segue exemplo:
*/

/*
humano1.fala();
*/

/* Comando "this" que significa "este"

No caso de usarmos o this dentro de um objeto estamos
dizendo ao JavaScript "este objeto" alguma coisa

Segue exemplo:
*/

const humano1 = {
    nome: `Matheus`,
    sobrenome: `Ribeiro`,
    idade: 19,

    fala () {
        //console.log(`${this.nome} ${this.sobrenome} está dizendo oi...`);
        console.log(`Minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++; 

    },
}

humano1.fala();
humano1.incrementaIdade();
humano1.fala()

// String, number, undefined, null, boolean, symbol

const nome = 'Luiz';//String
const nome1 = "Luiz";//String
const nome2 = `Luiz`;//String

const num1 = 10; //Number
const num2 = 10.52 //Number

let nomeAluno; // Undefined = Não aponta para local nenhum na memória
let sobrenomeAluno = null; //Nulo = Não aponta para local nenhum na memória

/* Comandos Booleans */

const boolean = true; // true ou false
const aprovado =  true; //Boolean = true, false (lógico)

/* Para ver o tipo de uma variável*/

console.log(typeof (aprovado), aprovado); // para ver o valor, basta adicionar uma vírgula e adicionar o nome da variável
console.log(typeof (nome));
console.log(typeof (num1));
console.log(typeof (nomeAluno), nomeAluno);
console.log(typeof (sobrenomeAluno), sobrenomeAluno);

/* Quando trabalhamos com dados por referência 
é quando criamos uma variável e a mesma é passar por referência
com outra variável ou seja, o valor de uma variável faz uma 
cópia da outra variável*/

let a = 2;
let b = a;

console.log(a, b)

a = 3
console.log(a, b)


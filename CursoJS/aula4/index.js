//Não podemos criar constantes com palavras reservadas 
//Constantes precisam ter nomes significativos
//Não pode começar o nome de uma constante com um número
//Constantes não podem conter espaços ou traços
//Utilizamos camelCase
//São Case-sensitive -  Letras maiúsculas e minúsculas fazem a diferença
//Não podemos modificar o valor de uma constante
//Não utilize var, utilize const
//Não podemos apenas declarar a constante
//Dentro de uma constante pode ter outra constante



/* String quando estiver dentro de aspas "" e considerado numero quando não tem aspas

'5' - String
5 - Number
*/ 

/*
const nome = 'Matheus';
console.log(nome)
*/

const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero;
const resultadoDulicado = resultado * 2
console.log(resultado)
console.log(resultadoDulicado);


let resultadoTriplicado = resultado * 3; 

resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);

/*Utilizando o typeof()

Informa se o valor é uma String ou um Number
*/

console.log( typeof resultadoTriplicado)

 
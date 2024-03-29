/*Em javaScript temos um objeto chamado 

Math.  -> que signfica exatamente Matemática.

*/

/* Para arredondar um número decimal para inteiro(para baixo).

utilizamos -> Math.floor(elemento); -> Desta forma arredondamos o número decimal para
inteiro (para baixo)

// let num1 = 9.2135321
// let num2 = Math.floor(num1);

// console.log(num2);

*/

/*Para arredondar um número decimal para inteiro(para cima)

Utlizamos -> Math.ceil -> desta forma arredondamos um número decimal para
inteiro(para cima)


// let num1 = 9.2351351;
// let num2 = Math.ceil(num1);

// console.log(num2);

*/

/*Para arredondar o número decimal para um número inteiro(Mais próximo)

Utilizamos -> Math.round(elemento) -> Desta forma ele vai converter o número decimal para 
inteiro (mais próximo)

// let num1 = 9.2351351;
// let num2 = Math.round(num1);

// console.log(num2);

*/ 

/*Para descobrir o maior número em uma sequência

Utilizamos -> Math.max(1,2,3,4,5,6, -250, -800, 1500,9); -> o Comando irá encontra o maior número
infomado

// let num2 = Math.max(1,2,3,4,5,6,-250,-8000,1500,9);

// console.log(num2);

*/ 

/*Para descobrir menor número em uma sequência

utilizamos -> Math.min(1,2,3,4,5,6,-250,-8000, 1500,9); -> O comando vai identificar o menor
número informado.

// let num2 = Math.min(1,2,3,4,5,6,-250,-8000,1500,9);

// console.log(num2);

*/ 

/*Para gerar números aleatórios entre 0 e 1

Utilizamos -> Math.random() -. O camando vai informar um número aleatório entre 0 e 1

let num2 = Math.random();

console.log(num2);

----------------------- Para gerar um número aleatório entre dois números especificos --------------

// let aleatorio = Math.random() * (10 - 5) + 5; -> Neste caso vai gerar número aleatorios 
entre 10 e 5.

// console.log(aleatorio);

----------------------- Para gerar números aleatórios entre números especificos e arredondados -------------


// let aleatorio = Math.round(Math.random() * (10 - 5) + 5); -> Neste caso vai gerar números
aleatórios entre 10 e 5, porém não vai gerar número com vírgula;

// console.log(aleatorio);

*/

/* Para descobrir o valor de Pi 

Utilizamos -> Math.PI -> 

// console.log(Math.PI);

*/ 

/*Para portenciação

Utilizamos -> Math.pow(número, número); -> O comando vai calcular o comando número elevado a 
outro número.

// console.log(Math.pow(2, 2));

----------------------- Outra forma --------------------------------------------------------

// console.log(2 ** 2);

*/ 

/*Para descobrir a raiz quadrada de um número 

Utilizamos -> número ** (1/2); -> Matemáticamente falando sem a necessidade de objetos

console.log(9 ** (1/2));

*/ 

/*OBSERVAÇÃO IMPORTANTE:

Em javaScript, número dividos por 0 da um retorno chamado "Infinity", enquanto em outras
linguagens de programação geraria um erro. 
*/ 


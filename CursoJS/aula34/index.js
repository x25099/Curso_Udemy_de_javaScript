/* Atribuição via desestruturação (Arrays) */
/*
let a = `A`;
let b = `B`;
let c = `C`;

const  numeros = [b, c, a];
[a, b, c] = numeros// valores modificados

console.log(a, b, c);
*/

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Criando variáveis com array

Para criar, primeiro colocaremos se o mesmo será let
ou const após isso abriremos os colchetes [] e entre
eles colocaremos o nome das variáveis para o número
indexado na posição, ou seja

se eu colocar:
const numero = [1, 2, 3]

const [primeiroNumero] = numero

Neste caso estamos salvando na variável "primeiroNumero"
o valor "1" cujo está indexado na posição "0" do array

veja exemplo:
*/

/*
const [primeiroNumero, segundoNumero, ...resto] = numero;
const [um, , tres, , cinco, , sete] = numero;

console.log(primeiroNumero, segundoNumero);
console.log(um, tres, cinco, sete)
console.log(resto);
*/

/* Para criar uma variável que pga o resto dos valores
de uma array

Para isso colocaremos três pontos finais e depois o
nome da variável que armazenará o resto do array:

const [primeiroNumero, segundoNumero, ...resto] = numero;

"... rest" no sentido de utilizarmos isso para pegar o
resto, também é chamado de rest operator

"... spread" uanto utilizamos o mesmo para espalhar 
alguma coisa, ele é chamado de spread operator
*/

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numero2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9],]

/* Para pegar um valor que está dentro de um array
que está dentro de outro array, veja o exemplo de
valores de index acima, pode ver que dentro do 
primeiro array vai de 0 a 2 e dentro do outro
array também temos em cada um deles o index de 0 a 2

para abrirmos colocaremos o nome da variável que 
armazena os arrays, que no caso é:

numero2

depois colocarmos os colchetes[]e colocamos o 
index do primeiro array ou o index do array em que
queremos pegar algum valor, de pois ao lado do primeiro 
colchetes colocaremos o segundo colchetes [][] e
dentro desse colocaremos o valor do index pelo qual
queremos pegar o valor

veja exemplo:
*/
console.log(numero2[1][2])

/* Outra forma de pegar valores de array dentro de 
arrays */

const [, [, , seis]] = numero2;
console.log(seis);

/* Terceira forma */

const [lista1, lista2, lista3] = numero2;
console.log(lista2[2]);


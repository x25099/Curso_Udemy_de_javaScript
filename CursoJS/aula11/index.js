/* Mais sobre Strings */

let umaString = `Um "texto"`;//Podemos colocar aspas duplas dentro de crase
let umaString2 = `Um \\texto`;//Para adionar uma barra invertida no texto utilizasse suas barras invertidas;

// Cada caractere tem um indice
/*               0123456789
let umaString = `Um "texto"`
*/

console.log(umaString, umaString2);

/* Pesquisar um indice em uma String

Utilizasse as chaves para inserir o indice

No caso de colocar um valor de indice maior do que
está dentro da String, será considerado "undefined",
mesma coisas para números negativos

Outro comando para pesquisar indices, é a função
.charAt(), e entre os parênteses colocar o número do 
indice
*/

console.log(umaString[0]);
console.log(umaString[10]);
console.log(umaString.charAt(7));

/* Função .concat()

Funcionar da mesma forma que o "+" para concatenar
Strings
*/

console.log(umaString.concat(` em um lindo dia`));
console.log(umaString + ` em um lindo dia`);
console.log(`${umaString} em um lindo dia`);

/* Para procurar o primeiro indice de uma string


Utilizamos a função .indexOf(`Aqui vai o que está escrito na String`)
para procurar o indice do primeiro para o ultimo indice.

No caso de não encontra aparecera o valor de -1
*/

console.log(umaString.indexOf(`texto`)); //Neste caso mostra o número quatro, pois a letra "t" se encontra no indice 4
console.log(umaString.indexOf(`o`, 3)); // Neste caso estamos procurando um indice com a letra "o", depois do indice 3

/* Função .lastIndexOf()

Da mesma forma que o .indexOf(), porém seu diferencial
é que ele procura o indice do ultimo indice, até o primeiro indice

*/

console.log(umaString.lastIndexOf(`m`, 3)); 

/* Para procurar todas as letras minusculas de uma String

Utilizamos a Função .match(/[a-z]/g);

Neste caso procurasse todas as letras minusculas da String

*/

console.log(umaString.match(/[a-z]/g));

/* Função .search()

utilizamos para encontra o indice de uma determina String
Exemplo:
*/

console.log(umaString.search(/[a-z]/)); 

// no caso acima o resultado será "1", pois estamos procurando o indice da primeira letra minuscula da String

console.log(umaString.search(/x/)); //Procurando o indice da letra "x"

/* Função .replace()

Utilizamos para substituir um texto por outro
*/ 

console.log(umaString.replace(`Um`, `Outro`));

//Neste caso estamos substituindo a palavra "Um" da variável umaString e colando a nova palavra que seria "Outro";

/* Para descobrir o tamanho de uma String

Utilizamos o atributo .length

No caso a contagem dele consta o indice "0" como "1"
ou seja em uma String com 10 caracteres, ele vai nos
dizer exatamente 10
*/

console.log(umaString.length)

/* Função .slice() 

Utilizada para "fatiar" uma String e nos retornar o valor
fatiado, Exemplo:
*/

console.log(umaString.slice(0, 2))// Neste caso até indice "2", pois se colocar até o indice "1", não aparecerá a letra "m"

// Podemos utilizar o valor negativo, mas aviso que no caso de um valor negativo, ele começará pelo fim da String

/* Para dividir uma String

Utilizamos a Função .split('Aqui entra o valor que deseja dividir')

*/

console.log(umaString.split(` `, 1)); // o valor "1" representa quantas vezes queremos que ele divida, neste caso "1" única vez

//Neste caso criamos um array que separa todos os conteúdos dentro da variável a partir do "espaço".

/* Função toUpperCase

Utilizamos quando queremos que todas as letras 
da String se tornem maiusculas
*/ 

console.log(umaString.toUpperCase())

//toLowerCase -> Para deixar todas as letras minúsculas

console.log(umaString.toLowerCase())
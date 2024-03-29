/* lastIndexOf -> Acha elemento a partir do ultimo elemento*/

let umaString = "Olá mundo";

console.log(umaString.lastIndexOf('m', 6));

// match() -> Para informar todas as letras minusculas;

let outraString = "Olá mundo";

console.log(outraString.match(/[a-z]/g));

// search() -> Informa o indice de uma letra;

let informações = "Olá mundo de todos os vivos e boa tarde";

console.log(informações.search(/m/));

// replace -> Pode ou não utilizar um operação regular -  pode alterar o elemento.

console.log(informações.replace("Olá", "Outros"));

//pode se utilizar a letra "g" para que possa altera vária letras ao mesmo tempo;

console.log(informações.replace(/o/g, "#"));

// length -> para descobrir o tamanho do elemento

console.log(informações.length);

//slice() -> fatia um elemento

console.log(informações.slice(0, 3));

// toUpperCase -> Para colocar todos os elemento em maiusculo

console.log(informações.toUpperCase());

// toLowerCase -> para colocar todos os elemento em minusculo;

console.log(informações.toLowerCase());


// String é um texto
/* Poderia ser utilizado a barra invertida*/
let umaString = 'um "Texto"';

console.log(umaString);

/* elementos sempre começam de 0

                 0123456789
let umaString = 'Um "Texto"';

console.log(umaString[6]);

outra forma de resolver o caso é:

let umaString = "Um texto";

console.log(umaString.CharAt(6));
*/

let outraString = 'Um "texto"';

console.log(outraString. charAt(6));

/*concat() -> faz exatamente o mesmo que o "+" para concatenar a

exemplo:

let umaString = 'Um texto';

console.log(umaString.concat(' Em', ' um', ' lindo', 'dia'));

OU

console.log(umaString + " Em um lindo dia");

OU TAMBÉM

console.log('${umaString} Em um lindo dia');

*/ 

/*INDEXOF -> Ajuda a saber o índice de um elemento*/

let string = "Um texto"

console.log(string.indexOf('texto'));

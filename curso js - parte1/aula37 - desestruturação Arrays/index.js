/*
let a = 'A';//B
let b  = 'B';//C
let c = 'C';//A
const letras = [b, c, a]; /*desestruturando e reatribuindo as várivais*/ 
/*
[a, b, c] = letras;

console.log(a, b, c);
*/ 
/*
//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto);
/*...rest, ...spread
...rest -> Pega o restante dos números.
*/ 

/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, , tres, , cinco, , sete, , nove  ] = numeros;
console.log(um, tres, cinco, sete, nove);
*/
//                                           0          1          2
// porém dentro das linha também tem indice
//                                        0  1  2    0  1  2    0  1  2
// A linha agora é o indice zero exemplo [1, 2, 3], [4, 5, 6], [7, 8, 9]
const numeros = [
    [1, 2, 3],   
    [4, 5, 6],
    [7, 8, 9]
];

console.log(numeros[1][2])

/*Para chamar o numero pelo indice primeiro deve-se se chamar o indice linha e depois chamar o indice número por exemplo: console.log(numeros[1][2]);
Neste caso estamos pegando a linha '1' e pegando o número '6' qu é o indice '2' dentro da linha.

*/

/*------------------- Com desetruturação ----------------------------*/ 

const numeros2 = [
    [1, 2, 3],   
    [4, 5, 6],
    [7, 8, 9]
];
const [lista1, lista2, lista3] = numeros2;
console.log(lista3[2]);

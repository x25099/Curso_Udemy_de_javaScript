/*--------------------- Outra forma de usar o for ----------------------*/ 

// const frutas = ['Pera', 'Maçã', 'Uva'];

/*
// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }
*/

/*--------------------- Comando in -------------------------

For in -> lê os índices ou chaves do objeto.

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

*/ 

/*--------------------------- Objetos ------------------------------ */

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30 
};

for (let i in pessoa) {
    console.log(i, pessoa[i]);
}
/* for in */

/*
const frutas = [`Pêra`, `Maçã`, `Uva`];
*/
/*
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}
*/

/* Para criar um for in

Faremos o seguinte declaramos o for e depois abrimos
os parênteses () e dentro dos mesmos colocamos o
seguinte (let i in variável); veja que o in aparece
e com ele podemos excluir a condição e o incremento de
valores

veja Exemplo:

for in -> Lê os índices ou chaves do objeto

*/

/*
for (let i in frutas){
    console.log(i)
}
*/

/* for in com objetos */

const pessoa = {
    nome: `Luiz`,
    sobrenome: `Otávio`,
    idade: 30,
}; 

/* Ao utilizalo e excuta-lo nós veremos que ele
vai te dar o nome dos atributos do objeto(não o valor)

veja exemplo:

Para ver o valor faremos pessoa[i] pois i vai receber
o nome do atributo e não o valor 
*/
for (let i in pessoa) {
    console.log(i)
}
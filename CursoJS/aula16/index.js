/* Arrays Básico 

De forma simples array é uma lista de itens

*/

const alunos = [`Luiz`, `Maria`, `João`];

console.log(alunos)

/* índice em arrays

os indices para os array são diferentes no seguinte
contexto:

               0       1        2
let alunos = [`Luiz`, `Maria`, `João`];

Cada iten do array tem um indice comaçando de "0";
*/

console.log(alunos[0]);

/* Para alterar algum elemento da lista

Primeiro obtemos o indice do iten que queremos 
alterar, neste caso o nome "Luiz", e depois alteramos
segue exemplo:
*/

alunos[0] = `Matheus`;

console.log(alunos)

/* Uma maneira de adicionar um novo elemento em um 
array

Primeiro colocaremos o nome da variável que queremos
junto com os colchetes

alunos[Aqui colocaremos um indice que ainda não existe]

segue exemplo:

Se o indice já existe, apenas alteramos o valor do mesmo
se o indice não existe, adionamos um novo elemento

*/

alunos[3] = `Eduardo`;

console.log(alunos)

/* Para descobrir o tamanho de um array

Utilizamos o atributo .length , vale ressaltar que 
este atributo considera o indice "0" como o número "1"
então no momento do código teremos como resultado
tamanho = 4

*/

console.log(alunos.length);

/* Forma mais prática de adionar nomes

utilizaremos o atributo .length para adionar novos
elementos, faremos o seguinte

alunos[alunos.length] = `Qualquer coisa`;

Mas por que? Isso se da porque utilizamos o valor
do tamanho do array como indice, e como o length
considera o "0" como "1" acaba que nesta etapa
do código não temos o indice 4 com isso será 
adionado mais um valor

Exemplo:
*/

alunos[alunos.length] = `Julia`;
alunos[alunos.length] = `Ronaldo`;
alunos[alunos.length] = `Carlos`;
alunos[alunos.length] = `Rosana`;
//Perceba que cada vez que chamamos esse código será adicionado um item no final do código
console.log(alunos)

const alunos2 = [`Maria`, `Eduardo`, `Carlos`];

/* Para adionar um elemento no final do array com uma função

Utilizamos a função .push(`Aqui colocaremos o que queremos adicionar`);

Segue exemplo:
*/

alunos2.push(`Joelma`); //Adiciona no fim

console.log(alunos2);

/* Para adicionar um elemento no inicio 

Utilizamos a seguinte função .unshift("Valor aqui");

Vale ressaltar que quando utilizamos este comando
empurramos todos elementos do array para frente e adionamos
o novo elemento, com isso esse novo elemento terá o indice
"0", o que estava no "0" será "1" e por aí vai.

Segue exemplo:
*/

alunos2.unshift(`Luiza`); //Adiciona no começo
alunos2.unshift(`Fábio`);

console.log(alunos2)

/* Para remover elemento do fim

Utilizamos a função .pop() onde o mesmo será como a 
palavra já diz, realizará um pequeno estouro, kkk,
e com isso removerá o ultimo elemento da lista

além disso podemos salvar o elemento removido


Segue exemplo: Vale ressaltar que no exemplo atual
o ultimo elemento se chama "Joelma"
*/

const removido = alunos2.pop();

console.log(alunos2);
console.log(removido);

/* Para remover o primeiro elemento

Utilizamos a função .shift(), realizará a remoção do
primeiro elemento da lista

Assim como o .pop(), ela também pode ser salva em
uma variável

Segue exemplo: Neste exemplo o primeiro valor é o "Fábio"
*/

const removido2 = alunos2.shift();

console.log(alunos2);
console.log(removido2);

/* Outra forma de remover elementos 

Utilizamos o comando "delete" -> palavra dificil de decorar
né, kkkkk, porém ao utilizar o comando, o valor será
removido e o espaço ficará em branco, ou seja, vazio
*/

delete alunos2[1];

console.log(alunos2);

/* No caso de tentar realizar a procura de um indice que
não existe teremos como padrão o valor "undefined" ou seja
indefinido */

console.log(alunos2[50]);

alunos2[1] = `Matheus`;

console.log(alunos2);

/* Para fatiar um elemento

Utilizamos a função .slice(primeiro indice, até segundo indice)

Segue exemplo:
*/

console.log(alunos2.slice(0, 2));

/* Vale ressaltar que se queremos que o valor seja
fatiado até o indice 3, neste caso colocamos até o
indice 4, pois se coocarmos o indice 3, o valor do
indice 3 não aparecerá

Segue exemplo:
 */

console.log(alunos2.slice(0, 3));

/* array é consideramos como objeto indexado 

então no caso de utilizarmos o typeof teremos como resultado
object, porque o array é um objeto indexado, no caso
de querermos saber se o array é realmente um array

utilizamos o comando instanceof

Segue exemplo:
*/

console.log(typeof(alunos2));
console.log(alunos2 instanceof Array)// Se o resultado for true então é um array, se false, então não é.

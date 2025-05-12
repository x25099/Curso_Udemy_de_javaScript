/* for(clássico) */

/*
console.log(`Linha 1`);
console.log(`Linha 2`);
console.log(`Linha 3`);
console.log(`Linha 4`);
console.log(`Linha 5`);
*/

/* Para criar um for faremos o seguinte:

Primeiro declaramos o nome dele que é "for" e depois 
abriremos parênteses () e fechamados, depois dos 
parênteses colocamos as chaves {}

Dentro dos parêntese a primeira coisa que iremos
fazer é declarar uma variável let i = 0; onde i
significa -> index e o "0" significa o inico(reforço
que o valor quanto ao "0" pode ser qualquer outro
número, mas se atente ao fato de que o número
que declaramos para a variável é o valor inicial) e 
primeiro numero dentro dos mesmos parêntes
escreveremos a condição, porém antes da condição
lá onde colocamos o nome da variável, para separar
os dois elementos, colocamos o ; e daí sim colocamos
a condição, e depois colocamos o comando que incremento

Ressalto que o comando "for" tratasse de um loop
ou seja, o JavaScript irá executar o código várias
vezes, até que a condição que colocamos conste como
false.

O incremento e a condição que são codificações são muito
importantes, levando em consideração que como o for
é um loop e o i consta = 0, se nã incrementarmos o 
i++, o loop será infinito levando em consideração que 
a condição nunca será considera como false, pois o i
sempre terá o mesmo valor. Então é obrigatório

Podemos incrementar de 10 em 10 também, entçao ao invés
de colocarmos i++ dizendo para incrementar de 1 em 1
colocamos i += 10, desta forma será incrementado de
10 em 10;

Podemos também fazer do número masi alto para o mais 
baixo, para isso colocaremos o valor inicial como 
um número alto como mil e depois na condição colocamos
a condição que seria tipo se "i" >= 500 e depois da
condição colocamos o "DECREMENTO" não coloque o incremento
porque se não, também vai ser um loop infinito, então
o decremento pode ser i-- para 1 em 1 ou i -= 10 para
10 em 10

for (let i = 100; i >= 500; i -= 10) {
    console.log(`Linha ${i}`);
};

Segue exemplo:
*/

const frutas = [`Maçã`, `Pêra`, `Uva`];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}`, frutas[i]);
};


/* Para checar o resto de um divisão colocamos a "%"
tamém conhecida como módulo, então na prática ficaria
assim

const par = 10 % 2 === 0;

cehcando para ver se o resto da divisão 10 / 2 é igual a
0 o resultado será true ou false

exemplo: 

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? `par` : `ímpar`;
    console.log(i, par);
};
*/

/* Para descobri o tamanho de um array

Para isso faremos a nome da variável com o array 
junto ao atributo .length ressalto que ao pegar a 
quantidade de elementos que tem dentro do array, o
.length não começa de "0" então ele dará o valor 
exato de quantos elemento tem dentro do array

exemplo abaixo:
*/

/*
const frutas = [`Maçã`, `Pêra`, `Uva`];

console.log(frutas.length);
*/
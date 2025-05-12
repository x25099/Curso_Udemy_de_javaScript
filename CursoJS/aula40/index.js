/* for of */

const nome = `Luiz Otávio`;
const nome2 = [`Luiz`, `Otávio`, `Henrique`];

/*
for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
};
*/

/*
for (let i in nome) {
    console.log(nome[i]);
};
*/

/* for of

Ao utilizar o for of, enquanto o for in pega o indice.
For of pega o valor direto, ou seja ele vai ler
os indice e vai informar o valor diretamente

entãop ao utilizar o for in, a variável que criamos
dentro do for armazenará o indice

ao utilizar o for of, a variável em que criamos 
armazenará o valor do indice ao invés do "índice"

Veja exmeplo:
*/

/* for of */
/*
for (let valor of nome2) {
    console.log(valor);
}

console.log(`######`)
*/
/*for in */
/*
for(let i in nome2){
    console.log(nome2[i]);
};

console.log(`#######`)
*/
/* for clássico */
/*
for(let i = 0; i < nome2.length; i++){
    console.log(nome2[i]);
};

console.log(`#####`);
*/

/* Usando o forEach com arrays 

Para cria-la colocamos o nome da variável que tem
o array e colocamo .forEach() desta forma, depois dentro 
dos parêntese colocamos uma função, dentro dos
parênteses da função colocamos a parâmetro que 
recebe o valor dos elementos e colocamos o nome da
parâmetro(se quiser) para receber o indice, e tabém podemos
colocamos mais um nome de parâmetro(se quiser) para
receber o array inteiro.

Segue Exemplo:

Vai ser estudada melho mais para frente
*/
/*
nome2.forEach(function(el, indice, array) {
    console.log(el, indice, array);
})
*/

/* for com objeto 

Ao utilizar o for in a variável i recebe a chave do 
objeto e não o valor

No caso do for of ocasionará um erro, pois o
objeto {} não é interável

veja exemplo:
*/

const pessoa = {
    nome: `Luiz`,
    sobrenome: `Otávio`
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};

/*
for clássico - Geralmente com iteráveis (array ou string)
for in - retorna o índice ou chave(string, array ou objetos)
for of - retorna o valor em si(iteráveis, arrays, strings)
*/
//const nomes = ['Luiz', 'Otávio', 'Henrique'];

/*
for (let i = 0; i < nomes.length; i ++) {
    console.log(nomes[i]);
}
*/
/* ----------------------- com in -----------------------------
for (let i in nomes) {
    console.log(nomes[i]);
}
*/

/*
for (let valor of nomes) {
    console.log(valor);
}

nomes.forEach(function (valor, índice, array) {
    console.log(valor, índice, array);
})
*/

/*------------------------ Informações importantes -------------------------------

Para arrays -> Qualquer quer um dos meios podem ser utilizados sendo For in, of ou o forEach() até mesmo o tradicional.
Patra objetos -> Não dá para utilizar o for of, pois os objetos não são iteráveis. Mas podemos utitilizar o in, forEach() e o tradicional.
for clássico - geralmente com iteráveis, por exemplo (arrays ou strings)
for in - Retorna índice ou chave exemplo (strings, array ou objetos)
for of - Retorna o valor em si exemplo (iteráveis, arrays ou strings)
*/ 

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

/*
for (let valor of pessoa) {
}
*/
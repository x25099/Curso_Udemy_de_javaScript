/* Consideramos a parte do navegador, onde mexemos e 
clicamos por todas as partes como "eventos" */

/* Para evitar na hora da programação da gente criar
uma variável que já existe e aparecer um erro, colocamos
isso dentro de uma function, ou seja, como já disse
as chaves da function functionam como uma proteção
ou seja, tudo está dentro de uma função, não tem
nada a ver com o que está fora de uma função

Outra coisa pelo qual ressalto é que, o que está fora
de uma função é considerado que está no escopo global
*/

/*
function meuEscopo() {
    const nome5 = `Matheus`;
    console.log(nome5);
};

const nome5 = `Luiz` 
*/

/* No caso a acima não realizamos nenhuma alteração
pois como eu disse, tudo o que está dentro de uma 
function, não tem nada a ver com o que está fora
de uma function */

/* Fazendo com que o button pare de recarregar a página
ao ser clicado*/

/* Como pegar classe ou ID da mesma forma que o CSS

Para isso utilizamos a função .querySelector(".aqui 
escrevemos o nome da classe ou ID") 

No caso de classe colocamos o "." antes de colocar o 
nome da classe, no caso de ID colocamos o "#" antes
de colocamos o nome da ID. E no caso do querySelector()
dentro dos parêntese colocamos as aspas, seja ela o
tipo que for e colocamos o nome da classe ou ID dentro
dela. Vale ressaltar que dentros dos parênteses podemos
colocar o nome da tag, ou seja sem "." ou "#" apenas o
nome da tag
*/

/* Para detectar o evento de clique

Colocamos o nome da variável que está armazenado a tag
colocamos um "." e em seguida, como o evento do botão
é um submit então escrevemos o atributo "onsubmit"
*/

/* Prevenir um evento 

Utilizamos a função .preventDefault() com isso 
previnimos qualquer ação que o navegador faça ao
executarmos algum evento
*/

/* Para detectar um evento

Esta é uma forma mais moderna, utilizamos a função
.addEventListener(`Tipo de evento`, função que deve ser executada) -> como as palavras 
já dizem, adicionar um escutador de evento. Como
usamos a função addEventListener() Não há a necessidade de
colocarmos a palavra "on", como: onsubmit.
*/

/* Obter o valor de um input

Para obtermos o valor de um input após já ter armazenado
a tag em uma variável, faremos o seguinte, imaginamos
que armazenamos a tag form em uma variável chamada form
e que este form tem variás outras tags input com classes
e cada classe tem seu nome, e neste exemplo usaremos
uma classe "nome", faremos o seguinte:

const nome = form.querySelector(`.nome`);
console.log(nome.value)

como podem ver, para descobrirmos o valor de um input
utilizamos o atributo .value que funciona em outras 
situações, mas neste exemplos usamos o .value
pois se executassemos apenas console.log(nome);
neste caso apareceria o nome da tag e seus atributos
mas não apareceria o seu valor.
*/

function meuEscopo() {
    const form = document.querySelector(`.form`);
    const resultado = document.querySelector(`.resultado`);

    const pessoas = [];

    //form.onsubmit = function (evento) {
    //    evento.preventDefault();// Neste caso estamos dando um sinal ao JavaScript para interromper o que o navegador faz por padrão ao clicarmos no botão
    //    //agora toda vez que clicarmos no botão será sexecutado o que estiver dentro desta função.
    //};

    //let contador = 1
    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector(`.nome`);
        const sobrenome = form.querySelector(`.sobrenome`);
        const peso = form.querySelector(`.peso`);
        const altura = form.querySelector(`.altura`);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        })

        console.log(pessoas);

        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} tem ${peso.value} kg e ${altura.value} de altura</p>`
    //    evento.preventDefault();
    //    console.log(`Form não foi enviado ${contador}`);
    //    contador++
    }
    form.addEventListener(`submit`, recebeEventoForm)
}

meuEscopo();
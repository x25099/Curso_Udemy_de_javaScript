/* Função alert()

Cria uma alerta no navegador do site com a ação dentro do
parênteses
*/ 

//alert(`Com a nossa mensagem`)


/* Função confirm()

Crie um alerta para o usuário com dois botões de opção

além disso esta função funciona como comando boolean
ou seja, se alguém clicar em 'ok' será true e se for 
no 'cancelar' o resultado será false
*/ 

//confirm('Tem certeza que deseja apagar isso?')

/* Função prompt()

Cria um alerta no navegado do usuário para digitação
ou seja, ao criar um prompt um alerta será criado
e junto à ele terá uma barra para a digitação por parte
do usuário
*/ 

//prompt('Qual é o seu nome?')


/*utilizando comando para variáveis*/

const confirma = confirm(`Realmente deseja apagar?`)
let num1 = prompt(`Digite um número`);// Neste caso é importante que no caso de alguma conta, seja realizado a conversão
let num2 = prompt(`Digite outro número`);// Pois o número salvo nesta variável é uma string

num1 = Number(num1);
num2 = Number(num2)

const resultado = num1 + num2;

alert(`O resultado da operação foi: ${resultado}`);

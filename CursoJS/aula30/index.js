/*Objeto Date

A função Date() é uma função construtora, que por sua
vez para executarmos a mesma, devemos utilizar junto
com ela a palavra new

Ao utilizarmos a função e não colocarmos nada entre 
"()" Então é pego a data atual e o horário em que é
executado o código;


Exemplo:
*/

const data = new Date();

/* Utilizanso a função toString()

ao utilizarmos a função toString() para o Objeto Date()
nesse caso nos será apresentado a formatação 
no estilo americano

Segue Exemplo de código e veja no console:
*/

console.log(data.toString());

/* Ressalto que o Objeto Date tem como padrão no milisegundo "0" o 
Unix e é consideramos como a primeira data 01/01/1970
que é considerado o marco "0", porém ao colocar

Date(0) -> será apresentado 31/12/1969 ás 21:00

Vale ressaltar que o "0" referesse a milésimos de 
segundos
*/

const tresHoras = 60 * 60 * 3 * 1000; // Neste caso realizamos o calculo para transformar 60 segundos em horas que no caso seria 60 * 60 e multiplicamos por 3 para o calculo de 3 horas, porém em Java são milisegundos então * 1000
const umDia = 60 * 60 * 24 * 1000;
const data2 = new Date(0 + tresHoras + umDia);

console.log(data2.toString());

/* Pedindo data especifica

Para isso faremos o seguinte em números e sem "0" a esquerda
Date(ano, mês, dia, hora, minutos, segundos, e se quiser milésimos de segundos );

Ressalto que ao colocar em milisegundos o máximo é
999 segundos, pois se colocarmos 1000 em milisegundos
será somado 1 segundo. Assim como os segundos, ao colocar
60 em segundos, será somado 1 minuto. Assim como os
minutos, horas, dias e meses.

Ao omitir algum valor, será considerado como 0, então ao 
omitir os segundos, será considerado 0 segundos. Assim
como, minutos, horas.

Segue exemplo:
*/

const data3 = new Date(2019, 3, 20, 15, 4, 27, 1000);

console.log(data3.toString());

/* dataString

Para utilizar fazeremos o seguinte, colocamos a data
entre os parênteses.

new Date(`ano-mês-dia hora:minuto:segundo`)

Ressalto que ao utilizar as strings, podemos utilizar
o "0" a esquerda e podemos utilizar os ":" assim como o
"-"

segue exemplo:
*/

const data4 = new Date(`2019-04-20 20:20:59.500`);

console.log(data4.toString());

/* Para pegar o número do ano, mês, dia ou hora especifico de uma Data

Para pegarmos o dia utilizamos a seguinte função

data.getDate();

Para o Mês Utilizamos a seguinte função

data.getMonth() + 1

No caso dos mes colocamos o + 1, pois o JavaScript
conta com o número "0" então somamos mais 1 para obtermos
o mês correto.

Para o ano

data.getFullYear();

Para Horas escrevemos no plural com o "s" no final

data.getHours()

Para Minutos no plural também

data.getMinutes();

Para Segundos

data.getSeconds

Para milisegundos

data.getMilliseconds();

Para o obtermos o dia da Semana, utilizamos a palavra
semelhante ao "Date" que neste caso seria "Day" segue
exemplo:

data.getDay();

Vale ressaltar que o dia da semana é dado como números,
parecido com o do mês, então é importante levarmos isso 
em consideração para não confundir o resultado.

Segue Exemplo utilizando a data da variável "data4".
*/

console.log(`Ano:`, data4.getFullYear());
console.log(`Mês:`, data4.getMonth() + 1); // Começa do zero
console.log(`Dia:`, data4.getDate());
console.log(`Hora:`, data4.getHours());
console.log(`Minuto:`, data4.getMinutes());
console.log(`Segundo:`, data4.getSeconds());
console.log(`Milisegundo:`, data4.getMilliseconds());
console.log(`Dia da Semana:`, data4.getDay()); // 0 = Domingo e 6 = Sábado

/* Para Obtermos os milésimos de segundos 

utilizaremos a função .now()

Segue exemplo:

Vale ressaltar que ele conta os milisegundos
a partir do marco zero, até hoje
*/

console.log(Date.now());

/* Criando uma função que formata data */
function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    //console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundos = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundos}`;
}

const data5 = new Date();
const dataBrasil = formataData(data5);
console.log(dataBrasil);

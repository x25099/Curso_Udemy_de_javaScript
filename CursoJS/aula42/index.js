/* While e do while */

/*Criando um While

Podemos ver que enquanto no for a variável i
é criada dentro dos parêntese, no while é criado fora
depois escrevemos o "while"("enquanto" em português)
abrimos os parênteses e colocamos dentro dos 
parênteses a condição, ressalto qu não incrementamos
dentro dos parênteses mas dentro das chaves que
é onde colocaremos o que vai ser executado

Não devemos esquecer de colocar o incremento, pois senão
o comando será infinito, pois a condição sempre será
verdadeira.

Veja exemplo:
*/
/*

const nome = `Luiz`;
let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}
*/

/* Situação real em que utilizamos o while 

Utilizamos em situações quanod não sabemos
exatamente quando a codição vai parar, então neste caso
utiliza-se um while
*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = 10;

/*
while(rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
*/

/* Do while ("Faça enquanto" em português)

No caso do Do while, será executado o código0 primeiro
e depois será será realizado a checagem

veja um exemplo de como é utilizado:

POdemos ver que quando colocamos o while em do while
não é utilizado as chaves {} no while
*/

do{
    rand = random(min, max);
    console.log(rand);
}while (rand !== 10);








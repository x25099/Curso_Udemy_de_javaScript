/* if,else if, else - Com números

Os comando para if e else só seram executados se
estiverem dentro das chaves, do contrário não será
executado para o if else, mas sim por conta própria
sem condição
*/

const numero = 10;

if(numero >= 0 && numero <= 5){
    console.log(`O número está entre 0 e 5.`);
}else if(numero >= 6 && numero <= 8){
    console.log(`O número está entre 6 e 8.`)
}else if(numero >= 9 && numero <= 11) {
    console.log(`O número está entre 9 e 11.`)
} else{
    console.log(`O número NÃO está entre 0 e 11.`);
}

/*Como Funciona

if -> Se (numero >= 0 && numero <= 5) ocorrer, faça isso {código}

else -> Se não, faça isso {código}

else if -> Se não, se (condição) ocorrer, faça isso {código}

Vale ressalta que o JavaScript vai ler apenas 
a condição que estiver certa e vai tirar o código do
bloco e com iso não executará mais nada, então se 
tivermos duas condições verdadeiras, o JavaScript
executará apenas a primeira condição que for verdadeira
e depois não executará mais nada neste mesmo bloco.
*/
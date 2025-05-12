/* Breake e continue

FUnciona em todos: While, Do while, switch, etc...
*/

/* Tem um comando em JavaScript onde podemos dizer ao
JavasScript se queremos que ele para de executar algum
comando apartir de outro comando para baixo e tem 
para continuar de outro comando

no caso utilizamos o "break" e "continue"

veja exemplo:
*/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9 ]

/*
for(let numero of numeros) {

    if(numero === 2) {
        console.log(`Pulei o 2`)
        continue;
    }

    if(numero === 7) {
        console.log(`Número 7 encontrado: saindo...`)
        break;
    }
    console.log(numero)
}
*/

/* Ao ser encontrado a apalavra continue, o JavaScript
vai continuar(ou pular) todas codificação a partir da palavra continue
para baixo, no caso do for, ele vai pular a iteração
e seguir para a próxima*/

/* No caso do break, o mesmo vai parar toda
a codificação e no caso do "for", quando for localizado
a palavra break, a iteração vai parar ali e não fará 
mais nada.
*/

/* Usando no while e do while */

let i = 0;

while(i < numeros.length){
    let numero = numeros[i];

    if(numero === 2) {
        console.log(`Pulei o 2`)
        i++;
        continue;
    }

    if(numero === 7) {
        console.log(`Número 7 encontrado: saindo...`)
        i++;
        break;
    }
    console.log(numero);

    i++;
}

/* resumo

continue -> continua para a próxima iteração.
break -> saí do laço.
*/
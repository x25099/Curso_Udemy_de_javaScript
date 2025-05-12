/* Switvh/Case */

/*
const data = new Date(`1987-04-25 00:00:00`);
const diaSemana = data.getDay();
let diaSemanaTexto;
*/

/* Caso em que utilizamos o Switch/Case

Exemplo:
*/
/*
if(diaSemana === 0) {
    diaSemanaTexto = `Domingo`;
} else if(diaSemana === 1){
    diaSemanaTexto = `Segunda`;
}else if(diaSemana === 2){
    diaSemanaTexto = `Terça`;
}else if(diaSemana === 3){
    diaSemanaTexto = `Quarta`;
}else if(diaSemana === 4){
    diaSemanaTexto = `Quinta`;
}else if(diaSemana === 5){
    diaSemanaTexto = `Sexta`;
}else if(diaSemana === 6){
    diaSemanaTexto = `Sabádo`;
}else{
    diaSemanaTexto = ` `;
}
*/
/* Criando um Switch e Case

Para criarmos o "switch" digitamos o nome dela
switch(){} entre os parêntese colocaremos o que
queremos que o comando verifique, neste caso, vai ser
a variável diaSemana e entre as chave colocaremos 
o case e ao lado dele o que queremos que ele 
verifique veja exemplo a seguir, mas antes , devo
informar que após colocar o caso é colocar os ":"
e depois colocamos o que queremos fazer caso o "caso"
seja o certo, após isso é colocado o elemento break;
para dizer ao java que caso ele encontre o valor certo
ele pode parar ali mesmo

Segue exemplo:

Ressalto que quanto ao switch temos também algo 
parecido com o else no final, as ao invés de utilizarmos
a palavra else, utilizamos a palavra "default"

Veja exemplo:
*/

/*
switch(diaSemana) {
case 0:
    diaSemanaTexto = `Domingo`;
    break;
case 1:
    diaSemanaTexto = `Segunda`;
    break;
case 2:
    diaSemanaTexto = `Terça`;
    break;
case 3:
    diaSemanaTexto = `Quarta`;
    break;
case 4:
    diaSemanaTexto = `Quinta`;
    break;
case 5:
    diaSemanaTexto = `Sexta`;
    break;
case 6:
    diaSemanaTexto = `Sábado`;
    break;
default:
    diaSemanaTexto = `Número inválido`;
    break;
}
*/

/* Colocando dentro de uma função 
Por estar dentro de uma função podemos simplesmente
substituir a palavra "break" por "return", pois a função
ira parar alí e não dará continuidade, mas manterei
a codificação com o return lá no final e após o Switch
*/

function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto2;
    switch(diaSemana) {
        case 0:
            diaSemanaTexto2 = `Domingo`;
            break;
        case 1:
            diaSemanaTexto2 = `Segunda`;
            break;
        case 2:
            diaSemanaTexto2 = `Terça`;
            break;
        case 3:
            diaSemanaTexto2 = `Quarta`;
            break;
        case 4:
            diaSemanaTexto2 = `Quinta`;
            break;
        case 5:
            diaSemanaTexto2 = `Sexta`;
            break;
        case 6:
            diaSemanaTexto2 = `Sábado`;
            break;
        default:
            diaSemanaTexto2 = `Número inválido`;
            break;
        }
        return diaSemanaTexto2;
}

const data = new Date(`1987-04-25 00:00:00`);
const diaSemana = data.getDay();
const diaSemanaTexto2 = getDiaSemanaTexto(diaSemana)

//console.log(diaSemana, diaSemanaTexto);
console.log(diaSemana, diaSemanaTexto2);
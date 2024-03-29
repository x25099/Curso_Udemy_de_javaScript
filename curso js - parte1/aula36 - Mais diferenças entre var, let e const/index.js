/*
let -> não permite redeclarar a váriavel
var -> permite redeclarar a váriavel

let -> Tem escopo de bloco {... bloco}

var -> var só tem escopo de função
*/
/*
const verdadeira = true;

let nome = "Luiz";//Criando uma variável
var nome2 = "Luiz";//criando

//var nome2 = "Otávio"; //Redeclarada pois em var já existe uma váriavel com o nome "nome2"
//console.log(nome2);

if (verdadeira) {
    var nome2 = "Mario";//redeclarado novamente
    let nome = "Otávio";//Criando uma variável
    //console.log(nome, nome2);
    //console.log(nome, nome2);

    if(verdadeira) {
        var nome2 = "Ronaldo";
        let nome = "Outra coisa";
        //console.log(nome, nome2);
    }
}

console.log(nome, nome2);
*/

/*------------------ Escopo de função -----------------------*/
/*a função não deixa ninguém mexer nos elemento internos da mesma, porém a mesma mexe nas coisa que estão fora. Resumindo: O está fora não mexe no que está dentro
e o que está dentro pode mexer no que está fora.
*/ 
/*
var sobrenome = `Miranda`;

function falaOi() {
    console.log(sobrenome);
}

falaOi();
*/

/*----------------- Roysting ------------------*/
//var sobrenome;
//const verdadeira = true;

let sobrenome = "Miranda";

console.log(sobrenome);
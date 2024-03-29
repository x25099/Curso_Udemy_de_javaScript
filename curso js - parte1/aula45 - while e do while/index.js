/*--------------------- while () {} --------------------------
Utilizado somente quando não sabemos o tamanho da váriavel ou outro

*/ 


/*------------------- Gerar um número aleatório -----------------------------------*/ 
/*
function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}
*/
/*-------------------------------  ////////////////// ----------------------------------*/ 
/*
const nome = 'Luiz';
let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}
*/

/*--------------------- do{} while() ------------------
Faz a mesma coisa que o while.
*/ 

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(min, max);

do {
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10);


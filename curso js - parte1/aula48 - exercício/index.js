// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura
// de uma imagem (number).
//Retorne true se a imagem estiver no modo 
//paisagem


function ePaisagem(largura, tamanho) {

    if (largura > tamanho) {
        return true;
    } else {
        return false;
    }
}

let paisagem = ePaisagem(16, 9);

console.log(paisagem);


/*-------------------- instrutor -------------------------*/
/*
function ePaisagem(largura, altura) {
    return largura > altura ? true : false;
}

console.log(ePaisagem())
*/

/*
function ePaisagem(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem())
*/
/*

const ePaisagem = (largura, altura) => largura > altura;

console.log(ePaisagem())*/ 

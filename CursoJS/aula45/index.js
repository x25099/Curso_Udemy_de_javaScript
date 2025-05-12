/* Esceva uma função chamada ePaisagem que
recebe dois argumentos: largura e altura de uma 
imagem(number). Retorne true se a imagem estiver no
modo paisagem.
*/

function ePaisagem(largura, altura) {
    return largura > altura;
}

const ePaisagem2 = (L, H) => {
    return L > H;
}

console.log(ePaisagem2(1920, 1080));
console.log(ePaisagem(1080, 1920));
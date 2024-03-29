/*
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];
*/

let p = document.querySelector('.p');
let div = document.querySelector('.div');
let footer = document.querySelector('.footer');
let section = document.querySelector('.section');

p.innerHTML = 'Frase 1';
div.innerHTML = 'Frase 2';
footer.innerHTML = 'Frase 3';
section.innerHTML = 'Frase 4';
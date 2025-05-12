const elementos = [
    {tag: `p`, texto: `Frase 1`},
    {tag: `div`, texto: `Frase 2`},
    {tag: `footer`, texto: `Frase 3`},
    {tag: `section`, texto: `Frase 4`},
];

const container = document.querySelector(`.container`);
const div = document.createElement(`div`);

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
//  tagCriada.innerText = texto;
    div.appendChild(tagCriada);
};

container.appendChild(div);

/* Lembrete .appendChild(tag) para criar novos elementos
dentro do DOM */

/* Outras formas de resolver a programação 

Na programação acima utilizamos o comando innerHTML,
porém ao invés de usar ste comando, devemos utilizar
o comando innerText, um por ser mais seguro e o outro
é porque utilizamos apenas textos, então fica mais
seguro utiliza-lo e melhor de certa forma.
*/

/*Outra coisa em que podemos fazer é utilizar o
node textos segue outra forma de fazer 

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
};

*/
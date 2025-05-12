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
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
};

container.appendChild(div);

/*DOM e a árvore do DOM 

window é também o topo da cadeia

quando abrimos um window.document é possível ver
elementos filhos que são elementos filhos de outro
elemento, então na programação

<html>
    <body></body>
</html>

Neste caso o body é filho do html e o html é filho
do document e document é pai de html e html é pai
de body

assim como um h1 tem o texto dentro dele, no caso do
nodeText o texto é filho do h1 e o h1 é pai do nodeText

*/
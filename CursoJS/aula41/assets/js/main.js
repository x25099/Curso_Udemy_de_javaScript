const paragrafos = document.querySelector(`.paragrafos`);

/*Para pegar várias tags ao mesmo tempo

Utilizamos o comando querySelector(), porém adicionamos
uma palavra a mais nesta codificação que seria 
querySelectorAll() e entre parêntese colocamos a tag
ou classe ou o ID para pega-lo

Ao utiliza-lo os mesmo serão armazenados em uma
NodeList, como o nome já diz -> uma lista, vale
ressaltar que o NodeList não é uma array, mas se
comporta muito similar ao array

segue exemplo:
*/

const ps = paragrafos.querySelectorAll(`p`);

/* Para pegar um estilos dentro do HTML

Para isso utilizaremos uma função chamada 
getComputedStyle() e entre os parêntese colocamos
o nome da tag que contenha algum estilo que queremos
pegar(Para o caso de não ter armazenado nenhuma tag
em alguma variável, podemos utilizar o document para
pegar a tag)

segue exemplo:
*/
const estilosBody = getComputedStyle(document.body);
/* Agora que já pegamos os estilos do body devemos
levar em consideração que o mesmo pega "todo" os
estilos, para o caso de queremos pegar um estilo
especifico, podemos criar mais uma variável e 
armazenar o backgroundColor

veja exemplo

Ressalto que usufruimos do getComputedStyle()

*/
const backgroundColorBody = estilosBody.backgroundColor

for (let p of ps) {
    /* Podemos modificar o estilos de alguma
    tag veja um exemplo utilizando o for, pois 
    usando o for, os estilos seram apliado de forma
    autonoma

    Pododemos ver que ao utilizar a palavra style
    devemos deixar claro para o JavaScript, o que 
    queremos alterar no estilo da tag que neste 
    caso é a cor de fundo (backgroundcolor) após
    deixar claro, devemos utilizar o simbolo do 
    igual de forma que possamos alterar a cor de
    fundo atual, pela nova. Ressalto também que
    no JavaScript não utilizamos os traços como
    no CSS, devemos escrever da seguite forma:
    */

    p.style.backgroundColor = backgroundColorBody;
    p.style.color = `#FFFFFF`;
};
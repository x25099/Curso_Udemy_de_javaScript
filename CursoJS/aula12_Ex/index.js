//const nome = prompt(`Digite o seu nome:`);

/* document

Referesse a tudo aquilo que vemos em um site. ou seja,
todo o <html></html>

E isso é o mesmo que window.document, apenas abreviamos
*/

/* document.body.innerHTML = `Texto aqui`

A função inner HTML serve como meio para alterar algum
texto do HTML, neste caso pedimos para mudar o texto
do body, mas poderia ser de outra parte do documento

Atenção ao utiliza-lo, devo informar que o mesmo
realizará a substituição por um novo, então...
Digamos que eu faça .innerHTML = "1", e depois digite
.innerHTML = "2", neste caso, o innerHTML passa a ter
o valor "2" ao invés de "1".

Para casos como esse digitamos o sinar de 

body.innerHTML += "1";
body.innerHTML += "2";

Com isso será realizado a concatenação do texto, ao 
invés da substituição.
*/


//document.body.innerHTML += `Escrever`;
//document.body.innerHTML += `Escrever`;

/* Para quebrar linha faremos o seguinte

Adionaremos </br> no final da frase, para que seja 
realizado a quebra de linhas 

Exemplo

*/

//document.body.innerHTML += `</br>Meu texto </br>`;
//document.body.innerHTML += `Outro texto`;

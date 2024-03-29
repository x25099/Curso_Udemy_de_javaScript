/*Como puxar elementos

Utilizamos -> document.querySelector(""); -> Entre os parenetese colocamos o nome da tag, class
ou Id, mas é importante informar que no momento de puxar uma class Deve se colocar um "." antes
de informar o nome class como: ".nome". A mesma coisa para ID, pois os mesmos deve ser chamado,
porém os ids são chamados com "#" antes do nome da ID como: "#nome".
*/

/*Como previnir um evento

Utilizamos a atribuição / função -> preventDefault() -> Este comando remove um evento que não
dese estar acontecendo.
*/ 

/*Escutador de Eventos

utilizamos a atribuição -> addEventListener() -> e entre os parentes colocamos o tipo de
evento que queremos que ele escute.
*/ 
function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')
    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` +
        ` ${peso.value}  ${altura.value}</p>`;
    };

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
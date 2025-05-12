/* setInterval e setTimeout */

function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString(`pt-BR`, {
        hour12: false
    })
}

console.log(mostraHora());

/* Para criar um intervalo de tempo utilizamos a
função setInterval() 

Dentro do spArênteses colocamos a função de referência
sem executa-la, ou seja, sem os parêteses, apenas com 
o nome dela depois colocamos uma vírgula e colocamos o
de quanto em quanto tempo quero que seja executado

Ressalto que o tempo está em milisegundos, então caso
queira 1 segundo, deve-se colocar 1000 milisegundos
*/

function funcaoDoInterval(){
    console.log(mostraHora());
}

const timer = setInterval(funcaoDoInterval, 1000);

/* outra forma

setInterval(function() {
    console.log(mostraHora());
}, 1000)

ou poderiamos colocar em uma variável
*/

/* função setTimeout()

    Ela executa apenas um vez o comando dependo da
    unatidade de tempo em que colocamos para executar

*/

/* função clearInterval()

    Como a palavra já diz a função clearInterval()
    tem como objetivo limpar o setInterval()
*/

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log(`Olá mundo`);
}, 5000);
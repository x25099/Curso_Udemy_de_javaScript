/* Data poder receber segundos
new Date(0); -> 1, 2, 3, 4, 5, 6, 7, 8, 9
*/

/*Não esquecer que o JavaScript recebe em milésimos
de segundos, ou seja, devemos multiplicar por 1000
se queisermos o valor em segundos */

/* Colocar timeZone em GMT para que o valor seja
zerado como padrâo*/

function relogio() {
function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString(`pt-BR`, {
   hour12: false,
   timeZone: `GMT`,
  });
};


const relogio = document.querySelector(`.relogio`);
let segundos = 0;
let timer;

function iniciaRelogio() {
   timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 1000);
}


/*
iniciar.addEventListener(`click`, function(event) {
  relogio.classList.remove(`pausado`);
  clearInterval(timer);
  iniciaRelogio();
});

pausar.addEventListener(`click`, function(event) {
  clearInterval(timer);
  relogio.classList.add(`pausado`);
});

zerar.addEventListener(`click`, function(event) {
  clearInterval(timer);
  relogio.innerHTML = `00:00:00`;
  segundos = 0;
});

*/

/* Outra forma mais rápida */


document.addEventListener(`click`, function(e) {
  const el = e.target;

  if(el.classList.contains(`zerar`)){
    clearInterval(timer);
    relogio.innerHTML = `00:00:00`;
    segundos = 0;
  };

  if(el.classList.contains(`iniciar`)){
    relogio.classList.remove(`pausado`);
    clearInterval(timer);
    iniciaRelogio();
  };

  if(el.classList.contains(`pausar`)){
    clearInterval(timer);
    relogio.classList.add(`pausado`);
  };
  
});

}

relogio();
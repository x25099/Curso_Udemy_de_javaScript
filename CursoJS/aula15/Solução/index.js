const numero = Number(prompt(`Digite um número:`));

/* Para pegar o ID de alguma tag

Utilizamos o metodo .getElementById(`Nome da ID`)
*/

const numeroTitulo = document.getElementById(`numero-titulo`);
const texto = document.getElementById(`texto`);

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> A raiz quadrada do seu número é: ${numero ** (1/2)}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro? R: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p> É NaN? R: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> Arredondamento para baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arredondamento para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Seu número com duas casas decimais é: ${numero.toFixed(2)}</p>`;

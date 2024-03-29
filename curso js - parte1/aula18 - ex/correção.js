const numero = Number(prompt("Digite o seu número"));
const texto = document.getElementById("texto");
const numeroTitulo = document.getElementById("numero-titulo");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p> A raiz quadrada do seu número é: ${numero ** 0.5}. </p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p>Arredondando para cima ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}. </p>`
/*Para puxar um elemento pelo ID

Utilizamos -> document.getElementById(nome da ID); -> Desta forma conseguimos chamar
o elemento pelo Id e assim, modificar o DOM.

// const numeroTitulo = document.getElementById();

*/

/*Para mudar uma um texto de uma tag

utilizamos elemento.innerHTML -> porém podemos deixa mais dinâmico utilizando o elemento numero 
criado
*/ 
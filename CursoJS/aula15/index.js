let num1 = Number(prompt(`Informe seu número:`));
let raiz = num1 ** (1/2);

document.body.innerHTML = `<strong>Seu número é ${num1}</strong>`;
document.body.innerHTML += `</br> A raiz quadrada do seu número é: ${raiz}`;
document.body.innerHTML += `</br> ${num1} é um número inteiro? R: ${Number.isInteger(num1)}`;
document.body.innerHTML += `</br> É NaN? R: ${Number.isNaN(num1)}`;
document.body.innerHTML += `</br> Arredondamento para baixo: ${Math.floor(num1)}`;
document.body.innerHTML += `</br> Arredondamento para cima: ${Math.ceil(num1)}`;
document.body.innerHTML += `</br> Com duas casas decimais: ${num1.toFixed(2)}`;
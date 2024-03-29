let num = Number(prompt(`Informe o seu número sendo ele decimal ou inteiro. Para escolher decimal: Coloque ponto no lugar de vírgula`));
let numRaiz = num ** (1/2);
let numInteiro = Number.isInteger(num);
let numNaN = Number.isNaN(num);
let numBaixo = Math.floor(num);
let numCima = Math.ceil(num);
let numDecimal = num.toFixed(2);

document.write("O número escolhido é o ", num, "<br />");
document.write("A raiz quadrada do seu número é ", numRaiz, "<br />");
document.write("É inteiro? R: ", numInteiro, "<br />");
document.write("É NaN? R: ", numNaN, "<br />");
document.write("Se seu número for decimal, arredondando o número para baixo ficaria: ", numBaixo, "<br />");
document.write("Se seu número for decimal, arredondando o número para cima ficaria: ", numCima, "<br />");
document.write("O seu número com duas casas decimais ", numDecimal, "<br />");

const nome = prompt("digite o seu nome completo por gentileza?");


document.body.innerHTML = `Muito prazer em te conhecer, ${nome} <br />`;

let nomeEncurtado = nome.replace(/ /g, "");

document.body.innerHTML += `Seu nome tem ${nomeEncurtado.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nomeEncurtado.charAt(1)} <br />`
document.body.innerHTML += `Qual é o primeiro índice da letra do seu nome? R: ${nomeEncurtado.indexOf(nomeEncurtado)} <br />`
document.body.innerHTML += `Qual é o último índice da letra do seu nome? R: ${nome.lastIndexOf(nome.slice(-1, -1))} <br />`
document.body.innerHTML += `As últimas 3 letras do seu nome são: ${nomeEncurtado.slice(-3)} <br />`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(" ")}<br />`
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase(nome)}  <br />`
document.body.innerHTML += `Seu nome com letras minusculas: ${nome.toLowerCase(nome)}<br />`




//document.write() -> Utilizado para escrever

// document.body.innerHTMl -> Identifica os elemento de texto do HTML no local especificado, que no caso é o body
/*
Podemos utilizar o document.HTML.InnerHTML para mudar algo que está dentro da tag, como na programação abaixo:

document.body.innerHTML = "Qualquer coisa" -> isso muda o texto digitado no body pelo que está dentro das aspas;

Também podemos utilizar o operador + para concatenar elementos como no exemplo abaixo:

document.body.innerHTML += "Mais uma coisa" -> Isto irá concatenar a palavra "Qulquer coisa" com a palavra "Mais uma coisa".

Para quebrar linhas utilizaremos a tag <br /> isso quebra a linha:

document.body.innerHTML += "Mais uam coisa";

*/ 
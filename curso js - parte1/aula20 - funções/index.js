/*Como criar uma função

Utilizamos o comando -> function
*/ 

/*Como dar nomes a função

Para dar um nome a uma função, é da mesma forma que as váriaveis -> function saudacao() {} ->
Assim criamos ujma função com o nome saudacao, entre os parentes vai algum comando e entre
as chaves seria o corpo da função.

NÃO NECESSITA DO PONTO E VÍRGULA  NO FINAL DA FUNÇÃO.

*/ 

/* Parâmetros

-> Vai entre parenteses -> function saudacao(Parâmetro) {}; -> Desta forma criamos
um paâmetro, ou coisa importante é que os parâmetros são parecidos com as váriaveis.

Colocamos valores no parâmetro como no exemplo abaixo:

// function saudacao(nome) {} -> Neste caso criamos um parâmetro com o nome "nome" e nele 
podemos armazenar algo como as váriaveis, porém para armazenar o valor fazemos o seguinte:

// saudacao("Luiz") -> Neste caso armazenamos o valor "Luiz" ao parâmetro criado na função a
acima.


*/ 

/*Maiore informações sobre os parâmetros

Os mesmo são alterados facilmente como no exeplo abaixo:

// function saudacao(nome) {
//     console.log(`bom dia, ${nome}`)
// }

No camando acima criamos a função com o nome "saudacao" e criamos um parâmetro com o 
nome "nome".

// saudacao("Luiz");
// saudacao("Maria");

Como podem ver no comando acima damos valores para o parâmetro e o mesmo será executado
duas vezes:

Um comando vai ser iniciado como: 

// bom dia, Luiz

e logo adiante será executado o comando com o nome da Maria:

// bom dia, Maria

E eu posso executar este comando quantas vezes eu quiser...
*/ 

/*Se criarmos uma váriavel e armazenar na váriavel uma função, o comando via retornar 
Undefined

Para mudar este modo, utilizamos o comando -> return 123456 -> Exemplo abaixo:

// function saudacao(nome) {
//     console.log(`Bom dia, ${nome}`);
//     return 123456; -> Aqui estamos dizendo o que o comando deve retornar
// }

// const variavel = saudacao("Luiz"); -> Primeiramente o comando vai apresentar a função
normal que seria -> bom dia, nome; 
// console.log(variavel); -> e agora, graças ao comando "return 123456;". No console também
apresentará "123456"; 
*/

/*funções com soma

Criamos uma função da seguinter forma -> function soma(x, y) {} -> Neste caso dizemos ao 
computador que a função deve armazenar dois parâmetros.

// function soma(x, y) {
//    const resultado = x + y; -> Comando para a soma.
//    return resultado; -> Comando para mostrar na tela o resutado
// }

// console.log(soma(2, 2)) -> neste caso informamos ao computador que nosso parâmetros são 2 e 2,
com isso o resultado apresentado na tela seria 4.

---------------------- se não for informado um número para o parâmetro --------------------

Neste faremos o seguinte:

// function soma(x = 1, y = 1;) {} -> Neste caso informamos número para os parâmetros antecipadamente
para o caso de não informarmos números para os parâmetros. No caso o resultado que 
apresentaria para o usuário seria o valor "2" que indica a soma de 1 + 1.

*/ 

/*informações importantes

Tudo o que estiver dentro de um function, não pode ser editado com comando fora do function.

------------------- não vai funcionar ----------------


// function soma(x, y) {
//     const resultado = x + y;
//     return resultado;
// }

console.log(resultado); -> Neste caso pedimos ao computador que informe o resultado da soma,
mas o computador não vai apresentar o resultado para apresentar o resultado deve ter o
comando -> return resultado; -> E fora do comando deve se ter o comando para apresentar o 
programa. -> console.log(soma(2, 2)) -> Neste caso pedimos ao computador que execute a função,
o computador vai executar a função e no caso já estamos armazenando os parâmetros para o calculo.
*/ 

/*Maiores informações sobre o comando -> return

O comando -> return -> também é como se fosse o final de uma função, então..;
Ao utilizarmos o comando return, dizemos ao computador que o comando se trata do final da 
função e tudo que estiver além do comando return, não funcionará(Lembrando que essa informação 
funciona apenas para comandos que estão dentro da função.)

------------------------ Maiores informações sobre as funções -----------------------

O que estiver do lado de fora da função, não se envolve com o que está dentro da
função.

*/ 
function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(3, 2))
 
/*Funções anônimas

Podemos criar uma váriavel para armazenar uma função e com isso a função se tornaria
uma funação anônima.

NESTE CASO NECESSITA COLOCAR O PONTO E VÍRGULA NO FINAL DA FUNÇÃO.

// const raiz = function () { -> Neste caso é possível ver que não colocamos um nome para a função.
//
// };

*/ 

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

/*Arrow function

Neste caso não colocamos a palavra "function" e nem damos um nome a função.

MAS AINDA PRECISA DO PONTO E VÍRGULA.

// const raiz = (n) => { -> Para informa que é uma função utilizamos => como no exemplo
// 
// }

---------------------- Outra forma ---------------------------------------

const raiz = n => n ** 0.5;
*/ 

const raizArrow = m => m ** 0.5;

console.log(raizArrow(9));
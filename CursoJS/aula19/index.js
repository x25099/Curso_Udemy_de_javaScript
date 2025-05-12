/* Valores primitivos e valores por referência 

Primitivos (Valores imutáveis) -> String, Number, boolean, 
undefined, null, (Ainda não vimos) bigint, symbol -> São
valores copiados ao usar o sinal de "="

Em casos como esse

let nome = `Matheus`;
nome = `Ribeiro`;
console.log(nome)

Nestes casos não estamos alterando o valor, mas sim,
trocando os valores

Outro caso é:

let a = `A`;
let b = a;

Neste caso em especifico estamos declarando uma cópia,
então copiamos o valor de "a" para o valor de "b"
*/

/* Valores por referência 

Referência (Mutável) - array, object, function -> São 
valores passados por referência ao usar o sinal de "="

Exemplo:

let a = [1, 2, 3];
let b = a

No caso acima não estamos realizando uma cópia, mas sim
apontando o valor de "b" para o valor de "a", ou seja, 
estamos linkando o valor de "b" em "a" e por ser passado
por referência, se tentarmos alterar o valor de "b" ou de
"a" estaremos alterando os dois códigos

Mas podemos realizar a cópia de valores por referência
para isso utilizamos o seguinte comando:

let a = [1, 2, 3];
let b = [...a] -> Neste caso estamos puxando ou copiando o valor de "a" para "b"

e no caso de tentarmos alterar o valor de "a" ou de "b"
devo lhe informar que os valores de ambos não serão
mais alterados. Isso funciona da mesma forma que 
objetos

porém para salvar fazer uma cópia de objetos em outras
variáveis fazemos ao semelhante ao array, veja:

let a = {
    nome: `Matheus`,
    sobrenome: `Ribeiro`
};

let b = {...a} Perceba que por ser objeto colocamos as chaves ao invés dos colchetes

Desta forma realizamos a copia do valor de "a"para "b"
e por isso podemos realizar a alteração de um dos dois 
e caso "a" seja alterado o valor de "b" se mantém
*/
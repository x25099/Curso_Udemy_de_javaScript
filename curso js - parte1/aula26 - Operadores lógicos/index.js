/*Operadores lógicos

Utilizamos:

&& -> AND -> E (Todas as expressões devem ser verdadeiras para retornar true)
|| ->  OR -> NÃO
!  -> NOT -> NÃO

*/ 

/*Sobre o &&

Que significa "e", se trata de um comando para o computador analisar, tipo:

Para mim sair de casa: deve estar sol e devo ter dinheiro no bolso. 

Sendo assim, para que eu possa sair de casa os dois lado devem ser verdadeiros. A mesma coisa
para o computador, então se apenas uma delas forem verdadeira, o computador vai retornar
"false", pois uma delas não é verdadeira e se uma delas não é verdadeira então não vou sair 
casa. 

Também é possível criar váriaveis e utilizar os operadores lógicos junto com as expressões das variáveis.
*/ 
const expressaoAND = true && true && false && true;
const expressaoOr = true || false;
console.log(expressaoOr)

// Exemplo abaixo de onde vai ser usado os operadores lógicos

const usuario = "Luiz";
const senha = "123456";

const vaiLogar = usuario === "Luiz" && senha === "12345";
console.log(vaiLogar);

/* Sobre o Operador "!"

// console.log(!false); -> No código utilizamos o operador "!" que siginifica "Não", então neste caso, ao invés de mostrar false irá mostrar true, pois dezemos ao computador
que "Não false"
*/

/*Sobre o operador "OR"

console.log(true || false); -> no caso de Or, não precisa ter todas informações verdadeiras, por exemplo, imaginaoms que queremos ir a praia, mas para isso eu:
Tenho que ter dinheiro no bolso ou o dia deve estar bem quente. neste caso não importante de uma for falsa, desde que uma seja verdadeira então eu irei para a praia.
Ou seja, se eu não tiver o dinheiro no bolso, mas estiver quente, eu irei a praia. Se eu tiver dinheiro no bolso, mas estiver chovendo, então eu irei a praia. 
pórem se ambas foram falsas então eu não irei a praia.
*/ 
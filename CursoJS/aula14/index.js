/*Objeto Math. -> Matemática*/

let num1 = 9.54541;
let num3 = 25

/* Para arredondado número para baixo

Utilizamos o seguinte comando com a função .floor()

Math.floor(variável ou número para arredondar)
*/

let num2 = Math.floor(num1);

console.log(num2);

/* Para arredondar número para baixo

Utilizamos o comando Math com a seguinte função .ceil()

Math.ceil(variável ou número para arredondar)

Exemplo:
*/

num2 = Math.ceil(num1);

console.log(num2);

/* Arredondar o número para o mais próximo 

Utilizamos o comando Math. com a função .round();

Math.round();
*/

num2 = Math.round(num1);

console.log(num2);

/* Para encontra o maior número

Utilizamos o comando Math. com a função .max(1,2,3,4,5,6)

Math.max(variável com os números);

*/

num2 = Math.max(1, 2, 3, 4, 5, 6, -1, -5, -10, 10)

console.log(num2)
// No caso acima o resultado vai ser igual a 10, pois entre todos os números, "10" é o maior.

/* Para encontrar o menor número entre outros números

Utilizamos o comando Math com a função .min(variável);

Math.min(variável);
*/

num2 = Math.min(1, 2, 3, 4, 0.5, -10, 20, -50)

console.log(num2)

/* Para gerar número aleatórios

Utilizamos o comando Math com a função .random()

Aviso que a função gera por padrão números aleatórios
entre 0 e 1, onde um não está incluido, 

então no caso de queremos verificar números aleatórios 
entre 5 e 10 faremos o seguinte;

Math.random() * (X - Y) + Y;

onde:

X = ao número máximo
Y = ao número minimo

Com isso será gerado vários números aleatórios
entre 10 e 5, porém os número gerados tem muitas casas
decimais, então junto há ela utilizamos a função 
round para arredondar o número para o mais próximo
*/

console.log(Math.round(Math.random() * (10 - 2) + 2))

/*

Math.PI() -> Informa o valor de PI

Math.pow(2, 10) - faz potenciação, ou seja, 2 elevado a 10

*/

/* Para saber a raiz de um número

Podemos fazer o seguinte:
*/

console.log(num3 ** (1/2))

/* JavaScript divide um número por zero

No caso de realizamos algum calculo onde seja, por exemplo: 
100/0

Teremos como resultado Infinity
*/
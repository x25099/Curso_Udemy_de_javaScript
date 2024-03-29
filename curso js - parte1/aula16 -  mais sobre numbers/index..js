/* Convertendo Number para string

Utilizar -> toString()
para converter



// let num1 = 1;
// let num2 = 2.5;

// console.log(num1.toString() + num2);
// console.log(typeof num1);

*/

/* Para ver um representação binária

utilizamos -> toString(), porém entre os parênteses digitamos o número 2;




// let num1 = 1500;
// let num2 = 2.5;

// console.log(num1.toString(2));

*/

/*Para número com muitas casa decimais

utilizamos -> toFixed() -> Dentro do parênteses devemos colocar a quantidade de casas decimais
que deve aparecer.



// let num1 = 10.532183184651654321034;
// let num2 = 2.5;

// console.log(num1.toFixed(2));

*/

/*Para saber se um número é inteiro

Utilizamos -> Number.isInteger(elemento) -> Para que possamos descobrir se o número
é inteiro.


// let num1 = 10;
// let num2 = 2.5;

// console.log(Number.isInteger(num1));

*/

/*Para descobrir se um consta é inválida

Utilizamos -> Number.isNaN(elemento); -> Desta forma para descobrir se a conta é 
válida ou não.

// let num1 = 2
// let texto = "Olá mundo"

// let temp = num1 * texto;

//console.log(Number.isNaN(temp));


Provavelmente constará como true, pois o computaod responde a você que "Sim, está não é uma 
consta válida"

*/

/* Devido ao padrão:

// ------------------------------------ IEEE 754 - 2008 ---------------------------------------------

Para calcular decimais

Podemos utilizar -> parseFloat() ou Number -> Para que possamos calcular decimais.

// let num1 = 0.7;
// let num2 = 0.1;

// num1 += num2; //era para entrega o valor de 0.8, mas entrega o valor de 0.799999999
// num1 += num2; //era para entregar o valor de 0.9, mas entrega o valor de 0.89999999999999
// num1 += num2; //era para dar o valor de 1.0, mas entrega o valor de 0.9999999999999

// num1 = parseFloat(num1.toFixed(2));  

// console.log(num1)
// console.log(Number.isInteger(num1)) // Consta false pois o num1 não é exatamente um inteiro.

-------- Outra forma de calcular decimais ---------------

// let num1 = 0.7;
// let num2 = 0.1;

// num1 = ((num1 * 100) + (num2 * 100)) / 100; -> O resultado do calculo deve ser exatamente 0.8


*/

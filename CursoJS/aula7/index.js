/*Operadores Aritméticos -> 
 -> + = Adição
 -> - = Subtração
 -> * = Multiplicação
 -> / = Divisão
 -> ** = Potenciação
 -> % = Resto de Divisão

 () -> Tudo o que estiver dentro dos parenteses vai ser 
  executado primeiro conforme os comando aritméticos
 )
*/ 

const num1 = 10; // Atenção -> Se for uma string o valor será concatenado
const num2 = 3;
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 ** num2);
console.log(num1 % num2);
console.log(num1 + num2 * num2); //Podemos adicionar várias contas, e o JavaScript segue as regras da matemática

/*Operador de incremento e decremento

 -> Incremento = ++
 -> Decremento = --

*/ 
let contador = 1;

contador++; // executa contador e depois incrementa + 1 = 2
++contador; // incrementa mais + 1 e depois executa o contador = 3
--contador; // faz o decremento do contador -1 e depois executa o contador
contador--; // executa o contador e depois decrementa -1

console.log(contador)

/* Fomas de calcula o incremento

const passo = 5;
let contador = 0;

contador = contador + passo;

console.log(contador)

Neste caso o resultado será igual a 5

contador += passo;

console.log(contador);

Neste caso se substituirmos contador = contador + passo;
o resultado ainda será igual a 5

Este contador += passo; é válido para outro operador 
aritméticos também

*/

/* NAN  = Not a Number = Não um número

Aparece no caso de tentar realizar um comando aritmético com uma
string
*/

/* parseInt()

realizado para conversão de string para números inteiros
*/

let numero1 = 10
let numero2 = parseInt(`5`);

console.log(numero1 + numero2);

/* parseFloat()

Realiza a converção de uma string para um número decimal
*/

numero2 = parseFloat(`5.2`);

console.log(numero1 + numero2)

/* Number()

Sem distinção, ou seja, converte uma string em um número inteiro
ou um número decimal
*/

numero2 = Number(`5.2`);
console.log(numero1 + numero2)
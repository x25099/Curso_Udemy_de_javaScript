/* Operadores Aritméticos -> 
  * + (Adição - Concatenação)
  * - (Menos)
  * * (Multiplicação)
  * / (Divisão)
  * ** (Potenciação)
  * % (Resto da divisão)
*/

const num = 5;
const num2 = 10;

console.log(num + num2);

// Incremento (++)

let contador = 1
contador++; // 2
contador++; // 3
contador++; // 4
contador++; // 5
console.log(contador);

// Decremento (--)
let contador2 = 5
contador2--;
console.log(contador2);

/* Operadores de atribuição
  exemplo: 
   let contador = 2
   contador = contador + contador;
   
   Ao invés disso poderia ser utilizado da seguinte forma
   contador += contador (A mesma coisa que: contador = contador + contador)
*/


/* NaN -> Not a Number
exeplo

const num1 = 10
const num2 = "Matheus"

console.log(num1 * num2) -> Neste caso vai dar um erro, pois
o número está multiplicando um texto, o que retornar NaN, pois a
programação informa a você que o código digitado não tem 
números para serem calculados.
*/ 
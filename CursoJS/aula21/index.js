/* Operadores de comparação 

  > -> Maior que
  >= -> Maior ou igual que
  < -> Menor que
  <= -> Menor ou igual que  
  == -> Igualdade (Apenas checa valor)
  === -> Igualdade estrita (Checa valor e tipo)
  != -> Diferente (Apenas checa valor)
  !== -> Diferente estrito (Checa valor e tipo)

  Vale ressaltar que os resultados são booleans, ou seja
  true ou false
*/

// console.log(10 > 5); // resultado true, pois fazemos a pegunta se "10" é maior que "5"

const comp = 10 > 10;
const comp2 = 10 >= 10;
const num1 = 10;
const num2 = 11;
const comp3 = num1 >= num2;
const comp4 = num1 === num2
console.log(comp);
console.log(comp2);
console.log(comp3);
console.log(comp4);
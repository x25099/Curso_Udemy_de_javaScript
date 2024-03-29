let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A
let armazena;

armazena = varA
varA = varB;
varB = varC;
varC = armazena;

console.log(varA, varB, varC);

/*Outra forma de resolver

[varA, varB, varC] = [varB, varC, varA]

*/
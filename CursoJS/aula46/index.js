/* Escreva uma função que recebe um número e 
retorne o seguinte:

Se número é dívisivel por 3 = Fizz;
Se número é divisivel por 5 = Buzz;
Se número é divisivel por 3 e 5 = FizzBuzz;
Se número não é divisivel por 3 e 5 = retorna o 
próprio número;
Checar se o número realmente é um número;
Use a função com números de 0 a 100.
*/

function fizzBuzz(numero) {
    if(typeof numero !== `number`) {
        return NaN;
    }

    if (numero % 3 === 0 && numero % 5 === 0) {
        return `FizzBuzz`;
    } else if (numero % 5 === 0) {
        return `Buzz`;
    }else if (numero % 3 === 0) {
        return `Fizz`;
    } else {
        return numero;
    }

}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
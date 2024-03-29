/*
escreva uma função que recebe um número e
retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número não é divisível por 3 e 5 =  Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/ 

/*
function analisar(x) {
    if ((Number.isInteger(x / 3)) & (Number.isInteger(x / 5))) {
        let divisivel = "FizzBuzz";
        return divisivel;
    } else if (Number.isInteger(x / 3)) {
        let divisivel = "Fizz";
        return divisivel;
    } else if (Number.isInteger(x / 5)) {
        let divisivel = "Buzz";
        return divisivel;
    } else if (typeof(x !== 'x')) {
        let divisivel = "Favor, verifique seu número e digite novamente";
        return divisivel;
    }else {
        let divisivel = x;
        return divisivel;
    }
}

console.log(analisar("a"));
*/


function fizzBuzz(numero) {
    if (typeof(numero !== 'number')) return numero;
    else if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    else if (numero % 3 === 0) return 'Fizz';
    else if (numero % 5 === 0) return 'Buzz';
    else {return numero;}
}

console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}


/*Escreva  uma função que recebe 2 números e retorne o maior deles*/ 

/*----------------------- Meu jeito --------------------------------
function numero(num1, num2) {
    let numero1 = Number(prompt("informe o primeiro número"));
    let numero2 = Number(prompt("Informe outro número"));
    num1 = numero1;
    num2 = numero2;

    if (num1 > num2) {
        let maior = num1
        return maior;
    } else if (num1 < num2) {
        let maior = num2;
        return maior;
    }else{
        let maior = "Não há um número maior, verifique se os números foram digitado corretamente ou se são iguais";
        return maior;
    }
}

console.log(numero());
*/

/*---------------------- instrutor --------------------------

 function max(x, y) {
    if(x > y) {
        return x;
    }
    return y;
 }

 const maior = max(1, 2);
 console.log(maior);

 ------------------------------------------outro modo-------------------------

  function max(x, y) {
    if(x > y)  return x;
    return y;
 }

 console.log(max(10, 2));
 -----------------------------------------------outro modo----------------------
  function max(x, y) {
    return x > y ? x : y;
}

 console.log(max(10, 2));
 -------------------------------------------outro modo-----------------------------
 const max2 = (x, y) => {
    return x > y ? x : y;
}
 console.log(max2(10, 2));
 ------------------------------------------outro modo---------------------
 const max2 = (x, y) => x > y ? x : y;

 console.log(max2(10, 2));

*/ 
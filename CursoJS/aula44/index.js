/* Escreva uma função que recebe 2 números e retorne 
o maior deles */

function max(x, y) {
    /*
    if(x > y) {
        return x;
    }
    return y;
    */
   return x > y ? x : y;
}

const max2 = (x, y) => {
    return x > y ? x : y;
}

console.log(max2(20, 10))
console.log(max(1, 2));






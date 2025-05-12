/*Padrão JavaScript -> IEEE 754-2008 

Ou seja, seus calculos não são precisos, em caso de 
um calculo como 0.1 + 0.7, seria 0.8, porém ele considera 
0.7999999999999

Para resolver este tipo de situação colocamos o seguinte comando 

let num1 = 0.7;
let num2 = 0.1;

num1 += num2;

num1 = Number(num1.toFixed(2));

console.log(num1); 

No caso acima aparecerá o valor correto

*/
let num1 = 1500;
let num2 = 2.5;
let num3 = 10.619814601691

console.log(num1 + num2);

/* Para tranformar um número em uma String 

Utilizamos a função .toString() e executamos ela
para que o número se torne um string
*/

console.log(num1.toString() + num2);
console.log(typeof (num1))

/* Tranfomar um número em binário

Utilizamos a mesma função .toString(2), porém
como pode ver colocasse o número "2" entre parênteses 
para dizer ao JavaScript que queremos ver o número em
binário
*/

console.log(num1.toString(2));

/* Para realizar o arredondamento de número
com muitos números após a vírgula, por exemplo, 
um número 10.5325891515150161, é muito extenso

Com isso utilizamos a função .toFixed(2) neste caso
pedimos ao JavaScript colocar 2 números após a virgula, 
arredondando o número.
*/

console.log(num3.toFixed(2));

/* Para verficar se um número é inteiro ou não

Neste caso utilizamos o seguinte comando

Number.isInteger(váriavel);

Vale ressaltar que este comando retornará true ou false
então se o valor for inteiro, será retornado true,
do contrário, false.

Segue exemplo:
*/

console.log(Number.isInteger(num1));//true
console.log(Number.isInteger(num3));//false

/* Como Verificar se a conta é NAN - Not a Number

utilizamos o seguinte comando

Number.isNaN(variável com a conta)

O mesmo retornará true ou false.

exemplo:
*/

let temp = num1 * `Olá mundo`;
console.log(Number.isNaN(temp));//true, pois o resultado é igual NaN

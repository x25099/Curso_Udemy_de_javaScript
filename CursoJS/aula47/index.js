/* Tratando e lançando erros try catch throw */

/*try (traduzindo -> tente)

Ao utiliza-lo estamos dizendo ao JavaScript para 
`tentar` executar algum programa, faremo o seguinte:

try{}

entre as {} colocaremos o comando a ser executado.

Junto dele colocaremos o catch abrimos os () e as {}

catch(){} dentro dos parênteses criamos um 
parâmetro que recebe o erro e entre as chaves 
colocamos o que queremos que seja executado caso o 
programa tenha um erro veja exemplo:
*/

/*
try {
    console.log(naoExiste);
}catch(error) {
    console.log(`naoExiste não existe.`)
}
    */

/*Lançando um erro

Parta isso utilizamos a palavra throw abrimos os 
parênteser colocamos o que deve ser lançado no erro

Exmeplo:
*/

function soma(x, y) {
    if (typeof x !== `number` || 
        typeof y !== `number`) {
        throw(`x e y precisam ser números`);
    }

    return x + y;
}

try{
console.log(soma(1, 2));
console.log(soma(`1`, 2));
} catch(error){
    console.log(`Alguma coisa mais amigável pro usuário`);
}

/*Para lançar um erro no estilo JavaScript

Faremo o seguinte:

threw new Error(`x e y precisam ser números`)

No caso acima estamos criando um novo erro e ele terá
como resultado o mesmo que o do JavaScript normal, porém
junto com a mensagem, isso é utilizado para que possamos
identificar qual é a linha que está com erro
*/
/*Primitivos (Valores imutáveis) -> Não podemos mudar eles.

Vimos: String, number, boolean, undefined, null.

Outros: bigint e symbol.

Neste caso:

//  let nome = "Matheus";
// 
//  nome = "Luiz";
//  console.log(nome); -> 

No caso acima vai aparecer o nome "Luiz", nós não mudamos os valores, apenas trocamos.

------------------- Outro exemplo -------------------------------------
               0123
//  let nome = "Luiz";
//  nome[0] = "R";
//  console.log(nome[0], nome)

Neste outro caso, lembrando que não podemos mudar os valores primitivos, neste caso
continuará apresentando a letra "L" ao invés de "R", pois neste caso em especifíco estamos
tentando mudar o valor, porém como não é possível alterar, os valor se mantém sem alteração.
*/ 

/*Referência (multável)

Vimos: Array e objetos, function.

// let a = [1, 2, 3];
// let b = a; -> aponta para o mesmo dado de "a" como uma cópia para "b"

// a.push(4) -> Agora ambos as váriaveis tem mais o valor "4" no array, e como o valor de "b"
é igual ao valor de "a", sendo assim  agora apresentará os seguintes valores [1,2,3,4].

// b.pop() 

----------------------- Conclusão ---------------------------

Valores primitivos (são copiados).
Valores por referência (valores passados por referência).  
*/ 

/*Como passar um array ou qualquer outro dado para uma váriavel e poder alterar sem alterações

//  let a = [1, 2, 3];
//  let b = [...a];
//  let c = b;

// console.log(a, b, c) 

no caso apresentado acima no "let b = [...a]", neste caso estamos copiando o valor de "a" para
"b" sendo b agora independete e assim, podemos alterar o valor de "a" sem modificar o valor de "b"
também, e como o valor de "c" é igual ao valor de "b", sendo assim qualquer alteração feita 
em "b" será modificado o valor de "c" também.

Os "[...a]" os três pontos significa a cópia do valor "a" neste caso.
*/ 
/*Arrays são um tipo de lista

São declaradas entre []

Sobre indics em Arrays 

----------------- Antes ----------------------

               0123456
// const aluno = "Matheus"

----------------- Agora com Array ----------------------

                0          1        2
// const aluno = ["Matheus", "Emyli", "Juçara"]

*/ 

/*Para puxar um elemento do Array pelo indice

Utilizamos -> elemento[Índice do elemento] -. Desta forma conseguimos chamar um elemento
como no exeplo abaixo:

// console.log(alunos[0]); -> Neste comando estamos chamando um elemento do Array
*/ 
/*Como mudar um elemento de um Array

Utilizamos -> váriavel[índice do elemento que você deseja alterar] = "novo valor do elemento" ->
Desta forma conseguimos mudar um elemento de um Array de forma fácil:

// const alunos = ["João", "Luiz", "Mario"]

// alunos[0] = "Eduardo" -> Neste caso chamamos o elemento do índice [0] que seria
"João" e alteramos o valor de "João" para "Eduardo". 

*/ 
/*Como criar novo elemento e colocar no Array

Utilizamos o mesmo modo utilizado para alterar, porém estavamos chamando um Array pelo
ìndice que o mesmo tinha, agora para criar um novo elemento no Array utilizaremos um ìndice que 
ainda não existe, por exemplo:

------------------- Antes -----------------------

// const alunos = ["Matheus", "João", "Maria"]
// alunos[0] = "Pablo";

---------------- Agora para criar um novo -----------

// const alunos = ["Matheus", "Maria", "João"]
// alunos[3] = "Lucas" -> Repare que não existe um indice 3 no Array, com isso ao colocarmos 
índice que não existe estaremos adicionando um novo elemento no Array 
com o ìndice que está dentro dos parênteses.

------------------ Outra forma --------------------

// aluno[aluno.length] = "Novo elemento";

------------------- Mais --------------------------

Utilizamos também o atributo -> elemento.push() -> Para adicionar novo elemento ao final do Array

// alunos.push("Novo elemento");
*/ 

/*Como saber o tamanho de um Array

Utilizamos o atributo -> length -> No caso do Array, o comando length le dará a resposta
da quantidade de elemento que existe neste Array.

// const alunos = ["Luiz", "Maria", "João"];

// console.log(alunos.length); -> Neste caso mostrará 3 elementos.

*/ 

/*Para adionar novo elemento no começo do Array

Utilizamos o atributo -> elemento.unshift("Novo elemento") -> Ele adiciona um novo elemento,
porém diferente dos outros, este atibuto adiciona no inicio do Array.

*/

/* Para remover o último elemento de uma Array

Utilizamos o atributo -> elemento.pop() -> Ele vai remover o último elemento do Array.

// const alunos = ["Luiz", "Maria", "João"];

// alunos.pop() removerá o elemento "João do Array"

------------------ Maiores informações -----------------------

podemos armazenar os removidos em uma váriavel

// const removido = alunos.pos() -> Neste caso ele vai remover o elemento "João" do Array
e vai adionar o elemento "João" à váriavel "removido".
*/

/*Para remover um elemento do Array do começo

Utilizamos o atributo -> elemento.shift() -> Este comando vai remover o primeiro elemento
do Array 

// const alunos = ["Luiz", "Maria", "João"];

// alunos.shift() -> Vai remover o primeiro elemento que aqui no caso seria "Luiz".
*/ 

/*Como remover elemento de uma Array sem alterar o índice dos elementos

Utilizamos o comando -> delete elemento[Índice do elemento que deseja apagar] -> Este comando
vai apagar o elemento sem fazer alterações no índice dos outros elementos
*/ 

/*Como pegar um pedaço(ou fatia) do Array

Utlizamos assim como nas strings -> elemento.slice(índice inicial, índice final)

// const alunos = ["Luiz", "Maria", "João"];

// console.log(alunos.slice(0, 2));

*/

/*Como descobrir se é um Array

Utilizamos ->  instanceof Array -> Segue um exepmlo abaixo mais detalhado:

// const alunos = ["Luiz", "Maria", "João"];

// console.log(alunos instaceof Array); -> Neste o camando vai responder true ou false, se for
true, significa que é um Array, porém se for false, significa que não é um Array.

*/ 
const alunos = ["Luiz", "Maria", "João"];

console.log(alunos instanceof Array);
// delete alunos[1]
// const removido = alunos.pop();
// alunos.shift()

console.log(alunos.slice(0, 2));
// console.log(removido);

alunos[0] = "Lucas";
alunos[3] = "Matheus";
alunos.push("Marcos");
alunos[alunos.length] = "Rosa";

alunos.unshift("Roberto")

console.log(alunos.length);
console.log(alunos);
console.log(alunos[1]);


/* Atribuição via desetruturação de Objetos */

const pessoa = {
    nome: `Luiz`,
    sobrenome: `Miranda`,
    idade: 30,
    endereco: {
        rua: `Av Brasil`,
        numero:320,
    }
};

/* Para criar uma variavel e armazenar um atributo
especifico do objeto faremos o seguinte

para criar uma variavel com o objeto faremos similar
array, porém ao invés de utilizar-mos os colchetes[]
utilizamos as chaves {} e dentro das chaves entram
os nomes das variáveis

Lembrando que cada nome de variável que você colocar
deve levar em consideração  que os objetos são indexados
então o primeiro atributo é o primeiro, depois o 
segundo atributo que está indexado como o segundo

então ao colocarmos o nome de uma variável dentro das
chaves, o primeiro nome da variável amazenará o 
primeiro atributo e o segundo nome armazenará o 
segundo atributo

veja o exemplo:


const pessoa = {
    nome: `Luiz`,
    sobrenome: `Miranda`,
    idade: 30,
    endereco: {
        rua: `Av Brasil`,
        numero:320,
    }
};

Este é o objeto e agora criarei o nome das variáveis
resslato que o nome das variáveis tem que ser iguais 


const {nome, sobrenome, idade, endereco}
console.log(nome,sobrenome, idade, endereco)

Ressalto que tem como alterar o nome da variável,
para isso tem um comentário mais a baixo informando
a como fazer isso
*/
const { nome: vida, sobrenome,} = pessoa;
console.log(vida);
console.log(sobrenome);

/* Podemos criar uma variável com um valor padrão

Para criar, dentro de uma variável via desestruturação de
um objeto utilizamos as chaves {} e colocamos dentro 
dela o nome da variável e colocamos o valor para ocupar
o espaço padrão, para o caso de não tenha nanhum valor 
atribuido ao atrubuto do objeto, então caso, tenha
um atributo que não tem nenhum valor, este novo valor
vai ser mostrado para o caso do atributo não ter 
nenhum valor.


const {nome, sobrenome, idade, endereco, texto = `Qualquer coisa`} = pessoa
*/

/* Como mudar o nome da variável dentro de um objeto

Para isso faremos o seguinte, abrimos as chaves {}
e dentro delas colocamos o nome do atributo com os :
e damos um espaço e colocamos o novo nome da variável

veja exemplo:

const {nome: teste = ``} = pessoa;

Caso não queira usar o simbolo de igualdade "=" não tem
a necessidade de utiliza-lo.
*/

/* Para pegar um atributo que está dentro de um objeto
cujo esse mesmo objeto está dentro de outro objeto

Para isso primeiro devemos apontar o nome do atributo
depois colocamos os : e abrimos as chaves novamente {}
e dentro das chaves colocamos os nomes da variáveis
veja exemplo:

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);
*/

const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

/* Operador rest operator dentro de objetos 

para isso colocaremos os três pontos ... e colocaremos o
nome da variável que armazene o "resto" do objeto veja
o exemplo:

const {nome, sobrenome, ...resto}
console.log(resto)
*/
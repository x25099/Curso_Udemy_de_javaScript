const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};
const { nome, sobrenome, idade } = pessoa; //Atribuição via desestruturação.
console.log(nome, sobrenome, idade);

/*Para chamar os valores de um objeto utilizado o "." depois de chamar o nome da váriavel exemplo:

//const pessoa = {
//    nome: 'Luiz',
//    sobrenome: 'Miranda',
//    idade: 30,
//    endereço: {
//        rua: 'Avenida Brasil',
//        numero: 320
//    }
//};

//console.log(pessoa.nome);

No caso acima estamos chamando o valor do objeto "nome" que neste caso seria o valor "Luiz".

----------------------- OU ----------------------------------------

//const pessoa = {
//    nome: 'Luiz',
//    sobrenome: 'Miranda',
//    idade: 30,
//    endereço: {
//        rua: 'Avenida Brasil',
//        numero: 320
//    }
//};

//const nome = pessoa.nome;
//console.log(nome);

Neste outro caso estamos armazenando o valor do objeto nome na váriavel nome.

*/ 

/*---------------------- via desestruturação --------------------------------

//const pessoa = {
//    nome: 'Luiz',
//    sobrenome: 'Miranda',
//    idade: 30,
//    endereço: {
//        rua: 'Avenida Brasil',
//        numero: 320
//    }
//};
//const { nome, sobrenome, idade } = pessoa; //Atribuição via desestruturação.
//console.log(nome, sobrenome, idade);

*/ 
/*No caso de adicionar um novo valor ao objeto faremos o seguinte: 

//const pessoa = {
//    sobrenome: 'Miranda',
//    idade: 30,
//    endereço: {
//        rua: 'Avenida Brasil',
//        numero: 320
//    }
//};

//const { nome = "Matheus", sobrenome, idade } = pessoa; //Atribuição via desestruturação.
//console.log(nome, sobrenome, idade);

No caso acima não tinhamos o objeto "nome", com isso adioncamos o objeto e atribuimos um valor há ele que seria o valor "Matheus".

*/ 


/*---------------------------- Mudar o nome de um objeto ----------------------------

//const pessoa = {
//    nome: 'Luiz',
//    sobrenome: 'Miranda',
//    idade: 30,
//    endereço: {
//        rua: 'Avenida Brasil',
//        numero: 320
//    }
//};
//const { nome: teste, sobrenome, idade } = pessoa; //Atribuição via desestruturação.
//console.log(teste, sobrenome, idade);

No caso acima modificamos o nome do objeto que foi de objeto "nome" para "teste", neste momento devemos agora colocar "teste" na hora de chamar o valor.

*/ 

/* Pegar o valor de um objeto que está dentro de outro objeto

//const pessoa = {
//    nome: 'Luiz',
//    sobrenome: 'Miranda',
//    idade: 30,
//    endereço: {
//        rua: 'Avenida Brasil',
//        numero: 320
//    }
//};
//const {endereço: {rua, numero}}
//console.log(rua);

No caso acima estamos pegando o valor dos objetos "rua" e "numero" que estão dentro do objeto "endereço".
*/ 

/*------------------- Pegar o resto ---------------------------

//const pessoa = {
//    nome: 'Luiz',
//    sobrenome: 'Miranda',
//    idade: 30,
//    endereço: {
//        rua: 'Avenida Brasil',
//        numero: 320
//    }
//};
//const { nome, ...resto}
//console.log(resto);

No caso acima estamos pegando o resto dos objetos, exceto o objeto "nome", pois o mesmo já foi chamado.

*/ 
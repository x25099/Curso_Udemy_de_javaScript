// const array = [1, 2, 3]
// array.push(4);
// array[0] = "Luiz";
// array = "Outra";
// console.log(array)

// const nome01 = "Luiz";
// const sobrenome01 = "Miranda";
// const idade01 = 25;


// const nome02 = "Maria";
// const sobrenome02 = "Oliveira";
// const idade02 = 55;

// const pessoa1 = {
//     nome: "Maria",
//     sobrenome: "Oliveira",
//     idade: "55"
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);

/*informações sobre o código abaixo

O return pode ser escrito de duas formas: 


//   function criaPessoa (nome, sobrenome, idade) {
//       return {
//           nome: nome,
//           sobrenome: sobrenome,
//           idade: idade
//       };
//   }

------------------- Outra forma --------------------------

//   function criaPessoa (nome, sobrenome, idade) {
//       return {nome, sobrenome, idade};
//   }

Das duas formas estamos dizendo javaScript que o "nome" recebe "nome", "sobrenome" recebe "sobrenome"
e etc... Desta forma podemos salvar várias váriaveis como no código abaixo:
*/ 
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa("Luiz", "Miranda", 25);
const pessoa2 = criaPessoa("Maria", "Oliveira", 32);
const pessoa3 = criaPessoa("João", "Moreira", 55);
const pessoa4 = criaPessoa("Junior", "Lara", 44);
const pessoa5 = criaPessoa("Jean", "Otávio", 69);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

/*Outra forma, porém demorada

Podemos fazer:

//   const pessoa1 = {
//       nome: "Luiz",
//       sobrenome: "Miranda",
//       idade: "23"
//   }

//   const pessoa2 = {
//       nome: "Matheus",
//       sobrenome: "Ribeiro",
//       idade: 17
//   }

porém como informei, é mais demorado.
*/ 

/*Como criar uma função dentro da várivel

Ao invés de escrevermos "function", escrevemos "fala" e colocamos () {}.

//   const pessoa1 = {
//       nome: "Luiz",
//       sobrenome: "Miranda",
//       idade: "23"
//       
//       fala () {
//         console.log("Olá mundo")
//       }
//   }
// 
//  pessoa1.fala(); -> Executando o código;

------------- Com o comando "this" ------------------------

this significa "este" em português
//   const pessoa1 = {
//       nome: "Luiz",
//       sobrenome: "Miranda",
//       idade: "23"
//       
//       fala () {
//         console.log(`${this.nome} ${this.sobrenome} está falando oi...`) -> Neste caso signiifica "este objeto".
//       }
//       
//   
//   }
// 
//  pessoa1.fala(); -> Executando o código;

-------------------- Mais ---------------------------


this significa "este" em português
//   const pessoa1 = {
//       nome: "Luiz",
//       sobrenome: "Miranda",
//       idade: "23"
//       
//       fala () {
//         console.log(`A minha idade atual é ${this.idade}`)
//       }
//       
//       incrementoIdade () {
//         ++this.idade -> Agora toda vez em que nós executamos o código, será incrementado mais
um a idade.
//       }   
//   }
// 
//  pessoa1.fala(); -> Executando o código;

Reforçando que o código "++"significa incremento.
*/ 

 
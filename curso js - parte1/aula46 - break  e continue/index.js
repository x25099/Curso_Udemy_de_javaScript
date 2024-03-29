const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    console.log(numero);
   
    if (numero === 7) {
        console.log('7 encontrado, saindo...')
        break;
    }
}

/*------------------------ continue --------------------------

Volta para o começo da condição

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        continue;
    }
    console.log(numero);
}

Neste caso o comando "continue" vai pular o número 2 e vai começar novamente o loop porém agora informando o número 3 ao invés do 2.
pode haver ais de uma condição "continue" no loop.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        continue;
    }
    
    if (numero === 5) {
        continue;
    }
    console.log(numero);
}

*/ 

/* --------------------- break -------------------------
Para o laço dependo da condição como no exemplo abaixo: 

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 7) {
        break;
    }
    console.log(numero);
}

Neste caso, quando o número for 7, o loop irá parar.

*/ 

/*
No caso do while, devemos ficar atentos para não cairmos em um loop infinito, lembre-se de sempre atualizar a váriavel para não cair no loop infinito; 
*/ 
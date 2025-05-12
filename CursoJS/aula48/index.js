/* try catch e finally */
/*
try{
    //Executa quando não há erros
}catch(e){
    //Executa quando há erros
}finally{
    //Será executado sempre, independe se houver erro
    //ou não. 
}
*/

/**exemplo onde o comando finally é útil */

/*
try{
    console.log(a);
    console.log(`Abri um arquivo`);
    console.log(`Manipulei o arquivo e gerou erro`);
    console.log(`Fechei o arquivo`);
}catch(e){
    console.log(`Tratando o erro`);
}finally{
    console.log(`Eu sempre sou executado`);
}
*/

/* Usando com função */

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError(`Esperando instância de Date...`);
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString(`pt-BR`, {
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`, 
        hour12: false
    })
}

try{
    const data = new Date(`01-01-1970 12:58:12`);
    const hora = retornaHora();
    console.log(hora);
}catch(e){
    //Tratar erro
}finally{
    console.log(`Tenha um bom dia`);
}
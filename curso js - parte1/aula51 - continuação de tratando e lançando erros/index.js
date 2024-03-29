/*
try {
// É executado quando não a erro
console.log('abri um arquivo');
console.log('Manipulei o arquivo e gerou erro');
console.log('Fechei o arquivo');

try {
    console.log(b);
}catch (e) {
    console.log('Deu erro');
}
} catch (e) {
console.log('Tratando o erro');
// É executado quando a erros
} finally {
// Sempre é executado
console.log('Finally: Eu sempre sou executado');
}
*/ 

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date');
    }

    if(!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12 : false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(data);
}catch (e) {
    //Tratar erro
}finally {
    console.log('Tenha um bom dia.')
}

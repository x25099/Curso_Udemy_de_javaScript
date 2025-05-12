const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;

imc = peso / (altura * altura);

let anoNascimento = 2019 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 
    'kg, tem', altura, 'de altura e seu IMC é de', imc, nome, 
    sobrenome, 'nasceu em', anoNascimento + '.'
)

/*Template String*/ 

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa 
    ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc} 
    ${nome} ${sobrenome} nasceu em ${anoNascimento}.`
)
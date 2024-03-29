/*Matheus Vinicus Machado tem 17 anos, pesa 75kg
tem 1.65 de altura e seu imc é de 
Matheus nasceu em 
*/ 

const nome = 'Matheus Vinicius';
const sobrenome = 'Machado';
const idade = 17;
const peso = 75;
const altura = 1.65;
let imc =  peso / (altura * altura);
let anoNascimento = 2023 - idade;

console.log(nome, `${sobrenome} tem`, idade, "anos, pesa", peso, "KG, tem", altura, 
"m e seu iMC é de", imc + ",", nome, "nasceu em", anoNascimento);
/*if e else 
if = se.
else = se não.

Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite.

if -> Pode ser usado sozinho 
else -> Sempre que utilizo a palavra "else" devo ter um bloco "if" antes.
Quanto if pode ter? R: Eu posso ter vários else ifs na chacagem.
Só posso utlizar 1 vez o else sozinho.
Podemos utlizar condições sem else if, utilizando apenas if e else.
*/ 

const hora = 250;

if (hora >= 0 && hora <= 11) {
    console.log(`Bom dia`);
} else if (hora >= 12 && hora <= 17) {
    console.log(`Boa tarde`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa noite`);
} else {
    console.log(`Olá`);
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log(`Vou sair de casa`);
} else {
    console.log(`Não vou sair de casa`);
}
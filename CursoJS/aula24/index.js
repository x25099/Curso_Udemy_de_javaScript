/* if, else if, else 

if em português significa "se", e ao lado dele devo
colocar uma condição, ou seja abrir parênteses e 
colocar minha condição dentro dos parênteses depois
abro e fecho chaves, e dentro das chaves coloco o que
eu quero se a condição for corretas

segue exemplo:
*/

let hora = 10;


if(hora < 12) {
    console.log(`Bom dia`);
}

/* Criar duas condições 

Para criarmos a primeira condição utilizamos normalmente
o if(){}, porém para criarmos uma segunda condição
colocamos após as chaves as palavras "else if" que em
português significa "se não" e após o if abrimos o
parênteses e as chaves normalmente, então
o javaScript vai ler a primeira condição, caso a mesma
não seja aprovada, ele vai analisar a segunda condição 
e se for correta, então ele mostrará o resultado 
que eu solicitar que ele mostre

Segue exemplo:
*/

hora = 13

if(hora >= 0 && hora <= 11) {
    console.log(`Bom dia`);
} else if (hora >= 12 && hora <= 17){
    console.log(`Boa tarde`);
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa noite`);
} else {
    console.log(`Esse horário não é válido`);
    console.log(`Olá`);
}

/* Mas e se nenhum dele for aprovado

Para isso, na ultima chave da minha ultima condição
eu coloco apenas a palavra "else" e abro as chaves 
e dentro das chaves coloco o que quero que ele
execute caso nenhuma das consições sejam aprovadas

exemplo na programação acima:
*/

/* Informações

Então concluimos que:

if -> Pode ser usado sozinho com sua condição

else if -> Sempre que utilizo a palavra "else" eu 
preciso de uma condição if sozinha antes. Além
disso posso ter vários else if na checagem

else -> else sozinho é apenas usando para o caso de 
nenhuma das condições anteriores serem aceitas e usado
no final da última condição

Podemos usar condições sem else if, utilizando apenas 
if e else; no caso de utilizar apenas a palavra else
sem usar a palavra if, ou seja else if, neste caso, posso 
utiliza-lo apenas uma vez.
*/

const tenhoGrana = true;

if(tenhoGrana) {
    console.log(`Vou sair de casa`);
} else{
    console.log(`Não vou sair de casa`)
}

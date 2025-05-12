/* Operadores Lógicos

  && ->  And  ->  E  -> Todas as Expressões devem ser verdadeiras para retornar true
  ||  ->  OR  -> OU
  !  ->  NOT  ->  NÃO

  Vale ressaltar que o resultados ao utilizarem esses
  comando são booleans, ou seja, true ou false


  Imaginamos o seguinte, um certo dia decido sair,
  e coloco a seguinte condição > Se estiver Sol e 
  estiver ensolarado, eu sairei de casa. Neste caso uso
  o operador && Pois para que eu saia de casa tem que
  ser aprovado critérios, ou seja, ensolarado e com sol
  então se algum dia estiver sol, mas estiver frio,
  então eu não terei saido de casa,pois um dos meus
  critérios não foi seguido(aprovado)

  Imaginamos outro caso > Se eu for aprovado na faculdade
  de física ou na faculdade de engenharia, eu irei 
  entrar, neste casos usamos || vamos levar em considerção que eu queira
  muito entrar em uma dessas duas e qualquer outro 
  curso para faculdade diferente do que eu quero, eu
  não entrarei. Então um certo dia eu fui aprovado em 
  Física, mas não fui aprovado em engenharia, com isso
  concluimos que eu entre na faculdade já que eu fui
  aprovado em Física. Agora eu fui aprovado em engenharia
  mas não em física então, concluimos que eu também entre
  pois eu fui aprovado em engenharia, agora fui aprovado
  em química, então concluimos que eu não entrei, já que
  nenhuma de minha condições foram aceitas ou aprovadas

  Quanto ao comando NOT, usamos ele quando queremos 
  inverter algo, então digamos um console.log(true);
  então será retornado true normalmente e se fizermos
  console.log(!true) então teremos como resultado 
  false, pois negamos o resultado verdadeiro, ou
  melhor dizendo invertemos o resultamos por estarmos 
  negando o true 


*/

/* Usando o AND -> && */
console.log(true && true)//true, pois todos as regras foram aceitas
console.log(true && true && false && true);// false, pois um delas não foi aceita

/* Usando o OR -> || */

console.log(true || false);
console.log(false || true);
console.log(false || true || false || false);

/* Exemplo de usamos essa codificação */

const usuario = `Luiz`;
const senha = `123456`;

const vaiLogar = usuario === `Luiz` && senha === `123456`;
console.log(vaiLogar)

/* Usando o NOT -> ! */

console.log(true);
console.log(!true);
/*Capturar evento de submit do formulário */

const form = document.querySelector(`#formulario`);

form.addEventListener(`submit`, function(e) {
  e.preventDefault();
  /*Atributo target
  
  no exemplo a seguir diz ao JavaScript que queremos pegar o elemento
  pelo qual capturamos o evento que no caso é o form
  */
  const inputPeso = e.target.querySelector(`#peso`);
  const inputAltura = e.target.querySelector(`#altura`);

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if(!peso) {
    setResultado(`Peso Inválido`, false);
    return;
  }

  if(!altura){
    setResultado(`Altura inválida`, false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
  
});

function getNivelImc(imc) {
  const nivel = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidade grau 3`];

  if(imc >= 39.9) {
    return nivel[5];
  }
  
  if(imc >= 34.9){
    return nivel[4];
  }
  
  if(imc >= 29.9) {
    return nivel[3];
  }
  
  if(imc >= 24.9){
    return nivel[2];
  } 
  
  if(imc >= 18.5){
    return nivel[1];
  } 
  
  if(imc < 18.5){
    return nivel[0];
  }
}

function getImc() {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP(className) {
  const p = document.createElement(`p`);
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector(`#resultado`);
  resultado.innerHTML = ``;

  /*Para criar elemento HTML pelo JavaScript
  Utilizamos a função createElement(`tag`), com isso
  será criado a tag no HTML
   */
  //const p = document.createElement(`p`);
  /* Criar class para elementos HTML criados por JavaScript
  
  Utilizamos o Atributo classList acomapanhado com a 
  função .add(`nome da class`);

  p.classList.add(`paragrafo`);
  */
  //p.classList.add(`paragrafo-resultado`);
  //p.innerHTML = `Qualquer coisa`;
  /* Adicionar elemento filho
  
  Utilizamos a função appendChild(nome da tag)
  */
  const p = criaP();
  if(isValid) {
    p.classList.add(`paragrafo-resultado`);
  } else {
    p.classList.add(`bad`);
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
}
function formulario() {
const form = document.querySelector(`#formulario`);
const resultado = document.querySelector(`#resultado`);


function recebeEventoForm(evento) {
  evento.preventDefault();
  const idPeso = document.querySelector(`#peso`)
  const peso = idPeso.value;
  const idAltura = document.querySelector(`#altura`);
  const altura = idAltura.value;
  let imc = peso/(altura*altura);
  let imcAr = imc.toFixed(1);
  

  if(imcAr < 18,5){
    resultado.innerHTML = `<p>O seu IMC: ${imcAr}, Abaixo do peso</p>`;
  } else if(imcAr >= 18,5 && imcAr <= 24,9) {
    resultado.innerHTML = `<p>O seu IMC: ${imcAr}, Peso normal</p>`;
  }else if(imcAr >= 25 && imcAr <= 29,9){
    resultado.innerHTML = `<p>O seu IMC: ${imcAr}, Sobrepeso</p>`;
  }else if(imcAr >= 30 && imcAr <= 34,9){
    resultado.innerHTML = `<p>O seu IMC: ${imcAr}, Obesidade grau 1</p>`;
  }else if(imcAr >= 35 && imcAr <= 39,9) {
    resultado.innerHTML = `<p>O seu IMC: ${imcAr}, Obesidade grau 2</p>`;
  }else if(imcAr >= 40){
    resultado.innerHTML = `<p>O seu IMC: ${imcAr}, Obesidade grau 3</p>`;
  }else if(imcAr !== Number){
    resultado.innerHTML = `<p>Seu número é inválido</p>`;
  }else{
    console.log(`Número inválido`)
  }

  
}

form.addEventListener(`submit`, recebeEventoForm);

}

formulario();
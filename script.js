// Carne - 400 gr  por pessoa + de 6 horas = 650 gr
// Cerveja - 1200 ml por Pessoa + 6 horas = 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500 ml

// Criança vale por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado")



function calcular() {
  
  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
  let qdtTotalCerveja = cervejaPP(duracao) * adultos;
  let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  console.log(qtdTotalCarne);
  console.log(qdtTotalCerveja);
  console.log(qdtTotalBebidas);
  

  resultado.innerHTML = `<h2>Vai precisar de:</h2>`
  resultado.innerHTML += `<div class="result-block"><img src="./Imagens/ICONE-CARNE.png"><p>${qtdTotalCarne/1000} quilos de carne</p></div>`
  resultado.innerHTML += `<div class="result-block"><img src="./Imagens/MAO.png"><p>${Math.ceil(qdtTotalCerveja/355)} latas de Cerveja</p></div>`
  resultado.innerHTML += `<div class="result-block"><img src="./Imagens/GARRAFA2.png"><p>${Math.ceil(qdtTotalBebidas/2000)} garrafas de Bebidas</p></div>`}


function carnePP(duracao) {
  
  if(duracao >= 6) {
    return 650;
  }else{
    return 400;
  }
}

function cervejaPP(duracao) {
  
  if(duracao >= 6) {
    return 2000;
  }else{
    return 1200;
  }
}

function bebidasPP(duracao) {
  
  if(duracao >= 6) {
    return 1500;
  }else{
    return 1000;
  }
}


const mes = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const estacao_ano_nomes = ["primavera", "verão", "outono", "inverno"];

const primavera = [
  { "nome": "Rosa chá", "cor": "rgb(255, 182, 193)" },
  { "nome": "Lilás", "cor": "rgb(200, 162, 200)" },
  { "nome": "Verde menta", "cor": "rgb(152, 255, 152)" },
  { "nome": "Amarelo limão", "cor": "rgb(255, 250, 85)" },
  { "nome": "Peônia", "cor": "rgb(255, 105, 180)" }
];

const verao = [
  { nome: 'Turquesa', cor: 'rgb(64, 224, 208)' },
  { nome: 'Verde limão', cor: 'rgb(173, 255, 47)' },
  { nome: 'Amarelo ouro', cor: 'rgb(255, 223, 0)' },
  { nome: 'Laranja pastel', cor: 'rgb(255, 179, 71)' },
  { nome: 'Coral', cor: 'rgb(255, 127, 80)' }
];

const outono = [
  { nome: 'Amarelo suave', cor: 'rgb(255, 239, 184)' },
  { nome: 'Bege claro', cor: 'rgb(210, 180, 140)' },
  { nome: 'Pêssego suave', cor: 'rgb(255, 218, 185)' },
  { nome: 'Marrom claro', cor: 'rgb(222, 184, 135)' },
  { nome: 'Laranja pastel', cor: 'rgb(255, 160, 122)' }
];

const inverno = [
  { nome: 'Azul gelo', cor: 'rgb(240, 248, 255)' },
  { nome: 'Branco gelo', cor: 'rgb(240, 255, 255)' },
  { nome: 'Lavanda', cor: 'rgb(230, 230, 250)' },
  { nome: 'Azul suave', cor: 'rgb(135, 206, 235)' },
  { nome: 'Azul profundo', cor: 'rgb(0, 191, 255)' }
];

let i_estacao = 0;
let vet_estacao = [];
let intervalo;
let indiceCorBackground = 0;

function calcula_estacao() {
  if (intervalo) {
    clearInterval(intervalo);
  }

  const inputMesElemento = document.getElementById('i_mes');
  const numeroDoMes = parseInt(inputMesElemento.value);

  const elementoExibeMes = document.getElementById('nome_mes');
  const elementoExibeEstacao = document.getElementById('nome_estacao');
  const todasImagensEstacao = document.querySelectorAll('.imagem-estacao');

  if (isNaN(numeroDoMes) || numeroDoMes < 1 || numeroDoMes > 12) {
    elementoExibeMes.textContent = "Mês inválido";
    elementoExibeEstacao.textContent = "??";
    todasImagensEstacao.forEach(img => img.style.opacity = "0.3");
    vet_estacao = [];
    coresEstacao();
    return;
  }

  elementoExibeMes.textContent = "Mês: " + mes[numeroDoMes - 1];

  let nomeEstacaoAtual = "";

  if (numeroDoMes >= 9 && numeroDoMes <= 11) {
    i_estacao = 0;
    vet_estacao = primavera;
    nomeEstacaoAtual = estacao_ano_nomes[0];
  } else if (numeroDoMes === 12 || numeroDoMes === 1 || numeroDoMes === 2) {
    i_estacao = 1;
    vet_estacao = verao;
    nomeEstacaoAtual = estacao_ano_nomes[1];
  } else if (numeroDoMes >= 3 && numeroDoMes <= 5) {
    i_estacao = 2;
    vet_estacao = outono;
    nomeEstacaoAtual = estacao_ano_nomes[2];
  } else {
    i_estacao = 3;
    vet_estacao = inverno;
    nomeEstacaoAtual = estacao_ano_nomes[3];
  }

  elementoExibeEstacao.textContent = "Estação: " + nomeEstacaoAtual;

  
  todasImagensEstacao.forEach(img => {
    img.style.opacity = "0.3"; 
    if (img.parentElement.classList.contains(nomeEstacaoAtual)) {
      img.style.opacity = "1"; 
    }
  });

  indiceCorBackground = 0;
  coresEstacao();
  intervalo = setInterval(coresEstacao, 2000);
}

function coresEstacao() {
  const elementosDisplayCor = document.querySelectorAll('.cor');
  const elementoBackgroundEstacao = document.getElementById('estacoes');

  elementosDisplayCor.forEach((elemento, index) => {
    if (vet_estacao && vet_estacao[index]) {
      elemento.textContent = vet_estacao[index].nome;
      elemento.style.backgroundColor = vet_estacao[index].cor;
    } else {
      elemento.textContent = "?";
      elemento.style.backgroundColor = "white";
    }
  });

  if (elementoBackgroundEstacao && vet_estacao && vet_estacao.length > 0) {
    elementoBackgroundEstacao.style.backgroundColor = vet_estacao[indiceCorBackground].cor;
    indiceCorBackground = (indiceCorBackground + 1) % vet_estacao.length;
  } else if (elementoBackgroundEstacao) {
    elementoBackgroundEstacao.style.backgroundColor = "white";
  }
}


window.onload = function() {
  const elementosDisplayCor = document.querySelectorAll('.cor');
  elementosDisplayCor.forEach(elemento => {
    elemento.textContent = "?";
    elemento.style.backgroundColor = "white";
  });
  
  const todasImagensEstacao = document.querySelectorAll('.imagem-estacao');
  todasImagensEstacao.forEach(img => {
    img.style.opacity = "0.3";
  });
};
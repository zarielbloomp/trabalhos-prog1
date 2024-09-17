// Inicialização após o carregamento do DOM para Física
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("formula_fisica").addEventListener("change", updateVariablesFisica);
});

// Função para atualizar as variáveis com base na fórmula de Física selecionada
function updateVariablesFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const container = document.getElementById("variables-container_fisica");
  container.innerHTML = "";
  let variablesHtml = "";

  switch (formula) {
      case "velocidade":
          variablesHtml = "v = d / t -> Distância (m), Tempo (s)";
          break;
      case "trabalho":
          variablesHtml = "T = F * d -> Força (N), Distância (m)";
          break;
      case "movimento-linear":
          variablesHtml = "p = m * v -> Massa (kg), Velocidade (m/s)";
          break;
      case "forca":
          variablesHtml = "F = m * a -> Massa (kg), Aceleração (m/s²)";
          break;
      case "energia-cinetica":
          variablesHtml = "Ec = 1/2 * m * v² -> Massa (kg), Velocidade (m/s)";
          break;
      case "impulso":
          variablesHtml = "I = F * t -> Força (N), Tempo (s)";
          break;
      case "potencia":
          variablesHtml = "P = T / t -> Trabalho (J), Tempo (s)";
          break;
      case "aceleracao":
          variablesHtml = "a = (vf - vi) / t -> Velocidade final (m/s), Velocidade inicial (m/s), Tempo (s)";
          break;
      case "momento-linear":
          variablesHtml = "p = m * v -> Massa (kg), Velocidade (m/s)";
          break;
      case "pressao":
          variablesHtml = "P = F / A -> Força (N), Área (m²)";
          break;
      case "frequencia-ondas":
          variablesHtml = "f = v / λ -> Velocidade (m/s), Comprimento de onda (m)";
          break;
      case "lei-hooke":
          variablesHtml = "F = k * x -> Constante Elástica (k), Deformação (x)";
          break;
      case "lei-coulomb":
          variablesHtml = "F = k * (q1 * q2) / d² -> Carga 1 (C), Carga 2 (C), Distância (m)";
          break;
      case "resistencia-eletrica":
          variablesHtml = "R = V / I -> Tensão (V), Corrente (A)";
          break;
      case "movimento-uniforme":
          variablesHtml = "S = S0 + v * t -> Posição inicial (S0), Velocidade (v), Tempo (t)";
          break;
      case "movimento-uniformemente-variado":
          variablesHtml = "S = S0 + v0 * t + (1/2) * a * t² -> Posição inicial (S0), Velocidade inicial (v0), Aceleração (a), Tempo (t)";
          break;
      case "torque":
          variablesHtml = "τ = F * r * sin(θ) -> Força (N), Raio (m), Ângulo (θ)";
          break;
  }

  container.innerHTML = `<input type="text" id="variables_fisica" placeholder="Insira as variáveis: ${variablesHtml}">`;
}

// Função de cálculo para Física
function calcularFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const variables = document.getElementById("variables_fisica").value.split(",").map(v => v.trim());
  let resultado;

  if (!validateInputs(variables)) {
      alert("Entradas inválidas! Verifique suas variáveis.");
      return;
  }

  switch (formula) {
      case "velocidade":
          resultado = calcularVelocidadeMedia(variables);
          break;
      case "trabalho":
          resultado = calcularTrabalho(variables);
          break;
      case "forca":
          resultado = calcularForca(variables);
          break;
      case "energia-cinetica":
          resultado = calcularEnergiaCinetica(variables);
          break;
      case "impulso":
          resultado = calcularImpulso(variables);
          break;
      case "potencia":
          resultado = calcularPotencia(variables);
          break;
      case "aceleracao":
          resultado = calcularAceleracao(variables);
          break;
      case "momento-linear":
          resultado = calcularMomentoLinear(variables);
          break;
      case "pressao":
          resultado = calcularPressao(variables);
          break;
      case "frequencia-ondas":
          resultado = calcularFrequenciaOndas(variables);
          break;
      case "lei-hooke":
          resultado = calcularLeiHooke(variables);
          break;
      case "lei-coulomb":
          resultado = calcularLeiCoulomb(variables);
          break;
      case "resistencia-eletrica":
          resultado = calcularResistenciaEletrica(variables);
          break;
      case "movimento-uniforme":
          resultado = calcularMovimentoUniforme(variables);
          break;
      case "movimento-uniformemente-variado":
          resultado = calcularMovimentoUniformementeVariado(variables);
          break;
  }

  document.getElementById("resultado-fisica").innerHTML = "Resultado: " + resultado;
}

// Funções de cálculo para Física
function calcularVelocidadeMedia(vars) {
  const [distancia, tempo] = vars.map(parseFloat);
  return distancia / tempo;
}

function calcularTrabalho(vars) {
  const [forca, distancia] = vars.map(parseFloat);
  return forca * distancia;
}

function calcularForca(vars) {
  const [massa, aceleracao] = vars.map(parseFloat);
  return massa * aceleracao;
}

function calcularEnergiaCinetica(vars) {
  const [massa, velocidade] = vars.map(parseFloat);
  return 0.5 * massa * velocidade ** 2;
}

function calcularImpulso(vars) {
  const [forca, tempo] = vars.map(parseFloat);
  return forca * tempo;
}

function calcularPotencia(vars) {
  const [trabalho, tempo] = vars.map(parseFloat);
  return trabalho / tempo;
}

function calcularAceleracao(vars) {
  const [vFinal, vInicial, tempo] = vars.map(parseFloat);
  return (vFinal - vInicial) / tempo;
}

function calcularMomentoLinear(vars) {
  const [massa, velocidade] = vars.map(parseFloat);
  return massa * velocidade;
}

function calcularPressao(vars) {
  const [forca, area] = vars.map(parseFloat);
  return forca / area;
}

function calcularFrequenciaOndas(vars) {
  const [velocidade, comprimento] = vars.map(parseFloat);
  return velocidade / comprimento;
}

function calcularLeiHooke(vars) {
  const [constanteElastica, deformacao] = vars.map(parseFloat);
  return constanteElastica * deformacao;
}

function calcularLeiCoulomb(vars) {
  const [q1, q2, r] = vars.map(parseFloat);
  const ke = 8.99e9;
  return (ke * q1 * q2) / (r ** 2);
}

function calcularResistenciaEletrica(vars) {
  const [tensao, corrente] = vars.map(parseFloat);
  return tensao / corrente;
}

function calcularMovimentoUniforme(vars) {
  const [posInicial, velocidade, tempo] = vars.map(parseFloat);
  return posInicial + velocidade * tempo;
}

function calcularMovimentoUniformementeVariado(vars) {
  const [posInicial, velInicial, aceleracao, tempo] = vars.map(parseFloat);
  return posInicial + velInicial * tempo + 0.5 * aceleracao * (tempo ** 2);
}

// Função para validar entradas
function validateInputs(variables) {
  for (const variable of variables) {
      if (isNaN(variable) && variable.indexOf(".") === -1) {
          return false;
      }
  }
  return true;
}

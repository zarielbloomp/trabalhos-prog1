document.addEventListener("DOMContentLoaded", function () {
  showTab("quimica");

  document.getElementById("formula").addEventListener("change", function () {
    updateVariables("quimica");
  });
  document
    .getElementById("formula_fisica")
    .addEventListener("change", function () {
      updateVariables("fisica");
    });
});

function showTab(tab) {
  document.getElementById("quimica-formulas").style.display =
    tab === "quimica" ? "block" : "none";
  document.getElementById("fisica-formulas").style.display =
    tab === "fisica" ? "block" : "none";

  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach((button) => button.classList.remove("active"));
  document.getElementById("tab-" + tab).classList.add("active");
}

function updateVariables(tab) {
  const formula =
    tab === "quimica"
      ? document.getElementById("formula").value
      : document.getElementById("formula_fisica").value;

  const variablesContainer =
    tab === "quimica" ? "variables-container" : "variables-container_fisica";
  const container = document.getElementById(variablesContainer);
  container.innerHTML = ""; // Limpar o container

  let variablesHtml = ""; // Texto para descrever as variáveis

  switch (formula) {
    // Fórmulas de Química
    case "numero-mols":
      variablesHtml = "Massa (g), Massa Molar (g/mol)";
      break;
    case "massa-molar":
      variablesHtml = "Massa (g), Mol (mol)";
      break;
    case "densidade":
      variablesHtml = "Massa (g), Volume (L)";
      break;
    case "concentracao-molar":
      variablesHtml = "Mol (mol), Volume (L)";
      break;
    case "concentracao-comum":
      variablesHtml = "Massa (g), Volume (L)";
      break;
    case "mistura-solucoes":
      variablesHtml = "Concentração1 (mol/L), Volume1 (L), Concentração2 (mol/L), Volume2 (L)";
      break;
    case "diluicao":
      variablesHtml = "Concentração inicial (mol/L), Volume inicial (L), Volume final (L)";
      break;
    case "ph":
      variablesHtml = "Concentração H+ (mol/L)";
      break;
    case "poh":
      variablesHtml = "Concentração OH- (mol/L)";
      break;
    case "constante-equilibrio":
      variablesHtml = "Concentração A, Coeficiente A, Concentração B, Coeficiente B, Concentração C, Coeficiente C, Concentração D, Coeficiente D";
      break;
    case "calor-sensivel":
      variablesHtml = "Massa (kg), Calor específico (J/kg°C), Variação de temperatura (°C)";
      break;
    case "calor-latente":
      variablesHtml = "Massa (kg), Calor latente (J/kg)";
      break;
    case "energia-ligacao":
      variablesHtml = "Energia dos Produtos (J), Energia dos Reagentes (J)";
      break;
    case "lei-raoult":
      variablesHtml = "Pressão Pura (Pa), Fração Molar";
      break;
    case "lei-ideal-gases":
      variablesHtml = "Volume (L), Mols (n), Temperatura (K)";
      break;
    case "velocidade-reacao":
      variablesHtml = "Concentração inicial (mol/L), Concentração final (mol/L), Tempo (s)";
      break;

    // Fórmulas de Física
    case "velocidade":
      variablesHtml = "Distância (m), Tempo (s)";
      break;
    case "trabalho":
      variablesHtml = "Força (N), Distância (m)";
      break;
    case "massa-buraco":
      variablesHtml = "Raio Schwarzschild (m)";
      break;
    case "forca":
      variablesHtml = "Massa (kg), Aceleração (m/s²)";
      break;
    case "energia-cinetica":
      variablesHtml = "Massa (kg), Velocidade (m/s)";
      break;
    case "impulso":
      variablesHtml = "Força (N), Tempo (s)";
      break;
    case "potencia":
      variablesHtml = "Trabalho (J), Tempo (s)";
      break;
    case "aceleracao":
      variablesHtml = "Velocidade final (m/s), Velocidade inicial (m/s), Tempo (s)";
      break;
    case "momento-linear":
      variablesHtml = "Massa (kg), Velocidade (m/s)";
      break;
    case "pressao":
      variablesHtml = "Força (N), Área (m²)";
      break;
    case "frequencia-ondas":
      variablesHtml = "Velocidade (m/s), Comprimento de onda (m)";
      break;
    case "lei-hooke":
      variablesHtml = "Constante Elástica (k), Deformação (x)";
      break;
    case "lei-coulomb":
      variablesHtml = "Carga 1 (C), Carga 2 (C), Distância (m)";
      break;
    case "resistencia-eletrica":
      variablesHtml = "Tensão (V), Corrente (A)";
      break;
  }

  // Adiciona o campo de input com o placeholder das variáveis
  container.innerHTML = `
    <input type="text" id="variables_${tab}" placeholder="Insira as variáveis: ${variablesHtml}" />
  `;
}


function calcular(tab) {
  const formula =
    tab === "quimica"
      ? document.getElementById("formula").value
      : document.getElementById("formula_fisica").value;
  const variables = document
    .getElementById(`variables_${tab}`)
    .value.split(",")
    .map((v) => v.trim());
  let resultado;

  if (!validateInputs(variables)) {
    alert("Entradas inválidas! Verifique suas variáveis.");
    return;
  }

  switch (formula) {
    case "numero-mols":
      resultado = calcularNumeroMols(variables);
      break;
    case "massa-molar":
      resultado = calcularMassaMolar(variables);
      break;
    case "densidade":
      resultado = calcularDensidade(variables);
      break;
    case "concentracao-molar":
      resultado = calcularConcentracaoMolar(variables);
      break;
    case "concentracao-comum":
      resultado = calcularConcentracaoComum(variables);
      break;
    case "mistura-solucoes":
      resultado = calcularMisturaSolucoes(variables);
      break;
    case "diluicao":
      resultado = calcularDiluicao(variables);
      break;
    case "ph":
      resultado = calcularPh(variables);
      break;
    case "poh":
      resultado = calcularPoh(variables);
      break;
    case "constante-equilibrio":
      resultado = calcularConstanteEquilibrio(variables);
      break;
    case "calor-sensivel":
      resultado = calcularCalorSensivel(variables);
      break;
    case "calor-latente":
      resultado = calcularCalorLatente(variables);
      break;
    case "energia-ligacao":
      resultado = calcularEnergiaLigacao(variables);
      break;
    case "lei-raoult":
      resultado = calcularLeiRaoult(variables);
      break;
    case "lei-ideal-gases":
      resultado = calcularLeiGasesIdeais(variables);
      break;
    case "velocidade-reacao":
      resultado = calcularVelocidadeReacao(variables);
      break;
    case "velocidade":
      resultado = calcularVelocidadeMedia(variables);
      break;
    case "trabalho":
      resultado = calcularTrabalho(variables);
      break;
    case "massa-buraco":
      resultado = calcularMassaBuracoNegro(variables);
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
    case "calor-especifico":
      resultado = calcularCalorEspecifico(variables);
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
  }

  if (tab === "quimica") {
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
  } else if (tab === "fisica") {
    document.getElementById("resultado-fisica").innerHTML =
      "Resultado: " + resultado;
  }
}


function validateInputs(variables) {
  for (const variable of variables) {
    if (isNaN(variable) || variable === '') {
      return false;
    }
  }
  return true;
}

// Funções de cálculo para cada fórmula

// Fórmulas de Química
function calcularNumeroMols(vars) {
  const [massa, massaMolar] = vars.map(parseFloat);
  return massa / massaMolar;
}

function calcularMassaMolar(vars) {
  const [massa, mol] = vars.map(parseFloat);
  return massa / mol;
}

function calcularDensidade(vars) {
  const [massa, volume] = vars.map(parseFloat);
  return massa / volume;
}

function calcularConcentracaoMolar(vars) {
  const [mol, volume] = vars.map(parseFloat);
  return mol / volume;
}

function calcularConcentracaoComum(vars) {
  const [massa, volume] = vars.map(parseFloat);
  return massa / volume;
}

function calcularMisturaSolucoes(vars) {
  const [c1, v1, c2, v2] = vars.map(parseFloat);
  return (c1 * v1 + c2 * v2) / (v1 + v2);
}

function calcularDiluicao(vars) {
  const [c1, v1, vf] = vars.map(parseFloat);
  return (c1 * v1) / vf;
}

function calcularPh(vars) {
  const [h] = vars.map(parseFloat);
  return -Math.log10(h);
}

function calcularPoh(vars) {
  const [oh] = vars.map(parseFloat);
  return -Math.log10(oh);
}

function calcularConstanteEquilibrio(vars) {
  const [concentracaoA, coeficienteA, concentracaoB, coeficienteB, concentracaoC, coeficienteC, concentracaoD, coeficienteD] = vars.map(parseFloat);
  const produtos = Math.pow(concentracaoC, coeficienteC) * Math.pow(concentracaoD, coeficienteD);
  const reagentes = Math.pow(concentracaoA, coeficienteA) * Math.pow(concentracaoB, coeficienteB);
  return produtos / reagentes;
}

function calcularCalorSensivel(vars) {
  const [massa, calorEspecifico, deltaTemp] = vars.map(parseFloat);
  return massa * calorEspecifico * deltaTemp;
}

function calcularCalorLatente(vars) {
  const [massa, calorLatente] = vars.map(parseFloat);
  return massa * calorLatente;
}

function calcularEnergiaLigacao(vars) {
  const [energiaProdutos, energiaReagentes] = vars.map(parseFloat);
  return energiaProdutos - energiaReagentes;
}

function calcularLeiRaoult(vars) {
  const [pressaoPura, fracaoMolar] = vars.map(parseFloat);
  return pressaoPura * fracaoMolar;
}

function calcularLeiGasesIdeais(vars) {
  const [volume, mols, temp] = vars.map(parseFloat); 
  const R = 8.314;
  return (mols * R * temp) / volume;
}

function calcularVelocidadeReacao(vars) {
  const [concentracaoInicial, concentracaoFinal, tempo] = vars.map(parseFloat);
  return (concentracaoFinal - concentracaoInicial) / tempo;
}

// Fórmulas de Física
function calcularVelocidadeMedia(vars) {
  const [distancia, tempo] = vars.map(parseFloat);
  return distancia / tempo;
}

function calcularTrabalho(vars) {
  const [forca, distancia] = vars.map(parseFloat);
  return forca * distancia;
}

function calcularMassaBuracoNegro(vars) {
  const [raio] = vars.map(parseFloat);
  const G = 6.6743e-11;
  const c = 299792458;
  return (raio * c ** 2) / (2 * G);
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
  return forca / area; // P = F / A
}

function calcularFrequenciaOndas(vars) {
  const [velocidade, comprimento] = vars.map(parseFloat);
  return velocidade / comprimento; // f = v / λ
}

function calcularLeiHooke(vars) {
  const [constanteElastica, deformacao] = vars.map(parseFloat);
  return constanteElastica * deformacao;
}

function calcularLeiCoulomb(vars) {
  const [q1, q2, r] = vars.map(parseFloat);
  const ke = 8.99e9; // Constante de Coulomb
  return (ke * q1 * q2) / (r ** 2);
}

function calcularResistenciaEletrica(vars) {
  const [tensao, corrente] = vars.map(parseFloat);
  return tensao / corrente; // V = IR → R = V/I
}

function calcularBernoulli(vars) {
  const [pressao, densidade, velocidade, altura] = vars.map(parseFloat);
  const g = 9.8; // Aceleração da gravidade
  return pressao + 0.5 * densidade * velocidade ** 2 + densidade * g * altura;
}

function calcularCampoEletrico(vars) {
  const [forca, carga] = vars.map(parseFloat);
  return forca / carga;
}

function calcularGravidadeUniversal(vars) {
  const [massa1, massa2, distancia] = vars.map(parseFloat);
  const G = 6.6743e-11; // Constante gravitacional
  return (G * massa1 * massa2) / (distancia ** 2);
}

function calcularCalorEspecifico(vars) {
  const [quantidadeCalor, massa, deltaTemp] = vars.map(parseFloat);
  return quantidadeCalor / (massa * deltaTemp); // c = Q / (m * ΔT)
}

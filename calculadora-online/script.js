const R = 8.314;

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

  document
    .getElementById("variables_quimica")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        calcular("quimica");
      }
    });

  document
    .getElementById("variables_fisica")
    .addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        calcular("fisica");
      }
    });

  document
    .getElementById("variables_quimica")
    .addEventListener("click", function () {
      calcular("quimica");
    });

  document
    .getElementById("variables_fisica")
    .addEventListener("click", function () {
      calcular("fisica");
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
  container.innerHTML = "";
  let variablesHtml = "";

  switch (formula) {
    case "numero-mols":
      variablesHtml = "Massa (g), Massa Molar (g/mol)";
      break;
    case "massa-molar":
      variablesHtml = "Massa (g), Número de mols (mol)";
      break;
    case "densidade":
      variablesHtml = "Massa (g), Volume (L)";
      break;
    case "concentracao-molar":
      variablesHtml = "Número de mols (mol), Volume (L)";
      break;
    case "concentracao-comum":
      variablesHtml = "Massa (g), Volume (L)";
      break;
    case "mistura-solucoes":
      variablesHtml =
        "Concentração inicial (M), Volume inicial (L), Concentração final (M), Volume final (L)";
      break;
    case "diluicao":
      variablesHtml =
        "Concentração inicial (M), Volume inicial (L), Concentração final (M)";
      break;
    case "ph":
      variablesHtml = "Concentração de H+ (M)";
      break;
    case "poh":
      variablesHtml = "Concentração de OH- (M)";
      break;
    case "formula-gases":
      variablesHtml =
        "Pressão (Pa), Volume (L), Número de mols (mol), Temperatura (K)";
      break;
    case "lei-de-hooke":
      variablesHtml = "Força (N), Deformação (m), Constante de Hooke (N/m)";
      break;
    case "energia-cinetica":
      variablesHtml = "Massa (kg), Velocidade (m/s)";
      break;
    case "energia-potencial":
      variablesHtml = "Massa (kg), Altura (m), Gravidade (m/s²)";
      break;
    default:
      variablesHtml = "";
  }

  console.log(`Updating variables for ${formula}`);

  container.innerHTML = `
      <select id="variable-to-solve">
        ${getVariableOptions(formula)
          .map((option) => `<option value="${option}">${option}</option>`)
          .join("")}
      </select>
      <input type="text" id="variables_${tab}" placeholder="Insira as variáveis: ${variablesHtml}">
    `;
}

function getVariableOptions(formula) {
  switch (formula) {
    case "numero-mols":
      return ["n", "m", "M"];
    case "massa-molar":
      return ["M", "m", "n"];
    case "densidade":
      return ["d", "m", "V"];
    case "concentracao-molar":
      return ["C", "n", "V"];
    case "concentracao-comum":
      return ["C", "m", "V"];
    case "mistura-solucoes":
      return ["C1", "V1", "C2", "V2"];
    case "diluicao":
      return ["C1", "V1", "C2"];
    case "ph":
      return ["pH", "C"];
    case "poh":
      return ["pOH", "C"];
    case "formula-gases":
      return ["P", "V", "n", "T"];
    case "lei-de-hooke":
      return ["F", "x", "k"];
    case "energia-cinetica":
      return ["E", "m", "v"];
    case "energia-potencial":
      return ["E", "m", "h", "g"];
    default:
      return [];
  }
}

function calcular(tab) {
  const formula =
    tab === "quimica"
      ? document.getElementById("formula").value
      : document.getElementById("formula_fisica").value;
  const variableToSolve = document.getElementById("variable-to-solve").value;
  const variables = document
    .getElementById(`variables_${tab}`)
    .value.split(",")
    .map((v) => v.trim());
  let resultado;

  console.log(`Calculating for ${formula} and ${variableToSolve}`);

  if (!validateInputs(variables)) {
    alert("Entradas inválidas! Verifique suas variáveis.");
    return;
  }

  try {
    switch (formula) {
      case "numero-mols":
        resultado = calcularNumeroMols(variables, variableToSolve);
        break;
      case "massa-molar":
        resultado = calcularMassaMolar(variables, variableToSolve);
        break;
      case "densidade":
        resultado = calcularDensidade(variables, variableToSolve);
        break;
      case "concentracao-molar":
        resultado = calcularConcentracaoMolar(variables, variableToSolve);
        break;
      case "concentracao-comum":
        resultado = calcularConcentracaoComum(variables, variableToSolve);
        break;
      case "mistura-solucoes":
        resultado = calcularMisturaSolucoes(variables, variableToSolve);
        break;
      case "diluicao":
        resultado = calcularDiluicao(variables, variableToSolve);
        break;
      case "ph":
        resultado = calcularPH(variables, variableToSolve);
        break;
      case "poh":
        resultado = calcularPOH(variables, variableToSolve);
        break;
      case "formula-gases":
        resultado = calcularFormulaGases(variables, variableToSolve);
        break;
      case "lei-de-hooke":
        resultado = calcularLeiDeHooke(variables, variableToSolve);
        break;
      case "energia-cinetica":
        resultado = calcularEnergiaCinetica(variables, variableToSolve);
        break;
      case "energia-potencial":
        resultado = calcularEnergiaPotencial(variables, variableToSolve);
        break;
        case "massa-buraco-negro":
          resultado = calcularMassaBuracoNegro(variables, variableToSolve);
          break;
        case "velocidade-media":
          resultado = calcularVelocidadeMedia(variables, variableToSolve);
          break;
        case "trabalho":
          resultado = calcularTrabalho(variables, variableToSolve);
          break;
        default:
          resultado = null;
    }

    if (resultado === null) {
      alert("Fórmula inválida! Verifique sua fórmula.");
      return;
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
  } catch (error) {
    console.error(error);
    alert("Ocorreu um erro durante o cálculo. Tente novamente.");
  }
}

function validateInputs(variables) {
  for (const variable of variables) {
    if (isNaN(variable) && variable.indexOf(".") === -1) {
      return false;
    }
  }
  return true;
}

// Funções de cálculo para cada fórmula
function calcularNumeroMols(vars, variableToSolve) {
  const [m, M] = vars.map(parseFloat);
  if (variableToSolve === "n") {
    return m / M;
  } else if (variableToSolve === "m") {
    return n * M;
  } else if (variableToSolve === "M") {
    return m / n;
  } else {
    return null;
  }
}

function calcularMassaMolar(vars, variableToSolve) {
  const [M, m, n] = vars.map(parseFloat);
  if (variableToSolve === "M") {
    return m / n;
  } else if (variableToSolve === "m") {
    return M * n;
  } else if (variableToSolve === "n") {
    return m / M;
  } else {
    return null;
  }
}

function calcularDensidade(vars, variableToSolve) {
  const [d, m, V] = vars.map(parseFloat);
  if (variableToSolve === "d") {
    return m / V;
  } else if (variableToSolve === "m") {
    return d * V;
  } else if (variableToSolve === "V") {
    return m / d;
  } else {
    return null;
  }
}

function calcularConcentracaoMolar(vars, variableToSolve) {
  const [C, n, V] = vars.map(parseFloat);
  if (variableToSolve === "C") {
    return n / V;
  } else if (variableToSolve === "n") {
    return C * V;
  } else if (variableToSolve === "V") {
    return n / C;
  } else {
    return null;
  }
}

function calcularConcentracaoComum(vars, variableToSolve) {
  const [C, m, V] = vars.map(parseFloat);
  if (variableToSolve === "C") {
    return m / V;
  } else if (variableToSolve === "m") {
    return C * V;
  } else if (variableToSolve === "V") {
    return m / C;
  } else {
    return null;
  }
}

function calcularMisturaSolucoes(vars, variableToSolve) {
  const [C1, V1, C2, V2] = vars.map(parseFloat);
  if (variableToSolve === "C1") {
    return (C1 * V1 + C2 * V2) / V1;
  } else if (variableToSolve === "V1") {
    return (C1 * V1 + C2 * V2) / C1;
  } else if (variableToSolve === "C2") {
    return (C1 * V1 + C2 * V2) / V2;
  } else if (variableToSolve === "V2") {
    return (C1 * V1 + C2 * V2) / C2;
  } else {
    return null;
  }
}

function calcularDiluicao(vars, variableToSolve) {
  const [C1, V1, C2] = vars.map(parseFloat);
  if (variableToSolve === "C1") {
    return (C2 * V1) / V2;
  } else if (variableToSolve === "V1") {
    return (C2 * V1) / C1;
  } else if (variableToSolve === "C2") {
    return (C1 * V2) / V1;
  } else {
    return null;
  }
}

function calcularPH(vars, variableToSolve) {
  const [pH, C] = vars.map(parseFloat);
  if (variableToSolve === "pH") {
    return -Math.log10(C);
  } else if (variableToSolve === "C") {
    return Math.pow(10, -pH);
  } else {
    return null;
  }
}

function calcularPOH(vars, variableToSolve) {
  const [pOH, C] = vars.map(parseFloat);
  if (variableToSolve === "pOH") {
    return -Math.log10(C);
  } else if (variableToSolve === "C") {
    return Math.pow(10, -pOH);
  } else {
    return null;
  }
}

function calcularFormulaGases(vars, variableToSolve) {
  const [P, V, n, T] = vars.map(parseFloat);
  if (variableToSolve === "P") {
    return (n * R * T) / V;
  } else if (variableToSolve === "V") {
    return (n * R * T) / P;
  } else if (variableToSolve === "n") {
    return (P * V) / (R * T);
  } else if (variableToSolve === "T") {
    return (P * V) / (n * R);
  } else {
    return null;
  }
}

function calcularLeiDeHooke(vars, variableToSolve) {
  const [F, x, k] = vars.map(parseFloat);
  if (variableToSolve === "F") {
    return k * x;
  } else if (variableToSolve === "x") {
    return F / k;
  } else if (variableToSolve === "k") {
    return F / x;
  } else {
    return null;
  }
}

function calcularEnergiaCinetica(vars, variableToSolve) {
  const [E, m, v] = vars.map(parseFloat);
  if (variableToSolve === "E") {
    return 0.5 * m * v ** 2;
  } else if (variableToSolve === "m") {
    return (2 * E) / v ** 2;
  } else if (variableToSolve === "v") {
    return Math.sqrt((2 * E) / m);
  } else {
    return null;
  }
}

function calcularEnergiaPotencial(vars, variableToSolve) {
  const [E, m, h, g] = vars.map(parseFloat);
  if (variableToSolve === "E") {
    return m * g * h;
  } else if (variableToSolve === "m") {
    return E / (g * h);
  } else if (variableToSolve === "h") {
    return E / (m * g);
  } else if (variableToSolve === "g") {
    return E / (m * h);
  } else {
    return null;
  }
}

function calcularMassaBuracoNegro(vars, variableToSolve) {
  const [M, G, c] = vars.map(parseFloat);
  if (variableToSolve === "M") {
    return c ** 2 / (2 * G);
  } else if (variableToSolve === "G") {
    return c ** 2 / (2 * M);
  } else if (variableToSolve === "c") {
    return Math.sqrt(2 * G * M);
  } else {
    return null;
  }
}

function calcularVelocidadeMedia(vars, variableToSolve) {
  const [v, d, t] = vars.map(parseFloat);
  if (variableToSolve === "v") {
    return d / t;
  } else if (variableToSolve === "d") {
    return v * t;
  } else if (variableToSolve === "t") {
    return d / v;
  } else {
    return null;
  }
}

function calcularTrabalho(vars, variableToSolve) {
  const [W, F, d] = vars.map(parseFloat);
  if (variableToSolve === "W") {
    return F * d;
  } else if (variableToSolve === "F") {
    return W / d;
  } else if (variableToSolve === "d") {
    return W / F;
  } else {
    return null;
  }
}

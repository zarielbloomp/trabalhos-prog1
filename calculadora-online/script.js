const R = 8.314;

document.addEventListener("DOMContentLoaded", function () {
  showTab("quimica");

  document.getElementById("formula").addEventListener("change", function () {
    updateVariables("quimica");
  });
  document.getElementById("formula_fisica").addEventListener("change", function () {
    updateVariables("fisica");
  });

  document.getElementById("variables_quimica").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calcular("quimica");
    }
  });

  document.getElementById("variables_fisica").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calcular("fisica");
    }
  });

  document.getElementById("variables_quimica").addEventListener("click", function () {
    calcular("quimica");
  });

  document.getElementById("variables_fisica").addEventListener("click", function () {
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

  if (!validateInputs(variables)) {
    alert("Entradas inválidas! Verifique suas variáveis.");
    return;
  }

  switch (formula) {
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
  }

  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
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
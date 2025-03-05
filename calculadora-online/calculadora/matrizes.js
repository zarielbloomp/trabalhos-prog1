document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formula_matriz")
    .addEventListener("change", updateVariablesMatriz);
});

// Contador para o número de matrizes por operação
const matrizCounters = {
  adicao: 0,
  subtracao: 0,
  multiplicacao: 0,
  determinante: 0,
  inversa: 0,
  transposta: 0,
};

const MAX_MATRICES = 5; // Limite máximo para o número de matrizes por operação
const matrices = {
  adicao: [],
  subtracao: [],
  multiplicacao: [],
  determinante: [],
  inversa: [],
  transposta: [],
}; // Armazena as matrizes separadamente por operação

// Função para atualizar a interface com base na operação de matriz selecionada
function updateVariablesMatriz() {
  const formula = document.getElementById("formula_matriz").value;
  const container = document.getElementById("variables-container_matriz");

  // Limpa o conteúdo anterior
  container.innerHTML = "";

  // Exibe campos de entrada para matrizes
  container.innerHTML = `
    <p>Insira o tamanho da matriz:</p>
    <input type="number" id="matrix-rows" min="1" max="10" placeholder="Linhas da matriz (1-10)" style="margin-bottom: 10px;">
    <input type="number" id="matrix-columns" min="1" max="10" placeholder="Colunas da matriz (1-10)" style="margin-bottom: 10px;">
    <div id="matrix-container"></div>
    <div id="warning" style="color: red;"></div>
    <button onclick="gerarCamposMatriz('${formula}')" style="margin-top: 10px;">Gerar Matriz</button>
  `;
}

// Função para gerar campos de entrada para a matriz
function gerarCamposMatriz(formula) {
  const rows = parseInt(document.getElementById("matrix-rows").value);
  const cols = parseInt(document.getElementById("matrix-columns").value);
  const matrixContainer = document.getElementById("matrix-container");
  const warning = document.getElementById("warning");

  warning.innerHTML = ""; // Limpa avisos anteriores

  if (
    isNaN(rows) ||
    rows < 1 ||
    rows > 10 ||
    isNaN(cols) ||
    cols < 1 ||
    cols > 10
  ) {
    warning.innerHTML =
      "Insira um valor válido para o tamanho da matriz (1 a 10).";
    return;
  }

  if (matrizCounters[formula] >= MAX_MATRICES) {
    warning.innerHTML =
      "Você pode criar no máximo " + MAX_MATRICES + " matrizes.";
    return;
  }

  // Limpa o container de matriz se for a primeira matriz
  if (matrizCounters[formula] === 0) {
    matrixContainer.innerHTML = "";
  }

  matrizCounters[formula]++; // Incrementa o contador de matrizes para a operação selecionada

  const matrizDiv = document.createElement("div");
  matrizDiv.innerHTML = `<h3>Matriz ${matrizCounters[formula]}</h3>`;
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.marginBottom = "10px";

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.style.border = "1px solid black";
      cell.style.padding = "5px";
      cell.innerHTML = `<input type="number" id="cell-${formula}-${matrizCounters[formula]}-${i}-${j}" placeholder="(${i},${j})" style="width: 60px; text-align: center;">`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  matrizDiv.appendChild(table);
  matrixContainer.appendChild(matrizDiv);
  matrices[formula].push({ rows, cols }); // Armazena a matriz para a operação selecionada

  // Mover o botão de calcular para o final após cada nova matriz
  if (document.getElementById("calcular-container")) {
    document.getElementById("calcular-container").remove();
  }

  const calcularDiv = document.createElement("div");
  calcularDiv.id = "calcular-container";
  calcularDiv.innerHTML = `<button id="calcular-button" onclick="calcularMatriz('${formula}')">Calcular</button>`;
  matrixContainer.appendChild(calcularDiv);
}

// Função para criar a matriz com base nas entradas do usuário
function criarMatriz(m, formula) {
  const matrizData = matrices[formula][m - 1];
  const rows = matrizData.rows;
  const cols = matrizData.cols;
  const matriz = [];

  for (let i = 0; i < rows; i++) {
    const linha = [];
    for (let j = 0; j < cols; j++) {
      const valor = parseFloat(
        document.getElementById(`cell-${formula}-${m}-${i}-${j}`).value
      );
      if (isNaN(valor)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
      }
      linha.push(valor);
    }
    matriz.push(linha);
  }
  return matriz;
}

// Função para calcular a operação selecionada
function calcularMatriz(formula) {
  const todasMatrizes = matrices[formula].map((_, index) =>
    criarMatriz(index + 1, formula)
  );
  let resultado;
  const warning = document.getElementById("warning");

  switch (formula) {
    case "determinante":
      if (todasMatrizes[0].length !== todasMatrizes[0][0].length) {
        warning.innerHTML =
          "Determinante só suportado para matrizes quadradas.";
        return;
      }
      resultado = calcularDeterminante(todasMatrizes[0]);
      break;
    case "inversa":
      if (todasMatrizes[0].length !== todasMatrizes[0][0].length) {
        warning.innerHTML = "Inversa só suportada para matrizes quadradas.";
        return;
      }
      resultado = calcularInversa(todasMatrizes[0]);
      break;
    case "transposta":
      resultado = calcularTransposta(todasMatrizes[0]);
      break;
    case "adicao":
      if (todasMatrizes.length < 2) {
        warning.innerHTML =
          "São necessárias pelo menos 2 matrizes para a adição.";
        return;
      }
      if (!verificarCompatibilidade(todasMatrizes)) {
        warning.innerHTML =
          "As matrizes devem ter o mesmo tamanho para a operação.";
        return;
      }
      resultado = todasMatrizes.reduce((acc, matriz) =>
        calcularAdicao(acc, matriz)
      );
      break;
    case "subtracao":
      if (todasMatrizes.length < 2) {
        warning.innerHTML =
          "São necessárias pelo menos 2 matrizes para a subtração.";
        return;
      }
      if (!verificarCompatibilidade(todasMatrizes)) {
        warning.innerHTML =
          "As matrizes devem ter o mesmo tamanho para a operação.";
        return;
      }
      resultado = todasMatrizes.reduce((acc, matriz) =>
        calcularSubtracao(acc, matriz)
      );
      break;
    case "multiplicacao":
      if (todasMatrizes.length < 2) {
        warning.innerHTML =
          "São necessárias pelo menos 2 matrizes para a multiplicação.";
        return;
      }
      if (!verificarCompatibilidadeMultiplicacao(todasMatrizes)) {
        warning.innerHTML =
          "As matrizes não têm dimensões compatíveis para multiplicação.";
        return;
      }
      resultado = todasMatrizes.reduce((acc, matriz) =>
        calcularMultiplicacao(acc, matriz)
      );
      break;
  }

  // Exibir o resultado formatado com LaTeX
  const resultadoContainer = document.getElementById("resultado-matriz");
  resultadoContainer.innerHTML =
    "Resultado: $$" + formatResultado(resultado) + "$$";
  MathJax.typeset(); // Reprocessa o MathJax para renderizar o resultado em LaTeX
}

// Funções de cálculo para operações de matriz
function calcularAdicao(matriz1, matriz2) {
  const resultado = [];
  for (let i = 0; i < matriz1.length; i++) {
    const linha = [];
    for (let j = 0; j < matriz1[i].length; j++) {
      linha.push(matriz1[i][j] + matriz2[i][j]);
    }
    resultado.push(linha);
  }
  return resultado;
}

function calcularSubtracao(matriz1, matriz2) {
  const resultado = [];
  for (let i = 0; i < matriz1.length; i++) {
    const linha = [];
    for (let j = 0; j < matriz1[i].length; j++) {
      linha.push(matriz1[i][j] - matriz2[i][j]);
    }
    resultado.push(linha);
  }
  return resultado;
}

function calcularMultiplicacao(matriz1, matriz2) {
  const resultado = [];
  for (let i = 0; i < matriz1.length; i++) {
    resultado[i] = [];
    for (let j = 0; j < matriz2[0].length; j++) {
      resultado[i][j] = 0;
      for (let k = 0; k < matriz1[0].length; k++) {
        resultado[i][j] += matriz1[i][k] * matriz2[k][j];
      }
    }
  }
  return resultado;
}

// Função para calcular o determinante (para matrizes 2x2 ou 3x3)
function calcularDeterminante(matriz) {
  if (matriz.length === 2 && matriz[0].length === 2) {
    return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
  } else if (matriz.length === 3 && matriz[0].length === 3) {
    return (
      matriz[0][0] *
        (matriz[1][1] * matriz[2][2] - matriz[1][2] * matriz[2][1]) -
      matriz[0][1] *
        (matriz[1][0] * matriz[2][2] - matriz[1][2] * matriz[2][0]) +
      matriz[0][2] * (matriz[1][0] * matriz[2][1] - matriz[1][1] * matriz[2][0])
    );
  } else {
    return "Determinante só suportado para matrizes 2x2 ou 3x3.";
  }
}

// Função para calcular a inversa de uma matriz
function calcularInversa(matriz) {
  const n = matriz.length;
  const identidade = [];

  // Inicializa a matriz identidade
  for (let i = 0; i < n; i++) {
    identidade[i] = [];
    for (let j = 0; j < n; j++) {
      identidade[i][j] = i === j ? 1 : 0;
    }
  }

  // Cria a matriz aumentada
  for (let i = 0; i < n; i++) {
    matriz[i] = matriz[i].concat(identidade[i]);
  }

  for (let i = 0; i < n; i++) {
    let maxRow = i;
    for (let k = i + 1; k < n; k++) {
      if (Math.abs(matriz[k][i]) > Math.abs(matriz[maxRow][i])) {
        maxRow = k;
      }
    }
    if (maxRow !== i) {
      const temp = matriz[i];
      matriz[i] = matriz[maxRow];
      matriz[maxRow] = temp;
    }

    const pivot = matriz[i][i];
    if (pivot === 0) {
      return "Matriz singular (sem inversa).";
    }
    for (let j = 0; j < 2 * n; j++) {
      matriz[i][j] /= pivot;
    }

    for (let k = 0; k < n; k++) {
      if (k !== i) {
        const factor = matriz[k][i];
        for (let j = 0; j < 2 * n; j++) {
          matriz[k][j] -= factor * matriz[i][j];
        }
      }
    }
  }

  // Extrai a matriz inversa
  const inversa = [];
  for (let i = 0; i < n; i++) {
    inversa[i] = matriz[i].slice(n, 2 * n);
  }

  return inversa;
}

// Função para calcular a transposta de uma matriz
function calcularTransposta(matriz) {
  return matriz[0].map((_, colIndex) => matriz.map((row) => row[colIndex]));
}

// Função para formatar o resultado para exibição em LaTeX
function formatResultado(resultado) {
  if (typeof resultado === "string") {
    return resultado;
  }

  return (
    "\\begin{bmatrix}" +
    resultado
      .map((row) =>
        row
          .map((value) => (Number.isInteger(value) ? value : value.toFixed(0)))
          .join(" & ")
      )
      .join("\\\\") +
    "\\end{bmatrix}"
  );
}

// Função para verificar compatibilidade de adição/subtração (mesmo tamanho)
function verificarCompatibilidade(matrizes) {
  const [linhas, colunas] = [matrizes[0].length, matrizes[0][0].length];
  return matrizes.every(
    (matriz) => matriz.length === linhas && matriz[0].length === colunas
  );
}

// Função para verificar compatibilidade de multiplicação (colunas de uma == linhas de outra)
function verificarCompatibilidadeMultiplicacao(matrizes) {
  for (let i = 0; i < matrizes.length - 1; i++) {
    if (matrizes[i][0].length !== matrizes[i + 1].length) {
      return false;
    }
  }
  return true;
}

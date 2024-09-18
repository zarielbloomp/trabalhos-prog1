document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formula_matriz")
    .addEventListener("change", updateVariablesMatriz);
});

// Função para atualizar a interface com base na operação de matriz selecionada
function updateVariablesMatriz() {
  const formula = document.getElementById("formula_matriz").value;
  const container = document.getElementById("variables-container_matriz");
  container.innerHTML = "";

  let matrixSizeHtml = "";

  switch (formula) {
    case "determinante":
    case "inversa":
    case "transposta":
      matrixSizeHtml = "Insira o tamanho da matriz (Ex: 2 para 2x2, 3 para 3x3): ";
      break;
  }

  container.innerHTML = `
    <input type="number" id="matrix-size" placeholder="Tamanho da matriz (Ex: 2 para 2x2)" style="margin-bottom: 10px;">
    <div id="matrix-container"></div>
    <button onclick="gerarCamposMatriz()" style="margin-top: 10px;">Gerar Matriz</button>
  `;
}

// Função para gerar campos de entrada para a matriz
function gerarCamposMatriz() {
  const size = parseInt(document.getElementById("matrix-size").value);
  const matrixContainer = document.getElementById("matrix-container");

  if (isNaN(size) || size <= 0) {
    alert("Insira um valor válido para o tamanho da matriz.");
    return;
  }

  matrixContainer.innerHTML = ""; // Limpa o container de matriz

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";
  table.style.marginBottom = "10px";

  for (let i = 0; i < size; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("td");
      cell.style.border = "1px solid black";
      cell.style.padding = "5px";
      cell.innerHTML = `<input type="number" id="cell-${i}-${j}" placeholder="(${i},${j})" style="width: 50px; text-align: center;">`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  matrixContainer.appendChild(table);
  matrixContainer.innerHTML += `<button onclick="calcularMatriz()">Calcular</button>`;
}

// Função para calcular a operação selecionada (determinante, inversa, transposta)
function calcularMatriz() {
  const formula = document.getElementById("formula_matriz").value;
  const size = parseInt(document.getElementById("matrix-size").value);
  const matriz = criarMatriz(size, size);

  let resultado;

  switch (formula) {
    case "determinante":
      resultado = calcularDeterminante(matriz);
      break;
    case "inversa":
      resultado = calcularInversa(matriz);
      break;
    case "transposta":
      resultado = calcularTransposta(matriz);
      break;
  }

  document.getElementById("resultado-matriz").innerHTML = "Resultado: <pre>" + formatResultado(resultado) + "</pre>";
}

// Função para criar a matriz com base nas entradas do usuário
function criarMatriz(linhas, colunas) {
  const matriz = [];
  for (let i = 0; i < linhas; i++) {
    const linha = [];
    for (let j = 0; j < colunas; j++) {
      const valor = parseFloat(document.getElementById(`cell-${i}-${j}`).value);
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

// Função para calcular o determinante (para matrizes 2x2 ou 3x3)
function calcularDeterminante(matriz) {
  if (matriz.length === 2 && matriz[0].length === 2) {
    return matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
  } else if (matriz.length === 3 && matriz[0].length === 3) {
    return (
      matriz[0][0] * (matriz[1][1] * matriz[2][2] - matriz[1][2] * matriz[2][1]) -
      matriz[0][1] * (matriz[1][0] * matriz[2][2] - matriz[1][2] * matriz[2][0]) +
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
  const transposta = matriz[0].map((_, colIndex) =>
    matriz.map((row) => row[colIndex])
  );
  return transposta;
}
// Função para formatar o resultado para exibição
function formatResultado(resultado) {
  if (typeof resultado === "string") {
    return resultado;
  }
  
  return resultado.map(row => row.map(value => value.toFixed(2)).join(" | ")).join("\n");
}

// Adiciona evento de mudança ao elemento de seleção de fórmula
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formula_matriz")
    .addEventListener("change", updateVariablesMatriz);
});

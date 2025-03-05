document.addEventListener("DOMContentLoaded", function () {
  const formulaMatriz = document.getElementById("formula_matriz");
  if (formulaMatriz) {
    formulaMatriz.addEventListener("change", updateVariablesMatriz);
  } else {
    console.error('Elemento "formula_matriz" não encontrado.');
  }
});

// Função para atualizar a interface de acordo com a operação escolhida
function updateVariablesMatriz() {
  const formula = document.getElementById("formula_matriz").value;
  const container = document.getElementById("variables-container_matriz");

  // Limpa o conteúdo anterior
  container.innerHTML = "";

  // Exibe campos de entrada para matrizes
  container.innerHTML = `
      <p>Insira o tamanho da matriz:</p>
      <input type="number" id="matrix-rows" min="1" max="10" placeholder="Linhas (1-10)">
      <input type="number" id="matrix-columns" min="1" max="10" placeholder="Colunas (1-10)">
      <button onclick="gerarCamposMatriz('${formula}')">Gerar Matriz</button>
      <div id="matrix-container"></div>
      <div id="warning" style="color: red;"></div>
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
      "Insira valores válidos para o tamanho da matriz (1 a 10).";
    return;
  }

  matrixContainer.innerHTML = ""; // Limpa conteúdo anterior

  const matrizDiv = document.createElement("div");
  matrizDiv.innerHTML = `<h3>Matriz</h3>`;
  const table = document.createElement("table");

  for (let i = 0; i < rows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const cell = document.createElement("td");
      cell.innerHTML = `<input type="number" id="cell-${i}-${j}" placeholder="(${i},${j})">`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  matrizDiv.appendChild(table);
  matrixContainer.appendChild(matrizDiv);

  matrixContainer.innerHTML += `<button onclick="calcularMatriz('${formula}')">Calcular</button>`;
}

// Função para coletar valores da matriz e converter para array
function obterMatriz(rows, cols) {
  const matriz = [];
  for (let i = 0; i < rows; i++) {
    const linha = [];
    for (let j = 0; j < cols; j++) {
      const valor = parseFloat(document.getElementById(`cell-${i}-${j}`).value);
      if (isNaN(valor)) {
        alert("Por favor, insira valores numéricos válidos.");
        return null;
      }
      linha.push(valor);
    }
    matriz.push(linha);
  }
  return matriz;
}

// Função principal para calcular a operação de matriz
function calcularMatriz(formula) {
  const rows = parseInt(document.getElementById("matrix-rows").value);
  const cols = parseInt(document.getElementById("matrix-columns").value);
  const matriz = obterMatriz(rows, cols);
  if (!matriz) return;

  let resultado;

  switch (formula) {
    case "determinante":
      if (rows !== cols) {
        alert("O determinante só pode ser calculado para matrizes quadradas.");
        return;
      }
      resultado = calcularDeterminante(matriz);
      break;
    case "inversa":
      if (rows !== cols) {
        alert("A inversa só pode ser calculada para matrizes quadradas.");
        return;
      }
      resultado = calcularInversa(matriz);
      break;
    case "transposta":
      resultado = calcularTransposta(matriz);
      break;
  }

  document.getElementById("resultado-matriz").innerHTML = `
      <div style="font-size: 20px; font-weight: bold; color: #007BFF;">
          Resultado: ${formatResultado(resultado)}
      </div>`;
}

// Função para calcular o determinante (suporte para 2x2 e 3x3)
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

// Função para calcular a inversa de uma matriz (método da matriz aumentada)
function calcularInversa(matriz) {
  if (matriz.length !== matriz[0].length)
    return "Apenas matrizes quadradas possuem inversa.";
  let n = matriz.length;
  let identidade = matriz.map((linha, i) =>
    linha.map((_, j) => (i === j ? 1 : 0))
  );

  for (let i = 0; i < n; i++) {
    let pivo = matriz[i][i];
    if (pivo === 0) return "Matriz singular (sem inversa).";

    for (let j = 0; j < n; j++) {
      matriz[i][j] /= pivo;
      identidade[i][j] /= pivo;
    }

    for (let k = 0; k < n; k++) {
      if (k !== i) {
        let fator = matriz[k][i];
        for (let j = 0; j < n; j++) {
          matriz[k][j] -= fator * matriz[i][j];
          identidade[k][j] -= fator * identidade[i][j];
        }
      }
    }
  }
  return identidade;
}

// Função para calcular a transposta de uma matriz
function calcularTransposta(matriz) {
  return matriz[0].map((_, colIndex) => matriz.map((row) => row[colIndex]));
}

// Formatar resultado para exibição
function formatResultado(resultado) {
  return JSON.stringify(resultado);
}

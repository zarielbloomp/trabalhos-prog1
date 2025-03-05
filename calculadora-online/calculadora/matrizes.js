document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formula_matriz")
    .addEventListener("change", updateVariablesMatriz);
});

function updateVariablesMatriz() {
  const formula = document.getElementById("formula_matriz").value;
  const container = document.getElementById("variables-container_matriz");
  container.innerHTML = "";

  if (formula === "determinante") {
    container.innerHTML = `
      <label for="matrix-size">Tamanho da matriz:</label>
      <input type="number" id="matrix-size" placeholder="Ex: 2 para 2x2">
      <button onclick="gerarMatriz()">Gerar Matriz</button>
    `;
  }
}

function gerarMatriz() {
  const size = parseInt(document.getElementById("matrix-size").value);
  const container = document.getElementById("variables-container_matriz");
  container.innerHTML = "";

  for (let i = 0; i < size; i++) {
    let row = "<div>";
    for (let j = 0; j < size; j++) {
      row += `<input type="number" id="cell-${i}-${j}" placeholder="(${i},${j})"> `;
    }
    row += "</div>";
    container.innerHTML += row;
  }

  container.innerHTML += `<button onclick="calcularDeterminante(${size})">Calcular</button>`;
}

function calcularDeterminante(size) {
  let matriz = [];
  for (let i = 0; i < size; i++) {
    matriz[i] = [];
    for (let j = 0; j < size; j++) {
      matriz[i][j] =
        parseFloat(document.getElementById(`cell-${i}-${j}`).value) || 0;
    }
  }

  const resultadoContainer = document.getElementById("resultado-geral");
  resultadoContainer.innerHTML = `<div class="resultado-box"> <strong>RESULTADO:</strong> ${determinante(
    matriz
  )} </div>`;
}

function determinante(m) {
  return m.length === 2
    ? m[0][0] * m[1][1] - m[0][1] * m[1][0]
    : "Somente matrizes 2x2 suportadas.";
}

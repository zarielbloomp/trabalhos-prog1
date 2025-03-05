document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formula_quimica")
    .addEventListener("change", updateVariablesQuimica);
});

function updateVariablesQuimica() {
  const formula = document.getElementById("formula_quimica").value;
  const container = document.getElementById("variables-container_quimica");
  const resultadoContainer = document.getElementById("resultado-geral");
  resultadoContainer.innerHTML = "Preencha as variáveis para calcular.";

  container.innerHTML = "";

  let variables = [];
  let formulaHtml = "";

  if (formula === "numero-mols") {
    formulaHtml = "$n = \\frac{m}{M}$";
    variables = ["Massa (m)", "Massa Molar (M)"];
  } else if (formula === "densidade") {
    formulaHtml = "$d = \\frac{m}{V}$";
    variables = ["Massa (m)", "Volume (V)"];
  }

  document.getElementById(
    "quimica-formula-display"
  ).innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;

  if (variables.length > 0) {
    variables.forEach((variable, index) => {
      container.innerHTML += `
          <div>
            <label for="var${index}">${variable}</label>
            <input type="number" id="var${index}" placeholder="${variable}" step="any">
            <select id="unit${index}">
              <option value="1">g</option>
              <option value="0.001">kg</option>
              <option value="1000">mg</option>
            </select>
          </div>
        `;
    });

    container.innerHTML += `<button onclick="calcularQuimica()">Calcular</button>`;
  }
}

function calcularQuimica() {
  const formula = document.getElementById("formula_quimica").value;
  const inputs = document.querySelectorAll(
    "#variables-container_quimica input"
  );
  const units = document.querySelectorAll(
    "#variables-container_quimica select"
  );
  const resultadoContainer = document.getElementById("resultado-geral");

  let valores = [];
  inputs.forEach((input, i) =>
    valores.push(parseFloat(input.value) * parseFloat(units[i].value) || 0)
  );

  let resultado = 0;

  if (formula === "numero-mols") resultado = valores[0] / valores[1];
  else if (formula === "densidade") resultado = valores[0] / valores[1];

  resultadoContainer.innerHTML = `<div class="resultado-box"> <strong>RESULTADO:</strong> ${resultado.toFixed(
    2
  )} </div>`;
}

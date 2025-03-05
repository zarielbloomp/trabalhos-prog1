document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formula_fisica")
    .addEventListener("change", updateVariablesFisica);
});

function updateVariablesFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const container = document.getElementById("variables-container_fisica");
  const resultadoContainer = document.getElementById("resultado-geral");
  resultadoContainer.innerHTML = "Preencha as variáveis para calcular.";

  container.innerHTML = "";

  let variables = [];
  let formulaHtml = "";

  if (formula === "velocidade") {
    formulaHtml = "$v = \\frac{d}{t}$";
    variables = ["Distância", "Tempo"];
  } else if (formula === "aceleracao") {
    formulaHtml = "$a = \\frac{v_f - v_i}{t}$";
    variables = ["Velocidade Final", "Velocidade Inicial", "Tempo"];
  }

  document.getElementById(
    "fisica-formula-display"
  ).innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;

  if (variables.length > 0) {
    variables.forEach((variable, index) => {
      container.innerHTML += `
        <div>
          <label for="var${index}">${variable}</label>
          <input type="number" id="var${index}" placeholder="${variable}" step="any">
          <select id="unit${index}">
            <option value="1">m/s</option>
            <option value="0.001">km/s</option>
            <option value="3.6">km/h</option>
          </select>
        </div>
      `;
    });

    container.innerHTML += `<button onclick="calcularFisica()">Calcular</button>`;
  }
}

function calcularFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const inputs = document.querySelectorAll("#variables-container_fisica input");
  const units = document.querySelectorAll("#variables-container_fisica select");
  const resultadoContainer = document.getElementById("resultado-geral");

  let valores = [];
  inputs.forEach((input, i) =>
    valores.push(parseFloat(input.value) * parseFloat(units[i].value) || 0)
  );

  let resultado = 0;

  if (formula === "velocidade") resultado = valores[0] / valores[1];
  else if (formula === "aceleracao")
    resultado = (valores[0] - valores[1]) / valores[2];

  resultadoContainer.innerHTML = `<div class="resultado-box"> <strong>RESULTADO:</strong> ${resultado.toFixed(
    2
  )} </div>`;
}

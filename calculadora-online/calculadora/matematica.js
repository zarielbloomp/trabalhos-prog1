document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formula_matematica")
    .addEventListener("change", updateVariablesMatematica);
});

function updateVariablesMatematica() {
  const formula = document.getElementById("formula_matematica").value;
  const container = document.getElementById("variables-container_matematica");
  const resultadoContainer = document.getElementById("resultado-geral");
  resultadoContainer.innerHTML = "Preencha as variáveis para calcular.";

  container.innerHTML = "";

  let variables = [];
  let formulaHtml = "";

  if (formula === "area-circulo") {
    formulaHtml = "$A = \\pi r^2$";
    variables = ["Raio (r)"];
  } else if (formula === "teorema-pitagoras") {
    formulaHtml = "$c^2 = a^2 + b^2$";
    variables = ["Cateto A", "Cateto B"];
  }

  document.getElementById(
    "matematica-formula-display"
  ).innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;

  if (variables.length > 0) {
    variables.forEach((variable, index) => {
      container.innerHTML += `
        <div>
          <label for="var${index}">${variable}</label>
          <input type="number" id="var${index}" placeholder="${variable}" step="any">
          <select id="unit${index}">
            <option value="1">cm</option>
            <option value="0.01">m</option>
            <option value="10">mm</option>
          </select>
        </div>
      `;
    });

    container.innerHTML += `<button onclick="calcularMatematica()">Calcular</button>`;
  }
}

function calcularMatematica() {
  const formula = document.getElementById("formula_matematica").value;
  const inputs = document.querySelectorAll(
    "#variables-container_matematica input"
  );
  const units = document.querySelectorAll(
    "#variables-container_matematica select"
  );
  const resultadoContainer = document.getElementById("resultado-geral");

  let valores = [];
  inputs.forEach((input, i) =>
    valores.push(parseFloat(input.value) * parseFloat(units[i].value) || 0)
  );

  let resultado = 0;

  if (formula === "area-circulo") resultado = Math.PI * valores[0] ** 2;
  else if (formula === "teorema-pitagoras")
    resultado = Math.sqrt(valores[0] ** 2 + valores[1] ** 2);

  resultadoContainer.innerHTML = `<div class="resultado-box"> <strong>RESULTADO:</strong> ${resultado.toFixed(
    2
  )} </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  const formulaMatematica = document.getElementById("formula_matematica");
  if (formulaMatematica) {
    formulaMatematica.addEventListener("change", updateVariablesMatematica);
  } else {
    console.error('Elemento "formula_matematica" não encontrado.');
  }
});

// 🔹 Atualiza as variáveis e adiciona a opção de escolha da incógnita
function updateVariablesMatematica() {
  const formula = document.getElementById("formula_matematica").value;
  const container = document.getElementById("variables-container_matematica");
  container.innerHTML = "";

  let variables = [];
  let formulaHtml = "";

  // 📌 Definição das fórmulas
  const formulas = {
    area_circulo: { formula: "$A = \\pi r^2$", variables: ["Raio", "Área"] },
    perimetro_circulo: {
      formula: "$P = 2 \\pi r$",
      variables: ["Raio", "Perímetro"],
    },
    teorema_pitagoras: {
      formula: "$c^2 = a^2 + b^2$",
      variables: ["Cateto A", "Cateto B", "Hipotenusa"],
    },
    equacao_segundo_grau: {
      formula: "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
      variables: ["Coef. A", "Coef. B", "Coef. C", "Raiz"],
    },
    velocidade_media: {
      formula: "$v_m = \\frac{d}{t}$",
      variables: ["Distância", "Tempo", "Velocidade Média"],
    },
    juros_simples: {
      formula: "$J = C \\cdot i \\cdot t$",
      variables: ["Capital", "Taxa", "Tempo", "Juros"],
    },
    juros_compostos: {
      formula: "$M = C(1 + i)^t$",
      variables: ["Capital", "Taxa", "Tempo", "Montante"],
    },
    logaritmo: {
      formula: "$\\log_b x = y$",
      variables: ["Base", "Número", "Resultado"],
    },
    progressao_aritmetica: {
      formula: "$a_n = a_1 + (n-1)r$",
      variables: ["Primeiro Termo", "Razão", "Número de Termos", "Termo Geral"],
    },
    progressao_geometrica: {
      formula: "$a_n = a_1 \\cdot r^{(n-1)}$",
      variables: ["Primeiro Termo", "Razão", "Número de Termos", "Termo Geral"],
    },
  };

  if (formula in formulas) {
    formulaHtml = formulas[formula].formula;
    variables = formulas[formula].variables;
  } else {
    formulaHtml = "Selecione uma fórmula válida";
  }

  // Exibir a fórmula na tela
  document.getElementById(
    "matematica-formula-display"
  ).innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;

  let selectVar = `<label>Escolha a variável a encontrar:</label>
      <select id="variavelEscolhida">
      ${variables.map((v) => `<option value="${v}">${v}</option>`).join("")}
      </select>`;

  container.innerHTML += selectVar;

  variables.forEach((variable, index) => {
    container.innerHTML += `
          <div>
              <label for="var${index}">${variable}</label>
              <input type="number" id="var${index}" placeholder="${variable}" step="any">
          </div>
      `;
  });

  container.innerHTML += `<button onclick="calcularMatematica()">Calcular</button>`;
}

// 🔹 Função para calcular a fórmula selecionada
function calcularMatematica() {
  const formula = document.getElementById("formula_matematica").value;
  const variavelEscolhida = document.getElementById("variavelEscolhida").value;
  const inputs = document.querySelectorAll(
    "#variables-container_matematica input"
  );

  let valores = [];
  inputs.forEach((input) => valores.push(parseFloat(input.value) || 0));

  let resultado = "Erro: fórmula não encontrada";

  if (formula === "area_circulo") {
    if (variavelEscolhida === "Área") resultado = Math.PI * valores[0] ** 2;
    else if (variavelEscolhida === "Raio")
      resultado = Math.sqrt(valores[1] / Math.PI);
  } else if (formula === "perimetro_circulo") {
    if (variavelEscolhida === "Perímetro") resultado = 2 * Math.PI * valores[0];
    else if (variavelEscolhida === "Raio")
      resultado = valores[1] / (2 * Math.PI);
  } else if (formula === "teorema_pitagoras") {
    if (variavelEscolhida === "Hipotenusa")
      resultado = Math.sqrt(valores[0] ** 2 + valores[1] ** 2);
    else if (variavelEscolhida === "Cateto A")
      resultado = Math.sqrt(valores[2] ** 2 - valores[1] ** 2);
    else if (variavelEscolhida === "Cateto B")
      resultado = Math.sqrt(valores[2] ** 2 - valores[0] ** 2);
  } else if (formula === "juros_simples") {
    if (variavelEscolhida === "Juros")
      resultado = valores[0] * valores[1] * valores[2];
  } else if (formula === "juros_compostos") {
    if (variavelEscolhida === "Montante")
      resultado = valores[0] * (1 + valores[1]) ** valores[2];
  }

  document.getElementById("resultado-matematica").innerHTML = `
      <div style="font-size: 20px; font-weight: bold; color: #007BFF; margin-top: 10px;">
          Resultado: ${resultado.toFixed(4)}
      </div>`;
}

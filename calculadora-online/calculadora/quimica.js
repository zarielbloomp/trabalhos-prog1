document.addEventListener("DOMContentLoaded", function () {
  const formulaQuimica = document.getElementById("formula_quimica");
  if (formulaQuimica) {
    formulaQuimica.addEventListener("change", updateVariablesQuimica);
  } else {
    console.error('Elemento "formula_quimica" não encontrado.');
  }
});

// 🔹 Atualiza as variáveis e adiciona a opção de escolha da incógnita
function updateVariablesQuimica() {
  const formula = document.getElementById("formula_quimica").value;
  const container = document.getElementById("variables-container_quimica");
  container.innerHTML = "";

  let variables = [];
  let formulaHtml = "";

  // 📌 Definição das fórmulas
  const formulas = {
    concentracao_molar: {
      formula: "$C = \\frac{n}{V}$",
      variables: ["Número de Mols", "Volume (L)", "Concentração Molar"],
    },
    massa_molar: {
      formula: "$M = \\frac{m}{n}$",
      variables: ["Massa (g)", "Número de Mols", "Massa Molar"],
    },
    densidade: {
      formula: "$d = \\frac{m}{V}$",
      variables: ["Massa (g)", "Volume (mL)", "Densidade"],
    },
    ph: {
      formula: "$pH = -\\log[H^+]$",
      variables: ["Concentração de H⁺", "pH"],
    },
    diluicao: {
      formula: "$C_1 V_1 = C_2 V_2$",
      variables: [
        "Concentração Inicial",
        "Volume Inicial",
        "Concentração Final",
        "Volume Final",
      ],
    },
    lei_gases: {
      formula: "$PV = nRT$",
      variables: [
        "Pressão (atm)",
        "Volume (L)",
        "Número de Mols",
        "Temperatura (K)",
        "Lei dos Gases",
      ],
    },
    energia_reacao: {
      formula:
        "$\\Delta E = \\sum E_{lig. reagentes} - \\sum E_{lig. produtos}$",
      variables: [
        "Energia dos Reagentes",
        "Energia dos Produtos",
        "Energia da Reação",
      ],
    },
    rendimento_reacao: {
      formula: "$\\eta = \\frac{massa_{real}}{massa_{teorica}} \\times 100$",
      variables: ["Massa Real (g)", "Massa Teórica (g)", "Rendimento (%)"],
    },
    calor_sensivel: {
      formula: "$Q = mc\\Delta T$",
      variables: [
        "Massa (g)",
        "Calor Específico",
        "Variação de Temperatura (°C)",
        "Calor Sensível",
      ],
    },
    pressao_osmotica: {
      formula: "$\\Pi = MRT$",
      variables: [
        "Molaridade",
        "Constante R",
        "Temperatura (K)",
        "Pressão Osmótica",
      ],
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
    "quimica-formula-display"
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

  container.innerHTML += `<button onclick="calcularQuimica()">Calcular</button>`;
}

// 🔹 Função para calcular a fórmula selecionada
function calcularQuimica() {
  const formula = document.getElementById("formula_quimica").value;
  const variavelEscolhida = document.getElementById("variavelEscolhida").value;
  const inputs = document.querySelectorAll(
    "#variables-container_quimica input"
  );

  let valores = [];
  inputs.forEach((input) => valores.push(parseFloat(input.value) || 0));

  let resultado = "Erro: fórmula não encontrada";

  if (formula === "concentracao_molar") {
    if (variavelEscolhida === "Concentração Molar")
      resultado = valores[0] / valores[1];
    else if (variavelEscolhida === "Número de Mols")
      resultado = valores[2] * valores[1];
    else if (variavelEscolhida === "Volume (L)")
      resultado = valores[0] / valores[2];
  } else if (formula === "massa_molar") {
    if (variavelEscolhida === "Massa Molar")
      resultado = valores[0] / valores[1];
    else if (variavelEscolhida === "Massa (g)")
      resultado = valores[2] * valores[1];
    else if (variavelEscolhida === "Número de Mols")
      resultado = valores[0] / valores[2];
  } else if (formula === "densidade") {
    if (variavelEscolhida === "Densidade") resultado = valores[0] / valores[1];
    else if (variavelEscolhida === "Massa (g)")
      resultado = valores[2] * valores[1];
    else if (variavelEscolhida === "Volume (mL)")
      resultado = valores[0] / valores[2];
  } else if (formula === "ph") {
    if (variavelEscolhida === "pH") resultado = -Math.log10(valores[0]);
  } else if (formula === "diluicao") {
    if (variavelEscolhida === "Concentração Final")
      resultado = (valores[0] * valores[1]) / valores[3];
    else if (variavelEscolhida === "Volume Final")
      resultado = (valores[0] * valores[1]) / valores[2];
  }

  document.getElementById("resultado-quimica").innerHTML = `
        <div style="font-size: 20px; font-weight: bold; color: #007BFF; margin-top: 10px;">
            Resultado: ${resultado.toFixed(4)}
        </div>`;
}

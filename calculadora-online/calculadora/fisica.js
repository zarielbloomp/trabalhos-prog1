document.addEventListener("DOMContentLoaded", function () {
  const formulaFisica = document.getElementById("formula_fisica");
  if (formulaFisica) {
    formulaFisica.addEventListener("change", updateVariablesFisica);
  } else {
    console.error('Elemento "formula_fisica" não encontrado.');
  }
});

// 🔹 Atualiza as variáveis e adiciona a opção de escolha da incógnita
function updateVariablesFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const container = document.getElementById("variables-container_fisica");
  container.innerHTML = "";

  let variables = [];
  let formulaHtml = "";

  // 📌 Definição das fórmulas
  const formulas = {
    velocidade: {
      formula: "$v = \\frac{d}{t}$",
      variables: ["Distância", "Tempo", "Velocidade"],
    },
    aceleracao: {
      formula: "$a = \\frac{v_f - v_i}{t}$",
      variables: [
        "Velocidade Final",
        "Velocidade Inicial",
        "Tempo",
        "Aceleração",
      ],
    },
    queda_livre_galileu: {
      formula: "$v = g \\cdot t$",
      variables: ["Aceleração Gravitacional", "Tempo", "Velocidade"],
    },

    forca: {
      formula: "$F = m \\cdot a$",
      variables: ["Massa", "Aceleração", "Força"],
    },
    trabalho: {
      formula: "$T = F \\cdot d$",
      variables: ["Força", "Distância", "Trabalho"],
    },
    impulso: {
      formula: "$I = F \\cdot t$",
      variables: ["Força", "Tempo", "Impulso"],
    },
    momento_linear: {
      formula: "$p = m \\cdot v$",
      variables: ["Massa", "Velocidade", "Momento Linear"],
    },
    energia_cinetica: {
      formula: "$E_c = \\frac{1}{2} m v^2$",
      variables: ["Massa", "Velocidade", "Energia Cinética"],
    },

    lei_gravitacao: {
      formula: "$F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}$",
      variables: ["Massa 1", "Massa 2", "Distância", "Força"],
    },

    lei_ohm: {
      formula: "$V = I \\cdot R$",
      variables: ["Corrente", "Resistência", "Tensão"],
    },
    corrente_eletrica: {
      formula: "$I = \\frac{V}{R}$",
      variables: ["Tensão", "Resistência", "Corrente"],
    },
    potencia_eletrica: {
      formula: "$P = V \\cdot I$",
      variables: ["Tensão", "Corrente", "Potência"],
    },

    energia_einstein: {
      formula: "$E = m \\cdot c^2$",
      variables: ["Massa", "Energia"],
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
    "fisica-formula-display"
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

  container.innerHTML += `<button onclick="calcularFisica()">Calcular</button>`;
}

// 🔹 Função para calcular a fórmula selecionada
function calcularFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const variavelEscolhida = document.getElementById("variavelEscolhida").value;
  const inputs = document.querySelectorAll("#variables-container_fisica input");

  let valores = [];
  inputs.forEach((input) => valores.push(parseFloat(input.value) || 0));

  let resultado = "Erro: fórmula não encontrada";

  if (formula === "velocidade") {
    if (variavelEscolhida === "Velocidade") resultado = valores[0] / valores[1];
    else if (variavelEscolhida === "Distância")
      resultado = valores[1] * valores[2];
    else if (variavelEscolhida === "Tempo") resultado = valores[0] / valores[2];
  } else if (formula === "aceleracao") {
    if (variavelEscolhida === "Aceleração")
      resultado = (valores[0] - valores[1]) / valores[2];
    else if (variavelEscolhida === "Velocidade Final")
      resultado = valores[1] + valores[2] * valores[3];
    else if (variavelEscolhida === "Velocidade Inicial")
      resultado = valores[0] - valores[2] * valores[3];
    else if (variavelEscolhida === "Tempo")
      resultado = (valores[0] - valores[1]) / valores[3];
  } else if (formula === "forca") {
    if (variavelEscolhida === "Força") resultado = valores[0] * valores[1];
    else if (variavelEscolhida === "Massa") resultado = valores[2] / valores[1];
    else if (variavelEscolhida === "Aceleração")
      resultado = valores[2] / valores[0];
  } else if (formula === "trabalho") {
    if (variavelEscolhida === "Trabalho") resultado = valores[0] * valores[1];
    else if (variavelEscolhida === "Força") resultado = valores[2] / valores[1];
    else if (variavelEscolhida === "Distância")
      resultado = valores[2] / valores[0];
  } else if (formula === "energia_cinetica") {
    if (variavelEscolhida === "Energia Cinética")
      resultado = 0.5 * valores[0] * valores[1] ** 2;
    else if (variavelEscolhida === "Massa")
      resultado = (2 * valores[2]) / valores[1] ** 2;
    else if (variavelEscolhida === "Velocidade")
      resultado = Math.sqrt((2 * valores[2]) / valores[0]);
  }

  document.getElementById("resultado-fisica").innerHTML = `
      <div style="font-size: 20px; font-weight: bold; color: #007BFF; margin-top: 10px;">
          Resultado: ${resultado.toFixed(4)}
      </div>`;
}

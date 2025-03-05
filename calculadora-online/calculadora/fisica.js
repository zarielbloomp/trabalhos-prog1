document.addEventListener("DOMContentLoaded", function () {
  const formulaFisica = document.getElementById("formula_fisica");
  if (formulaFisica) {
    formulaFisica.addEventListener("change", updateVariablesFisica);
  } else {
    console.error('Elemento "formula_fisica" não encontrado.');
  }
});

// 🔹 Atualiza as variáveis com base na fórmula escolhida
function updateVariablesFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const container = document.getElementById("variables-container_fisica");
  container.innerHTML = "";

  let variables = [];
  let formulaHtml = "";

  // 📌 CINEMÁTICA
  if (formula === "velocidade") {
    formulaHtml = "$v = \\frac{d}{t}$";
    variables = ["Distância", "Tempo"];
  } else if (formula === "aceleracao") {
    formulaHtml = "$a = \\frac{v_f - v_i}{t}$";
    variables = ["Velocidade Final", "Velocidade Inicial", "Tempo"];
  } else if (formula === "queda-livre-galileu") {
    formulaHtml = "$v = g \\cdot t$";
    variables = ["Aceleração Gravitacional", "Tempo"];
  }

  // 📌 DINÂMICA
  else if (formula === "forca") {
    formulaHtml = "$F = m \\cdot a$";
    variables = ["Massa", "Aceleração"];
  } else if (formula === "trabalho") {
    formulaHtml = "$T = F \\cdot d$";
    variables = ["Força", "Distância"];
  } else if (formula === "impulso") {
    formulaHtml = "$I = F \\cdot t$";
    variables = ["Força", "Tempo"];
  } else if (formula === "momento-linear") {
    formulaHtml = "$p = m \\cdot v$";
    variables = ["Massa", "Velocidade"];
  } else if (formula === "energia-cinetica") {
    formulaHtml = "$E_c = \\frac{1}{2} m v^2$";
    variables = ["Massa", "Velocidade"];
  } else if (formula === "energia-mecanica") {
    formulaHtml = "$E_m = E_c + E_p$";
    variables = ["Energia Cinética", "Energia Potencial"];
  } else if (formula === "potencia") {
    formulaHtml = "$P = \\frac{T}{t}$";
    variables = ["Trabalho", "Tempo"];
  } else if (formula === "pressao") {
    formulaHtml = "$P = \\frac{F}{A}$";
    variables = ["Força", "Área"];
  } else if (formula === "torque") {
    formulaHtml = "$\\tau = F \\cdot r \\sin(\\theta)$";
    variables = ["Força", "Raio", "Ângulo"];
  }

  // 📌 GRAVITAÇÃO
  else if (formula === "lei-gravitacao") {
    formulaHtml = "$F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}$";
    variables = ["Massa 1", "Massa 2", "Distância"];
  } else if (formula === "energia-potencial-gravitacional") {
    formulaHtml = "$E_p = m \\cdot g \\cdot h$";
    variables = ["Massa", "Altura"];
  } else if (formula === "velocidade-orbital-media") {
    formulaHtml = "$v_o = \\sqrt{\\frac{G M}{r}}$";
    variables = ["Constante G", "Massa", "Raio"];
  }

  // 📌 ONDULATÓRIA
  else if (formula === "frequencia-ondas") {
    formulaHtml = "$f = \\frac{v}{\\lambda}$";
    variables = ["Velocidade", "Comprimento de Onda"];
  } else if (formula === "comprimento-onda") {
    formulaHtml = "$\\lambda = \\frac{v}{f}$";
    variables = ["Velocidade", "Frequência"];
  } else if (formula === "velocidade-onda") {
    formulaHtml = "$v = \\sqrt{\\frac{T}{\\mu}}$";
    variables = ["Tensão", "Densidade Linear"];
  } else if (formula === "intensidade-luminosa") {
    formulaHtml = "$I = \\frac{P}{A}$";
    variables = ["Potência", "Área"];
  }

  // 📌 ELETRICIDADE E MAGNETISMO
  else if (formula === "lei-ohm") {
    formulaHtml = "$V = I \\cdot R$";
    variables = ["Corrente", "Resistência"];
  } else if (formula === "corrente-eletrica") {
    formulaHtml = "$I = \\frac{V}{R}$";
    variables = ["Tensão", "Resistência"];
  } else if (formula === "potencia-eletrica") {
    formulaHtml = "$P = V \\cdot I$";
    variables = ["Tensão", "Corrente"];
  } else if (formula === "resistencia-eletrica") {
    formulaHtml = "$R = \\frac{V}{I}$";
    variables = ["Tensão", "Corrente"];
  } else if (formula === "lei-coulomb") {
    formulaHtml = "$F = k \\cdot \\frac{q_1 \\cdot q_2}{r^2}$";
    variables = ["Carga 1", "Carga 2", "Distância"];
  } else if (formula === "campo-eletrico") {
    formulaHtml = "$E = \\frac{F}{q}$";
    variables = ["Força", "Carga"];
  } else if (formula === "campo-magnetico") {
    formulaHtml = "$B = \\frac{\\mu_0 \\cdot I}{2 \\pi r}$";
    variables = ["Corrente", "Raio"];
  } else if (formula === "capacitancia") {
    formulaHtml = "$C = \\frac{Q}{V}$";
    variables = ["Carga", "Tensão"];
  } else if (formula === "lei-faraday") {
    formulaHtml = "$\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}$";
    variables = ["Número de Voltas", "Variação do Fluxo Magnético"];
  } else if (formula === "frequencia-resonancia") {
    formulaHtml = "$f_r = \\frac{1}{2\\pi\\sqrt{LC}}$";
    variables = ["Indutância", "Capacitância"];
  }

  // 📌 TERMODINÂMICA
  else if (formula === "dilatacao-volumetrica") {
    formulaHtml = "$\\Delta V = V_0 \\cdot \\beta \\cdot \\Delta T$";
    variables = [
      "Volume Inicial",
      "Coef. Dilatação",
      "Variação de Temperatura",
    ];
  } else if (formula === "dilacao-termica") {
    formulaHtml = "$\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$";
    variables = [
      "Comprimento Inicial",
      "Coef. Dilatação",
      "Variação de Temperatura",
    ];
  }

  // Exibir fórmula
  document.getElementById(
    "fisica-formula-display"
  ).innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;

  // Criar campos de entrada para variáveis
  variables.forEach((variable, index) => {
    container.innerHTML += `<div><label for="var${index}">${variable}</label><input type="number" id="var${index}" placeholder="${variable}" step="any"></div>`;
  });

  container.innerHTML += `<button onclick="calcularFisica()">Calcular</button>`;
}

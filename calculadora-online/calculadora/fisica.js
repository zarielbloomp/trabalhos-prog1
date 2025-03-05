document.addEventListener("DOMContentLoaded", function () {
  const formulaFisica = document.getElementById("formula_fisica");

  if (formulaFisica) {
    formulaFisica.addEventListener("change", updateVariablesFisica);
    console.log("Elemento formula_fisica encontrado e listener adicionado.");
  } else {
    console.error('Elemento com id "formula_fisica" não encontrado.');
  }
});

function updateVariablesFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const container = document.getElementById("variables-container_fisica");
  const formulaDisplay = document.getElementById("fisica-formula-display");

  container.innerHTML = "";
  formulaDisplay.innerHTML = "";

  let variables = [];
  let formulaHtml = "";
  let unidades = [];

  // Definir variáveis e fórmulas com base na fórmula selecionada
  switch (formula) {
    case "velocidade":
      formulaHtml = "$v = \\frac{d}{t}$";
      variables = ["Distância", "Tempo"];
      unidades = [getUnidades("Distância"), getUnidades("Tempo")];
      break;
    case "trabalho":
      formulaHtml = "$T = F \\cdot d$";
      variables = ["Força", "Distância"];
      unidades = [getUnidades("Força"), getUnidades("Distância")];
      break;
    case "forca":
      formulaHtml = "$F = m \\cdot a$";
      variables = ["Massa", "Aceleração"];
      unidades = [getUnidades("Massa"), getUnidades("Aceleração")];
      break;
    case "energia-cinetica":
      formulaHtml = "$E_c = \\frac{1}{2} m v^2$";
      variables = ["Massa", "Velocidade"];
      unidades = [getUnidades("Massa"), getUnidades("Velocidade")];
      break;
    case "impulso":
      formulaHtml = "$I = F \\cdot t$";
      variables = ["Força", "Tempo"];
      unidades = [getUnidades("Força"), getUnidades("Tempo")];
      break;
    case "potencia":
      formulaHtml = "$P = \\frac{T}{t}$";
      variables = ["Trabalho", "Tempo"];
      unidades = [getUnidades("Trabalho"), getUnidades("Tempo")];
      break;
    case "aceleracao":
      formulaHtml = "$a = \\frac{v_f - v_i}{t}$";
      variables = ["Velocidade final", "Velocidade inicial", "Tempo"];
      unidades = [
        getUnidades("Velocidade"),
        getUnidades("Velocidade"),
        getUnidades("Tempo"),
      ];
      break;
    case "momento-linear":
      formulaHtml = "$p = m \\cdot v$";
      variables = ["Massa", "Velocidade"];
      unidades = [getUnidades("Massa"), getUnidades("Velocidade")];
      break;
    case "pressao":
      formulaHtml = "$P = \\frac{F}{A}$";
      variables = ["Força", "Área"];
      unidades = [getUnidades("Força"), getUnidades("Área")];
      break;
    case "frequencia-ondas":
      formulaHtml = "$f = \\frac{v}{\\lambda}$";
      variables = ["Velocidade", "Comprimento de onda"];
      unidades = [
        getUnidades("Velocidade"),
        getUnidades("Comprimento de onda"),
      ];
      break;
    case "lei-hooke":
      formulaHtml = "$F = k \\cdot x$";
      variables = ["Constante Elástica", "Deformação"];
      unidades = [getUnidades("Constante Elástica"), getUnidades("Deformação")];
      break;
    case "resistencia-eletrica":
      formulaHtml = "$R = \\frac{V}{I}$";
      variables = ["Tensão", "Corrente"];
      unidades = [getUnidades("Tensão"), getUnidades("Corrente")];
      break;
    case "energia-mecanica":
      formulaHtml = "$E_m = E_c + E_p$";
      variables = ["Energia Cinética", "Energia Potencial"];
      unidades = [getUnidades("Energia"), getUnidades("Energia")];
      break;
    case "lei-gravitacao":
      formulaHtml = "$F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}$";
      variables = ["Massa 1", "Massa 2", "Distância"];
      unidades = [
        getUnidades("Massa"),
        getUnidades("Massa"),
        getUnidades("Distância"),
      ];
      break;
    case "energia-potencial-gravitacional":
      formulaHtml = "$E_p = m \\cdot g \\cdot h$";
      variables = ["Massa", "Altura"];
      unidades = [
        getUnidades("Massa"),
        getUnidades("Aceleração"),
        getUnidades("Distância"),
      ];
      break;
    case "energia-potencial-elastica":
      formulaHtml = "$E_p = \\frac{1}{2} k x^2$";
      variables = ["Constante Elástica", "Deformação"];
      unidades = [getUnidades("Constante Elástica"), getUnidades("Deformação")];
      break;
    case "capacitancia":
      formulaHtml =  "$C = \\frac{Q}{V}$";
      variables = ["Carga", "Tensão"];
      unidades = [getUnidades("Carga"), getUnidades("Tensão")];
      break;
    case "energia-einstein":
        formulaHtml = "$E = m \\cdot c^2$";
        variables = ["Massa"];
        unidades = [getUnidades("Massa")];
        break;
    case "velocidade-onda":
      formulaHtml = "$v = \\sqrt{\\frac{T}{\\mu}}$";
      variables = ["Tensão", "Densidade Linear"];
      unidades = [getUnidades("Tensão"), getUnidades("Densidade Linear")];
      break;
    case "lei-newton-corpos-rigidos":
      formulaHtml = "$\\tau = I \\cdot \\alpha$";
      variables = ["Momento de Inércia (I)", "Aceleração Angular (α)"];
      unidades = [
        getUnidades("Momento de Inércia"),
        getUnidades("Aceleração Ângular")
      ];
      break;
    
  case "comprimento-onda":
      formulaHtml = "$\\lambda = \\frac{v}{f}$";
      variables = ["Velocidade da Onda (v)", "Frequência da Onda (f)"];
      unidades = [getUnidades("Velocidade"), getUnidades("Frequência")];
      break;
  case "lei-faraday":
    formulaHtml = "$\\mathcal{E} = -N \\frac{d\\Phi_B}{dt}$";
    variables = ["Número de Voltas (N)", "Campo Magnético (B)", "Área (A)", "Variação do Campo Magnético (dB/dt)"];
    unidades = [
        getUnidades("Campo Magnético"),
        getUnidades("Área"),
        getUnidades("Variação do Campo Magnético")
    ];
    break;
  case "quociente-potencia":
      formulaHtml = "$P = \\frac{P_1}{P_2}$";
      variables = ["Potência 1 (P1)", "Potência 2 (P2)"];
      unidades = [getUnidades("Potência"), getUnidades("Potência")];
      break;
  
  case "quantidade-movimento":
      formulaHtml = "$p = m \\cdot v$";
      variables = ["Massa (m)", "Velocidade (v)"];
      unidades = [getUnidades("Massa"), getUnidades("Velocidade")];
      break;
  
  case "campo-eletrico":
      formulaHtml = "$E = \\frac{F}{q}$";
      variables = ["Força (F)", "Carga (q)"];
      unidades = [getUnidades("Forca"), getUnidades("Carga")];
      break;
  
  case "campo-magnetico":
      formulaHtml = "$B = \\frac{\\mu_0 \\cdot I}{2 \\pi r}$";
      variables = ["Corrente (I)", "Raio (r)"];
      unidades = [getUnidades("Corrente"), getUnidades("Distância")];
      break;
  
  case "leitura-velocidade":
      formulaHtml = "$v = \\frac{d}{t}$";
      variables = ["Distância (d)", "Tempo (t)"];
      unidades = [getUnidades("Distância"), getUnidades("Tempo")];
      break;
  
  case "lei-coulomb":
      formulaHtml = "$F = k_e \\cdot \\frac{q_1 \\cdot q_2}{r^2}$";
      variables = ["Carga 1 (q1)", "Carga 2 (q2)", "Raio (r)"];
      unidades = [getUnidades("Carga"), getUnidades("Carga"), getUnidades("Distância")];
      break;
  
  case "potencial-eletrico":
      formulaHtml = "$V = \\frac{k_e \\cdot q}{r}$";
      variables = ["Carga (q)", "Raio (r)"];
      unidades = [getUnidades("Carga"), getUnidades("Distância")];
      break;

  case "torque":
      formulaHtml = "$\\tau = F r \\sin(\\theta)$";
      variables = ["Força (F)", "Raio (r)", "Ângulo (θ)"];
      unidades = [getUnidades("Forca"), getUnidades("Distância"), getUnidades("Ângulo")];
      break;

  case "frequencia-resonancia":
      formulaHtml = "$f_r = \\frac{1}{2\\pi\\sqrt{LC}}$";
      variables = ["Indutância (L)", "Capacitância (C)"];
      unidades = [getUnidades("Indutância"), getUnidades("Capacitância")];
      break;

  case "lei-ohm":
      formulaHtml = "$V = I \\cdot R$";
      variables = ["Corrente (I)", "Resistência (R)"];
      unidades = [getUnidades("Corrente"), getUnidades("Resistência")];
      break;

  case "corrente-eletrica":
      formulaHtml = "$I = \\frac{V}{R}$";
      variables = ["Tensão (V)", "Resistência (R)"];
      unidades = [getUnidades("Tensão"), getUnidades("Resistência")];
      break;

  case "potencia-eletrica":
      formulaHtml = "$P = I \\cdot V$";
      variables = ["Corrente (I)", "Tensão (V)"];
      unidades = [getUnidades("Corrente"), getUnidades("Tensão")];
      break;

  case "tensao-eletrica":
      formulaHtml = "$V = I \\cdot R$";
      variables = ["Corrente (I)", "Resistência (R)"];
      unidades = [getUnidades("Corrente"), getUnidades("Resistência")];
      break;

  case "eletricidade":
      formulaHtml = "$P = V \\cdot I$";
      variables = ["Tensão (V)", "Corrente (I)"];
      unidades = [getUnidades("Tensão"), getUnidades("Corrente")];
      break;

  case "pressao-atm":
      formulaHtml = "$P = \\frac{F}{A}$";
      variables = ["Força (F)", "Área (A)"];
      unidades = [getUnidades("Força"), getUnidades("Área")];
      break;

  case "gravidade-celestial":
      formulaHtml = "$F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2}$";
      variables = ["Massa 1 (m1)", "Massa 2 (m2)", "Raio (r)"];
      unidades = [getUnidades("Massa"), getUnidades("Massa"), getUnidades("Distância")];
      break; 
  case "quantum":
    formulaHtml = "$E = h \cdot f$";
    variables = ["Frequência (f)"];
    unidades = [getUnidades("Frequência")];
    break;

  case "velocidade-relativistica":
    formulaHtml = "$v = \\frac{v_0}{\\sqrt{1 - \\frac{v^2}{c^2}}}$";
    variables = ["Velocidade Inicial (v0)", "Velocidade Final (v)"];
    unidades = [getUnidades("Velocidade"), getUnidades("Velocidade")];
    break;
  
  case "dilatacao-volumetrica":
    formulaHtml = "$\\Delta V = V_0 \\cdot \\beta \\cdot \\Delta T$";
    variables = ["Volume Inicial (V₀)", "Coeficiente de Dilatação Volumétrica (β)", "Variação de Temperatura (ΔT)"];
    unidades = [getUnidades("Volume"), getUnidades("Coeficiente de Dilatação Volumétrica"), getUnidades("Temperatura")];
    break;
  case "dilacao-termica":
      formulaHtml = "$\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$";
      variables = ["Comprimento Inicial (L0)", "Coeficiente de Dilatação (α)", "Variação de Temperatura (ΔT)"];
      unidades = [getUnidades("Comprimento"), getUnidades("Aceleração"), getUnidades("Temperatura")];
      break;
  case "cinetica-transformada":
      formulaHtml = "$E_k = \\frac{1}{2} m v^2$";
      variables = ["Massa (m)", "Velocidade (v)"];
      unidades = [getUnidades("Massa"), getUnidades("Velocidade")];
      break;
  case "momento-forca":
      formulaHtml = "$\\tau = F \\cdot r$";
      variables = ["Força (F)", "Raio (r)"];
      unidades = [getUnidades("Forca"), getUnidades("Distância")];
      break;
  case "intensidade-luminosa":
      formulaHtml = "$I = \\frac{P}{A}$";
      variables = ["Potência (P)", "Área (A)"];
      unidades = [getUnidades("Potência"), getUnidades("Área")];
      break;
  case "lei-kepler-segunda":
      formulaHtml = "$A = \\frac{1}{2} r^2 \\cdot \\Delta \\theta$";
      variables = ["Raio (r)", "Ângulo (Δθ)"];
      unidades = [getUnidades("Distância"), getUnidades("Ângulo")];
      break;
  case "lei-kepler-terceira":
      formulaHtml = "$T^2 = k \cdot r^3$";
      variables = ["Período (T)", "Raio (r)"];
      unidades = [getUnidades("Tempo"), getUnidades("Distância")];
      break;
  case "velocidade-orbital-media":
      formulaHtml = "$v_o = \\sqrt{\\frac{G M}{r}}$";
      variables = ["Constante Gravitacional (G)", "Massa (M)", "Raio (r)"];
      unidades = [getUnidades("Constante Elástica"), getUnidades("Massa"), getUnidades("Distância")];
      break;
  case "queda-livre-galileu":
      formulaHtml = "$v = g \cdot t$";
      variables = ["Aceleração Gravitacional (g)", "Tempo (t)"];
      unidades = [getUnidades("Aceleração"), getUnidades("Tempo")];
      break;
  case "fator-lorentz":
      formulaHtml = "$\gamma = \\frac{1}{\\sqrt{1 - \\frac{v^2}{c^2}}}$";
      variables = ["Velocidade (v)", "Velocidade da Luz (c)"];
      unidades = [getUnidades("Velocidade"), getUnidades("Velocidade")];
      break;
    default:
      formulaHtml = "Selecione uma fórmula válida";
      variables = [];
      unidades = [];
  }

  formulaDisplay.innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;

  if (variables.length === 0) {
    container.innerHTML =
      "<p>Por favor, selecione uma fórmula para continuar.</p>";
    return;
  }

  container.innerHTML = variables
    .map(
      (variable, index) => `
        <div style="padding: 10px; border-bottom: 1px solid #ccc;">
          <label for="var${index}">${variable}</label>
          <input type="number" id="var${index}" placeholder="${variable}" step="any">
          <select id="unit${index}">
            ${unidades[index]}
          </select>
        </div>
      `
    )
    .join("");

  // Adicionar botão para calcular
  MathJax.typesetPromise(); 
};

// Função para obter as unidades para cada variável
function getUnidades(variable) {
  console.log(variable);
  switch (variable) {
    case "Distância":
      return `
        <option value="m">m</option>
        <option value="cm">cm</option>
        <option value="dm">dm</option>
        <option value="mm">mm</option>
        <option value="km">km</option>
        <option value="in">Polegada</option>
        <option value="ft">Pé</option>
        <option value="mi">Milha</option>
        <option value="yd">Jarda</option>
      `;
  case "Número de Voltas":
    return `
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="1000">1000</option>
    `;
  
  case "Fluxo Magnético":
    return `
      <option value="Wb">Wb (Weber)</option>
      <option value="mWb">mWb (mili-Weber)</option>
      <option value="μWb">μWb (micro-Weber)</option>
      <option value="T·m²">T·m² (Tesla metro quadrado)</option>
    `;
  
    case "Tempo":
      return `
        <option value="s">s</option>
        <option value="min">min</option>
        <option value="h">h</option>
        <option value="ms">ms</option>
        <option value="μs">μs</option>
        <option value="ns">ns</option>
        <option value="ps">ps</option>
        <option value="fs">fs</option>
        <option value="dia">dia</option>
        <option value="ano">ano</option>
      `;
    
    case "Força":
    case "Forca":
      return `
        <option value="N">N</option>
        <option value="kN">kN</option>
        <option value="mN">mN</option>
        <option value="μN">μN</option>
        <option value="lbf">lbf</option>
      `;
    
    case "Massa":
      return `
        <option value="kg">kg</option>
        <option value="g">g</option>
        <option value="mg">mg</option>
        <option value="μg">μg</option>
        <option value="ng">ng</option>
        <option value="lb">lb</option>
        <option value="oz">oz</option>
      `;
    
    case "Aceleração":
      return `
        <option value="m/s²">m/s²</option>
        <option value="cm/s²">cm/s²</option>
        <option value="mm/s²">mm/s²</option>
        <option value="g">g</option>
      `;
    
    case "Trabalho":
    case "Energia":
      return `
        <option value="J">J</option>
        <option value="kJ">kJ</option>
        <option value="cal">cal</option>
        <option value="kcal">kcal</option>
        <option value="Wh">Wh</option>
        <option value="kWh">kWh</option>
        <option value="mJ">mJ</option>
        <option value="μJ">μJ</option>
      `;
    
    case "Potência":
      return `
        <option value="W">W</option>
        <option value="kW">kW</option>
        <option value="mW">mW</option>
        <option value="μW">μW</option>
        <option value="hp">hp</option>
      `;
    
    case "Pressão":
      return `
        <option value="Pa">Pa</option>
        <option value="kPa">kPa</option>
        <option value="mPa">mPa</option>
        <option value="μPa">μPa</option>
        <option value="bar">bar</option>
        <option value="atm">atm</option>
        <option value="mmHg">mmHg</option>
        <option value="psi">psi</option>
      `;
    
    case "Frequência":
      return `
        <option value="Hz">Hz</option>
        <option value="kHz">kHz</option>
        <option value="MHz">MHz</option>
        <option value="GHz">GHz</option>
      `;
    
    case "Velocidade":
      return `
        <option value="m/s">m/s</option>
        <option value="km/h">km/h</option>
        <option value="mph">mph</option>
        <option value="ft/s">ft/s</option>
        <option value="cm/s">cm/s</option>
      `;
    
    case "Comprimento de onda":
      return `
        <option value="m">m</option>
        <option value="cm">cm</option>
        <option value="nm">nm</option>
        <option value="μm">μm</option>
        <option value="mm">mm</option>
      `;
    
    case "Tensão":
      return `
        <option value="V">V</option>
        <option value="kV">kV</option>
        <option value="mV">mV</option>
        <option value="μV">μV</option>
      `;
    
    case "Corrente":
      return `
        <option value="A">A</option>
        <option value="mA">mA</option>
        <option value="μA">μA</option>
        <option value="kA">kA</option>
      `;
    
    case "Área":
      return `
        <option value="mm²">mm²</option>
        <option value="cm²">cm²</option>
        <option value="dm²">dm²</option>
        <option value="m²">m²</option>
        <option value="km²">km²</option>
        <option value="ft²">ft²</option>
        <option value="in²">in²</option>
        <option value="ha">ha</option>
        <option value="acre">acre</option>
      `;
    
    case "Deformação":
      return `
        <option value="m">m</option>
        <option value="cm">cm</option>
        <option value="mm">mm</option>
        <option value="nm">nm</option>
      `;
    
    case "Carga":
      return `
        <option value="C">C</option>
        <option value="mC">mC</option>
        <option value="μC">μC</option>
        <option value="nC">nC</option>
      `;
    
    case "Constante Elástica":
      return `
        <option value="N/m">N/m</option>
        <option value="kN/m">kN/m</option>
        <option value="mN/m">mN/m</option>
      `;
    
    case "Energia de Einstein":
      return `
        <option value="J">J</option>
        <option value="kJ">kJ</option>
        <option value="MeV">MeV</option>
        <option value="GeV">GeV</option>
      `;
    
    case "Densidade Linear":
      return `
        <option value="kg/m">kg/m</option>
        <option value="g/cm">g/cm</option>
        <option value="g/m">g/m</option>
        <option value="mg/mm">mg/mm</option>
      `;
    
    case "Frequência de Ressonância":
      return `
        <option value="Hz">Hz</option>
        <option value="kHz">kHz</option>
      `;
  case "Momento de Inércia":
    return `
      <option value="kg·m²">kg·m²</option>
      <option value="g·cm²">g·cm²</option>
      <option value="lb·ft²">lb·ft²</option>
    `;
  
  case "Aceleração Ângular":
    return `
      <option value="rad/s²">rad/s²</option>
      <option value="deg/s²">°/s²</option>
    `;
  
  case "Ângulo":
    return `
      <option value="rad">rad</option>
      <option value="deg">°</option>
    `;
  
  case "Capacitância":
    return `
      <option value="F">F</option>
      <option value="mF">mF</option>
      <option value="μF">μF</option>
      <option value="nF">nF</option>
    `;
  
  case "Indutância":
    return `
      <option value="H">H</option>
      <option value="mH">mH</option>
      <option value="μH">μH</option>
    `;
  
  case "Resistência":
    return `
      <option value="Ω">Ω</option>
      <option value="kΩ">kΩ</option>
      <option value="mΩ">mΩ</option>
    `;
  
  case "Corrente":
    return `
      <option value="A">A</option>
      <option value="mA">mA</option>
      <option value="μA">μA</option>
    `;
  
  case "Área":
    return `
      <option value="m²">m²</option>
      <option value="cm²">cm²</option>
      <option value="mm²">mm²</option>
      <option value="ft²">ft²</option>
      <option value="in²">in²</option>
    `;
  
  case "Comprimento":
    return `
      <option value="m">m</option>
      <option value="cm">cm</option>
      <option value="mm">mm</option>
      <option value="km">km</option>
      <option value="ft">ft</option>
      <option value="in">in</option>
    `;
  case "variacao-campo-magnetico":
    return `
        <option value="T/s">Tesla por segundo (T/s)</option>
        <option value="μT/s">Microtesla por segundo (μT/s)</option>
        <option value="mT/s">Militesla por segundo (mT/s)</option>
        <option value="kT/s">Kilotesla por segundo (kT/s)</option>
    `;

  case "Temperatura":
    return `
      <option value="K">K</option>
      <option value="°C">°C</option>
      <option value="°F">°F</option>
    `;
  case "Volume":
    return `
      <option value="m³">m³</option>
      <option value="cm³">cm³</option>
      <option value="mm³">mm³</option>
      <option value="L">L</option>
      <option value="mL">mL</option>
      <option value="ft³">ft³</option>
      <option value="in³">in³</option>
    `;
  
  case "Coeficiente de Dilatação Volumétrica":
    return `
      <option value="1/°C">1/°C</option>
      <option value="1/K">1/K</option>
    `;
  
  default:
      return `<option value="">Selecione uma unidade</option>`;
  }
}


function calcularFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const container = document.getElementById("variables-container_fisica");
  const inputs = container.querySelectorAll("input");
  const unidades = container.querySelectorAll("select");

  const variables = Array.from(inputs).map((input, index) => {
    const unidade = unidades[index].value;
    const valor = parseFloat(input.value.trim());
    if (isNaN(valor)) {
      console.error(`Valor inválido para a variável na posição ${index}.`);
      return { valor: 0, unidade };
    }
    return { valor, unidade };
  });

  // Converter unidades para Sistema Internacional (SI)
  variables.forEach((variable, index) => {
    variables[index].valor = converterParaSI(variable.valor, variable.unidade);
  });

  let resultado;
  let unidadeResultado;
  switch (formula) {
    case "velocidade":
      resultado = calcularVelocidadeMedia(variables);
      unidadeResultado = "m/s";
      break;
    case "trabalho":
      resultado = calcularTrabalho(variables);
      unidadeResultado = "J";
      break;
    case "forca":
      resultado = calcularForca(variables);
      unidadeResultado = "N";
      break;
    case "energia-cinetica":
      resultado = calcularEnergiaCinetica(variables);
      unidadeResultado = "J";
      break;
    case "impulso":
      resultado = calcularImpulso(variables);
      unidadeResultado = "Ns";
      break;
    case "potencia":
      resultado = calcularPotencia(variables);
      unidadeResultado = "W";
      break;
    case "aceleracao":
      resultado = calcularAceleracao(variables);
      unidadeResultado = "m/s²";
      break;
    case "momento-linear":
      resultado = calcularMomentoLinear(variables);
      unidadeResultado = "kg·m/s";
      break;
    case "pressao":
      resultado = calcularPressao(variables);
      unidadeResultado = "Pa";
      break;
    case "frequencia-ondas":
      resultado = calcularFrequenciaOndas(variables);
      unidadeResultado = "Hz";
      break;
    case "lei-hooke":
      resultado = calcularLeiHooke(variables);
      unidadeResultado = "N";
      break;
    case "resistencia-eletrica":
      resultado = calcularResistenciaEletrica(variables);
      unidadeResultado = "Ω";
      break;
    case "energia-mecanica":
      resultado = calcularEnergiaMecanica(variables);
      unidadeResultado = "J";
      break;
    case "lei-gravitacao":
      resultado = calcularLeiGravitacao(variables);
      unidadeResultado = "N";
      break;
    case "energia-potencial-gravitacional":
      resultado = calcularEnergiaPotencialGravitacional(variables);
      unidadeResultado = "J";
      break;
    case "energia-potencial-elastica":
      resultado = calcularEnergiaPotencialElastica(variables);
      unidadeResultado = "J";
      break;
    case "capacitancia":
      resultado = calcularCapacitancia(variables);
      unidadeResultado = "F";
      break;
    case "velocidade-onda":
      resultado = calcularVelocidadeOnda(variables);
      unidadeResultado = "m/s";
      break;
    case "energia-einstein":
      resultado = calcularEinsteinEnergia(variables);
      unidadeResultado = "J";
      break;
    case "lei-newton-corpos-rigidos":
      resultado = calcularLeiNewtonCorposRigidos(variables);
      unidadeResultado = "N·m·s²";
      break;
  
    case "comprimento-onda":
        resultado = calcularComprimentoOnda(variables);
        unidadeResultado = "m";
        break;
    
    case "lei-faraday":
      resultado = calcularFluxoMagnetico(variables);
      unidadeResultado = "Wb";  // Weber (unidade de fluxo magnético)
      break;
      
    case "quociente-potencia":
        resultado = calcularQuocientePotencia(variables);
        unidadeResultado = "W";
        break;
    
    case "quantidade-movimento":
        resultado = calcularQuantidadeMovimento(variables);
        unidadeResultado = "kg·m/s";
        break;
    
    case "campo-eletrico":
        resultado = calcularCampoEletrico(variables);
        unidadeResultado = "N/C";
        break;
    
    case "campo-magnetico":
        resultado = calcularCampoMagnetico(variables);
        unidadeResultado = "T";
        break;
    
    case "leitura-velocidade":
        resultado = calcularLeituraVelocidade(variables);
        unidadeResultado = "m/s";
        break;
    
    case "lei-coulomb":
        resultado = calcularLeiCoulomb(variables);
        unidadeResultado = "N·m²/C²";
        break;
    
    case "potencial-eletrico":
        resultado = calcularPotencialEletrico(variables);
        unidadeResultado = "V";
        break;
    
    case "torque":
      resultado = calcularTorque(variables);
      unidadeResultado = "N·m";
      break;
  
  case "frequencia-resonancia":
      resultado = calcularFrequenciaRessonancia(variables);
      unidadeResultado = "Hz";
      break;
  
  case "lei-ohm":
      resultado = calcularLeiOhm(variables);
      unidadeResultado = "V";
      break;
  
  case "corrente-eletrica":
      resultado = calcularCorrenteEletrica(variables);
      unidadeResultado = "A";
      break;
  
  case "potencia-eletrica":
      resultado = calcularPotenciaEletrica(variables);
      unidadeResultado = "W";
      break;
  
  case "tensao-eletrica":
      resultado = calcularTensaoEletrica(variables);
      unidadeResultado = "V";
      break;
  
  case "eletricidade":
      resultado = calcularEletricidade(variables);
      unidadeResultado = "W";
      break;
  
  case "pressao-atm":
      resultado = calcularPressaoAtm(variables);
      unidadeResultado = "atm";
      break;
  
  case "gravidade-celestial":
      resultado = calcularGravidadeCelestial(variables);
      unidadeResultado = "N";
      break;
  
  case "quantum":
      resultado = calcularQuantumEnergia(variables);
      unidadeResultado = "J";
      break;
  
  case "velocidade-relativistica":
      resultado = calcularVelocidadeRelativistica(variables);
      unidadeResultado = "m/s";
      break;
  
  case "dilatacao-volumetrica":
      resultado = calcularDilatacaoVolumetrica(variables);
      unidadeResultado = "m³";
      break;
  case "dilacao-termica":
    resultado = calcularDilacaoTermica(variables);
    unidadeResultado = "m";
    break;

  case "cinetica-transformada":
      resultado = calcularCineticaTransformada(variables);
      unidadeResultado = "J";
      break;

  case "momento-forca":
      resultado = calcularMomentoForca(variables);
      unidadeResultado = "N·m";
      break;

  case "intensidade-luminosa":
      resultado = calcularIntensidadeLuminosa(variables);
      unidadeResultado = "cd";
      break;

  case "lei-kepler-segunda":
      resultado = calcularLeiKeplerSegunda(variables);
      unidadeResultado = "m²/s";
      break;

  case "lei-kepler-terceira":
      resultado = calcularLeiKeplerTerceira(variables);
      unidadeResultado = "s²/m³";
      break;

  case "velocidade-orbital-media":
      resultado = calcularVelocidadeOrbitalMedia(variables);
      unidadeResultado = "m/s";
      break;

  case "queda-livre-galileu":
      resultado = calcularQuedaLivreGalileu(variables);
      unidadeResultado = "m/s²";
      break;

  case "fator-lorentz":
      resultado = calcularFatorLorentz(variables);
      unidadeResultado = "γ";
      break;

  default:
    console.error("Fórmula não reconhecida.");
    return;
    }

  if (isNaN(resultado)) {
    console.error("Erro ao calcular resultado.");
    return;
  }

  const resultadoExibicao = `$${formatarResultado(resultado)} \\ ${unidadeResultado}$`;
  document.getElementById("resultado-fisica").innerHTML = resultadoExibicao;

  // Renderiza o LaTeX com MathJax
  MathJax.typesetPromise().then(() => {
    console.log("Resultado renderizado com sucesso.");
  }).catch((err) => console.error("Erro ao renderizar MathJax:", err));
}


// Função para converter unidades para Sistema Internacional (SI)
function converterParaSI(valor, unidade) {
  switch (unidade) {
    // Distância
    case "m": // metro
      return valor;
    case "cm": // centímetro
      return valor / 100;
    case "mm": // milímetro
      return valor / 1000;
    case "dm": // decímetro
      return valor / 10;
    case "km": // quilômetro
      return valor * 1000;
    case "in": // polegada
      return valor * 0.0254;
    case "ft": // pé
      return valor * 0.3048;
    case "yd": // jarda
      return valor * 0.9144;
    case "mi": // milha
      return valor * 1609.34;

    // Tempo
    case "s": // segundo
      return valor;
    case "min": // minuto
      return valor * 60;
    case "h": // hora
      return valor * 3600;
    case "ms": // milissegundo
      return valor / 1000;
    case "μs": // microssegundo
      return valor / 1e6;
    case "ns": // nanossegundo
      return valor / 1e9;

    // Massa
    case "kg": // quilograma
      return valor;
    case "g": // grama
      return valor / 1000;
    case "mg": // miligrama
      return valor / 1e6;
    case "μg": // micrograma
      return valor / 1e9;
    case "lb": // libra
      return valor * 0.453592;
    case "oz": // onça
      return valor * 0.0283495;

    // Força
    case "N": // newton
      return valor;
    case "kN": // quilonewton
      return valor * 1000;
    case "mN": // milinewton
      return valor / 1000;
    case "lbf": // libra-força
      return valor * 4.44822;

    // Área
    case "m²": // metro quadrado
      return valor;
    case "cm²": // centímetro quadrado
      return valor / 1e4;
    case "mm²": // milímetro quadrado
      return valor / 1e6;
    case "dm²": // decímetro quadrado
      return valor / 100;
    case "km²": // quilômetro quadrado
      return valor * 1e6;
    case "ft²": // pé quadrado
      return valor * 0.092903;
    case "in²": // polegada quadrada
      return valor * 0.00064516;

    // Volume
    case "m³": // metro cúbico
      return valor;
    case "cm³": // centímetro cúbico
      return valor / 1e6;
    case "mm³": // milímetro cúbico
      return valor / 1e9;
    case "dm³": // decímetro cúbico (litro)
      return valor / 1000;
    case "l": // litro
      return valor / 1000;
    case "ml": // mililitro
      return valor / 1e6;
    case "ft³": // pé cúbico
      return valor * 0.0283168;
    case "in³": // polegada cúbica
      return valor * 1.63871e-5;

    // Pressão
    case "Pa": // pascal
      return valor;
    case "kPa": // quilopascal
      return valor * 1000;
    case "bar": // bar
      return valor * 1e5;
    case "atm": // atmosfera
      return valor * 101325;
    case "mmHg": // milímetro de mercúrio
      return valor * 133.322;
    case "psi": // libra por polegada quadrada
      return valor * 6894.76;

    // Energia
    case "J": // joule
      return valor;
    case "kJ": // quilojoule
      return valor * 1000;
    case "cal": // caloria
      return valor * 4.184;
    case "kcal": // quilocaloria
      return valor * 4184;
    case "Wh": // watt-hora
      return valor * 3600;
    case "kWh": // quilowatt-hora
      return valor * 3.6e6;

    // Potência
    case "W": // watt
      return valor;
    case "kW": // quilowatt
      return valor * 1000;
    case "MW": // megawatt
      return valor * 1e6;
    case "hp": // cavalo-vapor (horsepower)
      return valor * 745.7;

    // Carga elétrica
    case "C": // coulomb
      return valor;
    case "mC": // milicoulomb
      return valor / 1000;
    case "μC": // microcoulomb
      return valor / 1e6;

    // Tensão elétrica
    case "V": // volt
      return valor;
    case "kV": // quilovolt
      return valor * 1000;
    case "mV": // milivolt
      return valor / 1000;
    case "μV": // microvolt
      return valor / 1e6;

    // Corrente elétrica
    case "A": // ampère
      return valor;
    case "mA": // miliampère
      return valor / 1000;
    case "μA": // microampère
      return valor / 1e6;

    // Frequência
    case "Hz": // hertz
      return valor;
    case "kHz": // quilohertz
      return valor * 1000;
    case "MHz": // megahertz
      return valor * 1e6;
    case "GHz": // gigahertz
      return valor * 1e9;

    // Densidade linear
    case "kg/m": // quilograma por metro
      return valor;
    case "g/m": // grama por metro
      return valor / 1000;

    // Momento de Inércia
    case "kg·m²": // kg·m²
      return valor;
    case "g·cm²": // g·cm²
      return valor / 1000000;
    case "lb·ft²": // lb·ft²
      return valor * 0.092903;

    // Aceleração Angular
    case "rad/s²": // rad/s²
      return valor;
    case "deg/s²": // °/s²
      return valor * (Math.PI / 180);

    // Ângulo
    case "rad": // radian
      return valor;
    case "deg": // grau
      return valor * (Math.PI / 180);

    // Coeficiente de Dilatação Volumétrica
    case "1/K": // coeficiente de dilatação volumétrica
      return valor;

    default:
      console.error(`Unidade não reconhecida: ${unidade}`);
      return valor;
  }
}


// Funções de cálculo para Física
function calcularVelocidadeMedia(vars) {
  const [distancia, tempo] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tempo <= 0) {
    const resultado = 0; // Velocidade indefinida
    return resultado;
  }

  const resultado = distancia / tempo;
  return resultado;
}

// Função para calcular Trabalho
function calcularTrabalho(vars) {
  const [forca, distancia] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (forca < 0 || distancia < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = forca * distancia;
  return resultado;
}

// Função para calcular Força
function calcularForca(vars) {
  const [massa, aceleracao] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (massa <= 0 || aceleracao < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = massa * aceleracao;
  return resultado;
}

// Função para calcular Energia Cinética
function calcularEnergiaCinetica(vars) {
  const [massa, velocidade] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (massa <= 0 || velocidade < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = 0.5 * massa * Math.pow(velocidade, 2);
  return resultado;
}

// Função para calcular Impulso
function calcularImpulso(vars) {
  const [forca, tempo] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (forca < 0 || tempo <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = forca * tempo;
  return resultado;
}

// Função para calcular Potência
function calcularPotencia(vars) {
  const [trabalho, tempo] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (trabalho < 0 || tempo <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = trabalho / tempo;
  return resultado;
}

// Função para calcular Aceleração
function calcularAceleracao(vars) {
  const [velocidadeFinal, velocidadeInicial, tempo] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tempo <= 0) {
    const resultado = 0; // Aceleração indefinida
    return resultado;
  }

  const resultado = (velocidadeFinal - velocidadeInicial) / tempo;
  return resultado;
}

// Função para calcular Momento Linear
function calcularMomentoLinear(vars) {
  const [massa, velocidade] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (massa <= 0 || velocidade < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = massa * velocidade;
  return resultado;
}

// Função para calcular Pressão
function calcularPressao(vars) {
  const [forca, area] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (forca < 0 || area <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = forca / area;
  return resultado;
}

// Função para calcular Frequência de Ondas
function calcularFrequenciaOndas(vars) {
  const [velocidade, comprimentoOnda] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (velocidade <= 0 || comprimentoOnda <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = velocidade / comprimentoOnda;
  return resultado;
}

// Função para calcular Lei de Hooke
function calcularLeiHooke(vars) {
  const [constanteElastica, deformacao] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (constanteElastica <= 0 || deformacao < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = constanteElastica * deformacao;
  return resultado;
}

// Função para calcular Resistência Elétrica
function calcularResistenciaEletrica(vars) {
  const [tensao, corrente] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tensao <= 0 || corrente <=  0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = tensao / corrente;
  return resultado;
}

// Função para calcular Movimento Uniforme
function calcularMovimentoUniforme(vars) {
  const [posicaoInicial, velocidade, tempo] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tempo < 0) {
    const resultado = posicaoInicial; // Considerando movimento com velocidade zero
    return resultado;
  }

  const resultado = posicaoInicial + velocidade * tempo;
  return resultado;
}

// Função para calcular Movimento Uniformemente Variado
function calcularMovimentoUniformementeVariado(vars) {
  const [posicaoInicial, velocidadeInicial, aceleracao, tempo] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tempo < 0) {
    const resultado = posicaoInicial; // Considerando movimento com velocidade zero
    return resultado;
  }

  const resultado = posicaoInicial + velocidadeInicial * tempo + 0.5 * aceleracao * Math.pow(tempo, 2);
  return resultado;
}

// Função para calcular Energia Mecânica
function calcularEnergiaMecanica(vars) {
  const [energiaCinetica, energiaPotencial] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (energiaCinetica < 0 || energiaPotencial < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = energiaCinetica + energiaPotencial;
  return resultado;
}

// Função para calcular Lei da Gravitação Universal
function calcularLeiGravitacao(vars) {
  const [massa1, massa2, distancia] = vars.map((variavel) => parseNumber(variavel.valor));
  const G = 6.6743e-11; // Constante gravitacional

  // Verificar valores inválidos
  if (massa1 <= 0 || massa2 <= 0 || distancia <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = (G * (massa1 * massa2)) / Math.pow(distancia, 2);
  return resultado;
}

// Função para calcular Energia Potencial Gravitacional
const GRAVIDADE = 9.80665; // Valor fixo da gravidade

function calcularEnergiaPotencialGravitacional(vars) {
  const [massa, altura] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (massa <= 0 || altura < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = massa * GRAVIDADE * altura;
  return resultado;
}


// Função para calcular Energia Potencial Elástica
function calcularEnergiaPotencialElastica(vars) {
  const [constanteElastica, deformacao] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (constanteElastica <= 0 || deformacao < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = 0.5 * constanteElastica * Math.pow(deformacao, 2);
  return resultado;
}

// Função para calcular Capacitância
function calcularCapacitancia(vars) {
  const [carga, tensao] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (carga < 0 || tensao <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = carga / tensao;
  return resultado;
}

// Função para calcular Energia pela equação de Einstein
function calcularEinsteinEnergia(vars) {
  const [massa] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (massa <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const velocidadeLuz = 299792458; // Velocidade da luz em m/s
  const energia = massa * Math.pow(velocidadeLuz, 2);
  return energia;
}

// Função para calcular Veloc idade de uma Onda em uma corda
function calcularVelocidadeOnda(vars) {
  const [tensao, densidadeLinear] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tensao <= 0 || densidadeLinear <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  const resultado = Math.sqrt(tensao / densidadeLinear);
  return resultado;
}

// Função para parsear número
function parseNumber(valor) {
  if (typeof valor === "string") {
    valor = valor.replace(",", "."); // Corrigir vírgulas para ponto decimal
  }
  const numero = parseFloat(valor);
  return isNaN(numero) ? 1e-100 : numero; // Retorna um valor muito pequeno se não for válido
}

// Função para calcular o Torque com base no Momento de Inércia e Aceleração Angular
function calcularLeiNewtonCorposRigidos(vars) {
  // Tenta extrair e converter os valores para número
  const [momentoInercia, aceleracaoAngular] = vars.map((variavel) => parseNumber(variavel.valor));

  // Log para depuração
  console.log(`Momento de Inércia (I): ${momentoInercia}, Aceleração Angular (α): ${aceleracaoAngular}`);

  // Verificar valores inválidos
  if (momentoInercia <= 0 || aceleracaoAngular <= 0) {
    console.error("Valores inválidos: Momento de inércia e aceleração angular devem ser positivos.");
    return 0;
  }

  // Fórmula do Torque (Lei de Newton para rotação): τ = I * α
  const resultado = momentoInercia * aceleracaoAngular;

  // Verificação de resultado
  console.log(`Resultado do cálculo do Torque (τ): ${resultado}`);

  return resultado;
}



function calcularComprimentoOnda(vars) {
  const [velocidade, frequencia] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (velocidade < 0 || frequencia < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula do Comprimento de Onda: λ = v / f
  const resultado = velocidade / frequencia;
  return resultado;
}

function calcularFluxoMagnetico(vars) {
  const [numeroDeVoltas, campoMagnetico, area, variacaoCampoMagnetico] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (numeroDeVoltas <= 0 || campoMagnetico <= 0 || area <= 0 || variacaoCampoMagnetico <= 0) {
    console.error("Valores inválidos para o cálculo da Indução de Faraday.");
    return 0; // Caso inválido
  }

  // Fórmula do Fluxo Magnético: Φ = B * A
  const fluxoMagnetico = campoMagnetico * area;

  // Fórmula da Indução de Faraday: E = - N * (dΦ/dt)
  // Onde a variação do fluxo magnético é dada por: dΦ/dt = variação do campo magnético * área
  const resultado = -numeroDeVoltas * variacaoCampoMagnetico * area;
  return resultado;
}



function calcularQuocientePotencia(vars) {
  const [potencia1, potencia2] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (potencia2 === 0) {
    const resultado = Infinity; // Evitar divisão por zero
    return resultado;
  }

  // Fórmula do Quociente de Potências: P = P1 / P2
  const resultado = potencia1 / potencia2;
  return resultado;
}


function calcularQuantidadeMovimento(vars) {
  const [massa, velocidade] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (massa < 0 || velocidade < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Quantidade de Movimento: p = m * v
  const resultado = massa * velocidade;
  return resultado;
}

function calcularCampoEletrico(vars) {
  const [forca, carga] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (forca < 0 || carga <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula do Campo Elétrico: E = F / q
  const resultado = forca / carga;
  return resultado;
}

function calcularCampoMagnetico(vars) {
  const [corrente, raio] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (corrente < 0 || raio <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula do Campo Magnético: B = (μ₀ * I) / (2 * π * r)
  const resultado = (4 * Math.PI * 1e-7 * corrente) / (2 * Math.PI * raio);
  return resultado;
}

function calcularLeituraVelocidade(vars) {
  const [distancia, tempo] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (distancia < 0 || tempo <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Velocidade Média: v = d / t
  const resultado = distancia / tempo;
  return resultado;
}

function calcularLeiCoulomb(vars) {
  const [carga1, carga2, distancia] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (carga1 <= 0 || carga2 <= 0 || distancia <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Constante de Coulomb (k_e): 8.99 * 10^9 N·m²/C²
  const k_e = 8.99e9;

  // Fórmula da Lei de Coulomb: F = k_e * (q1 * q2) / r²
  const resultado = k_e * (carga1 * carga2) / Math.pow(distancia, 2);
  return resultado;
}

function calcularPotencialEletrico(vars) {
  const [carga, distancia] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (carga <= 0 || distancia <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Constante de Coulomb (k_e): 8.99 * 10^9 N·m²/C²
  const k_e = 8.99e9;

  // Fórmula do Potencial Elétrico: V = k_e * q / r
  const resultado = k_e * carga / distancia;
  return resultado;
}

function calcularTorque(vars) {
  const [forca, raio, angulo] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (forca < 0 || raio <= 0 || angulo < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula do Torque: τ = F * r * sin(θ)
  const resultado = forca * raio * Math.sin(angulo);
  return resultado;
}

function calcularFrequenciaRessonancia(vars) {
  const [indutancia, capacitancia] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (indutancia <= 0 || capacitancia <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Frequência de Ressonância: f_r = 1 / (2 * π * √(L * C))
  const resultado = 1 / (2 * Math.PI * Math.sqrt(indutancia * capacitancia));
  return resultado;
}

function calcularLeiOhm(vars) {
  const [tensao, resistencia] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tensao <= 0 || resistencia <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Lei de Ohm: I = V / R
  const resultado = tensao / resistencia;
  return resultado;
}

function calcularCorrenteEletrica(vars) {
  const [tensao, resistencia] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tensao <= 0 || resistencia <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula para Corrente Elétrica: I = V / R
  const resultado = tensao / resistencia;
  return resultado;
}

function calcularPotenciaEletrica(vars) {
  const [corrente, tensao] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (corrente <= 0 || tensao <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula para Potência Elétrica: P = V * I
  const resultado = tensao * corrente;
  return resultado;
}

function calcularTensaoEletrica(vars) {
  const [corrente, resistencia] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (corrente <= 0 || resistencia <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula para Tensão Elétrica: V = I * R
  const resultado = corrente * resistencia;
  return resultado;
}

function calcularEletricidade(vars) {
  const [tensao, corrente] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tensao <= 0 || corrente <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula para Potência Elétrica: P = V * I
  const resultado = tensao * corrente;
  return resultado;
}

function calcularPressaoAtm(vars) {
  const [forca, area] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (forca <= 0 || area <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Pressão: P = F / A
  const resultado = forca / area;
  return resultado;
}

function calcularGravidadeCelestial(vars) {
  const [massa1, massa2, distancia] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (massa1 <= 0 || massa2 <= 0 || distancia <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Lei da Gravitação Universal: F = G * (m1 * m2) / r^2
  const G = 6.67430e-11; // Constante gravitacional
  const resultado = (G * massa1 * massa2) / Math.pow(distancia, 2);
  return resultado;
}

function calcularQuantumEnergia(vars) {
  if (!Array.isArray(vars) || vars.length === 0) {
    console.error("Entrada inválida: A variável 'vars' não é um array válido.");
    return 0;
  }

  const frequencia = parseNumber(vars[0].valor);

  if (frequencia <= 0) {
    console.error("Valor inválido: A frequência deve ser um número positivo.");
    return 0;
  }

  const h = 6.62607015e-34;

  const resultado = h * frequencia;

  console.log(`Frequência: ${frequencia} Hz`);
  console.log(`Quantum de Energia: ${resultado} J`);

  return resultado;
}


function calcularVelocidadeRelativistica(vars) {
  const [velocidade] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (velocidade <= 0) {
    return 0; // Caso inválido
  }

  const velocidadeLuz = 3e8; // Constante: Velocidade da Luz (3 × 10^8 m/s)

  // Fórmula da Velocidade Relativística: v = v0 / √(1 - v^2 / c^2)
  const resultado = velocidade / Math.sqrt(1 - Math.pow(velocidade / velocidadeLuz, 2));
  return resultado;
}

function calcularDilacaoTermica(vars) {
  const [comprimentoInicial, coeficienteDilatacao, variacaoTemperatura] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (comprimentoInicial <= 0 || coeficienteDilatacao <= 0 || variacaoTemperatura <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Dilatação Térmica: ΔL = L0 * α * ΔT
  const resultado = comprimentoInicial * coeficienteDilatacao * variacaoTemperatura;
  return resultado;
}

function calcularDilatacaoVolumetrica(vars) {
  const [volumeInicial, coeficienteDilatacao, variacaoTemperatura] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (volumeInicial <= 0 || coeficienteDilatacao <= 0 || variacaoTemperatura <= 0) {
    return 0; // Caso inválido
  }

  // Fórmula da Dilatação Volumétrica: ΔV = V0 * β * ΔT
  const resultado = volumeInicial * coeficienteDilatacao * variacaoTemperatura;
  return resultado;
}



function calcularCineticaTransformada(vars) {
  const [massa, velocidade] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (massa <= 0 || velocidade <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Energia Cinética: Ek = 1/2 * m * v^2
  const resultado = 0.5 * massa * Math.pow(velocidade, 2);
  return resultado;
}

function calcularMomentoForca(vars) {
  const [forca, raio] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (forca <= 0 || raio <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula do Momento de Força: τ = F * r
  const resultado = forca * raio;
  return resultado;
}

function calcularIntensidadeLuminosa(vars) {
  const [potencia, area] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (potencia <= 0 || area <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Intensidade Luminosa: I = P / A
  const resultado = potencia / area;
  return resultado;
}

function calcularLeiKeplerSegunda(vars) {
  const [raio, angulo] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (raio <= 0 || angulo < 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Segunda Lei de Kepler: A = (1/2) * r² * Δθ
  const resultado = 0.5 * Math.pow(raio, 2) * angulo;  // O ângulo deve estar em radianos
  return resultado;
}


function calcularLeiKeplerTerceira(vars) {
  const [periodo, raio] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (periodo <= 0 || raio <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Terceira Lei de Kepler: T² = k * r³
  const k = 2.97e-19;  // Constante que depende do sistema de unidades
  const resultado = Math.pow(periodo, 2) / Math.pow(raio, 3);
  return resultado;
}


function calcularVelocidadeOrbitalMedia(vars) {
  const [gravidade, massaPlaneta, raioOrbitado] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (gravidade <= 0 || massaPlaneta <= 0 || raioOrbitado <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Velocidade Orbital Média: v = √(G * M / r)
  const G = 6.67430e-11; // Constante gravitacional
  const resultado = Math.sqrt((G * massaPlaneta) / raioOrbitado);
  return resultado;
}

function calcularQuedaLivreGalileu(vars) {
  const [tempo, gravidade] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (tempo <= 0 || gravidade <= 0) {
    const resultado = 0; // Caso inválido
    return resultado;
  }

  // Fórmula da Queda Livre de Galileu: h = 1/2 * g * t²
  const resultado = 0.5 * gravidade * Math.pow(tempo, 2);
  return resultado;
}

function calcularFatorLorentz(vars) {
  // Verificar se vars tem o formato esperado (um array com objetos contendo a propriedade "valor")
  if (!Array.isArray(vars) || vars.length < 2) {
    console.error("Variáveis inválidas para o cálculo.");
    return 0;
  }

  // Tenta extrair e converter os valores para número
  const [velocidade, velocidadeLuz] = vars.map((variavel) => parseNumber(variavel.valor));

  // Verificar valores inválidos
  if (velocidade <= 0 || velocidadeLuz <= 0) {
    console.error("Valores inválidos: a velocidade e a velocidade da luz devem ser positivas.");
    return 0;
  }

  // Verificar se a velocidade não é maior ou igual à velocidade da luz (o que causaria um valor inválido)
  if (velocidade >= velocidadeLuz) {
    console.error("A velocidade não pode ser maior ou igual à velocidade da luz.");
    return 0;
  }

  // Fórmula do Fator de Lorentz: γ = 1 / √(1 - v² / c²)
  const resultado = 1 / Math.sqrt(1 - Math.pow(velocidade / velocidadeLuz, 2));

  // Verifica se o resultado é um número válido
  if (isNaN(resultado) || !isFinite(resultado)) {
    console.error("Resultado inválido para o cálculo do fator de Lorentz.");
    return 0;
  }

  return resultado;
}



// Função para garantir que os valores sejam convertidos corretamente para números
function parseNumber(valor) {
  const numero = parseFloat(valor);
  if (isNaN(numero)) {
    console.error(`Valor inválido: ${valor} não pode ser convertido para número.`);
    return 0; // Retorna 0 se não puder converter
  }
  return numero;
}


function formatarResultado(valor) {
  // Notação científica para valores muito pequenos ou grandes
  if (Math.abs(valor) >= 1e6 || (Math.abs(valor) < 1e-3 && valor !== 0)) {
    const [base, expoente] = valor.toExponential().split('e');
    const baseFormatada = base.replace('.', ','); // Troca ponto por vírgula
    const expoenteFormatado = expoente.replace('+', ''); // Remove o sinal de adição
    return `${baseFormatada} \\times 10^{${expoenteFormatado}}`; // Formato: x,xxxx * 10^y
  }

  // Retorna o número inteiro sem decimais
  if (Number.isInteger(valor)) {
    return valor.toString();
  }

  // Retorna valores normais com 5 casas decimais
  return valor.toFixed(5).replace('.', ',').replace(/\.?0+$/, ''); // Troca ponto por vírgula e remove zeros desnecessários
}

// Inicialização após o carregamento do DOM para Física
document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("formula_fisica")
      .addEventListener("change", updateVariablesFisica);
  
    // Adicionar biblioteca MathJax para renderizar fórmulas LaTeX
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js";
    script.async = true;
    document.head.appendChild(script);
  
    // Configurar MathJax para renderizar fórmulas LaTeX
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
        displayMath: [
          ["$$", "$$"],
          ["\\[", "\\]"],
        ],
      },
    });
  });
  
  // Função para atualizar as variáveis com base na fórmula de Física selecionada
  function updateVariablesFisica() {
    const formula = document.getElementById("formula_fisica").value;
    const container = document.getElementById("variables-container_fisica");
    const formulaDisplay = document.getElementById("fisica-formula-display");
    container.innerHTML = "";
    let variables = [];
    let formulaHtml = "";
    let unidades = [];
  
    switch (formula) {
      case "velocidade":
        formulaHtml = "\\( v = \\frac{d}{t} \\)";
        variables = ["Distância", "Tempo"];
        unidades = ["m", "s"];
        break;
      case "trabalho":
        formulaHtml = "\\( T = F \\cdot d \\)";
        variables = ["Força", "Distância"];
        unidades = ["N", "m"];
        break;
      case "forca":
        formulaHtml = "\\( F = m \\cdot a \\)";
        variables = ["Massa", "Aceleração"];
        unidades = ["kg", "m/s²"];
        break;
      case "energia-cinetica":
        formulaHtml = "\\( E_c = \\frac{1}{2} \\cdot m \\cdot v^2 \\)";
        variables = ["Massa", "Velocidade"];
        unidades = ["kg", "m/s"];
        break;
      case "impulso":
        formulaHtml = "\\( I = F \\cdot t \\)";
        variables = ["Força", "Tempo"];
        unidades = ["N", "s"];
        break;
      case "potencia":
        formulaHtml = "\\( P = \\frac{T}{t} \\)";
        variables = ["Trabalho", "Tempo"];
        unidades = ["J", "s"];
        break;
      case "aceleracao":
        formulaHtml = "\\( a = \\frac{v_f - v_i}{t} \\)";
        variables = ["Velocidade final", "Velocidade inicial", "Tempo"];
        unidades = ["m/s", "m/s", "s"];
        break;
      case "momento-linear":
        formulaHtml = "\\( p = m \\cdot v \\)";
        variables = ["Massa", "Velocidade"];
        unidades = ["kg", "m/s"];
        break;
      case "pressao":
        formulaHtml = "\\( P = \\frac{F}{A} \\)";
        variables = ["Força", "Área"];
        unidades = ["N", "m²"];
        break;
      case "frequencia-ondas":
        formulaHtml = "\\( f = \\frac{v}{\\lambda} \\)";
        variables = ["Velocidade", "Comprimento de onda"];
        unidades = ["m/s", "m"];
        break;
      case "lei-hooke":
        formulaHtml = "\\( F = k \\cdot x \\)";
        variables = ["Constante Elástica", "Deformação"];
        unidades = ["N/m", "m"];
        break;
      case "resistencia-eletrica":
        formulaHtml = "\\( R = \\frac{V}{I} \\)";
        variables = ["Tensão", "Corrente"];
        unidades = ["V", "A"];
        break;
      case "movimento-uniforme":
        formulaHtml = "\\( S = S_0 + v \\cdot t \\)";
        variables = ["Posição inicial", "Velocidade", "Tempo"];
        unidades = ["m", "m/s", "s"];
        break;
      case "movimento-uniformemente-variado":
        formulaHtml =
          "\\( S = S_0 + v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2 \\)";
        variables = [
          "Posição inicial",
          "Velocidade inicial",
          "Aceleração",
          " Tempo",
        ];
        unidades = ["m", "m/s", "m/s²", "s"];
        break;
      case "energia-mecanica":
        formulaHtml = "\\( E_m = E_p + E_c \\)";
        variables = ["Energia Potencial", "Energia Cinética"];
        unidades = ["J", "J"];
        break;
      case "lei-gravitacao":
        formulaHtml = "\\( F = G \\cdot \\frac{m_1 \\cdot m_2}{ r^2} \\)";
        variables = ["Mass a 1", "Mass a 2", "Distância "];
        unidades = ["kg ", "kg", "m"];
        break;
      case "energia-potencial-gravitacional":
        formulaHtml = "\\( E_p = m \\cdot g \\cdot h \\)";
        variables = ["Massa", "Gravidade", "Altura"];
        unidades = ["kg", "m/s²", "m"];
        break;
      case "energia-potencial-elastica":
        formulaHtml = "\\( E_{pe} = \\frac{1}{2} \\cdot k \\cdot x^2 \\)";
        variables = ["Constante Elástica", "Deformação"];
        unidades = ["N/m", "m"];
        break;
      case "capacitancia":
        formulaHtml = "\\( C = \\frac{Q}{V} \\)";
        variables = ["Carga", "Tensão"];
        unidades = ["C", "V"];
        break;
      case "einstein-energia":
        formulaHtml = "\\( E = m \\cdot c^2 \\)";
        variables = ["Massa"];
        unidades = ["kg"];
        break;
      case "velocidade-onda":
        formulaHtml = "\\( v = \\sqrt{\\frac{T}{\\rho}} \\)";
        variables = ["Tensão", "Densidade linear"];
        unidades = ["N", "kg/m"];
        break;
    }
  
    // Atualiza a exibição da fórmula selecionada
    formulaDisplay.innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;
  
    // Gerar campos de entrada de variáveis de acordo com a fórmula selecionada
    container.innerHTML = variables
      .map(
        (variable, index) =>
          `<div style="padding: 10px; border-bottom: 1px solid #ccc;">
                    <label for="var${index}">${variable}</label>
                    <input type="number" id="var${index}" placeholder="${variable}">
                    <select id="unidade${index}">
                        ${getUnidades(variable)}
                    </select>
                </div>`
      )
      .join("");
  
    // Adicionar evento de clique no botão de calcular
    document.getElementById("calcular").addEventListener("click", calcularFisica);
  }
  
  // Função para obter as unidades para cada variável
  function getUnidades(variable) {
    switch (variable) {
      case "Distância":
        return `
                      <option value="m">$m</option>
                      <option value="cm">$cm</option>
                      <option value="dm">$dm</option>
                      <option value="mm">$mm</option>
                      <option value="km">$km</option>
                      <option value="mi">$mi</option>
                      <option value="in">$in</option>
                      <option value="ft">$ft</option>
                      <option value="yd">$yd</option>
                  `;
      case "Tempo":
        return `
                      <option value="s">$s</option>
                      <option value="min">$min</option>
                      <option value="h">$h</option>
                      <option value="d">$d</option>
                      <option value="ms">$ms</option>
                      <option value="μs">$μs</option>
                      <option value="ns">$ns</option>
                    `;
      case "Força":
        return `
                      <option value="N">$N</option>
                      <option value="kN">$kN</option>
                      <option value="mN">$mN</option>
                      <option value="μN">$μN</option>
                      <option value="lbf">$lbf</option>
                      <option value="ozf">$ozf</option>
                    `;
      case "Massa":
        return `
                      <option value="kg">$kg</option>
                      <option value="g">$g</option>
                      <option value="mg">$mg</option>
                      <option value="μg">$μg</option>
                      <option value="lb">$lb</option>
                      <option value="oz">$oz</option>
                    `;
      case "Aceleração":
        return `
                      <option value ="m/s²">$m/s²</option>
                      <option value="cm/s²">$cm/s²</option>
                      <option value="dm/s²">$dm/s²</option>
                      <option value="mm/s²">$mm/s²</option>
                      <option value="g">$g</option>
                    `;
      case "Trabalho":
        return `
                      <option value="J">$J</option>
                      <option value="kJ">$kJ</option>
                      <option value="mJ">$mJ</option>
                      <option value="μJ">$μJ</option>
                      <option value ="cal">$cal</option>
                      <option value="kcal">$kcal</option>
       `;
      case "Energia":
        return `
                      <option value="J">$J</option>
                      <option value="kJ">$kJ</option>
                      <option value="mJ">$mJ</option>
                      <option value="μJ">$μJ</option>
                      <option value="cal">$cal</option>
                      <option value="kcal">$kcal</option>
                    `;
      case "Potência":
        return `
                      <option value="W">$W</option>
                      <option value="kW">$kW</option>
                      <option value="mW">$mW</option>
                      <option value="μW">$μW</option>
                      <option value="hp">$hp</option>
                    `;
      case "Pressão":
        return `
                      <option value="Pa">$Pa</option>
                      <option value="kPa">$kPa</option>
                      <option value="mPa">$mPa</option>
                      <option value="μPa">$μPa</option>
                      <option value="atm">$atm</option>
                      <option value="bar">$bar</option>
                    `;
      case "Frequência":
        return `
                      <option value="Hz">$Hz</option>
                      <option value="kHz">$kHz</option>
                      <option value="MHz">$MHz</option>
                      <option value="GHz">$GHz</option>
                    `;
      default:
        return "";
    }
  }
  
  // Função de cálculo para Física
  function calcularFisica() {
    const formula = document.getElementById("formula_fisica").value;
    const container = document.getElementById("variables-container_fisica");
    const inputs = container.querySelectorAll("input");
    const unidades = container.querySelectorAll("select");
    const variables = Array.from(inputs).map((input, index) => {
      const unidade = unidades[index].value;
      const valor = parseFloat(input.value.trim());
      return { valor, unidade };
    });
  
    // Converter unidades para SI
    variables.forEach((variable, index) => {
      switch (variable.unidade) {
        case "cm":
          variables[index].valor *= 0.01;
          break;
        case "dm":
          variables[index].valor *= 0.1;
          break;
        case "mm":
          variables[index].valor *= 0.001;
          break;
        case "km":
          variables[index].valor *= 1000;
          break;
        case "min":
          variables[index].valor *= 60;
          break;
        case "h":
          variables[index].valor *= 3600;
          break;
        case "d":
          variables[index].valor *= 86400;
          break;
        case "kN":
          variables[index].valor *= 1000;
          break;
        case "mN":
          variables[index].valor *= 0.001;
          break;
        case "μN":
          variables[index].valor *= 0.000001;
          break;
        case "g":
          variables[index].valor *= 0.001;
          break;
        case "mg":
          variables[index].valor *= 0.000001;
          break;
        case "μg":
          variables[index].valor *= 0.000000001;
          break;
        case "kJ":
          variables[index].valor *= 1000;
          break;
        case "mJ":
          variables[index].valor *= 0.001;
          break;
        case "μJ":
          variables[index].valor *= 0.000001;
          break;
        case "kW":
          variables[index].valor *= 1000;
          break;
        case "mW":
          variables[index].valor *= 0.001;
          break;
        case "μW":
          variables[index].valor *= 0.000001;
          break;
        case "kPa":
          variables[index].valor *= 1000;
          break;
        case "mPa":
          variables[index].valor *= 0.001;
          break;
        case "μPa":
          variables[index].valor *= 0.000001;
          break;
        case "kHz ":
          variables[index].valor *= 1000;
          break;
        case "MHz":
          variables[index].valor *= 1000000;
          break;
        case "GHz":
          variables[index].valor *= 1000000000;
          break;
      }
    });
  
    // Calcular resultado
    let resultado;
    switch (formula) {
      case "velocidade":
        resultado = calcularVelocidadeMedia(variables);
        break;
      case "trabalho":
        resultado = calcularTrabalho(variables);
        break;
      case "forca":
        resultado = calcularForca(variables);
        break;
      case "energia-cinetica":
        resultado = calcularEnergiaCinetica(variables);
        break;
      case "impulso":
        resultado = calcularImpulso(variables);
        break;
      case "potencia":
        resultado = calcularPotencia(variables);
        break;
      case "aceleracao":
        resultado = calcularAceleracao(variables);
        break;
      case "momento-linear":
        resultado = calcularMomentoLinear(variables);
        break;
      case "pressao":
        resultado = calcularPressao(variables);
        break;
      case "frequencia-ondas":
        resultado = calcularFrequenciaOndas(variables);
        break;
      case "lei-hooke":
        resultado = calcularLeiHooke(variables);
        break;
      case "resistencia-eletrica":
        resultado = calcularResistenciaEletrica(variables);
        break;
      case "movimento-uniforme":
        resultado = calcularMovimentoUniforme(variables);
        break;
      case "movimento-uniformemente-variado":
        resultado = calcularMovimentoUniformementeVariado(variables);
        break;
      case "energia-mecanica":
        resultado = calcularEnergiaMecanica(variables);
        break;
      case "lei-gravitacao":
        resultado = calcularLeiGravitacao(variables);
        break;
      case "energia-potencial-gravitacional":
        resultado = calcularEnergiaPotencialGravitacional(variables);
        break;
      case "energia-potencial-elastica":
        resultado = calcularEnergiaPotencialElastica(variables);
        break;
      case "capacitancia":
        resultado = calcularCapacitancia(variables);
        break;
      case "einstein-energia":
        resultado = calcularEinsteinEnergia(variables);
        break;
      case "velocidade-onda":
        resultado = calcularVelocidadeOnda(variables);
        break;
    }
  
    // Exibir resultado com unidade de medida correta
    const unidadeResultado = getUnidadeResultado(formula);
    const resultadoHtml = `
            <div class="resultado">
                <h2>Resultado:</h2>
                <p>
                    <span class="valor">${resultado.toFixed(2)}</span>
                    <span class="unidade">${unidadeResultado}</span>
                </p>
            </div>
            `;
    document.getElementById("resultado-fisica").innerHTML = resultadoHtml;
    document.getElementById("resultado-fisica").style.transition = "opacity 0.5s";
  }
  
  // Função para obter a unidade de medida correta
  function getUnidadeResultado(formula) {
    switch (formula) {
      case "velocidade":
        return "m/s";
      case "trabalho":
        return "J";
      case "forca":
        return "N";
      case "energia-cinetica":
        return "J";
      case "impulso":
        return "N·s";
      case "potencia":
        return "W";
      case "aceleracao":
        return "m/s²";
      case "momento-linear":
        return "kg·m/s";
      case "pressao":
        return "Pa";
      case "frequencia-ondas":
        return "Hz";
      case "lei-hooke":
        return "N";
      case "resistencia-eletrica":
        return "Ω";
      case "movimento-uniforme":
        return "m";
      case "movimento-uniformemente-variado":
        return "m";
      case "energia-mecanica":
        return "J";
      case "lei-gravitacao":
        return "N";
      case "energia-potencial-gravitacional":
        return "J";
      case "energia-potencial-elastica":
        return "J";
      case "capacitancia":
        return "F";
      case "einstein-energia":
        return "J";
      case "velocidade-onda":
        return "m/s";
    }
  }
  
  // Funções de cálculo para Física
  function calcularVelocidadeMedia(vars) {
    const [distancia, tempo] = vars.map((variavel) => variavel.valor);
    return distancia / tempo;
  }
  
  function calcularTrabalho(vars) {
    const [forca, distancia] = vars.map((variavel) => variavel.valor);
    return forca * distancia;
  }
  
  function calcularForca(vars) {
    const [massa, aceleracao] = vars.map((variavel) => variavel.valor);
    return massa * aceleracao;
  }
  
  function calcularEnergiaCinetica(vars) {
    const [massa, velocidade] = vars.map((variavel) => variavel.valor);
    return 0.5 * massa * velocidade ** 2;
  }
  
  function calcularImpulso(vars) {
    const [forca, tempo] = vars.map((variavel) => variavel.valor);
    return forca * tempo;
  }
  
  function calcularPotencia(vars) {
    const [trabalho, tempo] = vars.map((variavel) => variavel.valor);
    return trabalho / tempo;
  }
  
  function calcularAceleracao(vars) {
    const [vFinal, vInicial, tempo] = vars.map((variavel) => variavel.valor);
    return (vFinal - vInicial) / tempo;
  }
  
  function calcularMomentoLinear(vars) {
    const [massa, velocidade] = vars.map((variavel) => variavel.valor);
    return massa * velocidade;
  }
  
  function calcularPressao(vars) {
    const [forca, area] = vars.map((variavel) => variavel.valor);
    return forca / area;
  }
  
  function calcularFrequenciaOndas(vars) {
    const [velocidade, comprimento] = vars.map((variavel) => variavel.valor);
    return velocidade / comprimento;
  }
  
  function calcularLeiHooke(vars) {
    const [constanteElastica, deformacao] = vars.map(
      (variavel) => variavel.valor
    );
    return constanteElastica * deformacao;
  }
  
  function calcularResistenciaEletrica(vars) {
    const [tensao, corrente] = vars.map((variavel) => variavel.valor);
    return tensao / corrente;
  }
  
  function calcularMovimentoUniforme(vars) {
    const [posInicial, velocidade, tempo] = vars.map(
      (variavel) => variavel.valor
    );
    return posInicial + velocidade * tempo;
  }
  
  function calcularMovimentoUniformementeVariado(vars) {
    const [posInicial, velInicial, aceleracao, tempo] = vars.map(
      (variavel) => variavel.valor
    );
    return posInicial + velInicial * tempo + 0.5 * aceleracao * tempo ** 2;
  }
  
  function calcularEnergiaMecanica(vars) {
    const [energiaPotencial, energiaCinetica] = vars.map(
      (variavel) => variavel.valor
    );
    return energiaPotencial + energiaCinetica;
  }
  
  function calcularLeiGravitacao(vars) {
    const [massa1, massa2, distancia] = vars.map((variavel) => variavel.valor);
    const G = 6.6743e-11; // Constante da gravitação universal em m³/kg/s²
    return (G * (massa1 * massa2)) / distancia ** 2;
  }
  
  function calcularEnergiaPotencialGravitacional(vars) {
    const [massa, gravidade, altura] = vars.map((variavel) => variavel.valor);
    return massa * gravidade * altura;
  }
  
  function calcularEnergiaPotencialElastica(vars) {
    const [constanteElastica, deformacao] = vars.map(
      (variavel) => variavel.valor
    );
    return 0.5 * constanteElastica * deformacao ** 2;
  }
  
  function calcularCapacitancia(vars) {
    const [carga, tensao] = vars.map((variavel) => variavel.valor);
    return carga / tensao;
  }
  
  const velocidadeLuz = 299792458; // m/s
  
  function calcularEinsteinEnergia(vars) {
    const [massa] = vars.map((variavel) => variavel.valor);
    return massa * velocidadeLuz ** 2;
  }
  
  function calcularVelocidadeOnda(vars) {
    const [tensao, densidadeLinear] = vars.map((variavel) => variavel.valor);
    return Math.sqrt(tensao / densidadeLinear);
  }
  
  // Funções para renderizar LaTeX
  function renderLatex(latex) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js";
    script.async = true;
    document.head.appendChild(script);
  
    const config = {
      tex2jax: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"],
        ],
        displayMath: [
          ["$$", "$$"],
          ["\\[", "\\]"],
        ],
      },
    };
  
    MathJax.Hub.Config(config);
  
    const latexElement = document.createElement("div");
    latexElement.innerHTML = latex;
    document.body.appendChild(latexElement);
  
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, latexElement]);
  }
  
  // Exemplo de uso
  renderLatex("\\( E = mc^2 \\)");
  
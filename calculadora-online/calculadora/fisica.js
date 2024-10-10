// Inicialização após o carregamento do DOM para Física
document.addEventListener("DOMContentLoaded", function () {
  const formulaFisica = document.getElementById("formula_fisica");

  if (formulaFisica) {
    // Adicionar listener para mudança de fórmula
    formulaFisica.addEventListener("change", updateVariablesFisica);
    console.log("Elemento formula_fisica encontrado e listener adicionado.");
  } else {
    console.error('Elemento com id "formula_fisica" não encontrado.');
  }

  // Adicionar MathJax para renderizar fórmulas LaTeX após o carregamento
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"; // URL correta para o MathJax 3
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    console.log("MathJax carregado com sucesso.");
    window.MathJax = {
      tex: {
        inlineMath: [["$", "$"], ["\\(", "\\)"]],
        displayMath: [["$$", "$$"], ["\\[", "\\]"]],
      },
      svg: {
        fontCache: "global",
      },
    };

    MathJax.typesetPromise()
      .then(() => {
        console.log("MathJax reprocessado com sucesso.");
      })
      .catch((err) => {
        console.error("Erro ao processar fórmulas MathJax:", err);
      });
  };
});

// Função para atualizar as variáveis e fórmulas com base na fórmula selecionada
function updateVariablesFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const container = document.getElementById("variables-container_fisica");
  const formulaDisplay = document.getElementById("fisica-formula-display");

  // Limpar conteúdo anterior
  container.innerHTML = "";
  formulaDisplay.innerHTML = "";

  let variables = [];
  let formulaHtml = "";
  let unidades = [];

  // Definir variáveis e fórmulas com base na fórmula selecionada
  switch (formula) {
    case "velocidade":
      formulaHtml = "\\( v = \\frac{d}{t} \\)";
      variables = ["Distância", "Tempo"];
      unidades = [getUnidades("Distância"), getUnidades("Tempo")];
      break;
    case "trabalho":
      formulaHtml = "\\( T = F \\cdot d \\)";
      variables = ["Força", "Distância"];
      unidades = [getUnidades("Força"), getUnidades("Distância")];
      break;
    case "forca":
      formulaHtml = "\\( F = m \\cdot a \\)";
      variables = ["Massa", "Aceleração"];
      unidades = [getUnidades("Massa"), getUnidades("Aceleração")];
      break;
    case "energia-cinetica":
      formulaHtml = "\\( E_c = \\frac{1}{2} \\cdot m \\cdot v^2 \\)";
      variables = ["Massa", "Velocidade"];
      unidades = [getUnidades("Massa"), getUnidades("Velocidade")];
      break;
    case "impulso":
      formulaHtml = "\\( I = F \\cdot t \\)";
      variables = ["Força", "Tempo"];
      unidades = [getUnidades("Força"), getUnidades("Tempo")];
      break;
    case "potencia":
      formulaHtml = "\\( P = \\frac{T}{t} \\)";
      variables = ["Trabalho", "Tempo"];
      unidades = [getUnidades("Trabalho"), getUnidades("Tempo")];
      break;
    case "aceleracao":
      formulaHtml = "\\( a = \\frac{v_f - v_i}{t} \\)";
      variables = ["Velocidade final", "Velocidade inicial", "Tempo"];
      unidades = [getUnidades("Velocidade"), getUnidades("Velocidade"), getUnidades("Tempo")];
      break;
    case "momento-linear":
      formulaHtml = "\\( p = m \\cdot v \\)";
      variables = ["Massa", "Velocidade"];
      unidades = [getUnidades("Massa"), getUnidades("Velocidade")];
      break;
    case "pressao":
      formulaHtml = "\\( P = \\frac{F}{A} \\)";
      variables = ["Força", "Área"];
      unidades = [getUnidades("Força"), getUnidades("Área")];
      break;
    case "frequencia-ondas":
      formulaHtml = "\\( f = \\frac{v}{\\lambda} \\)";
      variables = ["Velocidade", "Comprimento de onda"];
      unidades = [getUnidades("Velocidade"), getUnidades("Comprimento de onda")];
      break;
    case "lei-hooke":
      formulaHtml = "\\( F = k \\cdot x \\)";
      variables = ["Constante Elástica", "Deformação"];
      unidades = [getUnidades("Constante Elástica"), getUnidades("Deformação")];
      break;
    case "resistencia-eletrica":
      formulaHtml = "\\( R = \\frac{V}{I} \\)";
      variables = ["Tensão", "Corrente"];
      unidades = [getUnidades("Tensão"), getUnidades("Corrente")];
      break;
    case "energia-mecanica":
      formulaHtml = "\\( E_m = E_c + E_p \\)";
      variables = ["Energia Cinética", "Energia Potencial"];
      unidades = [getUnidades("Energia"), getUnidades("Energia")];
      break;
    case "lei-gravitacao":
      formulaHtml = "\\( F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2} \\)";
      variables = ["Massa 1", "Massa 2", "Distância"];
      unidades = [getUnidades("Massa"), getUnidades("Massa"), getUnidades("Distância")];
      break;
    case "energia-pot-gravitacional":
      formulaHtml = "\\( E_p = m \\cdot g \\cdot h \\)";
      variables = ["Massa", "Gravidade", "Altura"];
      unidades = [getUnidades("Massa"), getUnidades("Aceleração"), getUnidades("Distância")];
      break;
    case "energia-pot-elastica":
      formulaHtml = "\\( E_p = \\frac{1}{2} \\cdot k \\cdot x^2 \\)";
      variables = ["Constante Elástica", "Deformação"];
      unidades = [getUnidades("Constante Elástica"), getUnidades("Deformação")];
      break;
    case "capacitancia":
      formulaHtml = "\\( C = \\frac{Q}{V} \\)";
      variables = ["Carga", "Tensão"];
      unidades = [getUnidades("Carga"), getUnidades("Tensão")];
      break;
    case "energia-einstein":
      formulaHtml = "\\( E = m \\cdot c^2 \\)";
      variables = ["Massa"];
      unidades = [getUnidades("Massa")];
      break;
    case "velocidade-onda":
      formulaHtml = "\\( v = \\sqrt{\\frac{T}{\\mu}} \\)";
      variables = ["Tensão", "Densidade Linear"];
      unidades = [getUnidades("Tensão"), getUnidades("Densidade Linear")];
      break;
    default:
      formulaHtml = "Selecione uma fórmula válida";
      variables = [];
      unidades = [];
  }

  // Atualiza a exibição da fórmula LaTeX
  formulaDisplay.innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;

  // Verifica se foi selecionada uma fórmula válida
  if (variables.length === 0) {
    container.innerHTML =
      "<p>Por favor, selecione uma fórmula para continuar.</p>";
    return;
  }

  // Gerar campos de entrada de variáveis e unidades
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

  // Reprocessar MathJax para exibir a fórmula corretamente
  if (window.MathJax) {
    console.log("Reprocessando MathJax para exibir a fórmula...");
    MathJax.typesetPromise().catch(function (err) {
      console.error("Erro ao renderizar MathJax:", err);
    });
  } else {
    console.error("MathJax não foi carregado corretamente.");
  }
}

// Função para obter as unidades para cada variável
function getUnidades(variable) {
  switch (variable) {
    case "Distância":
      return `
        <option value="m">m</option>
        <option value="cm">cm</option>
        <option value="dm">dm</option>
        <option value="mm">mm</option>
        <option value="km">km</option>
      `;
    case "Tempo":
      return `
        <option value="s">s</option>
        <option value="min">min</option>
        <option value="h">h</option>
      `;
    case "Força":
      return `
        <option value="N">N</option>
        <option value="kN">kN</option>
      `;
    case "Massa":
      return `
        <option value="kg">kg</option>
        <option value="g">g</option>
      `;
    case "Aceleração":
      return `
        <option value="m/s²">m/s²</option>
        <option value="cm/s²">cm/s²</option>
      `;
    case "Trabalho":
      return `
        <option value="J">J</option>
        <option value="kJ">kJ</option>
      `;
    case "Potência":
      return `
        <option value="W">W</option>
      `;
    case "Pressão":
      return `
        <option value="Pa">Pa</option>
      `;
    case "Frequência":
      return `
        <option value="Hz">Hz</option>
      `;
    case "Velocidade":
      return `
        <option value="m/s">m/s</option>
      `;
    case "Comprimento de onda":
      return `
        <option value="m">m</option>
      `;
    case "Tensão":
      return `
        <option value="V">V</option>
      `;
    case "Corrente":
      return `
        <option value="A">A</option>
      `;
    case "Área":
      return `
        <option value="m²">m²</option>
      `;
    case "Deformação":
      return `
        <option value="m">m</option>
      `;
    case "Carga":
      return `
        <option value="C">C</option>
      `;
    case "Constante Elástica":
      return `
        <option value="N/m">N/m</option>
      `;
    default:
      return `<option value="">Selecione uma unidade</option>`;
  }
}

// Função de cálculo para Física
function calcularFisica() {
  const formula = document.getElementById("formula_fisica").value;
  const container = document.getElementById("variables-container_fisica");
  const inputs = container.querySelectorAll("input");
  const unidades = container.querySelectorAll("select");

  // Obter os valores e unidades das variáveis
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
    case "energia-mecanica":
      resultado = calcularEnergiaMecanica(variables);
      break;
    case "lei-gravitacao":
      resultado = calcularLeiGravitacao(variables);
      break;
    case "energia-pot-gravitacional":
      resultado = calcularEnergiaPotencialGravitacional(variables);
      break;
    case "energia-pot-elastica":
      resultado = calcularEnergiaPotencialElastica(variables);
      break;
    case "capacitancia":
      resultado = calcularCapacitancia(variables);
      break;
    case "energia-einstein":
      resultado = calcularEinsteinEnergia(variables);
      break;
    case "velocidade-onda":
      resultado = calcularVelocidadeOnda(variables);
      break;
    default:
      console.error("Fórmula não reconhecida.");
      return;
  }

  if (isNaN(resultado)) {
    console.error("Erro ao calcular resultado.");
    return;
  }

  const unidadeResultado = getUnidadeResultado(formula);
  const resultadoExibicao = resultado.toFixed(2) + " " + unidadeResultado;

  document.getElementById("resultado-fisica").innerHTML = resultadoExibicao;
}

// Função para converter unidades para Sistema Internacional (SI)
function converterParaSI(valor, unidade) {
  switch (unidade) {
    case "m":
      return valor;
    case "cm":
      return valor / 100;
    case "mm":
      return valor / 1000;
    case "km":
      return valor * 1000;
    // ... outros casos de conversão de unidade
    default:
      console.error(`Unidade não reconhecida: ${unidade}`);
      return valor;
  }
}

// Função para obter a unidade de resultado correta
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
      return "Ns";
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
      return "N/m";
    case "resistencia-eletrica":
      return "Ω";
    case "energia-mecanica":
      return "J";
    case "lei-gravitacao":
      return "N";
    case "energia-pot-gravitacional":
      return "J";
    case "energia-pot-elastica":
      return "J";
    case "capacitancia":
      return "F";
    case "energia-einstein":
      return "J";
    case "velocidade-onda":
      return "m/s";
    default:
      console.error("Fórmula não reconhecida.");
      return "";
  }
}

//Função para tratar números com vírgula e garantir que sejam números válidos
function parseNumber(valor) {
  if (typeof valor === "string") {
    // Substituir vírgulas por pontos para tratar números no formato brasileiro
    valor = valor.replace(",", ".");
  }
  const numero = parseFloat(valor);
  return isNaN(numero) ? 0 : numero; // Se não for um número válido, retorna 0
}

// Funções de cálculo para Física
function calcularVelocidadeMedia(vars) {
  const [distancia, tempo] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return tempo !== 0 ? distancia / tempo : 0;
}

function calcularTrabalho(vars) {
  const [forca, distancia] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return forca * distancia;
}

function calcularForca(vars) {
  const [massa, aceleracao] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return massa * aceleracao;
}

function calcularEnergiaCinetica(vars) {
  const [massa, velocidade] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return 0.5 * massa * velocidade ** 2;
}

function calcularImpulso(vars) {
  const [forca, tempo] = vars.map((variavel) => parseNumber(variavel.valor));
  return forca * tempo;
}

function calcularPotencia(vars) {
  const [trabalho, tempo] = vars.map((variavel) => parseNumber(variavel.valor));
  return tempo !== 0 ? trabalho / tempo : 0;
}

function calcularAceleracao(vars) {
  const [vFinal, vInicial, tempo] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return tempo !== 0 ? (vFinal - vInicial) / tempo : 0;
}

function calcularMomentoLinear(vars) {
  const [massa, velocidade] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return massa * velocidade;
}

function calcularPressao(vars) {
  const [forca, area] = vars.map((variavel) => parseNumber(variavel.valor));
  return area !== 0 ? forca / area : 0;
}

function calcularFrequenciaOndas(vars) {
  const [velocidade, comprimento] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return comprimento !== 0 ? velocidade / comprimento : 0;
}

function calcularLeiHooke(vars) {
  const [constanteElastica, deformacao] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return constanteElastica * deformacao;
}

function calcularResistenciaEletrica(vars) {
  const [tensao, corrente] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return corrente !== 0 ? tensao / corrente : 0;
}

function calcularMovimentoUniforme(vars) {
  const [posInicial, velocidade, tempo] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return posInicial + velocidade * tempo;
}

function calcularMovimentoUniformementeVariado(vars) {
  const [posInicial, velInicial, aceleracao, tempo] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return posInicial + velInicial * tempo + 0.5 * aceleracao * tempo ** 2;
}

function calcularEnergiaMecanica(vars) {
  const [energiaPotencial, energiaCinetica] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return energiaPotencial + energiaCinetica;
}

function calcularLeiGravitacao(vars) {
  const [massa1, massa2, distancia] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  const G = 6.6743e-11; // Constante da gravitação universal em m³/kg/s²
  return distancia !== 0 ? (G * (massa1 * massa2)) / distancia ** 2 : 0;
}

function calcularEnergiaPotencialGravitacional(vars) {
  const [massa, gravidade, altura] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return massa * gravidade * altura;
}

function calcularEnergiaPotencialElastica(vars) {
  const [constanteElastica, deformacao] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return 0.5 * constanteElastica * deformacao ** 2;
}

function calcularCapacitancia(vars) {
  const [carga, tensao] = vars.map((variavel) => parseNumber(variavel.valor));
  return tensao !== 0 ? carga / tensao : 0;
}

const velocidadeLuz = 299792458; // m/s (constante)

function calcularEinsteinEnergia(vars) {
  const [massa] = vars.map((variavel) => parseNumber(variavel.valor));
  return massa * velocidadeLuz ** 2;
}

function calcularVelocidadeOnda(vars) {
  const [tensao, densidadeLinear] = vars.map((variavel) =>
    parseNumber(variavel.valor)
  );
  return densidadeLinear !== 0 ? Math.sqrt(tensao / densidadeLinear) : 0;
}

// Funções para renderizar LaTeX
function renderLatex(latex) {
  // Verifica se MathJax já está carregado
  if (typeof MathJax === "undefined") {
    // Adiciona o script do MathJax 3 se não estiver presente
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
    script.async = true;
    document.head.appendChild(script);

    // Aguarda o carregamento do script e configuração
    script.onload = () => {
      renderFormula(latex);
    };
  } else {
    // Se o MathJax já está carregado, renderiza diretamente
    renderFormula(latex);
  }
}




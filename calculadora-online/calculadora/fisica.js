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
    case "energia-einstein":
      formulaHtml = "\\( E = m \\cdot c^2 \\)";
      variables = ["Massa"];
      unidades = [getUnidades("Massa")];
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
          <option value="m">\\( m \\)</option>
          <option value="cm">\\( cm \\)</option>
          <option value="dm">\\( dm \\)</option>
          <option value="mm">\\( mm \\)</option>
          <option value="km">\\( km \\)</option>
          <option value="in">\\( polegada \\)</option>
          <option value="ft">\\( pé \\)</option>
          <option value="mi">\\( milha \\)</option>
          <option value="yd">\\( jarda \\)</option>
        `;
    case "Tempo":
        return `
          <option value="s">\\( s \\)</option>
          <option value="min">\\( min \\)</option>
          <option value="h">\\( h \\)</option>
          <option value="ms">\\( ms \\)</option>
          <option value="μs">\\( \\mu s \\)</option>
          <option value="ns">\\( ns \\)</option>
          <option value="ps">\\( ps \\)</option>
          <option value="fs">\\( fs \\)</option>
          <option value="dia">\\( dia \\)</option>
          <option value="ano">\\( ano \\)</option>
        `;
    case "Força":
        return `
          <option value="N">\\( N \\)</option>
          <option value="kN">\\( kN \\)</option>
          <option value="mN">\\( mN \\)</option>
          <option value="μN">\\( \\mu N \\)</option>
          <option value="lbf">\\( lbf \\)</option>
        `;
    case "Massa":
        return `
          <option value="kg">\\( kg \\)</option>
          <option value="g">\\( g \\)</option>
          <option value="mg">\\( mg \\)</option>
          <option value="μg">\\( \\mu g \\)</option>
          <option value="ng">\\( ng \\)</option>
          <option value="lb">\\( lb \\)</option>
          <option value="oz">\\( oz \\)</option>
        `;
    case "Aceleração":
        return `
          <option value="m/s²">\\( m/s^2 \\)</option>
          <option value="cm/s²">\\( cm/s^2 \\)</option>
          <option value="mm/s²">\\( mm/s^2 \\)</option>
          <option value="g">\\( g \\)</option>
        `;
    case "Trabalho":
    case "Energia":
        return `
          <option value="J">\\( J \\)</option>
          <option value="kJ">\\( kJ \\)</option>
          <option value="cal">\\( cal \\)</option>
          <option value="kcal">\\( kcal \\)</option>
          <option value="Wh">\\( Wh \\)</option>
          <option value="kWh">\\( kWh \\)</option>
          <option value="mJ">\\( mJ \\)</option>
          <option value="μJ">\\( \\mu J \\)</option>
        `;
    case "Potência":
        return `
          <option value="W">\\( W \\)</option>
          <option value="kW">\\( kW \\)</option>
          <option value="mW">\\( mW \\)</option>
          <option value="μW">\\( \\mu W \\)</option>
          <option value="hp">\\( hp \\)</option>
        `;
    case "Pressão":
        return `
          <option value="Pa">\\( Pa \\)</option>
          <option value="kPa">\\( kPa \\)</option>
          <option value="mPa">\\( mPa \\)</option>
          <option value="μPa">\\( \\mu Pa \\)</option>
          <option value="bar">\\( bar \\)</option>
          <option value="atm">\\( atm \\)</option>
          <option value="mmHg">\\( mmHg \\)</option>
          <option value="psi">\\( psi \\)</option>
        `;
    case "Frequência":
        return `
          <option value="Hz">\\( Hz \\)</option>
          <option value="kHz">\\( kHz \\)</option>
          <option value="MHz">\\( MHz \\)</option>
          <option value="GHz">\\( GHz \\)</option>
        `;
    case "Velocidade":
        return `
          <option value="m/s">\\( m/s \\)</option>
          <option value="km/h">\\( km/h \\)</option>
          <option value="mph">\\( mph \\)</option>
          <option value="ft/s">\\( ft/s \\)</option>
          <option value="cm/s">\\( cm/s \\)</option>
        `;
    case "Comprimento de onda":
        return `
          <option value="m">\\( m \\)</option>
          <option value="cm">\\( cm \\)</option>
          <option value="nm">\\( nm \\)</option>
          <option value="μm">\\( \\mu m \\)</option>
          <option value="mm">\\( mm \\)</option>
        `;
    case "Tensão":
        return `
          <option value="V">\\( V \\)</option>
          <option value="kV">\\( kV \\)</option>
          <option value="mV">\\( mV \\)</option>
          <option value="μV">\\( \\mu V \\)</option>
        `;
    case "Corrente":
        return `
          <option value="A">\\( A \\)</option>
          <option value="mA">\\( mA \\)</option>
          <option value="μA">\\( \\mu A \\)</option>
          <option value="kA">\\( kA \\)</option>
        `;
    case "Área":
        return `
          <option value="mm²">\\( mm^2 \\)</option>
          <option value="cm²">\\( cm^2 \\)</option>
          <option value="dm²">\\( dm^2 \\)</option>
          <option value="m²">\\( m^2 \\)</option>
          <option value="km²">\\( km^2 \\)</option>
          <option value="ft²">\\( ft^2 \\)</option>
          <option value="in²">\\( in^2 \\)</option>
          <option value="ha">\\( ha \\)</option>
          <option value="acre">\\( acre \\)</option>
        `;
    case "Deformação":
        return `
          <option value="m">\\( m \\)</option>
          <option value="cm">\\( cm \\)</option>
          <option value="mm">\\( mm \\)</option>
          <option value="nm">\\( nm \\)</option>
        `;
    case "Carga":
        return `
          <option value="C">\\( C \\)</option>
          <option value="mC">\\( mC \\)</option>
          <option value="μC">\\( \\mu C \\)</option>
          <option value="nC">\\( nC \\)</option>
        `;
    case "Constante Elástica":
        return `
          <option value="N/m">\\( N/m \\)</option>
          <option value="kN/m">\\( kN/m \\)</option>
          <option value="mN/m">\\( mN/m \\)</option>
        `;
    case "Energia de Einstein":
        return `
          <option value="J">\\( J \\)</option>
          <option value="kJ">\\( kJ \\)</option>
          <option value="MeV">\\( MeV \\)</option>
          <option value="GeV">\\( GeV \\)</option>
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
    case "energia-einstein":
      resultado = calcularEinsteinEnergia(variables);
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

    default:
      console.error(`Unidade não reconhecida: ${unidade}`);
      return valor;
  }
}


// Função para obter a unidade de resultado correta
function getUnidadeResultado(formula) {
  switch (formula) {
    // Velocidade e velocidade de onda
    case "velocidade":
    case "velocidade-onda":
      return "m/s"; // metros por segundo

    // Trabalho, Energia e Calor
    case "trabalho":
    case "energia-cinetica":
    case "energia-mecanica":
    case "energia-pot-gravitacional":
    case "energia-pot-elastica":
    case "energia-einstein":
      return "J"; // Joules

    // Força
    case "forca":
    case "lei-hooke":
    case "lei-gravitacao":
      return "N"; // Newtons

    // Impulso e Momento Linear
    case "impulso":
    case "momento-linear":
      return "Ns"; // Newton-segundos ou quilograma-metro por segundo

    // Potência
    case "potencia":
      return "W"; // Watts

    // Aceleração
    case "aceleracao":
      return "m/s²"; // metros por segundo ao quadrado

    // Pressão
    case "pressao":
      return "Pa"; // Pascais

    // Frequência
    case "frequencia-ondas":
      return "Hz"; // Hertz

    // Resistência Elétrica
    case "resistencia-eletrica":
      return "Ω"; // Ohms

    // Capacitância
    case "capacitancia":
      return "F"; // Farads

    // Densidade Linear (para fórmulas de onda)
    case "densidade-linear":
      return "kg/m"; // quilogramas por metro

    // Comprimento de Onda
    case "comprimento-onda":
      return "m"; // metros

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




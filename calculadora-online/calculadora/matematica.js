// Inicialização após o carregamento do DOM para Matemática

//Lembrar de verificar se todas as function nao estao dando conflito com as de fisica, e ir vendo se todas as variaveis tao sendo chamadas certin.

document.addEventListener("DOMContentLoaded", function () {
  const formulaMatematica = document.getElementById("formula_matematica");
  
  if (formulaMatematica) {
    // Adicionar listener para mudança de fórmula
    formulaMatematica.addEventListener("change", updateVariablesMatematica);
    console.log("Elemento formula_matematica encontrado e listener adicionado.");
  } else {
    console.error('Elemento com id "formula_matematica" não encontrado.');
  }

  // Adicionar MathJax para renderizar fórmulas LaTeX após o carregamento
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"; // URL correta para o MathJax 3
  script.async = true;
  document.head.appendChild(script);

  script.onload = () => {
    console.log("MathJax carregado com sucesso.");
    MathJax_typeset = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\(", "\\)"], 
        ],    
        displayMath: [    
          ["$$", "$$"],   
          ["\\[", "\\]"], 
        ],    
      },  
      svg: {  
        fontCache: "global",  
      },
    };

    MathJax_typeset()
      .then(() => {
        console.log("MathJax reprocessado com sucesso.");
      })
      .catch((err) => {
        console.error("Erro ao processar fórmulas MathJax:", err);
      });
  };
});

// Função para atualizar as variáveis e fórmulas com base na fórmula selecionada
function updateVariablesMatematica() {
  const formula = document.getElementById("formula_matematica").value;
  const container = document.getElementById("variables-container_matematica");
  const formulaDisplay = document.getElementById("matematica-formula-display");

  // Limpar conteúdo anterior
  container.innerHTML = "";
  formulaDisplay.innerHTML = "";

  let variables = [];
  let formulaHtml = "";
  let unidades = [];

  // Definir variáveis e fórmulas com base na fórmula selecionada
  switch (formula) {
    case "baskara":
      formulaHtml = "\\( x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\)";
      variables = ["Coeficiente a", "Coeficiente b", "Coeficiente c"];
      unidades = [getUnidadesMat("Coeficiente"), getUnidadesMat("Coeficiente"), getUnidadesMat("Coeficiente")];
      break;
    case "formula-heron":
      formulaHtml = "\\( A = \\sqrt{s(s-a)(s-b)(s-c)} \\)";
      variables = ["Lado a", "Lado b", "Lado c"];
      unidades = [getUnidadesMat("Lado"), getUnidadesMat("Lado"), getUnidadesMat("Lado")];
      break;
    case "espiral-arquimedes":
      formulaHtml = "\\( r(\\theta) = a + b\\theta \\)";
      variables = ["Constante a", "Constante b", "Ângulo θ (rad)"];
      unidades = [getUnidadesMat("Constante"), getUnidadesMat("Constante"), getUnidadesMat("Ângulo")];
      break;
    case "area-circulo":
      formulaHtml = "\\( A = \\pi r^2 \\)";
      variables = ["Raio (r)"];
      unidades = [getUnidadesMat("Raio")];
      break;
    case "area-retangulo":
      formulaHtml = "\\( A = b \\cdot h \\)";
      variables = ["Base (b)", "Altura (h)"];
      unidades = [getUnidadesMat("Base"), getUnidadesMat("Altura")];
      break;
    case "area-triangulo":
      formulaHtml = "\\( A = \\frac{b \\cdot h}{2} \\)";
      variables = ["Base (b)", "Altura (h)"];
      unidades = [getUnidadesMat("Base"), getUnidadesMat("Altura")];
      break;
    case "volume-prisma":
      formulaHtml = "\\( V = A_b \\cdot h \\)";
      variables = ["Área da base (A_b)", " Altura (h)"];
      unidades = [getUnidadesMat("Área"), getUnidadesMat("Altura")];
      break;
    case "volume-piramide":
      formulaHtml = "\\( V = \\frac{A_b \\cdot h}{3} \\)";
      variables = ["Área da base (A_b)", "Altura (h)"];
      unidades = [getUnidadesMat("Área"), getUnidadesMat("Altura")];
      break;
    case "teorema-pitagoras":
      formulaHtml = "\\( c = \\sqrt{a^2 + b^2} \\)";
      variables = ["Cateto a", "Cateto b"];
      unidades = [getUnidadesMat("Cateto"), getUnidadesMat("Cateto")];
      break; 
    case "progressao-aritmetica":
      formulaHtml = "\\( A_n = A_1 + (n - 1) \\cdot r \\)";
      variables = ["Termo inicial (A1)", "Razão (r)", "Termo desejado (n)"];
      unidades = [getUnidadesMat("Termo inicial"), getUnidadesMat("Razão"), getUnidadesMat("Termo desejado")];
      break;
    case "progressao-geometrica":
      formulaHtml = "\\( A_n = A_1 \\cdot q^{(n - 1)} \\)";
      variables = ["Termo inicial (A1)", "Razão (q)", "Termo desejado (n)"];
      unidades = [getUnidadesMat("Termo inicial"), getUnidadesMat("Razão"), getUnidadesMat("Termo desejado")];
      break;
    case "permutacao":
      formulaHtml = "\\( P(n) = n! \\)";
      variables = ["Total de elementos (n)"];
      unidades = [getUnidadesMat("Total de elementos")];
      break;
    case "combinacao":
      formulaHtml = "\\( C(n, r) = \\frac{n!}{r! (n - r)!} \\)";
      variables = ["Total de elementos (n)", "Elementos a escolher (r)"];
      unidades = [getUnidadesMat("Total de elementos"), getUnidadesMat("Elementos a escolher")];
      break;
    case "media-ponderada":
      formulaHtml = "\\( M = \\frac{\\sum_{i=1}^{n} p_i x_i}{\\sum_{i=1}^{n} p_i} \\)";
      variables = ["Peso 1", "Valor 1", "Peso 2", "Valor 2", "Peso 3", "Valor 3"];
      unidades = [getUnidadesMat("Peso"), getUnidadesMat("Valor"), getUnidadesMat("Peso"), getUnidadesMat("Valor"), getUnidadesMat("Peso"), getUnidadesMat("Valor")];
      break;
    case "desvio-padrao":
      formulaHtml = "\\( \\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}} \\)";
      variables = ["Valor 1", "Valor 2", "Valor 3", "Valor 4", "Valor 5"];
      unidades = [getUnidadesMat("Valor"), getUnidadesMat("Valor"), getUnidadesMat("Valor"), getUnidadesMat("Valor"), getUnidadesMat("Valor")];
      break;
    case "area-trapezio":
      formulaHtml = "\\( A = \\frac{(B + b) \\cdot h}{2} \\)";
      variables = ["Base maior (B)", "Base menor (b)", "Altura (h)"];
      unidades = [getUnidadesMat("Base"), getUnidadesMat("Base"), getUnidadesMat("Altura")];
      break;
    case "area-paralelogramo":
      formulaHtml = "\\( A = b \\cdot h \\)";
      variables = ["Base (b)", "Altura (h)"];
      unidades = [getUnidadesMat("Base"), getUnidadesMat("Altura")];
      break;
    case "formula-euler":
      formulaHtml = "\\( V - E + F = 2 \\)";
      variables = ["Vértices (V)", "Arestas (E)", "Faces (F)"];
      unidades = [getUnidadesMat("Vértices"), getUnidadesMat("Arestas"), getUnidadesMat("Faces")];
      break;
    case "angulo-para-radiano":
      formulaHtml = "\\( \\theta_{rad} = \\theta_{deg} \\times \\frac{\\pi}{180 } \\)";
      variables = ["Ângulo"];
      unidades = [getUnidadesMat("Ângulo")];
      break;
    case "radiano-para-angulo":
      formulaHtml = "\\( \\theta_{deg} = \\theta_{rad} \\times \\frac{180}{\\pi} \\)";
      variables = [" Radiano (rad)"];
      unidades = [getUnidadesMat("Radiano")];
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
    container.innerHTML = "<p>Por favor, selecione uma fórmula para continuar.</p>";
    return;
  }

  // Gerar campos de entrada de variáveis e unidades
  container.innerHTML = variables
    .map((variable, index) => `
      <div style="padding: 10px; border-bottom: 1px solid #ccc;">
        <label for="var${index}">${variable}</label>
        <input type="number" id="var${index}" placeholder="${variable}" step="any">
        <select id="unit${index}">
          ${unidades[index]}
        </select>
      </div>
    `)
    .join("");

  // Reprocessar MathJax para exibir a fórmula corretamente
  if (window.MathJax) {
    console.log("Reprocessando MathJax para exibir a fórmula...");
    MathJax_typeset().catch(function (err) {
      console.error("Erro ao renderizar MathJax:", err);
    });
  } else {
    console.error("MathJax não foi carregado corretamente.");
  }

  // Adicionar evento de clique no botão de calcular
  document.getElementById("botao-calcular").addEventListener("click", calcularMatematica);
}

function getUnidadesMat(variable) {
  switch (variable) {
      case "Comprimento":
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
        case "Volume":
          return `
            <option value="mm³">\\( mm^3 \\)</option>
            <option value="cm³">\\( cm^3 \\)</option>
            <option value="dm³">\\( dm^3 \\)</option>
            <option value="m³">\\( m^3 \\)</option>
            <option value="km³">\\( km^3 \\)</option>
            <option value="ft³">\\( ft^3 \\)</option>
            <option value="in³">\\( in^3 \\)</option>
            <option value="gal">\\( galão \\)</option>
            <option value="L">\\( litro \\)</option>
            <option value="mL">\\( mL \\)</option>
          `;
        case "Ângulo":
          return `
            <option value="grau">\\( grau \\)</option>
            <option value="rad">\\( rad \\)</option>
            <option value="grad">\\( grad \\)</option>
          `;
        case "Taxa de Crescimento (PA e PG)":
          return `
            <option value="percentual">\\( % \\)</option>
            <option value="taxa">\\( taxa \\)</option>
          `;
        case "Probabilidade":
          return `
            <option value="probabilidade">\\( P \\)</option>
            <option value="percentual">\\( % \\)</option>
          `;
        case "Permutação/Combinação":
          return `
            <option value="unidade">\\( unidades \\)</option>
          `;
        case "Coeficiente":
          return `
            <option value="coeficiente">\\( coeficiente \\)</option>
          `;
        case "Média":
          return `
            <option value="unidade">\\( unidades \\)</option>
            <option value="valor">\\( valor \\)</option>
          `;
        case "Desvio Padrão":
          return `
            <option value="unidade">\\( unidades \\)</option>
            <option value="valor">\\( valor \\)</option>
          `;
        case "Lado":
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
        case "Constante":
          return `
            <option value="constante">\\( constante \\)</option>
          `;
        case "Raio":
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
        case "Base":
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
        case "Altura":
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
        case "Área da base":
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
        case "Cateto":
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
        case "Termo Inicial":
          return `
            <option value="unidade">\\( unidades \\)</option>
            <option value="valor">\\( valor \\)</option>
          `;
        case "Razão":
          return `
            <option value="unidade">\\( unidades \\)</option>
            <option value="valor">\\( valor \\)</option>
          `;
        case "Total de elementos":
          return `
            <option value="unidade">\\( unidades \\)</option>
          `;
        case "Elementos a escolher":
          return `
            <option value="unidade">\\( unidades \\)</option>
          `;
        case "Peso":
          return `
            <option value="unidade">\\( unidades \\)</option>
            <option value="valor">\\( valor \\)</option>
          `;
        case "Valor":
          return `
            <option value="unidade">\\( unidades \\)</option>
            <option value="valor">\\( valor \\)</option>
          `;
        case "Vértices":
          return `
            <option value="unidade">\\( unidades \\)</option>
          `;
        case "Arestas":
          return `
            <option value="unidade">\\( unidades \\)</option>
          `;
        case "Faces":
          return `
            <option value="unidade">\\( unidades \\)</option>
          `;
        case "Ângulo":
          return `
            <option value="grau">\\( grau \\)</option>
            <option value="rad">\\( rad \\)</option>
            <option value="grad">\\( grad \\)</option>
          `;
        case "Radiano":
          return `
            <option value="rad">\\( rad \\)</option >
          `;
        default:
          return `<option value="">Selecione uma unidade</option>`;
  }
}

// Função de cálculo para Matemática
function calcularMatematica() {
  const formula = document.getElementById("formula_matematica").value;
  const container = document.getElementById("variables-container_matematica");
  const inputs = container.querySelectorAll("input");

  // Obter os valores das variáveis
  const variables = Array.from(inputs).map((input, index) => {
    const valor = parseFloat(input.value.trim());
    if (isNaN(valor)) {
      console.error(`Valor inválido para a variável na posição ${index}.`);
      return { valor: 0 };
    }
    return { valor };
  });

  // Verificar se todos os valores foram fornecidos corretamente
  if (variables.some(v => v.valor === 0)) {
    alert("Por favor, insira valores válidos para todas as variáveis.");
    return;
  }

  let resultado;
  switch (formula) {
    case "formula-heron":
      resultado = calcularFormulaHeron(variables);
  case "volume-tronco-piramide":
      resultado = calcularVolumeTroncoPiramide(variables);
    case "baskara":
      resultado = calcularBhaskara(variables);
      break;
    case "espiral-arquimedes":
      resultado = calcularEspiralArquimedes(variables);
      break;
    case "area-circulo":
      resultado = calcularAreaCirculo(variables);
      break;
      case "volume-cilindro":
          resultado = calcularVolumeCilindro(variables);
          break;
      case "volume-esfera":
          resultado = calcularVolumeEsfera(variables);
          break;
    case "area-retangulo":
      resultado = calcularAreaRetangulo(variables);
      break;
    case "area-triangulo":
      resultado = calcularAreaTriangulo(variables);
      break;
    case "volume-prisma":
      resultado = calcularVolumePrisma(variables);
      break;
    case "volume-piramide":
      resultado = calcularVolumePiramide(variables);
      break;
    case "teorema-pitagoras":
      resultado = calcularTeoremaPitagoras(variables);
      break;
    case "progressao-aritmetica":
      resultado = calcularProgressaoAritmetica(variables);
      break;
    case "progressao-geometrica":
      resultado = calcularProgressaoGeometrica(variables);
      break;
    case "permutacao":
      resultado = calcularPermutacao(variables);
      break;
    case "combinacao":
      resultado = calcularCombinacao(variables);
      break;
    case "media-ponderada":
      resultado = calcularMediaPonderada(variables);
      break;
    case "desvio-padrao":
      resultado = calcularDesvioPadrao(variables);
      break;
    case "area-trapezio":
      resultado = calcularAreaTrapezio(variables);
      break;
    case "area-paralelogramo":
      resultado = calcularAreaParalelogramo(variables);
      break;
    case "formula-euler":
      resultado = calcularFormulaEuler(variables);
      break;
    case "angulo-para-radiano":
      resultado = calcularAnguloParaRadiano(variables);
      break;
    case "radiano-para-angulo":
      resultado = calcularRadianoParaAngulo(variables);
      break;
    default:
      console.error("Fórmula não reconhecida.");
      return;
  }

  // Verificar se o resultado retornado é válido
  if (resultado === undefined || resultado === null || resultado === "") {
    console.error("Erro ao calcular resultado ou fórmula retornou valor vazio.");
    return;
  }

  // Verificar se o resultado é numérico para formatação
  let resultadoExibicao;
  if (typeof resultado === "number") {
    resultadoExibicao = resultado.toFixed(2);
  } else {
    // Para casos onde o resultado é um texto (como múltiplas soluções)
    resultadoExibicao = resultado;
  }

  // Exibir o resultado
  document.getElementById("resultado-valor-matematica").innerText = resultadoExibicao;
}

// Função para converter unidades para Sistema Internacional (SI) - Matemática
function converterParaSiMat(valor, unidade) {
  switch (unidade) {
    // Comprimento
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
    case "ha": // hectare
      return valor * 1e4;
    case "acre": // acre
      return valor * 4046.86;

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

    // Ângulo
    case "rad": // radiano
      return valor;
    case "grau": // grau
      return valor * (Math.PI / 180); // converter grau para radiano
    case "grad": // gradians
      return valor * (Math.PI / 200); // converter grad para radiano

    default:
      console.error(`Unidade não reconhecida: ${unidade}`);
      return NaN;
  }
}

// Função para formatar resultado com unidades - Matemática
function formatarResultadoMat(resultado, unidade) {
  switch (unidade) {
    // Comprimento
    case "m": // metro
      return `${resultado.toFixed(2)} m`;
    case "cm": // centímetro
      return `${resultado.toFixed(2)} cm`;
    case "mm": // milímetro
      return `${resultado.toFixed(2)} mm`;
    case "dm": // decímetro
      return `${resultado.toFixed(2)} dm`;
    case "km": // quilômetro
      return `${resultado.toFixed(2)} km`;
    case "in": // polegada
      return `${resultado.toFixed(2)} in`;
    case "ft": // pé
      return `${resultado.toFixed(2)} ft`;
    case "yd": // jarda
      return `${resultado.toFixed(2)} yd`;
    case "mi": // milha
      return `${resultado.toFixed(2)} mi`;

    // Área
    case "m²": // metro quadrado
      return `${resultado.toFixed(2)} m²`;
    case "cm²": // centímetro quadrado
      return `${resultado.toFixed(2)} cm²`;
    case "mm²": // milímetro quadrado
      return `${resultado.toFixed(2)} mm²`;
    case "dm²": // decímetro quadrado
      return `${resultado.toFixed(2)} dm²`;
    case "km²": // quilômetro quadrado
      return `${resultado.toFixed(2)} km²`;
    case "ft²": // pé quadrado
      return `${resultado.toFixed(2)} ft²`;
    case "in²": // polegada quadrada
      return `${resultado.toFixed(2)} in²`;
    case "ha": // hectare
      return `${resultado.toFixed(2)} ha`;
    case "acre": // acre
      return `${resultado.toFixed(2)} acre`;

    // Volume
    case "m³": // metro cúbico
      return `${resultado.toFixed(2)} m³`;
    case "cm³": // centímetro cúbico
      return `${resultado.toFixed(2)} cm³`;
    case "mm³": // milímetro cúbico
      return `${resultado.toFixed(2)} mm³`;
    case "dm³": // decímetro cúbico (litro)
      return `${resultado.toFixed(2)} dm³`;
    case "l": // litro
      return `${resultado.toFixed(2)} L`;
    case "ml": // mililitro
      return `${resultado.toFixed(2)} mL`;
    case "ft³": // pé cúbico
      return `${resultado.toFixed(2)} ft³`;
    case "in³": // polegada cúbica
      return `${resultado.toFixed(2)} in³`;

    // Ângulo
    case "rad": // radiano
      return `${resultado.toFixed(2)} rad`;
    case "grau": // grau
      return `${resultado.toFixed(2)}°`;
    case "grad": // gradians
      return `${resultado.toFixed(2)} grad`;

    default:
      console.error(`Unidade não reconhecida: ${unidade}`);
      return `${resultado.toFixed(2)}`;
  }
}



//uwu


function calcularFormulaHeron(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  const c = variables[2].valor;
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

function calcularVolumeTroncoPiramide(variables) {
  const base1 = variables[0].valor;
  const base2 = variables[1].valor;
  const altura = variables[2].valor;
  const volume = (base1 + base2) * altura / 2;
  return volume;
}

function calcularBhaskara(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  const c = variables[2].valor;
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    return "Não há soluções reais";
  } else if (delta === 0) {
    const x = -b / (2 * a);
    return x;
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `x1 = ${x1}, x2 = ${x2}`;
  }
}

function calcularEspiralArquimedes(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  const n = variables[2].valor;
  const r = a + b * n;
  return r;
}

function calcularAreaCirculo(variables) {
  const raio = variables[0].valor;
  const area = Math.PI * raio * raio;
  return area;
}

function calcularVolumeCilindro(variables) {
  const raio = variables[0].valor;
  const altura = variables[1].valor;
  const volume = Math.PI * raio * raio * altura;
  return volume;
}

function calcularVolumeEsfera(variables) {
  const raio = variables[0].valor;
  const volume = (4 / 3) * Math.PI * raio * raio * raio;
  return volume;
}

function calcularAreaRetangulo(variables) {
  const largura = variables[0].valor;
  const altura = variables[1].valor;
  const area = largura * altura;
  return area;
}

function calcularAreaTriangulo(variables) {
  const base = variables[0].valor;
  const altura = variables[1].valor;
  const area = (base * altura) / 2;
  return area;
}

function calcularVolumePrisma(variables) {
  const base = variables[0].valor;
  const altura = variables[1].valor;
  const volume = base * altura;
  return volume;
}

function calcularVolumePiramide(variables) {
  const base = variables[0].valor;
  const altura = variables[1].valor;
  const volume = (base * altura) / 3;
  return volume;
}

function calcularTeoremaPitagoras(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  const c = Math.sqrt(a * a + b * b);
  return c;
}

function calcularProgressaoAritmetica(variables) {
  const a1 = variables[0].valor;
  const d = variables[1].valor;
  const n = variables[2].valor;
  const an = a1 + (n - 1) * d;
  return an;
}

function calcularProgressaoGeometrica(variables) {
  const a1 = variables[0].valor;
  const r = variables[1].valor;
  const n = variables[2].valor;
  const an = a1 * Math.pow(r, n - 1);
  return an;
}

function calcularPermutacao(variables) {
  const n = variables[0].valor;
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

function calcularCombinacao(variables) {
  const n = variables[0].valor;
  const k = variables[1].valor;
  const combinacao = calcularPermutacao({ valor: n }) / (calcularPermutacao({ valor: k }) * calcularPermutacao({ valor: n - k }));
  return combinacao;
}

function calcularMediaPonderada(variables) {
  const valores = variables.slice(0, variables.length / 2).map(v => v.valor);
  const pesos = variables.slice(variables.length / 2).map(v => v.valor);
  const somaPesos = pesos.reduce((soma, peso) => soma + peso, 0);
  const somaProdutos = valores.reduce((soma, valor, index) => soma + valor * pesos[index], 0);
  const mediaPonderada = somaProdutos / somaPesos;
  return mediaPonderada;
}

function calcularDesvioPadrao(variables) {
  const valores = variables.map(v => v.valor);
  const media = valores.reduce((soma, valor) => soma + valor, 0) / valores.length;
  const somaQuadrados = valores.reduce((soma, valor) => soma + Math.pow(valor - media, 2), 0);
  const desvioPadrao = Math.sqrt(somaQuadrados / valores.length);
  return desvioPadrao;
}

function calcularAreaTrapezio(variables) {
  const base1 = variables[0].valor;
  const base2 = variables[1].valor;
  const altura = variables[2].valor;
  const area = (base1 + base2) * altura / 2;
  return area;
}

function calcularAreaParalelogramo(variables) {
  const base = variables[0].valor;
  const altura = variables[1].valor;
  const area = base * altura;
  return area;
}

function calcularFormulaEuler(variables) {
  const vertices = variables[0].valor;
  const arestas = variables[1].valor;
  const faces = variables[2].valor;
  const resultado = vertices - arestas + faces;
  if (resultado === 2) {
    return "Fórmula de Euler confirmada";
  } else {
    return "Fórmula de Euler não confirmada";
  }
}

function calcularAnguloParaRadiano(variables) {
  const angulo = variables[0].valor;
  const radiano = (Math.PI / 180) * angulo;
  return radiano;
}

function calcularRadianoParaAngulo(variables) {
  const radiano = variables[0].valor;
  const angulo = (180 / Math.PI) * radiano;
  return angulo;
}
function formatarResultado(valor) {
  return valor.toFixed(5);
}


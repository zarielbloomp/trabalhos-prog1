// Inicialização após o carregamento do DOM para Matemática
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
      window.MathJax = {
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
        unidades = [getUnidades("Coeficiente a"), getUnidades("Coeficiente b"), getUnidades("Coeficiente c")];
        break;
      case "espiral-arquimedes":
        formulaHtml = "\\( r(\\theta) = a + b\\theta \\)";
        variables = ["Constante a", "Constante b", "Ângulo θ (rad)"];
        unidades = [getUnidades("Constante a"), getUnidades("Constante b"), getUnidades("Ângulo θ (rad)")];
        break;
      case "area-circulo":
        formulaHtml = "\\( A = \\pi r^2 \\)";
        variables = ["Raio (r)"];
        unidades = [getUnidades("Raio (r)")];
        break;
      case "area-retangulo":
        formulaHtml = "\\( A = b \\cdot h \\)";
        variables = ["Base (b)", "Altura (h)"];
        unidades = [getUnidades("Base (b)"), getUnidades("Altura (h)")];
        break;
      case "area-triangulo":
        formulaHtml = "\\( A = \\frac{b \\cdot h}{2} \\)";
        variables = ["Base (b)", "Altura (h)"];
        unidades = [getUnidades("Base (b)"), getUnidades("Altura (h)")];
        break;
      case "volume-prisma":
        formulaHtml = "\\( V = A_b \\cdot h \\)";
        variables = ["Área da base (A_b)", "Altura (h)"];
        unidades = [getUnidades("Área da base (A_b)"), getUnidades("Altura (h)")];
        break;
      case "volume-piramide":
        formulaHtml = "\\( V = \\frac{A_b \\cdot h}{3} \\)";
        variables = ["Área da base (A_b)", "Altura (h)"];
        unidades = [getUnidades("Área da base (A_b)"), getUnidades("Altura (h)")];
        break;
      case "teorema-pitagoras":
        formulaHtml = "\\( c = \\sqrt{a^2 + b^2} \\)";
        variables = ["Cateto a", "Cateto b"];
        unidades = [getUnidades("Cateto a"), getUnidades("Cateto b")];
        break;
      case "progressao-aritmetica":
        formulaHtml = "\\( A_n = A_1 + (n - 1) \\cdot r \\)";
        variables = ["Termo inicial (A1)", "Razão (r)", "Termo desejado (n)"];
        unidades = [getUnidades("Termo inicial (A1)"), getUnidades("Razão (r)"), getUnidades("Termo desejado (n)")];
        break;
      case "progressao-geometrica":
        formulaHtml = "\\( A_n = A_1 \\cdot q^{(n - 1)} \\)";
        variables = ["Termo inicial (A1)", "Razão (q)", "Termo desejado (n)"];
        unidades = [getUnidades("Termo inicial (A1)"), getUnidades("Razão (q)"), getUnidades("Termo desejado (n)")];
        break;
      case "permutacao":
        formulaHtml = "\\( P(n) = n! \\)";
        variables = ["Total de elementos (n)"];
        unidades = [getUnidades("Total de elementos (n)")];
        break;
      case "combinacao":
        formulaHtml = "\\( C(n, r) = \\frac{n!}{r! (n - r)!} \\)";
        variables = ["Total de elementos (n)", "Elementos a escolher (r)"];
        unidades = [getUnidades("Total de elementos (n)"), getUnidades("Elementos a escolher (r)")];
        break;
      case "media-ponderada":
        formulaHtml = "\\( M = \\frac{\\sum_{i=1}^{n} p_i x_i}{\\sum_{i=1}^{n} p_i} \\)";
        variables = ["Peso 1", "Valor 1", "Peso 2", "Valor 2", "Peso 3", "Valor 3"];
        unidades = [getUnidades("Peso 1"), getUnidades("Valor 1"), getUnidades("Peso 2"), getUnidades("Valor 2"), getUnidades("Peso 3"), getUnidades("Valor 3")];
        break;
      case "desvio-padrao":
        formulaHtml = "\\( \\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}} \\)";
        variables = ["Valor 1", "Valor 2", "Valor 3", "Valor 4", "Valor 5"];
        unidades = [getUnidades("Valor 1"), getUnidades("Valor 2"), getUnidades("Valor 3"), getUnidades("Valor 4"), getUnidades("Valor 5")];
        break;
      case "area-trapezio":
        formulaHtml = "\\( A = \\frac{(B + b) \\cdot h}{2} \\)";
        variables = ["Base maior (B)", "Base menor (b)", "Altura (h)"];
        unidades = [getUnidades("Base maior (B)"), getUnidades("Base menor (b)"), getUnidades("Altura (h)")];
        break;
      case "area-paralelogramo":
        formulaHtml = "\\( A = b \\cdot h \\)";
        variables = ["Base (b)", "Altura (h)"];
        unidades = [getUnidades("Base (b)"), getUnidades("Altura (h)")];
        break;
      case "formula-euler":
        formulaHtml = "\\( V - E + F = 2 \\)";
        variables = ["Vértices (V)", "Arestas (E)", "Faces (F)"];
        unidades = [getUnidades("Vértices (V)"), getUnidades("Arestas (E)"), getUnidades("Faces (F)")];
        break;
      case "angulo-para-radiano":
        formulaHtml = "\\( \\theta_{rad} = \\theta_{deg} \\times \\frac{\\pi}{180} \\)";
        variables = ["Ângulo (°)"];
        unidades = [getUnidades("Ângulo (°)")];
        break;
      case "radiano-para-angulo":
        formulaHtml = "\\( \\theta_{deg} = \\theta_{rad} \\times \\frac{180}{\\pi} \\)";
        variables = [" Radiano (rad)"];
        unidades = [getUnidades("Radiano (rad)")];
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
            <option value=" unidade">\\( unidades \\)</option>
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
      case "baskara":
        resultado = calcularBhaskara(variables);
        break;
      case "espiral-arquimedes":
        resultado = calcularEspiralArquimedes(variables);
        break;
      case "area-circulo":
        resultado = calcularAreaCirculo(variables);
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
  function converterParaSI(valor, unidade) {
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
  
      // Tempo
      case "s": // segundo
        return valor;
      case "min": // minuto
        return valor * 60;
      case "h": // hora
        return valor * 3600;
      case "dia": // dia
        return valor * 86400;
      case "ano": // ano
        return valor * 3.154e7;
  
      // Probabilidade e porcentagem
      case "percentual": // porcentagem
        return valor / 100;
      case "taxa": // taxa (pode ser tratada como unidade decimal)
        return valor;
  
      default:
        console.error(`Unidade não reconhecida: ${unidade}`);
        return valor;
    }
  }
  
  // Função para obter a unidade de resultado correta (Matemática)
  function getUnidadeResultado(formula) {
    switch (formula) {
      // Fórmulas relacionadas a áreas
      case "area-circulo":
      case "area-retangulo":
      case "area-triangulo":
      case "area-trapezio":
      case "area-paralelogramo":
        return "m²"; // metros quadrados
  
      // Fórmulas relacionadas a volumes
      case "volume-prisma":
      case "volume-piramide":
      case "volume-tronco-piramide":
      case "volume-cilindro":
      case "volume-esfera":
        return "m³"; // metros cúbicos
  
      // Teorema de Pitágoras (comprimento)
      case "teorema-pitagoras":
        return "m"; // metros
  
      // Fórmulas de Progressão Aritmética e Geométrica (sem unidade específica)
      case "progressao-aritmetica":
      case "progressao-geometrica":
        return ""; // sem unidade (números puros)
  
      // Fórmulas de Permutação e Combinação
      case "permutacao":
      case "combinacao":
        return ""; // sem unidade (cont agem de elementos)
  
      // Média e Desvio Padrão
      case "media-ponderada":
      case "desvio-padrao":
        return ""; // sem unidade (números puros)
  
      // Fórmulas de ângulo e conversões de ângulo
      case "angulo-para-radiano":
      case "radiano-para-angulo":
        return "rad"; // radianos
  
      // Fórmulas de Espiral de Arquimedes (comprimento)
      case "espiral-arquimedes":
        return "m"; // metros
  
      // Fórmulas de Euler (sem unidade específica)
      case "formula-euler":
        return ""; // sem unidade
  
      // Caso a fórmula não seja reconhecida
      default:
        console.error("Fórmula não reconhecida.");
        return "";
    }
  }
  
  // Função para tratar números com vírgula e garantir que sejam números válidos
  function parseNumber(valor) {
    if (typeof valor === "string") {
      valor = valor.replace(",", "."); // Substituir vírgulas por pontos
    }
    const numero = parseFloat(valor);
    return isNaN(numero) ? 0 : numero; // Retorna 0 se o valor não for válido
  }
  
  // Função para tratar números muito pequenos ou muito grandes e formatar o resultado
  function formatarResultado(valor) {
    if (Math.abs(valor) >= 1e6 || (Math.abs(valor) < 1e-3 && valor !== 0)) {
      const [base, expoente] = valor.toExponential(10).split('e');
      const baseFormatada = base.replace('.', ','); // Substitui ponto por vírgula
      const expoenteFormatado = expoente.replace('+', ''); // Remove o "+" do expoente
      return `${baseFormatada} ✕ 10^${expoenteFormatado}`;
    }
  
    // Se for um número inteiro, não mostrar casas decimais
    if (Number.isInteger(valor)) {
      return valor.toString();
    }
  
    // Se for um número decimal normal, limitar para no máximo 5 casas decimais e remover zeros extras
    return valor.toFixed(5).replace('.', ',').replace(/,?0+$/, ''); // Remove zeros extras
  }
  
  // Função para atualizar o elemento HTML com o resultado
  function atualizarResultadoMatematica(resultado) {
    document.getElementById('resultado-valor-matematica').innerText = resultado ;
  }
  
  // Funções de cálculo para Matemática
  function calcularBhaskara(vars) {
    const [a, b, c] = vars.map((variavel) => parseNumber(variavel.valor));
    if (a === 0 || b === 0 || c === 0) {
      atualizarResultadoMatematica("Valores inválidos fornecidos.");
      return;
    }
  
    const delta = Math.pow(b, 2) - 4 * a * c;
  
    if (delta < 0) {
      atualizarResultadoMatematica("Delta negativo, sem raízes reais");
      return;
    }
  
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
  
    const resultado = `Raiz 1: ${formatarResultado(raiz1)}, Raiz 2: ${formatarResultado(raiz2)}`;
    atualizarResultadoMatematica(resultado);
  }
  
  function calcularAreaCirculo(vars) {
    const [raio] = vars.map((variavel) => parseNumber(variavel.valor));
    if (raio === 0) {
      atualizarResultadoMatematica("Valor inválido para o raio.");
      return;
    }
  
    const area = Math.PI * Math.pow(raio, 2);
    atualizarResultadoMatematica(formatarResultado(area));
  }
  
  function calcularAreaRetangulo(vars) {
    const [base, altura] = vars.map((variavel) => parseNumber(variavel.valor));
    if (base === 0 || altura === 0) {
      atualizarResultadoMatematica("Valores inválidos para base ou altura.");
      return;
    }
  
    const area = base * altura;
    atualizarResultadoMatematica(formatarResultado(area));
  }
  
  function calcularAreaTriangulo(vars) {
    const [base, altura] = vars.map((variavel) => parseNumber(variavel.valor));
    if (base === 0 || altura === 0) {
      atualizarResultadoMatematica("Valores inválidos para base ou altura.");
      return;
    }
  
    const area = (base * altura) / 2;
    atualizarResultadoMatematica(formatarResultado(area));
  }
  
  function calcularVolumeCilindro(vars) {
    const [raio, altura] = vars.map((variavel) => parseNumber(variavel.valor));
    if (raio === 0 || altura === 0) {
      atualizarResultadoMatematica("Valores inválidos para raio ou altura.");
      return;
    }
  
    const volume = Math.PI * Math.pow(raio, 2) * altura;
    atualizarResultadoMatematica(formatarResultado(volume));
  }
  
  function calcularVolumeEsfera(vars) {
    const [raio] = vars.map((variavel) => parseNumber(variavel.valor));
    if (raio === 0) {
      atualizarResultadoMatematica("Valor inválido para o raio.");
      return;
    }
  
    const volume = (4 / 3) * Math.PI * Math.pow(raio, 3);
    atualizarResultadoMatematica(formatarResultado(volume));
  }
  
  function calcularTeoremaPitagoras(vars) {
    const [cateto1, cateto2] = vars.map((variavel) => parseNumber(variavel.valor));
    if (cateto1 === 0 || cateto2 === 0) {
      atualizarResultadoMatematica("Valores inválidos para os catetos.");
      return;
    }
  
    const hipotenusa = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
    atualizarResultadoMatematica(formatarResultado(hipotenusa));
  }
  
  function calcularProgressaoAritmetica(vars) {
    const [a1, n, r] = vars.map((variavel) => parseNumber(variavel.valor));
    if (a1 === 0 || n === 0 || r === 0) {
      atualizarResultadoMatematica("Valores inválidos fornecidos.");
      return;
    }
  
    const an = a1 + (n - 1) * r;
    atualizarResultadoMatematica(formatarResultado(an));
  }
  
  function calcularProgressaoGeometrica(vars) {
    const [a1, n, q] = vars.map((variavel) => parseNumber(variavel.valor));
    if (a1 === 0 || n === 0 || q === 0) {
      atualizarResultadoMatematica("Valores inválidos fornecidos.");
      return;
    }
  
    const an = a1 * Math.pow(q, n - 1);
    atualizarResultadoMatematica(formatarResultado(an));
  }
  
  function calcularPermutacao(vars) {
    const [n] = vars.map((variavel) => parseNumber(variavel.valor));
    if (n === 0) {
      atualizarResultadoMatematica("Valor inválido para n.");
      return;
    }
  
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
      resultado *= i;
    }
    atualizarResultadoMatematica(formatarResultado(resultado));
  }
  
  function calcularCombinacao(vars) {
    const [n, k] = vars.map((variavel) => parseNumber(variavel.valor));
    if (n === 0 || k === 0) {
      atualizarResultadoMatematica("Valores inválidos fornecidos.");
      return;
    }
  
    let resultado = 1;
    for (let i = 0; i < k; i++) {
      resultado *= (n - i) / (i + 1);
    }
    atualizarResultadoMatematica(formatarResultado(resultado));
  }
  
  function calcularDesvioPadrao(vars) {
    const valores = vars.map((variavel) => parseNumber(variavel.valor));
    if (valores.some(v => v === 0)) {
      atualizarResultadoMatematica("Valores inválidos fornecidos.");
      return;
    }
  
    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const somaQuadrados = valores.reduce((soma, valor) => soma + Math.pow(valor - media, 2), 0);
    const desvioPadrao = Math.sqrt(somaQuadrados / valores.length);
    atualizarResultadoMatematica(formatarResultado(desvioPadrao));
  }
  
  // Funções para renderizar LaTeX
  function renderLatex(latex) {
    if (typeof MathJax === "undefined") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
      script.async = true;
      document.head.appendChild(script);
      script.onload = () => {
        MathJax.typesetPromise([document.body]);
      };
   } else {
      MathJax.typesetPromise([document.body]);
    }
  }
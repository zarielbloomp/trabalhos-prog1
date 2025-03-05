// Inicialização após o carregamento do DOM para Matemática

document.addEventListener("DOMContentLoaded", function () {
  const formulaMatematica = document.getElementById("formula_matematica");

  if (formulaMatematica) {
    // Adicionar listener para mudança de fórmula
    formulaMatematica.addEventListener("change", updateVariablesMatematica);
    console.log(
      "Elemento formula_matematica encontrado e listener adicionado."
    );
  } else {
    console.error('Elemento com id "formula_matematica" não encontrado.');
  }
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
      unidades = [
        getUnidadesMat("Coeficiente"),
        getUnidadesMat("Coeficiente"),
        getUnidadesMat("Coeficiente"),
      ];
      break;
    case "soma-cubos":
      formulaHtml = "\\( (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 \\)";
      variables = ["a", "b"];
      unidades = [getUnidadesMat("Coeficiente"), getUnidadesMat("Coeficiente")];
      break;

    case "soma-quadrados":
      formulaHtml = "\\( (a + b)^2 = a^2 + 2ab + b^2 \\)";
      variables = ["a", "b"];
      unidades = [getUnidadesMat("Coeficiente"), getUnidadesMat("Coeficiente")];
      break;

    case "funcao-exponencial":
      formulaHtml = "\\( A = P(1 + r)^t \\)";
      variables = ["Principal (P)", "Taxa de Juros (r)", "Tempo (t)"];
      unidades = [
        getUnidadesMat("Valor Inicial"),
        getUnidadesMat("Taxa de Juros"),
        getUnidadesMat("Tempo"),
      ];
      break;

    case "area-circulo-setorial":
      formulaHtml = "\\( A = \\frac{\\theta}{360} \\times \\pi r^2 \\)";
      variables = ["Ângulo Central (θ)", "Raio (r)"];
      unidades = [getUnidadesMat("Ângulo"), getUnidadesMat("Distância")];
      break;

    case "perimetro-circunferencia":
      formulaHtml = "\\( P = 2\\pi r \\)";
      variables = ["Raio (r)"];
      unidades = [getUnidadesMat("Distância")];
      break;

    case "taxa-crescimento-exponencial":
      formulaHtml = "\\( P(t) = P_0 e^{rt} \\)";
      variables = [
        "Valor Inicial (P0)",
        "Taxa de Crescimento (r)",
        "Tempo (t)",
      ];
      unidades = [
        getUnidadesMat("Valor Inicial"),
        getUnidadesMat("Taxa de Crescimento"),
        getUnidadesMat("Tempo"),
      ];
      break;

    case "teorema-fundamental-algebra":
      formulaHtml = "\\( x^n - a = 0 \\)";
      variables = ["Coeficiente (a)", "Potência (n)"];
      unidades = [getUnidadesMat("Coeficiente"), getUnidadesMat("Potência")];
      break;

    case "energia-cinetica":
      formulaHtml = "\\( E_k = \\frac{1}{2} m v^2 \\)";
      variables = ["Massa (m)", "Velocidade (v)"];
      unidades = [getUnidadesMat("Massa"), getUnidadesMat("Velocidade")];
      break;

    case "forca-coulomb":
      formulaHtml = "\\( F = k_e \\frac{q_1 q_2}{r^2} \\)";
      variables = ["Carga 1 (q1)", "Carga 2 (q2)", "Distância (r)"];
      unidades = [
        getUnidadesMat("Carga"),
        getUnidadesMat("Carga"),
        getUnidadesMat("Distância"),
      ];
      break;

    case "teorema-bolzano":
      formulaHtml =
        "\\( f(c) = 0 \\text{ para algum } c \\text{ entre } a \\text{ e } b \\)";
      variables = ["Função f", "Intervalo [a, b]"];
      unidades = [getUnidadesMat("Função"), getUnidadesMat("Intervalo")];
      break;
    case "comprimento-arco":
      formulaHtml = "\\( L = r \\cdot \\Delta \\theta \\)";
      variables = ["Raio (r)", "Ângulo Central (Δθ)"];
      unidades = [getUnidadesMat("Distância"), getUnidadesMat("Ângulo")];
      break;

    case "valor-presente":
      formulaHtml = "\\( PV = \\frac{FV}{(1 + i)^n} \\)";
      variables = [
        "Valor Futuro (FV)",
        "Taxa de Juros (i)",
        "Número de Períodos (n)",
      ];
      unidades = [
        getUnidadesMat("Valor Futuro"),
        getUnidadesMat("Taxa de Juros"),
        getUnidadesMat("Períodos"),
      ];
      break;

    case "trabalho-mecanico":
      formulaHtml = "\\( W = F \\cdot d \\cdot \\cos(\\theta) \\)";
      variables = ["Força (F)", "Distância (d)", "Ângulo (θ)"];
      unidades = [
        getUnidadesMat("Força"),
        getUnidadesMat("Distância"),
        getUnidadesMat("Ângulo"),
      ];
      break;

    case "teorema-fermat":
      formulaHtml =
        "\\( x^n + y^n = z^n \\text{ não tem soluções inteiras para n > 2} \\)";
      variables = ["x", "y", "z", "n"];
      unidades = [
        getUnidadesMat("Valor"),
        getUnidadesMat("Valor"),
        getUnidadesMat("Valor"),
        getUnidadesMat("Exponente"),
      ];
      break;

    case "perimetro-elipse":
      formulaHtml = "\\( P = 2 \\pi \\sqrt{\\frac{a^2 + b^2}{2}} \\)";
      variables = ["Semi-eixo maior (a)", "Semi-eixo menor (b)"];
      unidades = [getUnidadesMat("Distância"), getUnidadesMat("Distância")];
      break;

    case "probabilidade-condicional":
      formulaHtml = "\\( P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\)";
      variables = [
        "Probabilidade de A e B (P(A ∩ B))",
        "Probabilidade de B (P(B))",
      ];
      unidades = [
        getUnidadesMat("Probabilidade"),
        getUnidadesMat("Probabilidade"),
      ];
      break;

    case "media-ponderada":
      formulaHtml = "\\( overline{x} = \\frac{\\sum{w_i x_i}}{\\sum{w_i}} \\)";
      variables = ["Peso (w)", "Valor (x)"];
      unidades = [getUnidadesMat("Peso"), getUnidadesMat("Valor")];
      break;

    case "probabilidade-uniao":
      formulaHtml = "\\( P(A \\cup B) = P(A) + P(B) - P(A \\cap B) \\)";
      variables = [
        "Probabilidade de A (P(A))",
        "Probabilidade de B (P(B))",
        "Probabilidade de A e B (P(A ∩ B))",
      ];
      unidades = [
        getUnidadesMat("Probabilidade"),
        getUnidadesMat("Probabilidade"),
        getUnidadesMat("Probabilidade"),
      ];
      break;

    case "razao-aurea":
      formulaHtml = "\\( \\varphi = \\frac{1 + \\sqrt{5}}{2} \\)";
      variables = ["Fórmula da Razão Áurea (\\varphi)"];
      unidades = [getUnidadesMat("Razão Áurea")];
      break;

    case "newton-aproximacao":
      formulaHtml = "\\( x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)} \\)";
      variables = [
        "Valor Atual (x_n)",
        "Função (f)",
        "Derivada da Função (f')",
      ];
      unidades = [
        getUnidadesMat("Valor Atual"),
        getUnidadesMat("Função"),
        getUnidadesMat("Função Derivada"),
      ];
      break;

    case "variancia":
      formulaHtml =
        "\\( \\sigma^2 = \\frac{1}{n} \\sum_{i=1}^{n} (x_i - \\overline{x})^2 \\)";
      variables = [
        "Valor Observado (x)",
        "Média (\\overline{x})",
        "Número de Observações (n)",
      ];
      unidades = [
        getUnidadesMat("Valor Observado"),
        getUnidadesMat("Média"),
        getUnidadesMat("Número de Observações"),
      ];
      break;

    case "area-dodecadro-regular":
      formulaHtml = "\\( A = 3 \\cdot \\sqrt{25 + 10 \\sqrt{5}} \\cdot a^2 \\)";
      variables = ["Comprimento da Aresta (a)"];
      unidades = [getUnidadesMat("Distância")];
      break;

    case "area-icosaedro-regular":
      formulaHtml = "\\( A = 5 \\cdot \\sqrt{3} \\cdot a^2 \\)";
      variables = ["Comprimento da Aresta (a)"];
      unidades = [getUnidadesMat("Distância")];
      break;

    case "curvaturas-conicas":
      formulaHtml = "\\( k = \\frac{1}{r_1} + \\frac{1}{r_2} \\)";
      variables = ["Raio de Curvatura 1 (r1)", "Raio de Curvatura 2 (r2)"];
      unidades = [
        getUnidadesMat("Raio de Curvatura"),
        getUnidadesMat("Raio de Curvatura"),
      ];
      break;

    case "potencia-media":
      formulaHtml = "\\( P_{média} = \\frac{1}{T} \\int_{0}^{T} P(t) dt \\)";
      variables = ["Potência (P)", "Tempo (T)"];
      unidades = [getUnidadesMat("Potência"), getUnidadesMat("Tempo")];
      break;

    case "area-hexagono-regular":
      formulaHtml = "\\( A = \\frac{3\\sqrt{3}}{2} a^2 \\)";
      variables = ["Lado (a)"];
      unidades = [getUnidadesMat("Distância")];
      break;

    case "area-octogono-regular":
      formulaHtml = "\\( A = 2(1 + \\sqrt{2}) a^2 \\)";
      variables = ["Lado (a)"];
      unidades = [getUnidadesMat("Distância")];
      break;

    case "area-losango":
      formulaHtml = "\\( A = \\frac{d_1 \\cdot d_2}{2} \\)";
      variables = ["Diagonal Maior (d1)", "Diagonal Menor (d2)"];
      unidades = [getUnidadesMat("Distância"), getUnidadesMat("Distância")];
      break;

    case "area-pentagono-regular":
      formulaHtml = "\\( A = \\frac{1}{4} \\sqrt{5(5 + 2\\sqrt{5})} a^2 \\)";
      variables = ["Lado (a)"];
      unidades = [getUnidadesMat("Distância")];
      break;

    case "area-decagono-regular":
      formulaHtml = "\\( A = \frac{5}{2} a^2 \\sqrt{5 + 2\\sqrt{5}} \\)";
      variables = ["Lado (a)"];
      unidades = [getUnidadesMat("Distância")];
      break;

    case "quadrado-soma":
      formulaHtml = "\\( (a + b)^2 = a^2 + 2ab + b^2 \\)";
      variables = ["a", "b"];
      unidades = [getUnidadesMat("Valor"), getUnidadesMat("Valor")];
      break;
    case "quadrado-diferenca":
      formulaHtml = "\\( (a - b)^2 = a^2 - 2ab + b^2 \\)";
      variables = ["a", "b"];
      unidades = [getUnidadesMat("Valor"), getUnidadesMat("Valor")];
      break;
    case "volume-cone":
      formulaHtml = "\\( V = \\frac{1}{3} \\pi r^2 h \\)";
      variables = ["Raio (r)", "Altura (h)"];
      unidades = [getUnidadesMat("Raio"), getUnidadesMat("Altura")];
      break;
    case "volume-cubo":
      formulaHtml = "\\( V = a^3 \\)";
      variables = ["Aresta (a)"];
      unidades = [getUnidadesMat("Aresta")];
      break;
    case "volume-paralelepipedo":
      formulaHtml = "\\( V = a \\cdot b \\cdot c \\)";
      variables = ["Comprimento (a)", "Largura (b)", "Altura (c)"];
      unidades = [
        getUnidadesMat("Comprimento"),
        getUnidadesMat("Largura"),
        getUnidadesMat("Comprimento"),
      ];
      break;
    case "equacao-1-grau":
      formulaHtml = "\\( ax + b = 0 \\)";
      variables = ["Coeficiente a", "Coeficiente b"];
      unidades = [getUnidadesMat("Coeficiente"), getUnidadesMat("Coeficiente")];
      break;
    case "volume-tetraedro":
      formulaHtml = "\\( V = \\frac{a^3}{6 \\sqrt{2}} \\)";
      variables = ["Aresta (a)"];
      unidades = [getUnidadesMat("Aresta")];
      break;
    case "formula-heron":
      formulaHtml = "\\( A = \\sqrt{s(s-a)(s-b)(s-c)} \\)";
      variables = ["Lado a", "Lado b", "Lado c"];
      unidades = [
        getUnidadesMat("Lado"),
        getUnidadesMat("Lado"),
        getUnidadesMat("Lado"),
      ];
      break;
    case "espiral-arquimedes":
      formulaHtml = "\\( r(\\theta) = a + b\\theta \\)";
      variables = ["Constante a", "Constante b", "Ângulo θ (rad)"];
      unidades = [
        getUnidadesMat("Constante"),
        getUnidadesMat("Constante"),
        getUnidadesMat("Ângulo"),
      ];
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
      unidades = [
        getUnidadesMat("Termo inicial"),
        getUnidadesMat("Razão"),
        getUnidadesMat("Termo desejado"),
      ];
      break;
    case "progressao-geometrica":
      formulaHtml = "\\( A_n = A_1 \\cdot q^{(n - 1)} \\)";
      variables = ["Termo inicial (A1)", "Razão (q)", "Termo desejado (n)"];
      unidades = [
        getUnidadesMat("Termo inicial"),
        getUnidadesMat("Razão"),
        getUnidadesMat("Termo desejado"),
      ];
      break;
    case "permutacao":
      formulaHtml = "\\( P(n, k) = \\frac{n!}{(n - k)!} \\)"; // Fórmula de permutação
      variables = [
        "Total de elementos (n)",
        "Elementos a serem organizados (k)",
      ]; // Dois parâmetros
      unidades = [
        getUnidadesMat("Total de elementos"),
        getUnidadesMat("Elementos a serem organizados"),
      ]; // Unidades para os dois parâmetros
      break;

    case "combinacao":
      formulaHtml = "\\( C(n, r) = \\frac{n!}{r! (n - r)!} \\)";
      variables = ["Total de elementos (n)", "Elementos a escolher (r)"];
      unidades = [
        getUnidadesMat("Total de elementos"),
        getUnidadesMat("Elementos a escolher"),
      ];
      break;
    case "area-trapezio":
      formulaHtml = "\\( A = \\frac{(B + b) \\cdot h}{2} \\)";
      variables = ["Base maior (B)", "Base menor (b)", "Altura (h)"];
      unidades = [
        getUnidadesMat("Base"),
        getUnidadesMat("Base"),
        getUnidadesMat("Altura"),
      ];
      break;
    case "area-paralelogramo":
      formulaHtml = "\\( A = b \\cdot h \\)";
      variables = ["Base (b)", "Altura (h)"];
      unidades = [getUnidadesMat("Base"), getUnidadesMat("Altura")];
      break;
    case "formula-euler":
      formulaHtml = "\\( V - E + F = 2 \\)";
      variables = ["Vértices (V)", "Arestas (E)", "Faces (F)"];
      unidades = [
        getUnidadesMat("Vértices"),
        getUnidadesMat("Arestas"),
        getUnidadesMat("Faces"),
      ];
      break;
    case "angulo-para-radiano":
      formulaHtml =
        "\\( \\theta_{rad} = \\theta_{deg} \\times \\frac{\\pi}{180 } \\)";
      variables = ["Ângulo"];
      unidades = [getUnidadesMat("Ângulo")];
      break;
    case "radiano-para-angulo":
      formulaHtml =
        "\\ ( \\theta_{deg} = \\theta_{rad} \\times \\frac{180}{\\pi} \\)";
      variables = [" Radiano (rad)"];
      unidades = [getUnidadesMat("Radiano")];
      break;
    case "volume-tronco-piramide":
      formulaHtml =
        "\\( V = \\frac{1}{3} \\times h \\times (A_1 + A_2 + \\sqrt{A_1 \\times A_2}) \\)";
      variables = [
        "Altura (h)",
        "Área da Base Menor (A₁)",
        "Área da Base Maior (A₂)",
      ];
      unidades = [
        getUnidadesMat("Altura"),
        getUnidadesMat("Área"),
        getUnidadesMat("Área"),
      ];
      break;
    case "volume-cilindro":
      formulaHtml = "\\( V = \\pi \\times r^2 \\times h \\)";
      variables = ["Raio da Base (r)", "Altura (h)"];
      unidades = [getUnidadesMat("Raio"), getUnidadesMat("Altura")];
      break;
    case "volume-esfera":
      formulaHtml = "\\( V = \\frac{4}{3} \\pi r^3 \\)";
      variables = ["Raio (r)"];
      unidades = [getUnidadesMat("Raio")];
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

  MathJax.typesetPromise();
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
    case "Aresta":
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
    case "Largura":
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
    case "Taxa de Crescimento":
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
    case "Radiano":
      return `
          <option value="rad">\\( rad \\)</option>
        `;
    default:
      return `<option value="">Selecione uma unidade</option>`;
  }
}

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
  if (variables.some((v) => v.valor === 0)) {
    alert("Por favor, insira valores válidos para todas as variáveis.");
    return;
  }

  let resultado;
  let unidade;
  switch (formula) {
    case "formula-heron":
      resultado = calcularFormulaHeronMatematica(variables);
      unidade = "m²";
      break;
    case "quadrado-soma":
      resultado = calcularQuadradoSoma(variables);
      unidade = "m²";
      break;
    case "quadrado-diferenca":
      resultado = calcularQuadradoDiferenca(variables);
      unidade = "m²";
      break;
    case "volume-cone":
      resultado = calcularVolumeCone(variables);
      unidade = "m³";
      break;
    case "volume-cubo":
      resultado = calcularVolumeCubo(variables);
      unidade = "m³";
      break;
    case "volume-paralelepipedo":
      resultado = calcularVolumeParalelepipedo(variables);
      unidade = "m³";
      break;
    case "volume-tetraedro":
      resultado = calcularVolumeTetraedro(variables);
      unidade = "m³";
      break;
    case "equacao-1-grau":
      resultado = calcularEquacao1Grau(variables);
      unidade = "unidades";
      break;
    case "volume-tronco-piramide":
      resultado = calcularVolumeTroncoPiramideMatematica(variables);
      unidade = "m³";
      break;
    case "baskara":
      resultado = calcularBhaskaraMatematica(variables);
      unidade = "unidades";
      break;
    case "espiral-arquimedes":
      resultado = calcularEspiralArquimedesMatematica(variables);
      unidade = "unidades";
      break;
    case "area-circulo":
      resultado = calcularAreaCirculoMatematica(variables);
      unidade = "m²";
      break;
    case "volume-cilindro":
      resultado = calcularVolumeCilindroMatematica(variables);
      unidade = "m³";
      break;
    case "volume-esfera":
      resultado = calcularVolumeEsferaMatematica(variables);
      unidade = "m³";
      break;
    case "area-retangulo":
      resultado = calcularAreaRetanguloMatematica(variables);
      unidade = "m²";
      break;
    case "area-triangulo":
      resultado = calcularAreaTrianguloMatematica(variables);
      unidade = "m²";
      break;
    case "volume-prisma":
      resultado = calcularVolumePrismaMatematica(variables);
      unidade = "m³";
      break;
    case "volume-piramide":
      resultado = calcularVolumePiramideMatematica(variables);
      unidade = "m³";
      break;
    case "teorema-pitagoras":
      resultado = calcularTeoremaPitagorasMatematica(variables);
      unidade = "m";
      break;
    case "progressao-aritmetica":
      resultado = calcularProgressaoAritmeticaMatematica(variables);
      unidade = "unidades";
      break;
    case "progressao-geometrica":
      resultado = calcularProgressaoGeometricaMatematica(variables);
      unidade = "unidades";
      break;
    case "permutacao":
      resultado = calcularPermutacaoMatematica(variables);
      unidade = "unidades";
      break;
    case "combinacao":
      resultado = calcularCombinacaoMatematica(variables);
      unidade = "unidades";
      break;
    case "media-ponderada":
      resultado = calcularMediaPonderadaMatematica(variables);
      unidade = "unidades";
      break;
    case "desvio-padrao":
      resultado = calcularDesvioPadraoMatematica(variables);
      unidade = "unidades";
      break;
    case "area-trapezio":
      resultado = calcularAreaTrapezioMatematica(variables);
      unidade = "m²";
      break;
    case "area-paralelogramo":
      resultado = calcularAreaParalelogramoMatematica(variables);
      unidade = "m²";
      break;
    case "formula-euler":
      resultado = calcularFormulaEulerMatematica(variables);
      unidade = "unidades";
      break;
    case "angulo-para-radiano":
      resultado = calcularAnguloParaRadianoMatematica(variables);
      unidade = "rad";
      break;
    case "radiano-para-angulo":
      resultado = calcularRadianoParaAnguloMatematica(variables);
      unidade = "°";
      break;
    case "soma-cubos":
      resultado = calcularSomaCubos(variables);
      unidade = "unidades";
      break;

    case "soma-quadrados":
      resultado = calcularSomaQuadrados(variables);
      unidade = "unidades";
      break;

    case "funcao-exponencial":
      resultado = calcularFuncaoExponencial(variables);
      unidade = "unidades";
      break;

    case "area-circulo-setorial":
      resultado = calcularAreaCirculoSetorial(variables);
      unidade = "m²";
      break;

    case "perimetro-circunferencia":
      resultado = calcularPerimetroCircunferencia(variables);
      unidade = "m";
      break;

    case "taxa-crescimento-exponencial":
      resultado = calcularTaxaCrescimentoExponencial(variables);
      unidade = "%";
      break;

    case "teorema-fundamental-algebra":
      resultado = calcularTeoremaFundamentalAlgebra(variables);
      unidade = "unidades";
      break;

    case "energia-cinetica":
      resultado = calcularEnergiaCinetica(variables);
      unidade = "J";
      break;

    case "forca-coulomb":
      resultado = calcularForcaCoulomb(variables);
      unidade = "N";
      break;

    case "teorema-bolzano":
      resultado = calcularTeoremaBolzano(variables);
      unidade = "unidades";
      break;
    case "comprimento-arco":
      resultado = calcularComprimentoArco(variables);
      unidade = "m";
      break;

    case "valor-presente":
      resultado = calcularValorPresente(variables);
      unidade = "unidades";
      break;

    case "trabalho-mecanico":
      resultado = calcularTrabalhoMecanico(variables);
      unidade = "J";
      break;

    case "teorema-fermat":
      resultado = calcularTeoremaFermat(variables);
      unidade = "unidades";
      break;

    case "perimetro-elipse":
      resultado = calcularPerimetroElipse(variables);
      unidade = "m";
      break;

    case "probabilidade-condicional":
      resultado = calcularProbabilidadeCondicional(variables);
      unidade = "%";
      break;

    case "probabilidade-uniao":
      resultado = calcularProbabilidadeUniao(variables);
      unidade = "%";
      break;

    case "razao-aurea":
      resultado = calcularRazaoAurea(variables);
      unidade = "unidades";
      break;

    case "newton-aproximacao":
      resultado = calcularNewtonAproximacao(variables);
      unidade = "unidades";
      break;

    case "variancia":
      resultado = calcularVariancia(variables);
      unidade = "unidades";
      break;

    case "area-icosaedro-regular":
      resultado = calcularAreaIcosaedroRegular(variables);
      unidade = "m²";
      break;

    case "area-dodecadro-regular":
      resultado = calcularAreaDodecadroRegular(variables);
      unidade = "m²";
      break;
    case "curvaturas-conicas":
      resultado = calcularCurvaturasConicas(variables);
      unidade = "unidades";
      break;

    case "potencia-media":
      resultado = calcularPotenciaMedia(variables);
      unidade = "unidades";
      break;

    case "area-hexagono-regular":
      resultado = calcularAreaHexagonoRegular(variables);
      unidade = "m²";
      break;

    case "area-oct ogono-regular":
      resultado = calcularAreaOctogonoRegular(variables);
      unidade = "m²";
      break;

    case "area-losango":
      resultado = calcularAreaLosango(variables);
      unidade = "m²";
      break;

    case "area-pentagono-regular":
      resultado = calcularAreaPentagonoRegular(variables);
      unidade = "m²";
      break;

    case "area-decagono-regular":
      resultado = calcularAreaDecagonoRegular(variables);
      unidade = "m²";
      break;

    case "area-nonagono-regular":
      resultado = calcularAreaNonagonoRegular(variables);
      unidade = "m²";
      break;

    case "area-dodecagono-regular":
      resultado = calcularAreaDodecagonoRegular(variables);
      unidade = "m²";
      break;

    case "area-triangulo-equilatero":
      resultado = calcularAreaTrianguloEquilatero(variables);
      unidade = "m²";
      break;

    case "area-hexagono":
      resultado = calcularAreaHexagono(variables);
      unidade = "m²";
      break;

    case "area-pologono-regular":
      resultado = calcularAreaPoligonoRegular(variables);
      unidade = "m²";
      break;
    default:
      console.error("Fórmula não reconhecida.");
      return;
  }

  // Verificar se o resultado retornado é válido
  if (resultado === undefined || resultado === null || resultado === "") {
    console.error(
      "Erro ao calcular resultado ou fórmula retornou valor vazio."
    );
    return;
  }

  // Verificar se o resultado é numérico para formatação
  let resultadoExibicao;
  if (typeof resultado === "number") {
    resultadoExibicao = resultado.toFixed(2) + " " + unidade;
  } else {
    // Para casos onde o resultado é um texto (como múltiplas soluções)
    resultadoExibicao = resultado + " " + unidade;
  }

  // Exibir o resultado
  document.getElementById("resultado-valor-matematica").innerText =
    resultadoExibicao;
}

function formatarResultadoMatematica(resultado, unidade) {
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

    // Coeficiente
    case "coeficiente": // coeficiente
      return `${resultado.toFixed(2)} coeficiente`;

    // Lado
    case "unidade": // unidade
      return `${resultado.toFixed(2)} unidades`;

    default:
      console.error(`Unidade não reconhecida: ${unidade}`);
      return `${resultado.toFixed(2)}`;
  }
}

function calcularTeoremaPitagorasMatematica(variables) {
  const a = variables[0].valor; // Cateto a
  const b = variables[1].valor; // Cateto b

  // Verifica se os catetos são maiores ou iguais a zero
  if (a < 0 || b < 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Os lados devem ser maiores ou iguais a zero.</span>";
  } else {
    // Calcula a hipotenusa usando o Teorema de Pitágoras
    const hipotenusa = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    const unidade = "m"; // Unidade da hipotenusa
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(hipotenusa, unidade);
  }
}

function calcularAreaDodecagonoRegular(variaveis) {
  const L = variaveis[0].valor;
  if (L <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O comprimento do lado deve ser maior que zero.</span>";
  } else {
    const area = 3 * (2 + Math.sqrt(3)) * Math.pow(L, 2);
    const unidade = "m²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

function calcularVolumeCilindroMatematica(variaveis) {
  const r = variaveis[0].valor;
  const h = variaveis[1].valor;
  if (r <= 0 || h <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Raio e altura devem ser maiores que zero.</span>";
  } else {
    const volume = Math.PI * Math.pow(r, 2) * h;
    const unidade = "m³";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(volume, unidade);
  }
}

function calcularVolumeEsferaMatematica(variaveis) {
  const r = variaveis[0].valor;
  if (r <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O raio deve ser maior que zero.</span>";
  } else {
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    const unidade = "m³";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(volume, unidade);
  }
}

function calcularAreaRetanguloMatematica(variaveis) {
  const l = variaveis[0].valor;
  const h = variaveis[1].valor;
  if (l <= 0 || h <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A largura e a altura devem ser maiores que zero.</span>";
  } else {
    const area = l * h;
    const unidade = "m²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

function calcularAreaTrianguloMatematica(variaveis) {
  const b = variaveis[0].valor;
  const h = variaveis[1].valor;
  if (b <= 0 || h <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A base e a altura devem ser maiores que zero.</span>";
  } else {
    const area = (b * h) / 2;
    const unidade = "m²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

function calcularVolumePiramideMatematica(variaveis) {
  const areaBase = variaveis[0].valor;
  const h = variaveis[1].valor;
  if (areaBase <= 0 || h <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A área da base e a altura devem ser maiores que zero.</span>";
  } else {
    const volume = (areaBase * h) / 3;
    const unidade = "m³";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(volume, unidade);
  }
}

function calcularProgressaoAritmeticaMatematica(variaveis) {
  const a1 = variaveis[0].valor; // Primeiro termo
  const d = variaveis[1].valor; // Razão
  const n = variaveis[2].valor; // Número de termos

  if (n <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O número de termos deve ser maior que zero.</span>";
  } else {
    const an = a1 + (n - 1) * d;
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(an);
  }
}

function calcularCombinacaoMatematica(variaveis) {
  const n = variaveis[0].valor; // Total de elementos
  const k = variaveis[1].valor; // Elementos a serem escolhidos

  if (n < 0 || k < 0 || k > n) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Os valores devem ser não negativos e k não pode ser maior que n.</span>";
  } else {
    const combinacao = fatorial(n) / (fatorial(k) * fatorial(n - k));
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(combinacao);
  }
}

function fatorial(num) {
  return num <= 1 ? 1 : num * fatorial(num - 1);
}

// Função para calcular o fatorial de um número
function fatorial(num) {
  if (num < 0) return undefined; // Fatorial não definido para números negativos
  if (num === 0 || num === 1) return 1; // 0! = 1 e 1! = 1
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i; // Multiplica os números de 2 até num
  }
  return resultado;
}

function calcularPermutacaoMatematica(variaveis) {
  const n = variaveis[0].valor; // Total de elementos
  const k = variaveis[1].valor; // Elementos a serem organizados

  // Verifica se n e k são não negativos e se k não é maior que n
  if (n < 0 || k < 0 || k > n) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Os valores devem ser não negativos e k não pode ser maior que n.</span>";
  } else {
    const permutacao = fatorial(n) / fatorial(n - k);
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(permutacao);
  }
}

function calcularProgressaoGeometricaMatematica(variaveis) {
  const a1 = variaveis[0].valor; // Primeiro termo
  const r = variaveis[1].valor; // Razão
  const n = variaveis[2].valor; // Número de termos

  if (n <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O número de termos deve ser maior que zero.</span>";
  } else {
    const an = a1 * Math.pow(r, n - 1);
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(an);
  }
}

function calcularTeoremaBolzano(variaveis) {
  const a = variaveis[0].valor; // Ponto inicial
  const b = variaveis[1].valor; // Ponto final
  const f = (x) => x * x - 2; // Exemplo: f(x) = x² - 2

  const fA = f(a);
  const fB = f(b);

  if (fA * fB < 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>A função muda de sinal no intervalo. Há uma raiz entre a e b.</span>";
  } else {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>A função não muda de sinal no intervalo. Não há garantia de raiz.</span>";
  }
}

function calcularAreaPoligonoRegular(variaveis) {
  const n = variaveis[0].valor; // Número de lados
  const L = variaveis[1].valor; // Comprimento do lado

  if (n < 3 || L <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O número de lados deve ser maior ou igual a 3 e o comprimento do lado deve ser maior que zero.</span>";
  } else {
    const area = (n * Math.pow(L, 2)) / (4 * Math.tan(Math.PI / n));
    const unidade = "m²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Quadrado da Soma: (a + b)^2 = a^2 + 2ab + b^2
function calcularQuadradoSoma(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  const resultado = Math.pow(a, 2) + 2 * a * b + Math.pow(b, 2);
  const unidade = "m²";
  document.getElementById("resultado-valor-matematica").innerHTML =
    formatarResultadoMatematica(resultado, unidade);
}

// Quadrado da Diferença: (a - b)^2 = a^2 - 2ab + b^2
function calcularQuadradoDiferenca(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  const resultado = Math.pow(a, 2) - 2 * a * b + Math.pow(b, 2);
  const unidade = "m²";
  document.getElementById("resultado-valor-matematica").innerHTML =
    formatarResultadoMatematica(resultado, unidade);
}

// Volume do Cone: V = (1/3)πr²h
function calcularVolumeCone(variables) {
  const raio = variables[0].valor;
  const altura = variables[1].valor;
  if (raio <= 0 || altura <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Raio e altura devem ser maiores que zero.</span>";
  } else {
    const volume = (1 / 3) * Math.PI * Math.pow(raio, 2) * altura;
    const unidade = "m³";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(volume, unidade);
  }
}

// Volume do Cubo: V = a³
function calcularVolumeCubo(variables) {
  const aresta = variables[0].valor;
  const volume = Math.pow(aresta, 3);
  const unidade = "m³";
  document.getElementById("resultado-valor-matematica").innerHTML =
    formatarResultadoMatematica(volume, unidade);
}

// Volume do Paralelepípedo: V = l * w * h
function calcularVolumeParalelepipedo(variables) {
  const comprimento = variables[0].valor;
  const largura = variables[1].valor;
  const altura = variables[2].valor;
  if (comprimento <= 0 || largura <= 0 || altura <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. As dimensões devem ser maiores que zero.</span>";
  } else {
    const volume = comprimento * largura * altura;
    const unidade = "m³";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(volume, unidade);
  }
}

// Volume do Tetraedro: V = a³ / 6√2
function calcularVolumeTetraedro(variables) {
  const aresta = variables[0].valor;
  if (aresta <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A aresta deve ser maior que zero.</span>";
  } else {
    const volume = Math.pow(aresta, 3) / (6 * Math.sqrt(2));
    const unidade = "m³";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(volume, unidade);
  }
}

// Equação do 1º grau: x = -b / a
function calcularEquacao1Grau(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  if (a === 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O coeficiente 'a' não pode ser zero.</span>";
  } else {
    const x = -b / a;
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematic a").innerHTML =
      formatarResultadoMatematica(x, unidade);
  }
}

// Fórmula de Heron: A = √[s(s - a)(s - b)(s - c)]
function calcularFormulaHeronMatematica(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  const c = variables[2].valor;
  const s = (a + b + c) / 2;

  // Verifica se os lados são válidos para formar um triângulo
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Os lados devem ser maiores que zero e devem formar um triângulo.</span>";
  } else {
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    const unidade = "m²";
    // Garante que a área não retorne NaN, mesmo em casos especiais
    const resultadoArea = isNaN(area) ? 0 : area;
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(resultadoArea, unidade);
  }
}

// Fórmula do Volume do Tronco de Pirâmide
function calcularVolumeTroncoPiramideMatematica(variables) {
  const base1 = variables[0].valor;
  const base2 = variables[1].valor;
  const altura = variables[2].valor;
  if (base1 <= 0 || base2 <= 0 || altura <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. As bases e altura devem ser maiores que zero.</span>";
  } else {
    const volume = ((base1 + base2) * altura) / 2;
    const unidade = "m³";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(volume, unidade);
  }
}

function calcularVolumePrismaMatematica(variables) {
  const areaBase = variables[0].valor; // Área da base
  const altura = variables[1].valor; // Altura

  // Verifica se a área da base e a altura são maiores que zero
  if (areaBase <= 0 || altura <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A área da base e a altura devem ser maiores que zero.</span>";
  } else {
    // Calcula o volume do prisma
    const volume = areaBase * altura;
    const unidade = "m³"; // Unidade do volume
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(volume, unidade);
  }
}

// Fórmula de Bhaskara
function calcularBhaskaraMatematica(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  const c = variables[2].valor;
  const delta = b * b - 4 * a * c;
  if (delta < 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Não há soluções reais.</span>";
  } else if (delta === 0) {
    const x = -b / (2 * a);
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(x, unidade);
  } else {
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    const unidade = "unidades";
    document.getElementById(
      "resultado-valor-matematica"
    ).innerHTML = `<span style="font-size: 24px; font-weight: bold;">Soluções: x1 = ${formatarResultadoMatematica(
      x1,
      unidade
    )}, x2 = ${formatarResultadoMatematica(x2, unidade)}</span>`;
  }
}

// Espiral Arquimedes: r(θ) = a + bθ
function calcularEspiralArquimedesMatematica(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;
  const n = variables[2].valor;
  const r = a + b * n;
  const unidade = "unidades";
  document.getElementById("resultado-valor-matematica").innerHTML =
    formatarResultadoMatematica(r, unidade);
}

// Área do Círculo: A = πr²
function calcularAreaCirculoMatematica(variables) {
  const raio = variables[0].valor;
  if (raio <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O raio deve ser maior que zero.</span>";
  } else {
    const area = Math.PI * Math.pow(raio, 2);
    const unidade = "m²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Média Ponderada: M = Σ(w_i * x_i) / Σ(w_i)
function calcularMediaPonderadaMatematica(variables) {
  const valores = variables.slice(0, variables.length / 2).map((v) => v.valor);
  const pesos = variables.slice(variables.length / 2).map((v) => v.valor);
  if (
    valores.length !== pesos.length ||
    valores.length === 0 ||
    pesos.length === 0
  ) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido.</span>";
  } else {
    const somaPesos = pesos.reduce((soma, peso) => soma + peso, 0);
    const somaProdutos = valores.reduce(
      (soma, valor, index) => soma + valor * pesos[index],
      0
    );
    const mediaPonderada = somaProdutos / somaPesos;
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(mediaPonderada, unidade);
  }
}

// Desvio Padrão: σ = √(Σ(x_i - x̄)² / n)
function calcularDesvioPadraoMatematica(variables) {
  const valores = variables.map((v) => v.valor);
  const media =
    valores.reduce((soma, valor) => soma + valor, 0) / valores.length;
  if (valores.length === 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido.</span>";
  } else {
    const somaQuadrados = valores.reduce(
      (soma, valor) => soma + Math.pow(valor - media, 2),
      0
    );
    const desvioPadrao = Math.sqrt(somaQuadrados / valores.length);
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(desvioPadrao, unidade);
  }
}

// Área do Trapézio: A = ((base1 + base2) * altura) / 2
function calcularAreaTrapezioMatematica(variables) {
  const base1 = variables[0].valor;
  const base2 = variables[1].valor;
  const altura = variables[2].valor;
  if (base1 <= 0 || base2 <= 0 || altura <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. As dimensões devem ser maiores que zero.</span>";
  } else {
    const area = ((base1 + base2) * altura) / 2;
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Área do Paralelogramo: A = base * altura
function calcularAreaParalelogramoMatematica(variables) {
  const base = variables[0].valor;
  const altura = variables[1].valor;
  if (base <= 0 || altura <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. As dimensões devem ser maiores que zero.</span>";
  } else {
    const area = base * altura;
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Fórmula de Euler: V - A + F = 2
function calcularFormulaEulerMatematica(variables) {
  const vertices = variables[0].valor;
  const arestas = variables[1].valor;
  const faces = variables[2].valor;
  const resultado = vertices - arestas + faces;
  if (resultado === 2) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Fórmula de Euler confirmada</span>";
  } else {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Fórmula de Euler não confirmada</span>";
  }
}

// Ângulo para Radiano: rad = (π / 180) * ângulo
function calcularAnguloParaRadianoMatematica(variables) {
  const angulo = variables[0].valor;
  if (isNaN(angulo)) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O ângulo deve ser um número válido.</span>";
  } else {
    const radiano = (Math.PI / 180) * angulo;
    const unidade = "rad";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(radiano, unidade);
  }
}

// Radiano para Ângulo: ângulo = (180 / π) * radiano
function calcularRadianoParaAnguloMatematica(variables) {
  const radiano = variables[0].valor;
  if (isNaN(radiano)) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O radiano deve ser um número válido.</span>";
  } else {
    const angulo = (180 / Math.PI) * radiano;
    const unidade = "°";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(angulo, unidade);
  }
}

// Calcular Variância: σ² = Σ(xi - x̄)² / n
function calcularVariancia(variables) {
  const valores = variables.map((v) => v.valor);
  if (valores.length < 2) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Deve haver pelo menos dois valores.</span>";
  } else {
    const media =
      valores.reduce((soma, valor) => soma + valor, 0) / valores.length;
    const somaQuadrados = valores.reduce(
      (soma, valor) => soma + Math.pow(valor - media, 2),
      0
    );
    const variancia = somaQuadrados / valores.length;
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(variancia, unidade);
  }
}

// Área do Icosaedro Regular: A = 5√3 * a²
function calcularAreaIcosaedroRegular(variables) {
  const aresta = variables[0].valor;
  if (aresta <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A aresta deve ser maior que zero.</span>";
  } else {
    const area = 5 * Math.sqrt(3) * Math.pow(aresta, 2);
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Área do Dodecaedro Regular: A = 3√(25 + 10√5) * a²
function calcularAreaDodecadroRegular(variables) {
  const aresta = variables[0].valor;
  if (aresta <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A aresta deve ser maior que zero.</span>";
  } else {
    const area = 3 * Math.sqrt(25 + 10 * Math.sqrt(5)) * Math.pow(aresta, 2);
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Curvaturas Cônicas (Teorema de Descartes): k = (1 / r1) + (1 / r2)
function calcularCurvaturasConicas(variables) {
  const r1 = variables[0].valor;
  const r2 = variables[1].valor;
  if (r1 <= 0 || r2 <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Os raios devem ser maiores que zero.</span>";
  } else {
    const k = 1 / r1 + 1 / r2;
    const unidade = "1/unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(k, unidade);
  }
}

// Potência Média
function calcularPotenciaMedia(variables) {
  const potencia = variables[0].valor;
  const tempo = variables[1].valor;

  if (potencia <= 0 || tempo <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A potência e o tempo devem ser maiores que zero.</span>";
  } else {
    const potenciaMedia = potencia * tempo;
    const unidade = "W·s";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(potenciaMedia, unidade);
  }
}

// Área do Hexágono Regular
function calcularAreaHexagonoRegular(variables) {
  const lado = variables[0].valor;

  if (lado <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O lado deve ser maior que zero.</span>";
  } else {
    const area = (3 * Math.sqrt(3) * Math.pow(lado, 2)) / 2;
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Área do Octógono Regular
function calcularAreaOctogonoRegular(variables) {
  const lado = variables[0].valor;

  if (lado <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O lado deve ser maior que zero.</span>";
  } else {
    const area = 2 * (1 + Math.sqrt(2)) * Math.pow(lado, 2);
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Área do Losango
function calcularAreaLosango(variables) {
  const diagonal1 = variables[0].valor;
  const diagonal2 = variables[1].valor;

  if (diagonal1 <= 0 || diagonal2 <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. As diagonais devem ser maiores que zero.</span>";
  } else {
    const area = (diagonal1 * diagonal2) / 2;
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Área do Pentágono Regular
function calcularAreaPentagonoRegular(variables) {
  const lado = variables[0].valor;

  if (lado <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O lado deve ser maior que zero.</span>";
  } else {
    const area =
      (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * Math.pow(lado, 2);
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Área do Decágono Regular
function calcularAreaDecagonoRegular(variables) {
  const lado = variables[0].valor;

  if (lado <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O lado deve ser maior que zero.</span>";
  } else {
    const area = (5 / 2) * Math.pow(lado, 2) * Math.sqrt(5 + 2 * Math.sqrt(5));
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Área do Nonágono Regular
function calcularAreaNonagonoRegular(variables) {
  const lado = variables[0].valor;

  if (lado <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O lado deve ser maior que zero.</span>";
  } else {
    const area = (9 / 4) * Math.sqrt(5 - 2 * Math.sqrt(5)) * Math.pow(lado, 2);
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Teorema Fundamental da Álgebra (x^n - a = 0)
function calcularTeoremaFundamentalAlgebra(variables) {
  const a = variables[0].valor;
  const n = variables[1].valor;

  if (n <= 0 || isNaN(a) || isNaN(n)) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A e n devem ser números válidos.</span>";
  } else {
    document.getElementById(
      "resultado-valor-matematica"
    ).innerHTML = `<span style="font-size: 24px; font-weight: bold;">Teorema Fundamental da Álgebra: x^${n} - ${a} = 0</span>`;
  }
}

// Energia Cinética (Física) - E_k = 1/2 m v^2
function calcularEnergiaCinetica(variables) {
  const massa = variables[0].valor;
  const velocidade = variables[1].valor;

  if (massa <= 0 || velocidade <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Massa e velocidade devem ser maiores que zero.</span>";
  } else {
    const energia = 0.5 * massa * Math.pow(velocidade, 2);
    const unidade = "J";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(energia, unidade);
  }
}

// Força de Coulomb - F = k_e * (q1 * q2) / r²
function calcularForcaCoulomb(variables) {
  const q1 = variables[0].valor;
  const q2 = variables[1].valor;
  const r = variables[2].valor;

  if (q1 <= 0 || q2 <= 0 || r <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. As cargas e a distância devem ser maiores que zero.</span>";
  } else {
    const k_e = 8.99e9; // Constante de Coulomb (N·m²/C²)
    const forca = (k_e * (q1 * q2)) / Math.pow(r, 2);
    const unidade = "N";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(forca, unidade);
  }
}

// Comprimento de Arco - L = r * Δθ
function calcularComprimentoArco(variables) {
  const raio = variables[0].valor;
  const angulo = variables[1].valor;

  if (raio <= 0 || angulo <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O raio e o ângulo devem ser maiores que zero.</span>";
  } else {
    const comprimento = raio * angulo;
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(comprimento, unidade);
  }
}

// Valor Presente (Desconto Composto) - PV = FV / (1 + i)^n
function calcularValorPresente(variables) {
  const fv = variables[0].valor;
  const taxa = variables[1].valor;
  const n = variables[2].valor;

  if (fv <= 0 || taxa <= 0 || n <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O valor presente deve ser maior que zero.</span>";
  } else {
    const valorPresente = fv / Math.pow(1 + taxa, n);
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(valorPresente, unidade);
  }
}

// Trabalho Mecânico (Física) - W = F * d * cos(θ)
function calcularTrabalhoMecanico(variables) {
  const forca = variables[0].valor;
  const distancia = variables[1].valor;
  const angulo = variables[2].valor;

  if (forca <= 0 || distancia <= 0 || angulo < 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A força, distância e o ângulo devem ser válidos.</span>";
  } else {
    const trabalho = forca * distancia * Math.cos((angulo * Math.PI) / 180);
    const unidade = "J";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(trabalho, unidade);
  }
}

// Teorema de Fermat (Último Teorema de Fermat) - x^n + y^n = z^n não tem soluções inteiras para n > 2
function calcularTeoremaFermat(variables) {
  const n = variables[0].valor;

  if (n <= 2) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>O teorema de Fermat só é aplicável para n > 2.</span>";
  } else {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Não há soluções inteiras para n > 2.</span>";
  }
}

// Perímetro da Elipse - P = 2π√((a² + b²) / 2)
function calcularPerimetroElipse(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;

  if (a <= 0 || b <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A e B devem ser maiores que zero.</span>";
  } else {
    const perimetro =
      2 * Math.PI * Math.sqrt((Math.pow(a, 2) + Math.pow(b, 2)) / 2);
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(perimetro, unidade);
  }
}

// Probabilidade Condicional - P(A|B) = P(A ∩ B) / P(B)
function calcularProbabilidadeCondicional(variables) {
  const pAB = variables[0].valor;
  const pB = variables[1].valor;

  if (pAB < 0 || pB <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Probabilidade não pode ser negativa.</span>";
  } else {
    const probabilidadeCondicional = pAB / pB;
    const unidade = "probabilidade";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(probabilidadeCondicional, unidade);
  }
}

// Probabilidade de União de Dois Eventos - P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
function calcularProbabilidadeUniao(variables) {
  const pA = variables[0].valor;
  const pB = variables[1].valor;
  const pAB = variables[2].valor;

  if (pA < 0 || pB < 0 || pAB < 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Probabilidade não pode ser negativa.</span>";
  } else {
    const probabilidadeUniao = pA + pB - pAB;
    const unidade = "probabilidade";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(probabilidadeUniao, unidade);
  }
}

// Razão Áurea (Golden Ratio) - φ = (1 + √5) / 2
function calcularRazaoAurea(variables) {
  const razaoAurea = (1 + Math.sqrt(5)) / 2;
  const unidade = "sem unidade";
  document.getElementById("resultado-valor-matematica").innerHTML =
    formatarResultadoMatematica(razaoAurea, unidade);
}

// Fórmula de Newton para Aproximação de Raízes - x_{n+1} = x_n - f(x_n) / f'(x_n)
function calcularNewtonAproximacao(variables) {
  const xN = variables[0].valor;
  const fXn = variables[1].valor;
  const fXnPrime = variables[2].valor;

  if (fXnPrime === 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. A derivada não pode ser zero.</span>";
  } else {
    const xnPlus1 = xN - fXn / fXnPrime;
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(xnPlus1, unidade);
  }
}

// Soma dos Cubos: (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3
function calcularSomaCubos(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Os valores de a e b são inválidos.</span>";
  } else {
    const resultado =
      Math.pow(a, 3) +
      3 * Math.pow(a, 2) * b +
      3 * a * Math.pow(b, 2) +
      Math.pow(b, 3);
    const unidade = "unidades³";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(resultado, unidade);
  }
}

// Soma dos Quadrados: (a + b)^2 = a^2 + 2ab + b^2
function calcularSomaQuadrados(variables) {
  const a = variables[0].valor;
  const b = variables[1].valor;

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. Os valores de a e b são inválidos.</span>";
  } else {
    const resultado = Math.pow(a, 2) + 2 * a * b + Math.pow(b, 2);
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(resultado, unidade);
  }
}

// Função Exponencial (Valor Futuro de um Capital): A = P(1 + r)^t
function calcularFuncaoExponencial(variables) {
  const P = variables[0].valor;
  const r = variables[1].valor;
  const t = variables[2].valor;

  if (P <= 0 || r < 0 || t < 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O valor presente, taxa e tempo devem ser válidos.</span>";
  } else {
    const A = P * Math.pow(1 + r, t);
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(A, unidade);
  }
}

// Área do Círculo Setorial: A = (θ / 360) * π * r^2
function calcularAreaCirculoSetorial(variables) {
  const angulo = variables[0].valor;
  const raio = variables[1].valor;

  if (raio <= 0 || angulo < 0 || angulo > 360) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size:  24px; font-weight: bold;'>Resultado inválido. O raio e o ângulo devem ser válidos.</span>";
  } else {
    const area = (angulo / 360) * Math.PI * Math.pow(raio, 2);
    const unidade = "unidades²";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(area, unidade);
  }
}

// Perímetro da Circunferência: P = 2πr
function calcularPerimetroCircunferencia(variables) {
  const raio = variables[0].valor;

  if (raio <= 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O raio deve ser maior que zero.</span>";
  } else {
    const perimetro = 2 * Math.PI * raio;
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(perimetro, unidade);
  }
}

// Taxa de Crescimento Exponencial: P(t) = P0 * e^(rt)
function calcularTaxaCrescimentoExponencial(variables) {
  const P0 = variables[0].valor;
  const r = variables[1].valor;
  const t = variables[2].valor;

  if (P0 <= 0 || r < 0 || t < 0) {
    document.getElementById("resultado-valor-matematica").innerHTML =
      "<span style='font-size: 24px; font-weight: bold;'>Resultado inválido. O valor inicial, taxa e tempo devem ser válidos.</span>";
  } else {
    const P = P0 * Math.exp(r * t);
    const unidade = "unidades";
    document.getElementById("resultado-valor-matematica").innerHTML =
      formatarResultadoMatematica(P, unidade);
  }
}

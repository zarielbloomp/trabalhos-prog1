// Inicialização após o carregamento do DOM para Matemática
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formula_matematica").addEventListener("change", updateVariablesMatematica);
});

// Função para atualizar as variáveis com base na fórmula de Matemática selecionada
function updateVariablesMatematica() {
    const formula = document.getElementById("formula_matematica").value;
    const container = document.getElementById("variables-container_matematica");
    const formulaDisplay = document.getElementById("matematica-formula-display");
    container.innerHTML = "";
    let variables = [];
    let formulaHtml = "";

    // Switch para definir a fórmula e suas variáveis
    switch (formula) {
        case "baskara":
            formulaHtml = "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$";
            variables = ["Coeficiente a", "Coeficiente b", "Coeficiente c"];
            break;
        case "espiral-arquimedes":
            formulaHtml = "$r(\\theta) = a + b\\theta$";
            variables = ["Constante a", "Constante b", "Ângulo θ (rad)"];
            break;
        case "area-circulo":
            formulaHtml = "$A = \\pi r^2$";
            variables = ["Raio (r)"];
            break;
        case "area-retangulo":
            formulaHtml = "$A = b \\cdot h$";
            variables = ["Base (b)", "Altura (h)"];
            break;
        case "area-triangulo":
            formulaHtml = "$A = \\frac{b \\cdot h}{2}$";
            variables = ["Base (b)", "Altura (h)"];
            break;
        case "volume-prisma":
            formulaHtml = "$V = A_b \\cdot h$";
            variables = ["Área da base (A_b)", "Altura (h)"];
            break;
        case "volume-piramide":
            formulaHtml = "$V = \\frac{A_b \\cdot h}{3}$";
            variables = ["Área da base (A_b)", "Altura (h)"];
            break;
        case "volume-tronco-piramide":
            formulaHtml = "$V = \\frac{h}{3} (A_{b\\_maior} + A_{b\\_menor} + \\sqrt{A_{b\\_maior} \\cdot A_{b\\_menor}})$";
            variables = ["Área da base maior", "Área da base menor", "Altura (h)"];
            break;
        case "volume-cilindro":
            formulaHtml = "$V = \\pi r^2 h$";
            variables = ["Raio da base (r)", "Altura (h)"];
            break;
        case "volume-esfera":
            formulaHtml = "$V = \\frac{4}{3} \\pi r^3$";
            variables = ["Raio (r)"];
            break;
        case "teorema-pitagoras":
            formulaHtml = "$c = \\sqrt{a^2 + b^2}$";
            variables = ["Cateto a", "Cateto b"];
            break;
        case "progressao-aritmetica":
            formulaHtml = "$A_n = A_1 + (n - 1) \\cdot r$";
            variables = ["Termo inicial (A1)", "Razão (r)", "Termo desejado (n)"];
            break;
        case "progressao-geometrica":
            formulaHtml = "$A_n = A_1 \\cdot q^{(n - 1)}$";
            variables = ["Termo inicial (A1)", "Razão (q)", "Termo desejado (n)"];
            break;
        case "permutacao":
            formulaHtml = "$P(n) = n!$";
            variables = ["Total de elementos (n)"];
            break;
        case "combinacao":
            formulaHtml = "$C(n, r) = \\frac{n!}{r! (n - r)!}$";
            variables = ["Total de elementos (n)", "Elementos a escolher (r)"];
            break;
        case "media-ponderada":
            formulaHtml = "$M = \\frac{\\sum_{i=1}^{n} p_i x_i}{\\sum_{i=1}^{n} p_i}$";
            variables = ["Peso 1", "Valor 1", "Peso 2", "Valor 2", "Peso 3", "Valor 3"];
            break;
        case "desvio-padrao":
            formulaHtml = "$\\sigma = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n}}$";
            variables = ["Valor 1", "Valor 2", "Valor 3", "Valor 4", "Valor 5"];
            break;
        case "area-trapezio":
            formulaHtml = "$A = \\frac{(B + b) \\cdot h}{2}$";
            variables = ["Base maior (B)", "Base menor (b)", "Altura (h)"];
            break;
        case "area-paralelogramo":
            formulaHtml = "$A = b \\cdot h$";
            variables = ["Base (b)", "Altura (h)"];
            break;
        case "formula-euler":
            formulaHtml = "$V - E + F = 2$";
            variables = ["Vértices (V)", "Arestas (E)", "Faces (F)"];
            break;
        default:
            formulaHtml = "Fórmula desconhecida.";
            variables = [];
            break;
    }

    // Atualiza a exibição da fórmula selecionada
    formulaDisplay.innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;
    
    // Gerar campos de entrada de variáveis
    container.innerHTML = variables.map((variable, index) => 
        `<input type="text" id="var${index}" placeholder="${variable}" style="padding: 15px; margin-bottom: 15px;">`
    ).join('');

    // Re-renderizar fórmulas matemáticas com MathJax
    MathJax.typesetPromise();
}

function calcularMatematica() {
    const formula = document.getElementById("formula_matematica").value;
    const inputs = document.querySelectorAll("#variables-container_matematica input");
    const variables = Array.from(inputs).map(input => parseFloat(input.value.replace(",", ".").replace(".", ",")));
    let resultado = "";

    // Validação das entradas
    if (!validateInputs(variables)) {
        alert("Entradas inválidas! Verifique suas variáveis.");
        return;
    }

    try {
        // Chamada da função de cálculo de acordo com a fórmula selecionada
        resultado = executeCalculation(formula, variables);
    } catch (error) {
        alert("Erro durante o cálculo: " + error.message);
        return;
    }
  
    document.getElementById("resultado-valor").innerHTML = resultado;
}

// Função para executar cálculos de acordo com a fórmula
function executeCalculation(formula, variables) {
    switch (formula) {
        case "baskara":
            return calcularBhaskara(variables);
        case "espiral-arquimedes":
            return calcularEspiralArquimedes(variables);
        case "area-circulo":
            return calcularAreaCirculo(variables);
        case "area-retangulo":
            return calcularAreaRetangulo(variables);
        case "area-triangulo":
            return calcularAreaTriangulo(variables);
        case "volume-prisma":
            return calcularVolumePrisma(variables);
        case "volume-piramide":
            return calcularVolumePiramide(variables);
        case "volume-tronco-piramide":
            return calcularVolumeTroncoPiramide(variables);
        case "volume-cilindro":
            return calcularVolumeCilindro(variables);
        case "volume-esfera":
            return calcularVolumeEsfera(variables);
        case "teorema-pitagoras":
            return calcularTeoremaPitagoras(variables);
        case "progressao-aritmetica":
            return calcularProgressaoAritmetica(variables);
        case "progressao-geometrica":
            return calcularProgressaoGeometrica(variables);
        case "permutacao":
            return calcularPermutacao(variables);
        case "combinacao":
            return calcularCombinacao(variables);
        case "media-ponderada":
            return calcularMediaPonderada(variables);
        case "desvio-padrao":
            return calcularDesvioPadrao(variables);
        case "area-trapezio":
            return calcularAreaTrapezio(variables);
        case "area-paralelogramo":
            return calcularAreaParalelogramo(variables);
        case "formula-euler":
            return calcularFormulaEuler(variables);
        default:
            throw new Error("Fórmula não encontrada.");
    }
}

// Funções de cálculo para cada fórmula
function calcularBhaskara([a, b, c]) {
    const delta = b ** 2 - 4 * a * c;
    if (delta < 0) throw new Error("Delta é negativo, não há raízes reais.");
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return `x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
}

function calcularEspiralArquimedes([a, b, theta]) {
    return `r(θ) = ${a + b * theta}`;
}

function calcularAreaCirculo([r]) {
    return `Área = ${Math.PI * r ** 2}`;
}

function calcularAreaRetangulo([b, h]) {
    return `Área = ${b * h}`;
}

function calcularAreaTriangulo([b, h]) {
    return `Área = ${(b * h) / 2}`;
}

function calcularVolumePrisma([A_b, h]) {
    return `Volume = ${A_b * h}`;
}

function calcularVolumePiramide([A_b, h]) {
    return `Volume = ${(A_b * h) / 3}`;
}

function calcularVolumeTroncoPiramide([A_b_maior, A_b_menor, h]) {
    return `Volume = ${(h / 3) * (A_b_maior + A_b_menor + Math.sqrt(A_b_maior * A_b_menor))}`;
}

function calcularVolumeCilindro([r, h]) {
    return `Volume = ${Math.PI * r ** 2 * h}`;
}

function calcularVolumeEsfera([r]) {
    return `Volume = ${(4 / 3) * Math.PI * r ** 3}`;
}

function calcularTeoremaPitagoras([a, b]) {
    const c = Math.sqrt(a ** 2 + b ** 2);
    return `c = ${c}`;
}

function calcularProgressaoAritmetica([A1, r, n]) {
    return `A${n} = ${A1 + (n - 1) * r}`;
}

function calcularProgressaoGeometrica([A1, q, n]) {
    return `A${n} = ${A1 * (q ** (n - 1))}`;
}

function calcularPermutacao([n]) {
    return `P(${n}) = ${fatorial(n)}`;
}

function calcularCombinacao([n, r]) {
    return `C(${n}, ${r}) = ${fatorial(n) / (fatorial(r) * fatorial(n - r))}`;
}

function calcularMediaPonderada(variaveis) {
    const pesos = [];
    const valores = [];
    for (let i = 0; i < variaveis.length; i += 2) {
        pesos.push(variaveis[i]);
        valores.push(variaveis[i + 1]);
    }
    const somaPesos = pesos.reduce((a, b) => a + b, 0);
    const somaProduto = pesos.reduce((sum, peso, i) => sum + (peso * valores[i]), 0);
    return `Média Ponderada = ${somaProduto / somaPesos}`;
}

function calcularDesvioPadrao(variaveis) {
    const media = variaveis.reduce((sum, valor) => sum + valor, 0) / variaveis.length;
    const variancia = variaveis.reduce((sum, valor) => sum + Math.pow(valor - media, 2), 0) / variaveis.length;
    return `Desvio Padrão = ${Math.sqrt(variancia)}`;
}

function calcularAreaTrapezio([B, b, h]) {
    return `Área = ${((B + b) * h) / 2}`;
}

function calcularAreaParalelogramo([b, h]) {
    return `Área = ${b * h}`;
}

function calcularFormulaEuler([V, E, F]) {
    return `V - E + F = ${V - E + F}`;
}

function validateInputs(inputs) {
    return inputs.every(input => !isNaN(input) && input !== null);
}

function fatorial(n) {
    return n <= 1 ? 1 : n * fatorial(n - 1);
}

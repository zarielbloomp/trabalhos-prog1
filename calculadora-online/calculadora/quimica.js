// Inicialização após o carregamento do DOM para Química
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formula").addEventListener("change", updateVariablesQuimica);
});

// Função para atualizar as variáveis e fórmulas com base na fórmula de Química selecionada
function updateVariablesQuimica() {
    const formula = document.getElementById("formula").value;
    const formulaDisplay = document.getElementById("quimica-formula-display");
    const container = document.getElementById("variables-container");
    const instructionsDiv = document.getElementById("instructions-quimica");  
    container.innerHTML = "";
    let variablesHtml = "";
    let formulaHtml = "";

    switch (formula) {
        case "numero-mols":
            formulaHtml = "$n = \\frac{m}{M}$";
            variablesHtml = "Massa (g), Massa Molar (g/mol)";
            break;
        case "massa-molar":
            formulaHtml = "$M = \\frac{m}{n}$";
            variablesHtml = "Massa (g), Mol (mol)";
            break;
        case "densidade":
            formulaHtml = "$\\rho = \\frac{m}{V}$";
            variablesHtml = "Massa (g), Volume (L)";
            break;
        case "concentracao-molar":
            formulaHtml = "$C = \\frac{n}{V}$";
            variablesHtml = "Mol (mol), Volume (L)";
            break;
        case "concentracao-comum":
            formulaHtml = "$C = \\frac{m}{V}$";
            variablesHtml = "Massa (g), Volume (L)";
            break;
        case "mistura-solucoes":
            formulaHtml = "$C_f = \\frac{C_1 \\cdot V_1 + C_2 \\cdot V_2}{V_1 + V_2}$";
            variablesHtml = "Concentração1 (mol/L), Volume1 (L), Concentração2 (mol/L), Volume2 (L)";
            break;
        case "diluicao":
            formulaHtml = "$C_f = \\frac{C_i \\cdot V_i}{V_f}$";
            variablesHtml = "Concentração inicial (mol/L), Volume inicial (L), Volume final (L)";
            break;
        case "massa-soluto":
            formulaHtml = "$m = C \\cdot V$";
            variablesHtml = "Concentração (mol/L), Volume (L)";
            break;
        case "percentagem-massa":
            formulaHtml = "$\\%m = \\frac{m_{soluto}}{m_{total}} \\cdot 100$";
            variablesHtml = "Massa do Soluto (g), Massa Total (g)";
            break;
        case "constante-equilibrio":
            formulaHtml = "$K = \\frac{C^c \\cdot D^d}{A^a \\cdot B^b}$";
            variablesHtml = "Concentração A, Coeficiente A, Concentração B, Coeficiente B, Concentração C, Coeficiente C, Concentração D, Coeficiente D";
            break;
        case "calor-sensivel":
            formulaHtml = "$Q = m \\cdot c \\cdot \\Delta T$";
            variablesHtml = "Massa (kg), Calor específico (J/kg°C), Variação de temperatura (°C)";
            break;
        case "calor-latente":
            formulaHtml = "$Q = m \\cdot L$";
            variablesHtml = "Massa (kg), Calor latente (J/kg)";
            break;
        case "lei-lavoisier":
            formulaHtml = "$\\text{Massa dos Reagentes} = \\text{Massa dos Produtos}$";
            variablesHtml = "Massa dos Reagentes (g), Massa dos Produtos (g)";
            break;
        case "lei-raoult":
            formulaHtml = "$P = P_{pura} \\cdot X$";
            variablesHtml = "Pressão Pura (Pa), Fração Molar";
            break;
        case "lei-ideal-gases":
            formulaHtml = "$PV = nRT$";
            variablesHtml = "Pressão (Pa), Volume (L), Mols (n), Temperatura (K)";
            break;
        case "velocidade-reacao":
            formulaHtml = "$v = \\frac{C_{final} - C_{inicial}}{t}$";
            variablesHtml = "Concentração inicial (mol/L), Concentração final (mol/L), Tempo (s)";
            break;
        case "equacao-gases-ideais":
            formulaHtml = "$T = \\frac{PV}{nR}$";
            variablesHtml = "Pressão (P), Volume (V), Mols (n), Constante dos Gases (R), Temperatura (T)";
            break;
        case "lei-dalton":
            formulaHtml = "$P_{total} = P_1 + P_2 + ... + P_n$";
            variablesHtml = "Pressões Parciais (P1, P2, ..., Pn)";
            break;
        case "lei-henry":
            formulaHtml = "$C = k_H \\cdot P$";
            variablesHtml = "Concentração (C), Constante de Henry (k_H), Pressão (P)";
            break;
        case "clausius-clapeyron":
            formulaHtml = "$\\ln\\left(\\frac{P_2}{P_1}\\right) = \\frac{\\Delta H_{vap}}{R} \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$";
            variablesHtml = "Pressão Inicial (P1), Pressão Final (P2), Mudança de Entalpia de Vaporização (ΔH_{vap}), Temperatura Inicial (T1), Temperatura Final (T2), Constante dos Gases (R)";
            break;
        case "concentracao-massa":
            formulaHtml = "$C_m = \\frac{m_{soluto}}{V_{solução}}$";
            variablesHtml = "Massa do Soluto (m_soluto), Volume da Solução (V_solução)";
            break;
    }

    // Atualiza a exibição da fórmula em LaTeX
    formulaDisplay.innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;
    MathJax.typesetPromise();  // Reprocessa o MathJax para exibir corretamente o LaTeX

    // Gera os campos de entrada para as variáveis
    container.innerHTML = variablesHtml.split(", ").map((variable, index) =>
        `<input type="text" id="var${index}" placeholder="${variable}">`
    ).join('');

    // Atualiza instruções ou informações adicionais
    updateInstructions('quimica', formula, instructionsDiv);
}

// Função de cálculo para Química
function calcularQuimica() {
    const formula = document.getElementById("formula").value;
    const inputs = document.querySelectorAll("#variables-container input");
    const variables = Array.from(inputs).map(input => parseFloat(input.value.trim()));
    let resultado;

    if (!validateInputs(variables)) {
        alert("Entradas inválidas! Verifique suas variáveis.");
        return;
    }

    switch (formula) {
        case "numero-mols":
            resultado = calcularNumeroMols(variables);
            break;
        case "massa-molar":
            resultado = calcularMassaMolar(variables);
            break;
        case "densidade":
            resultado = calcularDensidade(variables);
            break;
        case "concentracao-molar":
            resultado = calcularConcentracaoMolar(variables);
            break;
        case "concentracao-comum":
            resultado = calcularConcentracaoComum(variables);
            break;
        case "mistura-solucoes":
            resultado = calcularMisturaSolucoes(variables);
            break;
        case "diluicao":
            resultado = calcularDiluicao(variables);
            break;
        case "massa-soluto":
            resultado = calcularMassaSoluto(variables);
            break;
        case "percentagem-massa":
            resultado = calcularPercentagemMassa(variables);
            break;
        case "constante-equilibrio":
            resultado = calcularConstanteEquilibrio(variables);
            break;
        case "calor-sensivel":
            resultado = calcularCalorSensivel(variables);
            break;
        case "calor-latente":
            resultado = calcularCalorLatente(variables);
            break;
        case "lei-lavoisier":
            resultado = calcularLeiLavoisier(variables);
            break;
        case "lei-raoult":
            resultado = calcularLeiRaoult(variables);
            break;
        case "lei-ideal-gases":
            resultado = calcularLeiGasesIdeais(variables);
            break;
        case "velocidade-reacao":
            resultado = calcularVelocidadeReacao(variables);
            break;
        case "equacao-gases-ideais":
            resultado = calcularEquacaoGasesIdeais(variables);
            break;
        case "lei-dalton":
            resultado = calcularLeiDalton(variables);
            break;
        case "lei-henry":
            resultado = calcularLeiHenry(variables);
            break;
        case "clausius-clapeyron":
            resultado = calcularClausiusClapeyron(variables);
            break;
        case "concentracao-massa":
            resultado = calcularConcentracaoMassa(variables);
            break;
    }

    // Exibe o resultado no local correto
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
}

// Função para validar entradas
function validateInputs(inputs) {
    return inputs.every(input => !isNaN(parseFloat(input)) && isFinite(input));
}

// Funções de cálculo para Química
function calcularNumeroMols(vars) {
    const [massa, massaMolar] = vars;
    return massa / massaMolar;
}

function calcularMassaMolar(vars) {
    const [massa, mol] = vars;
    return massa / mol;
}

function calcularDensidade(vars) {
    const [massa, volume] = vars;
    return massa / volume;
}

function calcularConcentracaoMolar(vars) {
    const [mol, volume] = vars;
    return mol / volume;
}

function calcularConcentracaoComum(vars) {
    const [massa, volume] = vars;
    return massa / volume;
}

function calcularMisturaSolucoes(vars) {
    const [c1, v1, c2, v2] = vars;
    return (c1 * v1 + c2 * v2) / (v1 + v2);
}

function calcularDiluicao(vars) {
    const [c1, v1, vf] = vars;
    return (c1 * v1) / vf;
}

function calcularMassaSoluto(vars) {
    const [concentracao, volume] = vars;
    return concentracao * volume;
}

function calcularPercentagemMassa(vars) {
    const [massaSoluto, massaTotal] = vars;
    return (massaSoluto / massaTotal) * 100;
}

function calcularConstanteEquilibrio(vars) {
    const [concentracaoA, coeficienteA, concentracaoB, coeficienteB, concentracaoC, coeficienteC, concentracaoD, coeficienteD] = vars;
    const produtos = Math.pow(concentracaoC, coeficienteC) * Math.pow(concentracaoD, coeficienteD);
    const reagentes = Math.pow(concentracaoA, coeficienteA) * Math.pow(concentracaoB, coeficienteB);
    return produtos / reagentes;
}

function calcularCalorSensivel(vars) {
    const [massa, calorEspecifico, deltaTemp] = vars;
    return massa * calorEspecifico * deltaTemp;
}

function calcularCalorLatente(vars) {
    const [massa, calorLatente] = vars;
    return massa * calorLatente;
}

function calcularLeiLavoisier(vars) {
    const [mReagentes, mProdutos] = vars;
    return mReagentes === mProdutos ? "Conservação de Massa Confirmada" : "Erro na Lei de Lavoisier";
}

function calcularLeiRaoult(vars) {
    const [pressaoPura, fracaoMolar] = vars;
    return pressaoPura * fracaoMolar;
}

function calcularLeiGasesIdeais(vars) {
    const [pressao, volume, mols, temperatura] = vars;
    const R = 8.314; // Constante dos Gases Ideais em J/(mol·K)
    return (pressao * volume) / (mols * R * temperatura);
}

function calcularVelocidadeReacao(vars) {
    const [concentracaoInicial, concentracaoFinal, tempo] = vars;
    return (concentracaoFinal - concentracaoInicial) / tempo;
}

function calcularEquacaoGasesIdeais(vars) {
    const [pressao, volume, mols, constanteGases] = vars;
    return (pressao * volume) / (mols * constanteGases);
}

function calcularLeiDalton(vars) {
    // Somar as pressões parciais fornecidas
    return vars.reduce((total, pressao) => total + pressao, 0);
}

function calcularLeiHenry(vars) {
    const [constanteHenry, pressao] = vars;
    return constanteHenry * pressao;
}

function calcularClausiusClapeyron(vars) {
    const [p1, p2, deltaHvap, t1, t2, R] = vars;
    return Math.log(p2 / p1) / (deltaHvap / R * (1 / t1 - 1 / t2));
}

function calcularConcentracaoMassa(vars) {
    const [massaSoluto, volumeSolucao] = vars;
    return massaSoluto / volumeSolucao;
}

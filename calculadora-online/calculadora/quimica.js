// Inicialização após o carregamento do DOM para Química
document.addEventListener("DOMContentLoaded", function () {
    // Apenas o ID 'formula' é necessário, removendo o desnecessário 'formula_quimica'
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
            formulaHtml = "n = m / M";
            variablesHtml = "Massa (g), Massa Molar (g/mol)";
            break;
        case "massa-molar":
            formulaHtml = "M = m / n";
            variablesHtml = "Massa (g), Mol (mol)";
            break;
        case "densidade":
            formulaHtml = "ρ = m / V";
            variablesHtml = "Massa (g), Volume (L)";
            break;
        case "concentracao-molar":
            formulaHtml = "C = n / V";
            variablesHtml = "Mol (mol), Volume (L)";
            break;
        case "concentracao-comum":
            formulaHtml = "C = m / V";
            variablesHtml = "Massa (g), Volume (L)";
            break;
        case "mistura-solucoes":
            formulaHtml = "C_f = (C1 * V1 + C2 * V2) / (V1 + V2)";
            variablesHtml = "Concentração1 (mol/L), Volume1 (L), Concentração2 (mol/L), Volume2 (L)";
            break;
        case "diluicao":
            formulaHtml = "C_f = (C_i * V_i) / V_f";
            variablesHtml = "Concentração inicial (mol/L), Volume inicial (L), Volume final (L)";
            break;
        case "massa-soluto":
            formulaHtml = "m = C * V";
            variablesHtml = "Concentração (mol/L), Volume (L)";
            break;
        case "percentagem-massa":
            formulaHtml = "%m = (m_soluto / m_total) * 100";
            variablesHtml = "Massa do Soluto (g), Massa Total (g)";
            break;
        case "constante-equilibrio":
            formulaHtml = "K = (C^c * D^d) / (A^a * B^b)";
            variablesHtml = "Concentração A, Coeficiente A, Concentração B, Coeficiente B, Concentração C, Coeficiente C, Concentração D, Coeficiente D";
            break;
        case "calor-sensivel":
            formulaHtml = "Q = m * c * ΔT";
            variablesHtml = "Massa (kg), Calor específico (J/kg°C), Variação de temperatura (°C)";
            break;
        case "calor-latente":
            formulaHtml = "Q = m * L";
            variablesHtml = "Massa (kg), Calor latente (J/kg)";
            break;
        case "lei-lavoisier":
            formulaHtml = "Massa dos Reagentes = Massa dos Produtos";
            variablesHtml = "Massa dos Reagentes (g), Massa dos Produtos (g)";
            break;
        case "lei-raoult":
            formulaHtml = "P = P_pura * X";
            variablesHtml = "Pressão Pura (Pa), Fração Molar";
            break;
        case "lei-ideal-gases":
            formulaHtml = "PV = nRT";
            variablesHtml = "Pressão (Pa), Volume (L), Mols (n), Temperatura (K)";
            break;
        case "velocidade-reacao":
            formulaHtml = "v = (C_final - C_inicial) / t";
            variablesHtml = "Concentração inicial (mol/L), Concentração final (mol/L), Tempo (s)";
            break;
        case "equacao-gases-ideais":
            formulaHtml = "T = PV / nR";
            variablesHtml = "Pressão (P), Volume (V), Mols (n), Constante dos Gases (R), Temperatura (T)";
            break;
        case "lei-dalton":
            formulaHtml = "P_total = P1 + P2 + ... + Pn";
            variablesHtml = "Pressões Parciais (P1, P2, ..., Pn), Pressão Total (P_total)";
            break;
        case "lei-henry":
            formulaHtml = "C = k_H * P";
            variablesHtml = "Concentração (C), Constante de Henry (k_H), Pressão (P)";
            break;
        case "clausius-clapeyron":
            formulaHtml = "ln(P2 / P1) = ΔH_{vap} / R * (1/T1 - 1/T2)";
            variablesHtml = "Pressão Inicial (P1), Pressão Final (P2), Mudança de Entalpia de Vaporização (ΔH_{vap}), Temperatura Inicial (T1), Temperatura Final (T2), Constante dos Gases (R)";
            break;
        case "concentracao-massa":
            formulaHtml = "C_m = m_soluto / V_solução";
            variablesHtml = "Massa do Soluto (m_soluto), Volume da Solução (V_solução), Concentração em Massa (C_m)";
            break;
    }

    // Atualiza a exibição da fórmula selecionada
    formulaDisplay.innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;
    container.innerHTML = `<input type="text" id="variables_quimica" placeholder="Insira as variáveis: ${variablesHtml}">`;

    updateInstructions('quimica', formula, instructionsDiv);
}

// Função de cálculo para Química
function calcularQuimica() {
    const formula = document.getElementById("formula").value; // Corrigido para 'formula'
    const variables = document.getElementById("variables_quimica").value.split(",").map(v => v.trim());
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

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

// Função para validar entradas
function validateInputs(inputs) {
    return inputs.every(input => !isNaN(parseFloat(input)) && isFinite(input));
}

// Funções de cálculo para Química
function calcularNumeroMols(vars) {
    const [massa, massaMolar] = vars.map(parseFloat);
    return massa / massaMolar;
}

function calcularMassaMolar(vars) {
    const [massa, mol] = vars.map(parseFloat);
    return massa / mol;
}

function calcularDensidade(vars) {
    const [massa, volume] = vars.map(parseFloat);
    return massa / volume;
}

function calcularConcentracaoMolar(vars) {
    const [mol, volume] = vars.map(parseFloat);
    return mol / volume;
}

function calcularConcentracaoComum(vars) {
    const [massa, volume] = vars.map(parseFloat);
    return massa / volume;
}

function calcularMisturaSolucoes(vars) {
    const [c1, v1, c2, v2] = vars.map(parseFloat);
    return (c1 * v1 + c2 * v2) / (v1 + v2);
}

function calcularDiluicao(vars) {
    const [c1, v1, vf] = vars.map(parseFloat);
    return (c1 * v1) / vf;
}

function calcularMassaSoluto(vars) {
    const [concentracao, volume] = vars.map(parseFloat);
    return concentracao * volume;
}

function calcularPercentagemMassa(vars) {
    const [massaSoluto, massaTotal] = vars.map(parseFloat);
    return (massaSoluto / massaTotal) * 100;
}

function calcularConstanteEquilibrio(vars) {
    const [concentracaoA, coeficienteA, concentracaoB, coeficienteB, concentracaoC, coeficienteC, concentracaoD, coeficienteD] = vars.map(parseFloat);
    const produtos = Math.pow(concentracaoC, coeficienteC) * Math.pow(concentracaoD, coeficienteD);
    const reagentes = Math.pow(concentracaoA, coeficienteA) * Math.pow(concentracaoB, coeficienteB);
    return produtos / reagentes;
}

function calcularCalorSensivel(vars) {
    const [massa, calorEspecifico, deltaTemp] = vars.map(parseFloat);
    return massa * calorEspecifico * deltaTemp;
}

function calcularCalorLatente(vars) {
    const [massa, calorLatente] = vars.map(parseFloat);
    return massa * calorLatente;
}

function calcularLeiLavoisier(vars) {
    const [mReagentes, mProdutos] = vars.map(parseFloat);
    return mReagentes === mProdutos ? "Conservação de Massa Confirmada" : "Erro na Lei de Lavoisier";
}

function calcularLeiRaoult(vars) {
    const [pressaoPura, fracaoMolar] = vars.map(parseFloat);
    return pressaoPura * fracaoMolar;
}

function calcularLeiGasesIdeais(vars) {
    const [pressao, volume, mols, temperatura] = vars.map(parseFloat);
    const R = 8.314; // Constante dos Gases Ideais em J/(mol·K)
    return (pressao * volume) / (mols * R * temperatura);
}

function calcularVelocidadeReacao(vars) {
    const [concentracaoInicial, concentracaoFinal, tempo] = vars.map(parseFloat);
    return (concentracaoInicial - concentracaoFinal) / tempo;
}

function calcularEquacaoGasesIdeais(vars) {
    const [pressao, volume, mols, constanteGases] = vars.map(parseFloat);
    return (pressao * volume) / (mols * constanteGases);
}

function calcularLeiDalton(vars) {
    const pressaoParcial = vars.map(parseFloat);
    return pressaoParcial.reduce((total, p) => total + p, 0);
}

function calcularLeiHenry(vars) {
    const [concentracao, constanteHenry, pressao] = vars.map(parseFloat);
    return constanteHenry * pressao;
}

function calcularClausiusClapeyron(vars) {
    const [p1, p2, deltaHvap, t1, t2, R] = vars.map(parseFloat);
    return Math.log(p2 / p1) / (deltaHvap / R * (1 / t1 - 1 / t2));
}

function calcularConcentracaoMassa(vars) {
    const [massaSoluto, volumeSolucao] = vars.map(parseFloat);
    return massaSoluto / volumeSolucao;
}

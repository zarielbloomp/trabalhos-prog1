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
            variablesHtml = "Pressões Parciais (P1, P 2, ..., Pn)";
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

    // Gera os campos de entrada para as variáveis com padding de 15px
    container.innerHTML = variablesHtml.split(", ").map((variable, index) =>
        `<div style="padding: 15px; margin-bottom: 15px;"><input type="text" id="var${index}" placeholder="${variable}"></div>`
    ).join('');

    // Atualiza instruções ou informações adicionais
    updateInstructions('quimica', formula, instructionsDiv);
}

// Função de cálculo para Química
function calcularQuimica() {
    const formula = document.getElementById("formula").value;
    const inputs = document.querySelectorAll("#variables-container input");
    const variables = Array.from(inputs).map(input => parseFloat(input.value.replace(",", ".")));
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
        default:
            alert("Fórmula não encontrada.");
            return;
    }

    // Exibe o resultado
    document.getElementById("resultado").textContent = `Resultado: ${resultado.toFixed( 2)}`;
}

// Função de validação das entradas
function validateInputs(variables) {
    return variables.every(value => !isNaN(value) && value !== null && value !== "");
}

// Funções de cálculo para cada fórmula

function calcularNumeroMols([massa, massaMolar]) {
    return parseFloat(massa) / parseFloat(massaMolar);
}

function calcularMassaMolar([massa, mols]) {
    return parseFloat(massa) / parseFloat(mols);
}

function calcularDensidade([massa, volume]) {
    return parseFloat(massa) / parseFloat(volume);
}

function calcularConcentracaoMolar([mols, volume]) {
    return parseFloat(mols) / parseFloat(volume);
}

function calcularConcentracaoComum([massa, volume]) {
    return parseFloat(massa) / parseFloat(volume);
}

function calcularMisturaSolucoes([C1, V1, C2, V2]) {
    return (parseFloat(C1) * parseFloat(V1) + parseFloat(C2) * parseFloat(V2)) / (parseFloat(V1) + parseFloat(V2));
}

function calcularDiluicao([Ci, Vi, Vf]) {
    return (parseFloat(Ci) * parseFloat(Vi)) / parseFloat(Vf);
}

function calcularMassaSoluto([concentracao, volume]) {
    return parseFloat(concentracao) * parseFloat(volume);
}

function calcularPercentagemMassa([massaSoluto, massaTotal]) {
    return (parseFloat(massaSoluto) / parseFloat(massaTotal)) * 100;
}

function calcularConstanteEquilibrio([Ca, a, Cb, b, Cc, c, Cd, d]) {
    return (Math.pow(parseFloat(Cc), parseFloat(c)) * Math.pow(parseFloat(Cd), parseFloat(d))) / (Math.pow(parseFloat(Ca), parseFloat(a)) * Math.pow(parseFloat(Cb), parseFloat(b)));
}

function calcularCalorSensivel([massa, calorEspecifico, deltaT]) {
    return parseFloat(massa) * parseFloat(calorEspecifico) * parseFloat(deltaT);
}

function calcularCalorLatente([massa, calorLatente]) {
    return parseFloat(massa) * parseFloat(calorLatente);
}

function calcularLeiRaoult([pressaoPura, fracaoMolar]) {
    return parseFloat(pressaoPura) * parseFloat(fracaoMolar);
}

function calcularLeiGasesIdeais([pressao, volume, mols, temperatura]) {
    const R = 8.314; // Constante dos gases
    return (parseFloat(pressao) * parseFloat(volume)) / (parseFloat(mols) * R * parseFloat(temperatura));
}

function calcularVelocidadeReacao([concentracaoInicial, concentracaoFinal, tempo]) {
    return (parseFloat(concentracaoFinal) - parseFloat(concentracaoInicial)) / parseFloat(tempo);
}

function calcularEquacaoGasesIdeais([pressao, volume, mols, constante, temperatura]) {
    return (parseFloat(pressao) * parseFloat(volume)) / (parseFloat(mols) * parseFloat(constante) * parseFloat(temperatura));
}

function calcularLeiDalton(pressaoParcial) {
    return pressaoParcial.reduce((acc, curr) => acc + parseFloat(curr), 0);
}

function calcularLeiHenry([concentracao, constanteHenry, pressao]) {
    return parseFloat(constanteHenry) * parseFloat(pressao);
}

function calcularClausiusClapeyron([P1, P2, deltaHvap, T1, T2, R]) {
    return Math.log(parseFloat(P2) / parseFloat(P1)) === (parseFloat(deltaHvap) / parseFloat(R)) * (1 / parseFloat(T1) - 1 / parseFloat(T2));
}

function calcularConcentracaoMassa([massaSoluto, volumeSolucao]) {
    return parseFloat(massaSoluto) / parseFloat(volumeSolucao);
}
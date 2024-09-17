// Inicialização após o carregamento do DOM para Química
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formula").addEventListener("change", updateVariablesQuimica);
});

// Função para atualizar as variáveis com base na fórmula de Química selecionada
function updateVariablesQuimica() {
    const formula = document.getElementById("formula").value;
    const container = document.getElementById("variables-container");
    container.innerHTML = "";
    let variablesHtml = "";

    switch (formula) {
        case "numero-mols":
            variablesHtml = "Massa (g), Massa Molar (g/mol)";
            break;
        case "massa-molar":
            variablesHtml = "Massa (g), Mol (mol)";
            break;
        case "densidade":
            variablesHtml = "Massa (g), Volume (L)";
            break;
        case "concentracao-molar":
            variablesHtml = "Mol (mol), Volume (L)";
            break;
        case "concentracao-comum":
            variablesHtml = "Massa (g), Volume (L)";
            break;
        case "mistura-solucoes":
            variablesHtml = "Concentração1 (mol/L), Volume1 (L), Concentração2 (mol/L), Volume2 (L)";
            break;
        case "diluicao":
            variablesHtml = "Concentração inicial (mol/L), Volume inicial (L), Volume final (L)";
            break;
        case "ph":
            variablesHtml = "Concentração H+ (mol/L)";
            break;
        case "poh":
            variablesHtml = "Concentração OH- (mol/L)";
            break;
        case "constante-equilibrio":
            variablesHtml = "Concentração A, Coeficiente A, Concentração B, Coeficiente B, Concentração C, Coeficiente C, Concentração D, Coeficiente D";
            break;
        case "calor-sensivel":
            variablesHtml = "Massa (kg), Calor específico (J/kg°C), Variação de temperatura (°C)";
            break;
        case "calor-latente":
            variablesHtml = "Massa (kg), Calor latente (J/kg)";
            break;
        case "lei-lavoisier":
            variablesHtml = "Massa dos Reagentes (g), Massa dos Produtos (g)";
            break;
        case "lei-raoult":
            variablesHtml = "Pressão Pura (Pa), Fração Molar";
            break;
        case "lei-ideal-gases":
            variablesHtml = "Pressão (Pa), Volume (L), Mols (n), Temperatura (K)";
            break;
        case "velocidade-reacao":
            variablesHtml = "Concentração inicial (mol/L), Concentração final (mol/L), Tempo (s)";
            break;
    }

    container.innerHTML = `<input type="text" id="variables_quimica" placeholder="Insira as variáveis: ${variablesHtml}">`;
}

// Função de cálculo para Química
function calcularQuimica() {
    const formula = document.getElementById("formula").value;
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
        case "ph":
            resultado = calcularPh(variables);
            break;
        case "poh":
            resultado = calcularPoh(variables);
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
    }

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
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

function calcularPh(vars) {
    const [h] = vars.map(parseFloat);
    return -Math.log10(h);
}

function calcularPoh(vars) {
    const [oh] = vars.map(parseFloat);
    return -Math.log10(oh);
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
    const [pressao, volume, mols, temp] = vars.map(parseFloat);
    const R = 8.314;
    return (pressao * volume) / (mols * R * temp);
}

function calcularVelocidadeReacao(vars) {
    const [concentracaoInicial, concentracaoFinal, tempo] = vars.map(parseFloat);
    return (concentracaoFinal - concentracaoInicial) / tempo;
}

// Função para validar entradas
function validateInputs(variables) {
    for (const variable of variables) {
        if (isNaN(variable) || variable === "") {
            return false;
        }
    }
    return true;
}

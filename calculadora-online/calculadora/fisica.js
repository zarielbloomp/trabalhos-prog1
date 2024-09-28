// Inicialização após o carregamento do DOM para Física
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formula_fisica").addEventListener("change", updateVariablesFisica);
});

// Função para atualizar as variáveis com base na fórmula de Física selecionada
function updateVariablesFisica() {
    const formula = document.getElementById("formula_fisica").value;
    const container = document.getElementById("variables-container_fisica");
    const formulaDisplay = document.getElementById("fisica-formula-display");
    container.innerHTML = "";
    let variables = [];
    let formulaHtml = "";

    switch (formula) {
        case "velocidade":
            formulaHtml = "\\( v = \\frac{d}{t} \\)";
            variables = ["Distância (m)", "Tempo (s)"];
            break;
        case "trabalho":
            formulaHtml = "\\( T = F \\cdot d \\)";
            variables = ["Força (N)", "Distância (m)"];
            break;
        case "movimento-linear":
            formulaHtml = "\\( p = m \\cdot v \\)";
            variables = ["Massa (kg)", "Velocidade (m/s)"];
            break;
        case "forca":
            formulaHtml = "\\( F = m \\cdot a \\)";
            variables = ["Massa (kg)", "Aceleração (m/s²)"];
            break;
        case "energia-cinetica":
            formulaHtml = "\\( E_c = \\frac{1}{2} \\cdot m \\cdot v^2 \\)";
            variables = ["Massa (kg)", "Velocidade (m/s)"];
            break;
        case "impulso":
            formulaHtml = "\\( I = F \\cdot t \\)";
            variables = ["Força (N)", "Tempo (s)"];
            break;
        case "potencia":
            formulaHtml = "\\( P = \\frac{T}{t} \\)";
            variables = ["Trabalho (J)", "Tempo (s)"];
            break;
        case "aceleracao":
            formulaHtml = "\\( a = \\frac{v_f - v_i}{t} \\)";
            variables = ["Velocidade final (m/s)", "Velocidade inicial (m/s)", "Tempo (s)"];
            break;
        case "momento-linear":
            formulaHtml = "\\( p = m \\cdot v \\)";
            variables = ["Massa (kg)", "Velocidade (m/s)"];
            break;
        case "pressao":
            formulaHtml = "\\( P = \\frac{F}{A} \\)";
            variables = ["Força (N)", "Área (m²)"];
            break;
        case "frequencia-ondas":
            formulaHtml = "\\( f = \\frac{v}{\\lambda} \\)";
            variables = ["Velocidade (m/s)", "Comprimento de onda (m)"];
            break;
        case "lei-hooke":
            formulaHtml = "\\( F = k \\cdot x \\)";
            variables = ["Constante Elástica (k)", "Deformação (x)"];
            break;
        case "resistencia-eletrica":
            formulaHtml = "\\( R = \\frac{V}{I} \\)";
            variables = ["Tensão (V)", "Corrente (A)"];
            break;
        case "movimento-uniforme":
            formulaHtml = "\\( S = S_0 + v \\cdot t \\)";
            variables = ["Posição inicial (S0)", "Velocidade (v)", "Tempo (t)"];
            break;
        case "movimento-uniformemente-variado":
            formulaHtml = "\\( S = S_0 + v_0 \\cdot t + \\frac{1}{2} \\cdot a \\cdot t^2 \\)";
            variables = ["Posição inicial (S0)", "Velocidade inicial (v0)", "Aceleração (a)", "Tempo (t)"];
            break;
        case "torque":
            formulaHtml = "\\( \\tau = F \\cdot r \\cdot \\sin(\\theta) \\)";
            variables = ["Força (N)", "Raio (m)", "Ângulo (θ)"];
            break;
        case "energia-mecanica":
            formulaHtml = "\\( E_m = E_p + E_c \\)";
            variables = ["Energia Potencial (Ep)", "Energia Cinética (Ec)"];
            break;
        case "lei-gravitacao":
            formulaHtml = "\\( F = G \\cdot \\frac{m_1 \\cdot m_2}{r^2} \\)";
            variables = ["Massa 1 (kg)", "Massa 2 (kg)", "Distância (m)"];
            break;
        case "energia-potencial-gravitacional":
            formulaHtml = "\\( E_p = m \\cdot g \\cdot h \\)";
            variables = ["Massa (kg)", "Gravidade (m/s²)", "Altura (m)"];
            break;
        case "energia-potencial-elastica":
            formulaHtml = "\\( E_{pe} = \\frac{1}{2} \\cdot k \\cdot x^2 \\)";
            variables = ["Constante Elástica (k)", "Deformação (m)"];
            break;
        case "capacitancia":
            formulaHtml = "\\( C = \\frac{Q}{V} \\)";
            variables = ["Carga (C)", "Tensão (V)"];
            break;
        case "einstein-energia":
            formulaHtml = "\\( E = m \\cdot c^2 \\)";
            variables = ["Massa (kg)"];
            break;
        case "velocidade-onda":
            formulaHtml = "\\( v = \\sqrt{\\frac{T}{\\rho}} \\)";
            variables = ["Tensão (N)", "Densidade linear (kg/m)"];
            break;
    }

    // Atualiza a exibição da fórmula selecionada
    formulaDisplay.innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;
    
    // Gerar campos de entrada de variáveis de acordo com a fórmula selecionada
    container.innerHTML = variables.map((variable, index) => 
        `<input type="text" id="var${index}" placeholder="${variable}">`
    ).join('');
    
    // Re-renderizar fórmulas matemáticas com MathJax
    MathJax.typesetPromise();
}

// Função de cálculo para Física
function calcularFisica() {
    const formula = document.getElementById("formula_fisica").value;
    const container = document.getElementById("variables-container_fisica");
    const inputs = container.querySelectorAll("input");
    const variables = Array.from(inputs).map(input => parseFloat(input.value.trim()));
    let resultado;

    if (!validateInputs(variables)) {
        alert("Entradas inválidas! Verifique suas variáveis.");
        return;
    }

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
        case "movimento-uniforme":
            resultado = calcularMovimentoUniforme(variables);
            break;
        case "movimento-uniformemente-variado":
            resultado = calcularMovimentoUniformementeVariado(variables);
            break;
        case "energia-mecanica":
            resultado = calcularEnergiaMecanica(variables);
            break;
        case "lei-gravitacao":
            resultado = calcularLeiGravitacao(variables);
            break;
        case "energia-potencial-gravitacional":
            resultado = calcularEnergiaPotencialGravitacional(variables);
            break;
        case "energia-potencial-elastica":
            resultado = calcularEnergiaPotencialElastica(variables);
            break;
        case "capacitancia":
            resultado = calcularCapacitancia(variables);
            break;
        case "einstein-energia":
            resultado = calcularEinsteinEnergia(variables);
            break;
        case "velocidade-onda":
            resultado = calcularVelocidadeOnda(variables);
            break;
    }

    document.getElementById("resultado-fisica").innerHTML = "Resultado: " + resultado;
}

// Funções de cálculo para Física
function calcularVelocidadeMedia(vars) {
    const [distancia, tempo] = vars.map(parseFloat);
    return distancia / tempo;
}

function calcularTrabalho(vars) {
    const [forca, distancia] = vars.map(parseFloat);
    return forca * distancia;
}

function calcularForca(vars) {
    const [massa, aceleracao] = vars.map(parseFloat);
    return massa * aceleracao;
}

function calcularEnergiaCinetica(vars) {
    const [massa, velocidade] = vars.map(parseFloat);
    return 0.5 * massa * velocidade ** 2;
}

function calcularImpulso(vars) {
    const [forca, tempo] = vars.map(parseFloat);
    return forca * tempo;
}

function calcularPotencia(vars) {
    const [trabalho, tempo] = vars.map(parseFloat);
    return trabalho / tempo;
}

function calcularAceleracao(vars) {
    const [vFinal, vInicial, tempo] = vars.map(parseFloat);
    return (vFinal - vInicial) / tempo;
}

function calcularMomentoLinear(vars) {
    const [massa, velocidade] = vars.map(parseFloat);
    return massa * velocidade;
}

function calcularPressao(vars) {
    const [forca, area] = vars.map(parseFloat);
    return forca / area;
}

function calcularFrequenciaOndas(vars) {
    const [velocidade, comprimento] = vars.map(parseFloat);
    return velocidade / comprimento;
}

function calcularLeiHooke(vars) {
    const [constanteElastica, deformacao] = vars.map(parseFloat);
    return constanteElastica * deformacao;
}

function calcularResistenciaEletrica(vars) {
    const [tensao, corrente] = vars.map(parseFloat);
    return tensao / corrente;
}

function calcularMovimentoUniforme(vars) {
    const [posInicial, velocidade, tempo] = vars.map(parseFloat);
    return posInicial + velocidade * tempo;
}

function calcularMovimentoUniformementeVariado(vars) {
    const [posInicial, velInicial, aceleracao, tempo] = vars.map(parseFloat);
    return posInicial + velInicial * tempo + 0.5 * aceleracao * (tempo ** 2);
}

function calcularEnergiaMecanica(vars) {
    const [energiaPotencial, energiaCinetica] = vars.map(parseFloat);
    return energiaPotencial + energiaCinetica;
}

function calcularLeiGravitacao(vars) {
    const [massa1, massa2, distancia] = vars.map(parseFloat);
    const G = 6.67430e-11; // Constante da gravitação universal em m³/kg/s²
    return G * (massa1 * massa2) / (distancia ** 2);
}

function calcularEnergiaPotencialGravitacional(vars) {
    const [massa, gravidade, altura] = vars.map(parseFloat);
    return massa * gravidade * altura;
}

function calcularEnergiaPotencialElastica(vars) {
    const [constanteElastica, deformacao] = vars.map(parseFloat);
    return 0.5 * constanteElastica * (deformacao ** 2);
}

function calcularCapacitancia(vars) {
    const [carga, tensao] = vars.map(parseFloat);
    return carga / tensao;
}

const velocidadeLuz = 299792458; // m/s

function calcularEinsteinEnergia(vars) {
    const [massa] = vars.map(parseFloat);
    return massa * (velocidadeLuz ** 2);
}

function calcularVelocidadeOnda(vars) {
    const [tensao, densidadeLinear] = vars.map(parseFloat);
    return Math.sqrt(tensao / densidadeLinear);
}

// Função para validar entradas
function validateInputs(variables) {
    return variables.every(variable => !isNaN(variable) && variable !== null);
}

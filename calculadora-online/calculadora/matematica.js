// Inicialização após o carregamento do DOM para Matemática
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formula_matematica").addEventListener("change", updateVariablesMatematica);
});

// Função para atualizar as variáveis com base na fórmula de Matemática selecionada
function updateVariablesMatematica() {
    const formula = document.getElementById("formula_matematica").value;
    const container = document.getElementById("variables-container_matematica");
    container.innerHTML = "";
    let variablesHtml = "";

    switch (formula) {
        case "baskara":
            variablesHtml = "x = (-b ± √Δ) / 2a";
            break;
        case "espiral-arquimedes":
            variablesHtml = "Constante a, Constante b, Ângulo θ (rad)";
            break;
        case "area-circulo":
            variablesHtml = "Raio (r)";
            break;
        case "area-retangulo":
            variablesHtml = "Base (b), Altura (h)";
            break;
        case "area-triangulo":
            variablesHtml = "Base (b), Altura (h)";
            break;
        case "volume-prisma":
            variablesHtml = "Área da base, Altura (h)";
            break;
        case "volume-piramide":
            variablesHtml = "Área da base, Altura (h)";
            break;
        case "volume-tronco-piramide":
            variablesHtml = "Área da base maior, Área da base menor, Altura (h)";
            break;
        case "volume-cilindro":
            variablesHtml = "Raio da base (r), Altura (h)";
            break;
        case "volume-esfera":
            variablesHtml = "Raio (r)";
            break;
    }

    container.innerHTML = `<input type="text" id="variables_matematica" placeholder="Insira as variáveis: ${variablesHtml}">`;
}

// Função de cálculo para Matemática
function calcularMatematica() {
    const formula = document.getElementById("formula_matematica").value;
    const variables = document.getElementById("variables_matematica").value.split(",").map(v => v.trim());
    let resultado;

    if (!validateInputs(variables)) {
        alert("Entradas inválidas! Verifique suas variáveis.");
        return;
    }

    switch (formula) {
        case "baskara":
            resultado = calcularBaskara(variables);
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
        case "volume-tronco-piramide":
            resultado = calcularVolumeTroncoPiramide(variables);
            break;
        case "volume-cilindro":
            resultado = calcularVolumeCilindro(variables);
            break;
        case "volume-esfera":
            resultado = calcularVolumeEsfera(variables);
            break;
    }

    document.getElementById("resultado-matematica").innerHTML = "Resultado: " + resultado;
}

// Funções de cálculo para Matemática
function calcularBaskara(vars) {
    const [a, b, c] = vars.map(parseFloat);
    const delta = b ** 2 - 4 * a * c;

    let resultado;
    
    if (delta < 0) {
        resultado = "Não existem raízes reais";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        resultado = `Raiz única: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultado = `x1 = ${x1}, x2 = ${x2}`;
    }

    return resultado;
}

function calcularEspiralArquimedes(vars) {
    const [a, b, theta] = vars.map(parseFloat);
    const r = a + b * theta;
    return `Distância radial r = ${r}`;
}

function calcularAreaCirculo(vars) {
    const [raio] = vars.map(parseFloat);
    return Math.PI * raio ** 2;
}

function calcularAreaRetangulo(vars) {
    const [base, altura] = vars.map(parseFloat);
    return base * altura;
}

function calcularAreaTriangulo(vars) {
    const [base, altura] = vars.map(parseFloat);
    return (base * altura) / 2;
}

function calcularVolumePrisma(vars) {
    const [areaBase, altura] = vars.map(parseFloat);
    return areaBase * altura;
}

function calcularVolumePiramide(vars) {
    const [areaBase, altura] = vars.map(parseFloat);
    return (areaBase * altura) / 3;
}

function calcularVolumeTroncoPiramide(vars) {
    const [areaBaseMaior, areaBaseMenor, altura] = vars.map(parseFloat);
    return (altura / 3) * (areaBaseMaior + areaBaseMenor + Math.sqrt(areaBaseMaior * areaBaseMenor));
}

// Validação de entradas
function validateInputs(variables) {
    for (const variable of variables) {
        if (isNaN(variable) || variable === "") {
            return false;
        }
    }
    return true;
}

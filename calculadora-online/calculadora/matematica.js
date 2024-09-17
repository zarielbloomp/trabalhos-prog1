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
            variablesHtml = "Coeficiente a, Coeficiente b, Coeficiente c";
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
            variablesHtml = "Área da base (Ab), Altura (h)";
            break;
        case "volume-piramide":
            variablesHtml = "Área da base (Ab), Altura (h)";
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
        case "teorema-pitagoras":
            variablesHtml = "Cateto a, Cateto b";
            break;
        case "progressao-aritmetica":
            variablesHtml = "Termo inicial (A1), Razão (r), Termo desejado (n)";
            break;
        case "progressao-geometrica":
            variablesHtml = "Termo inicial (A1), Razão (q), Termo desejado (n)";
            break;
        case "permutacao":
            variablesHtml = "Total de elementos (n)";
            break;
        case "combinacao":
            variablesHtml = "Total de elementos (n), Elementos a escolher (r)";
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
        case "teorema-pitagoras":
            resultado = calcularPitagoras(variables);
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
    }

    document.getElementById("resultado-matematica").innerHTML = "Resultado: " + resultado;
}

// Funções de cálculo para Matemática
function calcularBaskara(vars) {
    const [a, b, c] = vars.map(parseFloat);
    const delta = b ** 2 - 4 * a * c;

    if (delta < 0) {
        return "Não existem raízes reais";
    } else if (delta === 0) {
        const x = -b / (2 * a);
        return `Raiz única: x = ${x}`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `x1 = ${x1}, x2 = ${x2}`;
    }
}

function calcularEspiralArquimedes(vars) {
    const [a, b, theta] = vars.map(parseFloat);
    return a + b * theta;
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

function calcularVolumeCilindro(vars) {
    const [raio, altura] = vars.map(parseFloat);
    return Math.PI * raio ** 2 * altura;
}

function calcularVolumeEsfera(vars) {
    const [raio] = vars.map(parseFloat);
    return (4 / 3) * Math.PI * raio ** 3;
}

function calcularPitagoras(vars) {
    const [catetoA, catetoB] = vars.map(parseFloat);
    return Math.sqrt(catetoA ** 2 + catetoB ** 2);
}

function calcularProgressaoAritmetica(vars) {
    const [a1, razao, n] = vars.map(parseFloat);
    return a1 + (n - 1) * razao;
}

function calcularProgressaoGeometrica(vars) {
    const [a1, razao, n] = vars.map(parseFloat);
    return a1 * razao ** (n - 1);
}

function calcularPermutacao(vars) {
    const [n] = vars.map(parseFloat);
    return fatorial(n);
}

function calcularCombinacao(vars) {
    const [n, r] = vars.map(parseFloat);
    return fatorial(n) / (fatorial(r) * fatorial(n - r));
}

// Função auxiliar para calcular fatorial
function fatorial(num) {
    if (num === 0 || num === 1) return 1;
    return Array.from({ length: num }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1);
}

// Validação de entradas
function validateInputs(variables) {
    return variables.every(variable => !isNaN(variable) && variable !== "");
}

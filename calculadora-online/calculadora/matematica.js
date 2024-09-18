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
    let variablesHtml = "";
    let formulaHtml = "";

    

    switch (formula) {
        case "baskara":
            formulaHtml = "x = (-b ± √(b² - 4ac)) / (2a)";
            variablesHtml = "Coeficiente a, Coeficiente b, Coeficiente c";
            break;
        case "espiral-arquimedes":
            formulaHtml = "r(θ) = a + bθ";
            variablesHtml = "Constante a, Constante b, Ângulo θ (rad)";
            break;
        case "area-circulo":
            formulaHtml = "A = πr²";
            variablesHtml = "Raio (r)";
            break;
        case "area-retangulo":
            formulaHtml = "A = b * h";
            variablesHtml = "Base (b), Altura (h)";
            break;
        case "area-triangulo":
            formulaHtml = "A = (b * h) / 2";
            variablesHtml = "Base (b), Altura (h)";
            break;
        case "volume-prisma":
            formulaHtml = "V = Ab * h";
            variablesHtml = "Área da base (Ab), Altura (h)";
            break;
        case "volume-piramide":
            formulaHtml = "V = (Ab * h) / 3";
            variablesHtml = "Área da base (Ab), Altura (h)";
            break;
        case "volume-tronco-piramide":
            formulaHtml = "V = (h / 3) * (Ab_maior + Ab_menor + √(Ab_maior * Ab_menor))";
            variablesHtml = "Área da base maior, Área da base menor, Altura (h)";
            break;
        case "volume-cilindro":
            formulaHtml = "V = πr²h";
            variablesHtml = "Raio da base (r), Altura (h)";
            break;
        case "volume-esfera":
            formulaHtml = "V = (4 / 3) * πr³";
            variablesHtml = "Raio (r)";
            break;
        case "teorema-pitagoras":
            formulaHtml = "c = √(a² + b²)";
            variablesHtml = "Cateto a, Cateto b";
            break;
        case "progressao-aritmetica":
            formulaHtml = "An = A1 + (n - 1) * r";
            variablesHtml = "Termo inicial (A1), Razão (r), Termo desejado (n)";
            break;
        case "progressao-geometrica":
            formulaHtml = "An = A1 * q^(n - 1)";
            variablesHtml = "Termo inicial (A1), Razão (q), Termo desejado (n)";
            break;
        case "permutacao":
            formulaHtml = "P(n) = n!";
            variablesHtml = "Total de elementos (n)";
            break;
        case "combinacao":
            formulaHtml = "C(n, r) = n! / (r! * (n - r)!)";
            variablesHtml = "Total de elementos (n), Elementos a escolher (r)";
            break;
        case "lei-dos-senos":
            formulaHtml = "a / sin(A) = b / sin(B) = c / sin(C)";
            variablesHtml = "Lados a, b, c e ângulos A, B, C";
            break;
        case "lei-dos-cosseos":
            formulaHtml = "c² = a² + b² - 2ab * cos(C)";
            variablesHtml = "Lados a, b, c e ângulo C";
            break;
        case "area-trapezio":
            formulaHtml = "A = ((B + b) * h) / 2";
            variablesHtml = "Base maior (B), Base menor (b), Altura (h)";
            break;
        case "area-paralelogramo":
            formulaHtml = "A = b * h";
            variablesHtml = "Base (b), Altura (h)";
            break;
        case "formula-euler":
            formulaHtml = "V - E + F = 2";
            variablesHtml = "Vértices (V), Arestas (E), Faces (F)";
            break;
    }

    // Atualiza a exibição da fórmula selecionada
    formulaDisplay.innerHTML = `<strong>Fórmula:</strong> ${formulaHtml}`;
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
        case "lei-dos-senos":
            resultado = calcularLeiDosSenos(variables);
            break;
        case "lei-dos-cosseos":
            resultado = calcularLeiDosCossenos(variables);
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
    }

    document.getElementById("resultado-matematica").innerHTML = "Resultado: " + resultado;
}

// Funções de cálculo para Matemática
const PI = Math.PI; // Constante pi
const E = Math.E; // Constante e

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

function calcularLeiDosSenos(vars) {
    const [a, b, c, A, B, C] = vars.map(parseFloat);
    
    if (A && B && !C) {
        C = Math.asin((c * Math.sin(A * Math.PI / 180)) / a) * (180 / Math.PI);
        return `O ângulo C é ${C.toFixed(2)} graus.`;
    } else if (B && C && !A) {
        A = Math.asin((a * Math.sin(B * Math.PI / 180)) / b) * (180 / Math.PI);
        return `O ângulo A é ${A.toFixed(2)} graus.`;
    } else if (A && C && !B) {
        B = Math.asin((b * Math.sin(A * Math.PI / 180)) / a) * (180 / Math.PI);
        return `O ângulo B é ${B.toFixed(2)} graus.`;
    } else if (a && b && C) {
        const A = Math.asin((a * Math.sin(C * Math.PI / 180)) / b) * (180 / Math.PI);
        return `O ângulo A é ${A.toFixed(2)} graus.`;
    } else if (b && c && A) {
        const B = Math.asin((b * Math.sin(A * Math.PI / 180)) / c) * (180 / Math.PI);
        return `O ângulo B é ${B.toFixed(2)} graus.`;
    } else if (a && c && B) {
        const C = Math.asin((c * Math.sin(B * Math.PI / 180)) / a) * (180 / Math.PI);
        return `O ângulo C é ${C.toFixed(2)} graus.`;
    } else {
        return 'Você precisa fornecer duas variáveis conhecidas para encontrar a terceira.';
    }
}



function calcularLeiDosCossenos(vars) {
    const [a, b, c, C] = vars.map(parseFloat);
    
    if (C) {
        // Cálculo para encontrar o lado c
        c = Math.sqrt(a ** 2 + b ** 2 - 2 * a * b * Math.cos(C * (Math.PI / 180)));
        return `O comprimento do lado c é ${c.toFixed(2)}.`;
    } else {
        return 'Você precisa fornecer dois lados e o ângulo entre eles para encontrar o terceiro lado.';
    }
}


function calcularAreaTrapezio(vars) {
    const [baseMaior, baseMenor, altura] = vars.map(parseFloat);
    return ((baseMaior + baseMenor) * altura) / 2;
}

function calcularAreaParalelogramo(vars) {
    const [base, altura] = vars.map(parseFloat);
    return base * altura;
}

function calcularFormulaEuler(vars) {
    const [v, e, f] = vars.map(parseFloat);
    return v - e + f === 2 ? "Fórmula de Euler confirmada" : "A fórmula de Euler não é satisfeita";
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

function updateVariablesQuimica() {
    const formula = document.getElementById("formula").value;
    const formulaDisplay = document.getElementById("quimica-formula-display");
    const container = document.getElementById("variables-container_quimica");
    const instructionsDiv = document.getElementById("instructions-quimica");
    container.innerHTML = ""; // Limpa as variáveis geradas anteriormente
    let variables = [];
    let unidades = [];
    let formulaHtml = "";

    switch (formula) {
        case "numero-mols":
            formulaHtml = "$n = \\frac{m}{M}$";
            variables = ["Massa (m)", "Massa Molar (M)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Massa Molar")];
            break;
        case "massa-molar":
            formulaHtml = "$M = \\frac{m}{n}$";
            variables = ["Massa (m)", "Número de Mols (n)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Numero de Mols")];
            break;
        case "densidade":
            formulaHtml = "$\\rho = \\frac{m}{V}$";
            variables = ["Massa (m)", "Volume (V)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Volume")];
            break;
        case "concentracao-molar":
            formulaHtml = "$C = \\frac{n}{V}$";
            variables = ["Número de Mols (n)", "Volume (V)"];
            unidades = [getUnidadesQui("Numero de Mols"), getUnidadesQui("Volume")];
            break;
        case "concentracao-comum":
            formulaHtml = "$C = \\frac{m}{V}$";
            variables = ["Massa (m)", "Volume (V)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Volume")];
            break;
        case "mistura-solucoes":
            formulaHtml = "$C_f = \\frac{C_1 \\cdot V_1 + C_2 \\cdot V_2}{V_1 + V_2}$";
            variables = ["Concentração1 (C1)", "Volume1 (V1)", "Concentração2 (C2)", "Volume2 (V2)"];
            unidades = [getUnidadesQui("Concentracao"), getUnidadesQui("Volume"), getUnidadesQui("Concentracao"), getUnidadesQui("Volume")];
            break;
        case "diluicao":
            formulaHtml = "$C_f = \\frac{C_i \\cdot V_i}{V_f}$";
            variables = ["Concentração Inicial (Ci)", "Volume Inicial (Vi)", "Volume Final (Vf)"];
            unidades = [getUnidadesQui("Concentracao"), getUnidadesQui("Volume"), getUnidadesQui("Volume")];
            break;
        case "massa-soluto":
            formulaHtml = "$m = C \\cdot V$";
            variables = ["Concentração (C)", "Volume (V)"];
            unidades = [getUnidadesQui("Concentracao"), getUnidadesQui("Volume")];
            break;
        case "percentagem-massa":
            formulaHtml = "$\\% = \\frac{m}{M} \\cdot 100$";
            variables = ["Massa (m)", "Massa Total (M)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Massa")];
            break;
        case "constante-equilibrio":
            formulaHtml = "$K_c = \\frac{[C]^c[D]^d}{[A]^a[B]^b}$";
            variables = ["Concentração de C (C)", "Concentração de D (D)", "Concentração de A (A)", "Concentração de B (B)"];
            unidades = [getUnidadesQui("Concentracao"), getUnidadesQui("Concentracao"), getUnidadesQui("Concentracao"), getUnidadesQui("Concentracao")];
            break;
        case "concentracao-massa":
            formulaHtml = "$C = \\frac{m}{V}$";
            variables = ["Massa (m)", "Volume (V)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Volume")];
            break;
        case "clausius-clapeyron":
            formulaHtml = "$\\ln{\\frac{P_2}{P_1}} = \\frac{\\Delta H}{R} \\cdot \\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$";
            variables = ["Pressão1 (P1)", "Pressão2 (P2)", "Entalpia (ΔH)", "Temperatura1 (T1)", "Temperatura2 (T2)"];
            unidades = [getUnidadesQui("Pressao"), getUnidadesQui("Pressao"), getUnidadesQui("Entalpia"), getUnidadesQui("Temperatura"), getUnidadesQui("Temperatura")];
            break;
        case "calor-sensivel":
            formulaHtml = "$Q = m \\cdot c \\cdot \\Delta T$";
            variables = ["Massa (m)", "Calor Específico (c)", "Variação de Temperatura (ΔT)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Calor Especifico"), getUnidadesQui("Temperatura")];
            break;
        case "calor-latente":
            formulaHtml = "$Q = m \\cdot L$";
            variables = ["Massa (m)", "Calor Latente (L)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Calor Latente")];
            break;
        case "lei-raoult":
            formulaHtml = "$P = P^0 \\cdot x$";
            variables = ["Pressão (P)", "Pressão de Vapor (P0)", "Fração Molar (x)"];
            unidades = [getUnidadesQui("Pressao"), getUnidadesQui("Pressao"), getUnidadesQui("Fracao Molar")];
            break;
        case "lei-ideal-gases":
            formulaHtml = "$PV = nRT$";
            variables = ["Pressão (P)", "Volume (V)", "Número de Mols (n)", "Temperatura (T)"];
            unidades = [getUnidadesQui("Pressao"), getUnidadesQui("Volume"), getUnidadesQui("Numero de Mols"), getUnidadesQui("Temperatura")];
            break;
        case "velocidade-reacao":
            formulaHtml = "$v = k \\cdot [C]^n$";
            variables = ["Constante de Velocidade (k)", "Concentração (C)", "Ordem da Reação (n)"];
            unidades = [getUnidadesQui("Constante"), getUnidadesQui("Concentracao"), getUnidadesQui("Ordem de Reacao")];
            break;
        case "equacao-gases-ideais":
            formulaHtml = "$T = \\frac{PV}{nR}$";
            variables = ["Pressão (P)", "Volume (V)", "Número de Mols (n)", "Constante dos Gases (R)"];
            unidades = [getUnidadesQui("Pressao"), getUnidadesQui("Volume"), getUnidadesQui("Numero de Mols"), getUnidadesQui("Constante")];
            break;
        case "lei-dalton":
            formulaHtml = "$P_{total} = P_1 + P_2$";
            variables = ["Pressão Total (Ptotal)", "Pressão Parcial 1 (P1)", "Pressão Parcial 2 (P2)"];
            unidades = [getUnidadesQui("Pressao"), getUnidadesQui("Pressao"), getUnidadesQui("Pressao")];
            break;
        case "lei-henry":
            formulaHtml = "$C = k_H \\cdot P$";
            variables = ["Concentração (C)", "Pressão (P)"];
            unidades = [getUnidadesQui("Concentracao"), getUnidadesQui("Constante"), getUnidadesQui("Pressao")];
            break;
        case "lei-avogadro":
            formulaHtml = "$n = N / N_A$";
            variables = ["Número de moléculas (N)", "Constante de Avogadro (N_A)"];
            unidades = [getUnidadesQui("Numero de Moleculas"), getUnidadesQui("Constante de Avogadro")];
            break;
        case "lei-boyle":
            formulaHtml = "$P_1 V_1 = P_2 V_2$";
            variables = ["Pressão Inicial (P1)", "Volume Inicial (V1)", "Pressão Final (P2)", "Volume Final (V2)"];
            unidades = [getUnidadesQui("Pressao"), getUnidadesQui("Volume"), getUnidadesQui("Pressao"), getUnidadesQui("Volume")];
            break;
        case "lei-charles":
            formulaHtml = "$V_1 / T_1 = V_2 / T_2$";
            variables = ["Volume Inicial (V1)", "Temperatura Inicial (T1)", "Volume Final (V2)", "Temperatura Final (T2)"];
            unidades = [getUnidadesQui("Volume"), getUnidadesQui("Temperatura"), getUnidadesQui("Volume"), getUnidadesQui("Temperatura")];
            break;
        case "lei-gay-lussac":
            formulaHtml = "$P_1 / T_1 = P_2 / T_2$";
            variables = ["Pressão Inicial (P1)", "Temperatura Inicial (T1)", "Pressão Final (P2)", "Temperatura Final (T2)"];
            unidades = [getUnidadesQui("Pressao"), getUnidadesQui("Temperatura"), getUnidadesQui("Pressao"), getUnidadesQui("Temperatura")];
            break;
        case "lei-lavoisier":
            formulaHtml = "$m_1 = m_2$";
            variables = ["Massa Inicial (m1)", "Massa Final (m2)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Massa")];
            break;
        case "solubilidade":
            formulaHtml = "$S = \\frac{m_{soluto}}{m_{solvente}}$";
            variables = ["Massa do Soluto (m_soluto)", "Massa do Solvente (m_solvente)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Massa")];
            break;
        case "tensao-superficial":
            formulaHtml = "$\\gamma = \\frac{F}{L}$";
            variables = ["Força (F)", "Comprimento (L)"];
            unidades = [getUnidadesQui("Forca"), getUnidadesQui("Comprimento")];
            break;
        case "eletrolise":
            formulaHtml = "$Q = I \cdot t$";
            variables = ["Corrente Elétrica (I)", "Tempo (t)"];
            unidades = [getUnidadesQui("Corrente"), getUnidadesQui("Tempo")];
            break;
        case "lei-hess":
            formulaHtml = "$\\Delta H = \\Delta H_1 + \\Delta H_2 + ...$";
            variables = ["Variação de Entalpia (ΔH1, ΔH2, ...)"];
            unidades = [getUnidadesQui("Entalpia")];
            break;
        case "equacao-nernst":
            formulaHtml = "$E = E^0 - \\frac{RT}{nF} \\ln Q$";
            variables = ["Potencial de Eletrodo (E)", "Temperatura (T)", "Número de Mols (n)", "Q"];
            unidades = [getUnidadesQui("Potencial"), getUnidadesQui("Temperatura"), getUnidadesQui("Numero de Mols"), getUnidadesQui("Q")];
            break;
        case "lei-fick":
            formulaHtml = "$J = -D \\cdot \\frac{\\Delta C}{\\Delta x}$";
            variables = ["Fluxo de Partículas (J)", "Difusividade (D)", "Variação de Concentração (ΔC)", "Distância (Δx)"];
            unidades = [getUnidadesQui("Fluxo"), getUnidadesQui("Difusividade"), getUnidadesQui("Concentracao"), getUnidadesQui("Distancia")];
            break;
        case "equacao-arrhenius":
            formulaHtml = "$k = A \\cdot e^{\\frac{-E_a}{RT}}$";
            variables = ["Energia de Ativação (Ea)", "Constante dos Gases (R)", "Temperatura (T)"];
            unidades = [getUnidadesQui("Energia de Ativacao"), getUnidadesQui("Temperatura")];
            break;
        case "van-der-waals":
            formulaHtml = "$\\left( P + \\frac{a}{V^2} \\right) \\cdot (V - b) = RT$";
            variables = ["Pressão (P)", "Volume (V)", "Temperatura (T)"];
            unidades = [getUnidadesQui("Pressao"), getUnidadesQui("Volume"), getUnidadesQui("Temperatura")];
            break;
        case "lei-lenz":
            formulaHtml = "$\\mathcal{E} = - \\frac{d\\Phi_B}{dt}$";
            variables = ["FEM Induzida (ε)", "Variação do Fluxo Magnético (dΦB)", "Tempo (dt)"];
            unidades = [getUnidadesQui("FEM"), getUnidadesQui("Fluxo Magnetico"), getUnidadesQui("Tempo")];
            break;
        case "lei-ampere":
            formulaHtml = "$F = BIL \\cdot \\sin(\\theta)$";
            variables = ["Força (F)", "Campo Magnético (B)", "Corrente Elétrica (I)", "Comprimento do Condutor (L)", "Ângulo (θ)"];
            unidades = [getUnidadesQui("Forca"), getUnidadesQui("Campo Magnetico"), getUnidadesQui("Corrente"), getUnidadesQui("Comprimento"), getUnidadesQui("Angulo")];
            break;
        case "lei-fermi":
            formulaHtml = "$n(E) = \\frac{1}{e^{(E - E_f)/kT} + 1}$";
            variables = ["Distribuição de Fermi-Dirac (n(E))", "Energia (E)", "Energia de Fermi (Ef)", "Temperatura (T)"];
            unidades = [getUnidadesQui("Distribuicao de Particulas"), getUnidadesQui("Energia"), getUnidadesQui("Energia de Fermi"), getUnidadesQui("Temperatura")];
            break;
        case "lei-graham":
            formulaHtml = "$r_1 / r_2 = \\sqrt{M_2 / M_1}$";
            variables = ["Velocidade de Difusão 1 (r1)", "Velocidade de Difusão 2 (r2)", "Massa Molar 1 (M1)", "Massa Molar 2 (M2)"];
            unidades = [getUnidadesQui("Velocidade"), getUnidadesQui("Velocidade"), getUnidadesQui("Massa Molar"), getUnidadesQui("Massa Molar")];
            break;
        case "fracao-molar":
            formulaHtml = "$x_A = \\frac{n_A}{n_{total}}$";
            variables = ["Fração Molar de A (xA)", "Número de Mols de A (nA)", "Número Total de Mols (ntotal)"];
            unidades = [getUnidadesQui("Fracao Molar"), getUnidadesQui("Numero de Mols"), getUnidadesQui("Numero de Mols")];
            break;
        case "bronsted-lowry":
            formulaHtml = "$H_3O^+ + A^- \\rightleftharpoons HA + H_2O$";
            variables = ["Ácido (HA)", "Base (A^-)", "Hidrônio (H3O+)"];
            unidades = [getUnidadesQui("Acido"), getUnidadesQui("Base"), getUnidadesQui("Concentracao")];
            break;
        case "ph-hidrogenio":
            formulaHtml = "$pH = - \\log[H^+]$";
            variables = ["Concentração de Íons Hidrogênio [H+]", "pH"];
            unidades = [getUnidadesQui("Concentracao de Hidrogenio"), getUnidadesQui("pH")];
            break;
        case "poh-hidroxila":
            formulaHtml = "$pOH = - \\log[OH^-]$";
            variables = ["Concentração de Íons Hidroxila [OH-]", "pOH"];
            unidades = [getUnidadesQui("Concentracao de Hidroxila"), getUnidadesQui("pOH")];
            break;
        case "lei-hess-entalpia":
            formulaHtml = "$\\Delta H = \\Delta H_1 + \\Delta H_2 + ...$";
            variables = ["Variação de Entalpia (ΔH1, ΔH2, ...)"];
            unidades = [getUnidadesQui("Entalpia")];
            break;
        case "energia-ligacao":
            formulaHtml = "$E = \\sum E_{ligacao}$";
            variables = ["Energia Total (E)", "Energia das Ligações (E_ligacao)"];
            unidades = [getUnidadesQui("Energia"), getUnidadesQui("Energia")];
            break;
        case "volume-molar-gas":
            formulaHtml = "$V_m = \\frac{V}{n}$";
            variables = ["Volume Molar (Vm)", "Volume (V)", "Número de Mols (n)"];
            unidades = [getUnidadesQui("Volume Molar"), getUnidadesQui("Volume"), getUnidadesQui("Numero de Mols")];
            break;
        case "calor-reacao":
            formulaHtml = "$\\Delta H = \\sum H_{produtos} - \\sum H_{reagentes}$";
            variables = ["Variação de Entalpia (ΔH)", "Entalpia dos Produtos", "Entalpia dos Reagentes"];
            unidades = [getUnidadesQui("Entalpia"), getUnidadesQui("Entalpia"), getUnidadesQui("Entalpia")];
            break;
        case "constante-avogadro":
            formulaHtml = "$N_A = 6.02214076 \\times 10^{23} mol^{-1}$";
            variables = ["Constante de Avogadro (N_A)"];
            unidades = [getUnidadesQui("Constante de Avogadro")];
            break;
        case "lei-proust":
            formulaHtml = "$\\frac{m_1}{m_2} = \\frac{M_1}{M_2}$";
            variables = ["Massa 1 (m1)", "Massa 2 (m2)", "Massa Molar 1 (M1)", "Massa Molar 2 (M2)"];
            unidades = [getUnidadesQui("Massa"), getUnidadesQui("Massa"), getUnidadesQui("Massa Molar"), getUnidadesQui("Massa Molar")];
            break;
        case "capacidade-calorifica":
            formulaHtml = "$C = m \\cdot c$";
            variables = ["Capacidade Calorífica (C)", "Massa (m)"];
            unidades = [getUnidadesQui("Capacidade Calorifica"), getUnidadesQui("Massa")];
            break;
        case "oxido-reducao":
            formulaHtml = "$E = E^0 - \\frac{0.0592}{n} \\log Q$";
            variables = ["Potencial Eletrodo (E)", "Número de Mols (n)", "Q"];
            unidades = [getUnidadesQui("Potencial"), getUnidadesQui("Numero de Mols"), getUnidadesQui("Q")];
            break;
        case "entropia":
            formulaHtml = "$\\Delta S = \\frac{Q}{T}$";
            variables = ["Variação de Entropia (ΔS)", "Calor (Q)", "Temperatura (T)"];
            unidades = [getUnidadesQui("Entalpia"), getUnidadesQui("Calor"), getUnidadesQui("Temperatura")];
            break;

                
        default:
            formulaHtml = "Escolha uma fórmula para ver seu cálculo.";
            variables = [];
            unidades = [];
            break;
    }

    // Exibir a fórmula
    formulaDisplay.innerHTML = formulaHtml;

    // Gerar campos de input dinamicamente
    container.innerHTML = variables.map((variable, index) =>
        `<div style="padding: 15px; margin-bottom: 15px;">
            <label for="var${index}">${variable}</label>
            <input type="number" id="var${index}" placeholder="${variable}" step="any">
            <select id="unit${index}">${unidades[index]}</select>
        </div>`).join('');

    MathJax.typesetPromise();  // Reprocessa o MathJax para exibir corretamente o LaTeX

    updateInstructions('quimica', formula, instructionsDiv);
}


function calcularQuimica() {
    const formula = document.getElementById("formula").value;
    const container = document.getElementById("variables-container_quimica");
    const inputs = container.querySelectorAll("input");
    const unidades = container.querySelectorAll("select");
    let resultado = 0;
    let unidadeResultado = "";

    // Captura e valida as entradas
    const variables = Array.from(inputs).map((input, index) => {
        const unidade = unidades[index] ? unidades[index].value : '';
        const valor = parseFloat(input.value.trim());

        if (isNaN(valor)) {
            console.error(`Valor inválido para a variável na posição ${index}.`);
            return { valor: 0, unidade };
        }
        return { valor, unidade };
    });

    if (!validateInputs(variables)) {
        alert("Entradas inválidas! Verifique suas variáveis.");
        return;
    }

    // Converte unidades para SI (Sistema Internacional)
    variables.forEach((variable, index) => {
        variables[index].valor = converterParaSiQui(variable.valor, variable.unidade);
    });

    // Switch case para processar o cálculo com base na fórmula selecionada
    switch (formula) {
        case "numero-mols":
            resultado = calcularNumeroMols(variables);
            unidadeResultado = "mol";
            break;
        case "massa-molar":
            resultado = calcularMassaMolar(variables);
            unidadeResultado = "g/mol";
            break;
        case "densidade":
            resultado = calcularDensidade(variables);
            unidadeResultado = "g/cm³";
            break;
        case "concentracao-molar":
            resultado = calcularConcentracaoMolar(variables);
            unidadeResultado = "mol/L";
            break;
        case "concentracao-comum":
            resultado = calcularConcentracaoComum(variables);
            unidadeResultado = "g/L";
            break;
        case "mistura-solucoes":
            resultado = calcularMisturaSolucoes(variables);
            unidadeResultado = "mol/L";
            break;
        case "diluicao":
            resultado = calcularDiluicao(variables);
            unidadeResultado = "mol/L";
            break;
        case "massa-soluto":
            resultado = calcularMassaSoluto(variables);
            unidadeResultado = "g";
            break;
        case "percentagem-massa":
            resultado = calcularPercentagemMassa(variables);
            unidadeResultado = "%";
            break;
        case "constante-equilibrio":
            resultado = calcularConstanteEquilibrio(variables);
            unidadeResultado = "";
            break;
        case "concentracao-massa":
            resultado = calcularConcentracaoMassa(variables);
            unidadeResultado = "g/L";
            break;
        case "clausius-clapeyron":
            resultado = calcularClausiusClapeyron(variables);
            unidadeResultado = "Pa";
            break;
        case "calor-sensivel":
            resultado = calcularCalorSensivel(variables);
            unidadeResultado = "J";
            break;
        case "calor-latente":
            resultado = calcularCalorLatente(variables);
            unidadeResultado = "J";
            break;
        case "lei-raoult":
            resultado = calcularLeiRaoult(variables);
            unidadeResultado = "Pa";
            break;
        case "lei-ideal-gases":
            resultado = calcularGasesIdeais(variables);
            unidadeResultado = "Pa";
            break;
        case "velocidade-reacao":
            resultado = calcularVelocidadeReacao(variables);
            unidadeResultado = "mol/L·s";
            break;
        case "equacao-gases-ideais":
            resultado = calcularTemperaturaGasesIdeais(variables);
            unidadeResultado = "K";
            break;
        case "lei-dalton":
            resultado = calcularLeiDalton(variables);
            unidadeResultado = "Pa";
            break;
        case "lei-henry":
            resultado = calcularLeiHenry(variables);
            unidadeResultado = "mol/L·atm";
            break;
        case "lei-avogadro":
            resultado = calcularLeiAvogadro(variables);
            unidadeResultado = "mol";
            break;
        case "lei-boyle":
            resultado = calcularLeiBoyle(variables);
            unidadeResultado = "Pa·m³";
            break;
        case "lei-charles":
            resultado = calcularLeiCharles(variables);
            unidadeResultado = "K";
            break;
        case "lei-gay-lussac":
            resultado = calcularLeiGayLussac(variables);
            unidadeResultado = "K";
            break;
        case "lei-lavoisier":
            resultado = calcularLeiLavoisier(variables);
            unidadeResultado = "g";
            break;
        case "solubilidade":
            resultado = calcularSolubilidade(variables);
            unidadeResultado = "g/100g";
            break;
        case "tensao-superficial":
            resultado = calcularTensaoSuperficial(variables);
            unidadeResultado = "N/m";
            break;
        case "eletrolise":
            resultado = calcularEletrólise(variables);
            unidadeResultado = "C";
            break;
        case "lei-hess":
            resultado = calcularLeiHess(variables);
            unidadeResultado = "kJ/mol";
            break;
        case "equacao-nernst":
            resultado = calcularEquacaoNernst(variables);
            unidadeResultado = "V";
            break;
        case "lei-fick":
            resultado = calcularLeiFick(variables);
            unidadeResultado = "mol/(m²·s)";
            break;
        case "equacao-arrhenius":
            resultado = calcularEquacaoArrhenius(variables);
            unidadeResultado = "1/s";
            break;
        case "van-der-waals":
            resultado = calcularVanDerWaals(variables);
            unidadeResultado = "Pa·m³/mol";
            break;
        case "lei-lenz":
            resultado = calcularLeiLenz(variables);
            unidadeResultado = "V·s";
            break;
        case "lei-ampere":
            resultado = calcularLeiAmpere(variables);
            unidadeResultado = "N·s/C";
            break;
        case "lei-fermi":
            resultado = calcularLeiFermi(variables);
            unidadeResultado = "J";
            break;
        case "lei-graham":
            resultado = calcularLeiGraham(variables);
            unidadeResultado = "";
            break;
        case "fracao-molar":
            resultado = calcularBronstedLowry(variables);
            unidadeResultado = "";
            break;
        case "bronsted-lowry":
            resultado = calcularPH(variables);
            unidadeResultado = "pH";
            break;
        case "ph-hidrogenio":
            resultado = calcularPOH(variables);
            unidadeResultado = "pOH";
            break;
        case "poh-hidroxila":
            resultado = calcularLeiHessEntalpia(variables);
            unidadeResultado = "kJ/mol";
            break;
        case "lei-hess-entalpia":
            resultado = calcularEnergiaLigacao(variables);
            unidadeResultado = "kJ/mol";
            break;
        case "energia-ligacao":
            resultado = calcularVolumeMolarGas(variables);
            unidadeResultado = "L/mol";
            break;
        case "volume-molar-gas":
            resultado = calcularCalorReacao(variables);
            unidadeResultado = "kJ";
            break;
        case "calor-reacao":
            resultado = calcularConstanteAvogadro(variables);
            unidadeResultado = "mol";
            break;
        case "constante-avogadro":
            resultado = calcularLeiProust(variables);
            unidadeResultado = "";
            break;
        case "lei-proust":
            resultado = calcularCapacidadeCalorifica(variables);
            unidadeResultado = "J/K";
            break;
        case "capacidade-calorifica":
            resultado = calcularOxidacaoReducao(variables);
            unidadeResultado = "J";
            break;
        case "oxido-reducao":
            resultado = calcularEntropia(variables);
            unidadeResultado = "J/K";
            break;
        case "entropia":
            resultado = calcularPressaoOsmotica(variables);
            unidadeResultado = "Pa";
            break;
        default:
            alert("Fórmula não encontrada.");
            return;
    }

    if (isNaN(resultado)) {
        console.error("Erro ao calcular resultado.");
        alert("Erro ao calcular resultado. Verifique suas variáveis.");
        return;
    }

    // Exibir o resultado em LaTeX
    exibirResultadoLatexQuimica(resultado, unidadeResultado);

    // Renderiza o LaTeX com MathJax
    MathJax.typesetPromise().then(() => {
        console.log("Resultado renderizado com sucesso.");
    }).catch((err) => console.error("Erro ao renderizar MathJax:", err));
}

function getUnidadesQui(variable) {
    switch (variable) {
        case "Massa":
            return `
                <option value="kg">kg</option>
                <option value="g">g</option>
                <option value="mg">mg</option>
                <option value="µg">µg</option>
                <option value="ng">ng</option>
                <option value="lb">lb</option>
                <option value="oz">oz</option>
            `;
    
        case "Massa Molar":
            return `
                <option value="g/mol">g/mol</option>
                <option value="kg/mol">kg/mol</option>
            `;
    
        case "Numero de Mols":
            return `
                <option value="mol">mol</option>
            `;
    
        case "Volume":
            return `
                <option value="L">L</option>
                <option value="mL">mL</option>
                <option value="cm³">cm³</option>
                <option value="dm³">dm³</option>
                <option value="ft³">ft³</option>
            `;
    
        case "Concentracao":
            return `
                <option value="mol/L">mol/L</option>
                <option value="g/L">g/L</option>
                <option value="mg/mL">mg/mL</option>
                <option value="mol/m³">mol/m³</option>
            `;
    
        case "Pressao":
            return `
                <option value="Pa">Pa</option>
                <option value="kPa">kPa</option>
                <option value="atm">atm</option>
                <option value="mmHg">mmHg</option>
                <option value="bar">bar</option>
                <option value="psi">psi</option>
            `;
    
        case "Entalpia":
            return `
                <option value="J/mol">J/mol</option>
                <option value="kJ/mol">kJ/mol</option>
            `;
    
        case "Temperatura":
            return `
                <option value="K">K</option>
                <option value="°C">°C</option>
                <option value="°F">°F</option>
            `;
    
        case "Fracao Molar":
            return `
                <option value="">-</option>
            `;
    
        case "Ordem Reacao":
            return `
                <option value="">-</option>
            `;
    
        case "Forca":
            return `
                <option value="N">N</option>
            `;
    
        case "Comprimento":
            return `
                <option value="m">m</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
                <option value="km">km</option>
            `;
    
        case "Corrente":
            return `
                <option value="A">A</option>
                <option value="mA">mA</option>
                <option value="μA">μA</option>
            `;
    
        case "Tempo":
            return `
                <option value="s">s</option>
                <option value="min">min</option>
                <option value="h">h</option>
                <option value="ms">ms</option>
            `;
    
        case "Potencial":
            return `
                <option value="V">V</option>
            `;
    
        case "Fluxo":
            return `
                <option value="mol/s">mol/s</option>
            `;
    
        case "Difusividade":
            return `
                <option value="m²/s">m²/s</option>
            `;
    
        case "Energia de Ativacao":
            return `
                <option value="J/mol">J/mol</option>
                <option value="kJ/mol">kJ/mol</option>
            `;
    
        case "FEM":
            return `
                <option value="V">V</option>
            `;
    
        case "Fluxo Magnetico":
            return `
                <option value="Wb">Wb</option>
            `;
    
        case "Campo Magnetico":
            return `
                <option value="T">T</option>
            `;
    
        case "Angulo":
            return `
                <option value="rad">rad</option>
                <option value="°">°</option>
            `;
    
        case "Distribuicao de Particulas":
            return `
                <option value="mol/L">mol/L</option>
                <option value="mol/m³">mol/m³</option>
            `;
    
        case "Energia":
            return `
                <option value="J">J</option>
                <option value="kJ">kJ</option>
                <option value="MeV">MeV</option>
            `;
    
        case "Energia de Fermi":
            return `
                <option value="eV">eV</option>
            `;
    
        case "Velocidade":
            return `
                <option value="m/s">m/s</option>
                <option value="km/h">km/h</option>
            `;
    
        case "Acido":
            return `
                <option value="mol/L">mol/L</option>
            `;
    
        case "Base":
            return `
                <option value="mol/L">mol/L</option>
            `;
    
        case "Concentracao Hidroxila":
            return `
                <option value="mol/L">mol/L</option>
            `;
    
        case "pOH":
            return `
                <option value="pOH">pOH</option>
            `;
    
        case "Entalpia":
            return `
                <option value="J/mol">J/mol</option>
                <option value="kJ/mol">kJ/mol</option>
            `;
    
        case "Volume Molar":
            return `
                <option value="L/mol">L/mol</option>
            `;
    
        case "Constante de Avogadro":
            return `
                <option value="mol^-1">mol^-1</option>
            `;
    
        case "Capacidade Calorifica":
            return `
                <option value="J/K">J/K</option>
                <option value="kJ/K">kJ/K</option>
            `;
    
        case "Potencia":
            return `
                <option value="V">V</option>
            `;
    
        case "Q":
            return `
                <option value="C">C</option>
                <option value="mol">mol</option>
            `;
    
        // Adicionando Calor Latente e Calor Específico
        case "Calor Especifico":
            return `
                <option value="J/(kg·K)">J/(kg·K)</option>
                <option value="J/(g·C)">J/(g·C)</option>
                <option value="cal/(g·C)">cal/(g·C)</option>
            `;
    
        case "Calor Latente":
            return `
                <option value="J/kg">J/kg</option>
                <option value="kJ/kg">kJ/kg</option>
            `;
    
        default:
            return `<option value="">Unidade não disponível</option>`;
    }
}



function validateInputs(variables) {
    for (let i = 0; i < variables.length; i++) {
        // Verifica se o valor da variável é um número válido, maior que zero e não nulo
        if (variables[i].valor <= 0 || isNaN(variables[i].valor)) {
            // Exibe uma mensagem de erro informando a posição da variável com problema
            alert(`Valor inválido para a variável na posição ${i + 1}. O valor deve ser maior que zero.`);
            return false; // Retorna falso para indicar que a validação falhou
        }
    }
    return true; // Se todas as variáveis forem válidas, retorna verdadeiro
}

function converterParaSiQui(valor, unidade) {
    switch (unidade) {
        // Distância
        case "m": return valor; // metro
        case "cm": return valor / 100; // centímetro
        case "mm": return valor / 1000; // milímetro
        case "dm": return valor / 10; // decímetro
        case "km": return valor * 1000; // quilômetro
        case "in": return valor * 0.0254; // polegada
        case "ft": return valor * 0.3048; // pé
        case "yd": return valor * 0.9144; // jarda
        case "mi": return valor * 1609.34; // milha

        // Tempo
        case "s": return valor; // segundo
        case "min": return valor * 60; // minuto
        case "h": return valor * 3600; // hora
        case "ms": return valor / 1000; // milissegundo
        case "μs": return valor / 1e6; // microssegundo
        case "ns": return valor / 1e9; // nanossegundo

        // Massa
        case "kg": return valor; // quilograma
        case "g": return valor / 1000; // grama
        case "mg": return valor / 1e6; // miligrama
        case "μg": return valor / 1e9; // micrograma
        case "ng": return valor / 1e12; // nanograma
        case "lb": return valor * 0.453592; // libra
        case "oz": return valor * 0.0283495; // onça

        // Volume
        case "m³": return valor; // metro cúbico
        case "cm³": return valor / 1e6; // centímetro cúbico
        case "mm³": return valor / 1e9; // milímetro cúbico
        case "dm³": return valor / 1000; // decímetro cúbico (litro)
        case "L": return valor / 1000; // litro
        case "mL": return valor / 1e6; // mililitro
        case "ft³": return valor * 0.0283168; // pé cúbico
        case "in³": return valor * 1.63871e-5; // polegada cúbica

        // Pressão
        case "Pa": return valor; // pascal
        case "kPa": return valor * 1000; // quilopascal
        case "bar": return valor * 1e5; // bar
        case "atm": return valor * 101325; // atmosfera
        case "mmHg": return valor * 133.322; // milímetro de mercúrio
        case "psi": return valor * 6894.76; // libra por polegada quadrada

        // Concentração
        case "mol/L": return valor; // molaridade
        case "g/L": return valor / 1000; // concentração em gramas por litro
        case "mg/mL": return valor / 1e6; // miligrama por mililitro
        case "mol/m³": return valor / 1000; // mol/m³ para mol/L

        // Energia
        case "J": return valor; // joule
        case "kJ": return valor * 1000; // quilojoule
        case "cal": return valor * 4.184; // caloria
        case "kcal": return valor * 4184; // quilocaloria

        // Energia de Einstein
        case "MeV": return valor * 1.60218e-13; // megaeletrônvolts para Joules
        case "GeV": return valor * 1.60218e-10; // gigaeletrônvolts para Joules

        // Tensão elétrica
        case "V": return valor; // volt
        case "kV": return valor * 1000; // quilovolt
        case "mV": return valor / 1000; // milivolt
        case "μV": return valor / 1e6; // microvolt

        // Corrente elétrica
        case "A": return valor; // ampère
        case "mA": return valor / 1000; // miliampère
        case "μA": return valor / 1e6; // microampère

        // Potência
        case "W": return valor; // watt
        case "kW": return valor * 1000; // quilowatt
        case "mW": return valor / 1000; // miliwatt
        case "μW": return valor / 1e6; // microwatt
        case "hp": return valor * 745.7; // cavalo-vapor

        // Frequência
        case "Hz": return valor; // hertz
        case "kHz": return valor * 1000; // kilohertz
        case "MHz": return valor * 1e6; // megahertz
        case "GHz": return valor * 1e9; // gigahertz

        // Frequência Angular
        case "rad/s": return valor; // radiano por segundo
        case "Hz": return valor / (2 * Math.PI); // hertz (convertendo de rad/s)

        // Energia térmica (Calor específico e latente)
        case "J/(kg·K)": return valor; // Calor específico
        case "J/(g·K)": return valor * 1000; // Calor específico (convertendo de J/(g·K) para J/(kg·K))
        case "cal/(g·K)": return valor * 4.184; // Calor específico (convertendo de cal/(g·K) para J/(g·K))

        case "J/kg": return valor; // Calor latente
        case "kJ/kg": return valor * 1000; // Calor latente

        // Carga
        case "C": return valor; // coulomb
        case "mC": return valor * 1e-3; // milicoulomb
        case "μC": return valor * 1e-6; // microcoulomb
        case "nC": return valor * 1e-9; // nanocoulomb

        // Constante de Henry
        case "mol/(L·atm)": return valor; // unidade da constante de Henry
        case "mol/(L·bar)": return valor * 1.01325; // bar para atm

        // Campo magnético e outras constantes
        case "N/m": return valor; // newton por metro (constante elástica)
        case "kN/m": return valor * 1000; // quilonewton por metro
        case "mN/m": return valor / 1000; // milinewton por metro

        // Unidades para fórmulas químicas
        case "mol/(m²·s)": return valor; // Lei de Fick
        case "Pa·m³/mol": return valor; // Van der Waals
        case "V·s": return valor; // Lei de Lenz
        case "N·s/C": return valor; // Lei de Ampère
        case "mol": return valor; // Número de mols
        case "kJ/mol": return valor; // Energia por mol (Lei de Hess)
        case "1/s": return valor; // Taxa de reação (Equação de Arrhenius)
        case "mol/L·s": return valor; // Velocidade de reação
        case "g": return valor; // Massa (Lei de Lavoisier)
        case "%": return valor; // Percentagem de massa
        case "g/100g": return valor; // Solubilidade

        // Caso não reconhecido
        default:
            console.error(`Unidade não reconhecida: ${unidade}`);
            return valor;
    }
}

const CONSTANTES = {
    VELOCIDADE_LUZ: 299792458,  // Velocidade da luz em m/s
    VALOR_INICIAL: 1e-100,      // Valor a ser retornado em caso de erro
    TEMPERATURA_ABSOLUTA_ZERO: -273.15, // Temperatura em Celsius
    GRAVIDADE: 9.81, // Gravidade da Terra em m/s²
    CONSTANTE_GAS: 8.314, // Constante universal dos gases em J/(mol·K)
    CARGA_ELETRICA: 1.60218e-19, // Carga elementar em Coulombs
    R: 8.314, // Constante dos gases em J/(mol·K)
    TEMPERATURA_C: 273.15, // Temperatura em Kelvin (zero absoluto)
    MU0: 4 * Math.PI * 1e-7, // Permeabilidade magnética do vácuo em N/A²
    KB: 1.380649e-23, // Constante de Boltzmann em J/K

    // Constantes químicas adicionais
    CONSTANTE_HENRY: 1.3e-3, // Constante de Henry em mol/(L·atm)
    CONSTANTE_FARADAY: 96485.33212, // Constante de Faraday em C/mol
    CONSTANTE_REACAO: 0.08206, // Constante de Reação em L·atm/(mol·K)
    
    // Constantes de Arrhenius
    CONSTANTE_A: 1e13, // Constante A em s^-1
    CONSTANTE_B: 20000, // Constante B em K

    // Constante de Boltzmann (já incluída)
    KB: 1.380649e-23, // Constante de Boltzmann em J/K

    // Outras constantes
    CONSTANTE_AVOGADRO: 6.02214076e23, // Constante de Avogadro em mol^-1
    CONST_TEMPERATURA: 298.15 // Temperatura em Kelvin (25°C)
};

function exibirResultadoLatexQuimica(resultado, unidadeResultado) {
    const resultadoSpan = document.getElementById("resultado-valor-quimica");

    // Formatação do resultado com LaTeX
    const resultadoComUnidade = `${resultado} \\ ${unidadeResultado}`;

    // Inserir o resultado no span
    resultadoSpan.innerHTML = `$$${resultadoComUnidade}$$`;

    // Renderizar o LaTeX com MathJax
    MathJax.typesetPromise([resultadoSpan]).then(() => {
        console.log("Resultado renderizado com sucesso.");
    }).catch((err) => console.error("Erro ao renderizar MathJax:", err));
}

function calcularNumeroMols(variables) {
    const massa = parseFloat(variables[0].valor); // Massa (m)
    const massaMolar = parseFloat(variables[1].valor); // Massa Molar (M)

    if (isNaN(massa) || isNaN(massaMolar) || massa <= 0 || massaMolar <= 0) {
        console.error("Valores inválidos para número de mols.");
        exibirResultadoLatexQuimica(0, "mol");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = massa / massaMolar;
    exibirResultadoLatexQuimica(resultado, "mol");
    return resultado;
}

function calcularMassaMolar(variables) {
    const massa = parseFloat(variables[0].valor); // Massa (m)
    const numeroMols = parseFloat(variables[1].valor); // Número de Mols (n)

    if (isNaN(massa) || isNaN(numeroMols) || numeroMols <= 0) {
        console.error("Valores inválidos para massa molar.");
        exibirResultadoLatexQuimica(0, "g/mol");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = massa / numeroMols;
    exibirResultadoLatexQuimica(resultado, "g/mol");
    return resultado;
}

function calcularDensidade(variables) {
    const massa = parseFloat(variables[0].valor); // Massa (m)
    const volume = parseFloat(variables[1].valor); // Volume (V)

    if (isNaN(massa) || isNaN(volume) || volume <= 0) {
        console.error("Valores inválidos para densidade.");
        exibirResultadoLatexQuimica(0, "g/cm³");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = massa / volume;
    exibirResultadoLatexQuimica(resultado, "g/cm³");
    return resultado;
}

function calcularConcentracaoMolar(variables) {
    const numeroMols = parseFloat(variables[0].valor); // Número de Mols (n)
    const volume = parseFloat(variables[1].valor); // Volume (V)

    if (isNaN(numeroMols) || isNaN(volume) || volume <= 0) {
        console.error("Valores inválidos para concentração molar.");
        exibirResultadoLatexQuimica(0, "mol/L");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = numeroMols / volume;
    exibirResultadoLatexQuimica(resultado, "mol/L");
    return resultado;
}

function calcularConcentracaoComum(variables) {
    const massa = parseFloat(variables[0].valor); // Massa (m)
    const volume = parseFloat(variables[1].valor); // Volume (V)

    if (isNaN(massa) || isNaN(volume) || volume <= 0) {
        console.error("Valores inválidos para concentração comum.");
        exibirResultadoLatexQuimica(0, "g/L");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = massa / volume;
    exibirResultadoLatexQuimica(resultado, "g/L");
    return resultado;
}

function calcularMisturaSolucoes(variables) {
    const concentracao1 = parseFloat(variables[0].valor); // Concentração1 (C1)
    const volume1 = parseFloat(variables[1].valor); // Volume1 (V1)
    const concentracao2 = parseFloat(variables[2].valor); // Concentração2 (C2)
    const volume2 = parseFloat(variables[3].valor); // Volume2 (V2)

    if (isNaN(concentracao1) || isNaN(volume1) || isNaN(concentracao2) || isNaN(volume2) || volume1 <= 0 || volume2 <= 0) {
        console.error("Valores inválidos para mistura de soluções.");
        exibirResultadoLatexQuimica(0, "mol/L");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (concentracao1 * volume1 + concentracao2 * volume2) / (volume1 + volume2);
    exibirResultadoLatexQuimica(resultado, "mol/L");
    return resultado;
}

function calcularDiluicao(variables) {
    const concentracaoInicial = parseFloat(variables[0].valor); // Concentração Inicial (Ci)
    const volumeInicial = parseFloat(variables[1].valor); // Volume Inicial (Vi)
    const volumeFinal = parseFloat(variables[2].valor); // Volume Final (Vf)

    if (isNaN(concentracaoInicial) || isNaN(volumeInicial) || isNaN(volumeFinal) || volumeFinal <= 0 || volumeInicial <= 0) {
        console.error("Valores inválidos para diluição.");
        exibirResultadoLatexQuimica(0, "mol/L");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (concentracaoInicial * volumeInicial) / volumeFinal;
    exibirResultadoLatexQuimica(resultado, "mol/L");
    return resultado;
}

function calcularMassaSoluto(variables) {
    const concentracao = parseFloat(variables[0].valor); // Concentração (C)
    const volume = parseFloat(variables[1].valor); // Volume (V)

    if (isNaN(concentracao) || isNaN(volume) || volume <= 0) {
        console.error("Valores inválidos para massa do soluto.");
        exibirResultadoLatexQuimica(0, "g");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = concentracao * volume;
    exibirResultadoLatexQuimica(resultado, "g");
    return resultado;
}

function calcularPercentagemMassa(variables) {
    const massa = parseFloat(variables[0].valor); // Massa (m)
    const massaTotal = parseFloat(variables[1].valor); // Massa Total (M)

    if (isNaN(massa) || isNaN(massaTotal) || massaTotal <= 0) {
        console.error("Valores inválidos para porcentagem de massa.");
        exibirResultadoLatexQuimica(0, "%");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (massa / massaTotal) * 100;
    exibirResultadoLatexQuimica(resultado, "%");
    return resultado;
}

function calcularConstanteEquilibrio(variables) {
    const concentracaoC = parseFloat(variables[0].valor); // Concentração de C (C)
    const concentracaoD = parseFloat(variables[1].valor); // Concentração de D (D)
    const concentracaoA = parseFloat(variables[2].valor); // Concentração de A (A)
    const concentracaoB = parseFloat(variables[3].valor); // Concentração de B (B)

    if (isNaN(concentracaoC) || isNaN(concentracaoD) || isNaN(concentracaoA) || isNaN(concentracaoB) || concentracaoA <= 0 || concentracaoB <= 0) {
        console.error("Valores inválidos para constante de equilíbrio.");
        exibirResultadoLatexQuimica(0, "");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (concentracaoC * concentracaoD) / (concentracaoA * concentracaoB);
    exibirResultadoLatexQuimica(resultado, "");
    return resultado;
}

function calcularConcentracaoMassa(variables) {
    const massa = parseFloat(variables[0].valor); // Massa (m)
    const volume = parseFloat(variables[1].valor); // Volume (V)

    if (isNaN(massa) || isNaN(volume) || volume <= 0) {
        console.error("Valores inválidos para concentração de massa.");
        exibirResultadoLatexQuimica(0, "g/L");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = massa / volume;  // Fórmula: C = m / V
    exibirResultadoLatexQuimica(resultado, "g/L");
    return resultado;
}

function calcularClausiusClapeyron(variables) {
    const pressao1 = parseFloat(variables[0].valor); // Pressão1 (P1)
    const pressao2 = parseFloat(variables[1].valor); // Pressão2 (P2)
    const entalpia = parseFloat(variables[2].valor); // Entalpia (ΔH)
    const temperatura1 = parseFloat(variables[3].valor); // Temperatura1 (T1)
    const temperatura2 = parseFloat(variables[4].valor); // Temperatura2 (T2)
    const R = CONSTANTES.R;  // Constante dos Gases

    if (isNaN(pressao1) || isNaN(pressao2) || isNaN(entalpia) || isNaN(temperatura1) || isNaN(temperatura2) || temperatura1 <= 0 || temperatura2 <= 0) {
        console.error("Valores inválidos para a equação de Clausius-Clapeyron.");
        exibirResultadoLatexQuimica(0, "J/mol·K");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = Math.log(pressao2 / pressao1) / (1 / temperatura1 - 1 / temperatura2) * (entalpia / R);  // Fórmula de Clausius-Clapeyron
    exibirResultadoLatexQuimica(resultado, "J/mol·K");
    return resultado;
}

function calcularCalorSensivel(variables) {
    const massa = parseFloat(variables[0].valor); // Massa (m)
    const calorEspecifico = parseFloat(variables[1].valor); // Calor Específico (c)
    const deltaT = parseFloat(variables[2].valor); // Variação de Temperatura (ΔT)

    if (isNaN(massa) || isNaN(calorEspecifico) || isNaN(deltaT) || massa <= 0 || calorEspecifico <= 0 || deltaT <= 0) {
        console.error("Valores inválidos para calor sensível.");
        exibirResultadoLatexQuimica(0, "J");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = massa * calorEspecifico * deltaT;  // Fórmula: Q = m * c * ΔT
    exibirResultadoLatexQuimica(resultado, "J");
    return resultado;
}

function calcularCalorLatente(variables) {
    const massa = parseFloat(variables[0].valor); // Massa (m)
    const calorLatente = parseFloat(variables[1].valor); // Calor Latente (L)

    if (isNaN(massa) || isNaN(calorLatente) || massa <= 0 || calorLatente <= 0) {
        console.error("Valores inválidos para calor latente.");
        exibirResultadoLatexQuimica(0, "J");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = massa * calorLatente;  // Fórmula: Q = m * L
    exibirResultadoLatexQuimica(resultado, "J");
    return resultado;
}

function calcularLeiRaoult(variables) {
    const pressaoVapor = parseFloat(variables[0].valor); // Pressão (P)
    const pressaoVapor0 = parseFloat(variables[1].valor); // Pressão de Vapor (P0)
    const fracaoMolar = parseFloat(variables[2].valor); // Fração Molar (x)

    if (isNaN(pressaoVapor) || isNaN(pressaoVapor0) || isNaN(fracaoMolar) || pressaoVapor0 <= 0 || fracaoMolar <= 0) {
        console.error("Valores inválidos para a Lei de Raoult.");
        exibirResultadoLatexQuimica(0, "Pa");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = pressaoVapor0 * fracaoMolar;  // Fórmula: P = P0 * x
    exibirResultadoLatexQuimica(resultado, "Pa");
    return resultado;
}

function calcularGasesIdeais(variables) {
    const pressao = parseFloat(variables[0].valor); // Pressão (P)
    const volume = parseFloat(variables[1].valor); // Volume (V)
    const numeroMols = parseFloat(variables[2].valor); // Número de Mols (n)
    const R = CONSTANTES.R;  // Constante dos Gases
    const temperatura = parseFloat(variables[3].valor); // Temperatura (T)

    if (isNaN(pressao) || isNaN(volume) || isNaN(numeroMols) || isNaN(temperatura) || numeroMols <= 0 || temperatura <= 0) {
        console.error("Valores inválidos para gases ideais.");
        exibirResultadoLatexQuimica(0, "Pa·m³");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = pressao * volume / (numeroMols * R * temperatura);  // Fórmula: PV = nRT
    exibirResultadoLatexQuimica(resultado, "Pa·m³");
    return resultado;
}

function calcularVelocidadeReacao(variables) {
    const constanteVelocidade = parseFloat(variables[0].valor); // Constante de Velocidade (k)
    const concentracao = parseFloat(variables[1].valor); // Concentração (C)
    const ordemReacao = parseFloat(variables[2].valor); // Ordem da Reação (n)

    if (isNaN(constanteVelocidade) || isNaN(concentracao) || isNaN(ordemReacao) || constanteVelocidade <= 0 || concentracao <= 0) {
        console.error("Valores inválidos para velocidade de reação.");
        exibirResultadoLatexQuimica(0, "mol/L·s");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = constanteVelocidade * Math.pow(concentracao, ordemReacao);  // Fórmula: v = k * [C]^n
    exibirResultadoLatexQuimica(resultado, "mol/L·s");
    return resultado;
}

function calcularTemperaturaGasesIdeais(variables) {
    const pressao = parseFloat(variables[0].valor); // Pressão (P)
    const volume = parseFloat(variables[1].valor); // Volume (V)
    const numeroMols = parseFloat(variables[2].valor); // Número de Mols (n)
    const R = CONSTANTES.R;  // Constante dos Gases

    if (isNaN(pressao) || isNaN(volume) || isNaN(numeroMols) || numeroMols <= 0) {
        console.error("Valores inválidos para temperatura dos gases ideais.");
        exibirResultadoLatexQuimica(0, "K");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (pressao * volume) / (numeroMols * R);  // Fórmula: T = PV / nR
    exibirResultadoLatexQuimica(resultado, "K");
    return resultado;
}


function calcularLeiDalton(variables) {
    const pressao1 = parseFloat(variables[0].valor); // Pressão Parcial 1 (P1)
    const pressao2 = parseFloat(variables[1].valor); // Pressão Parcial 2 (P2)
    
    if (isNaN(pressao1) || isNaN(pressao2)) {
        console.error("Valores inválidos para a Lei de Dalton.");
        exibirResultadoLatexQuimica(0, "Pa");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = pressao1 + pressao2;  // Fórmula: Ptotal = P1 + P2
    exibirResultadoLatexQuimica(resultado, "Pa");
    return resultado;
}

function calcularLeiHenry(variables) {
    const concentracao = parseFloat(variables[0].valor); // Concentração (C)
    const constanteHenry = parseFloat(variables[1].valor); // Constante de Henry (kH)
    const pressao = parseFloat(variables[2].valor); // Pressão (P)

    if (isNaN(concentracao) || isNaN(constanteHenry) || isNaN(pressao)) {
        console.error("Valores inválidos para a Lei de Henry.");
        exibirResultadoLatexQuimica(0, "mol/L·atm");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = constanteHenry * pressao;  // Fórmula: C = kH * P
    exibirResultadoLatexQuimica(resultado, "mol/L·atm");
    return resultado;
}

function calcularLeiAvogadro(variables) {
    const numeroMolculas = parseFloat(variables[0].valor); // Número de moléculas (N)
    const constanteAvogadro = CONSTANTES.AVOGADRO;  // Constante de Avogadro (N_A)

    if (isNaN(numeroMolculas) || numeroMolculas <= 0) {
        console.error("Valores inválidos para a Lei de Avogadro.");
        exibirResultadoLatexQuimica(0, "mol");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = numeroMolculas / constanteAvogadro;  // Fórmula: n = N / N_A
    exibirResultadoLatexQuimica(resultado, "mol");
    return resultado;
}

function calcularLeiBoyle(variables) {
    const pressao1 = parseFloat(variables[0].valor); // Pressão Inicial (P1)
    const volume1 = parseFloat(variables[1].valor); // Volume Inicial (V1)
    const pressao2 = parseFloat(variables[2].valor); // Pressão Final (P2)
    const volume2 = parseFloat(variables[3].valor); // Volume Final (V2)

    if (isNaN(pressao1) || isNaN(volume1) || isNaN(pressao2) || isNaN(volume2)) {
        console.error("Valores inválidos para a Lei de Boyle.");
        exibirResultadoLatexQuimica(0, "Pa·m³");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = pressao1 * volume1 === pressao2 * volume2;  // Fórmula: P1V1 = P2V2 (Lei de Boyle)
    exibirResultadoLatexQuimica(resultado, "Pa·m³");
    return resultado;
}

function calcularLeiCharles(variables) {
    const volume1 = parseFloat(variables[0].valor); // Volume Inicial (V1)
    const temperatura1 = parseFloat(variables[1].valor); // Temperatura Inicial (T1)
    const volume2 = parseFloat(variables[2].valor); // Volume Final (V2)
    const temperatura2 = parseFloat(variables[3].valor); // Temperatura Final (T2)

    if (isNaN(volume1) || isNaN(temperatura1) || isNaN(volume2) || isNaN(temperatura2)) {
        console.error("Valores inválidos para a Lei de Charles.");
        exibirResultadoLatexQuimica(0, "m³/K");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (volume1 / temperatura1) === (volume2 / temperatura2);  // Fórmula: V1/T1 = V2/T2 (Lei de Charles)
    exibirResultadoLatexQuimica(resultado, "m³/K");
    return resultado;
}

function calcularLeiGayLussac(variables) {
    const pressao1 = parseFloat(variables[0].valor); // Pressão Inicial (P1)
    const temperatura1 = parseFloat(variables[1].valor); // Temperatura Inicial (T1)
    const pressao2 = parseFloat(variables[2].valor); // Pressão Final (P2)
    const temperatura2 = parseFloat(variables[3].valor); // Temperatura Final (T2)

    if (isNaN(pressao1) || isNaN(temperatura1) || isNaN(pressao2) || isNaN(temperatura2)) {
        console.error("Valores inválidos para a Lei de Gay-Lussac.");
        exibirResultadoLatexQuimica(0, "Pa/K");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (pressao1 / temperatura1) === (pressao2 / temperatura2);  // Fórmula: P1/T1 = P2/T2 (Lei de Gay-Lussac)
    exibirResultadoLatexQuimica(resultado, "Pa/K");
    return resultado;
}

function calcularLeiLavoisier(variables) {
    const massa1 = parseFloat(variables[0].valor); // Massa Inicial (m1)
    const massa2 = parseFloat(variables[1].valor); // Massa Final (m2)

    if (isNaN(massa1) || isNaN(massa2)) {
        console.error("Valores inválidos para a Lei de Lavoisier.");
        exibirResultadoLatexQuimica(0, "g");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = massa1 === massa2;  // Fórmula: m1 = m2 (Lei de Lavoisier)
    exibirResultadoLatexQuimica(resultado, "g");
    return resultado;
}

function calcularSolubilidade(variables) {
    const massaSoluto = parseFloat(variables[0].valor); // Massa do Soluto (m_soluto)
    const massaSolvente = parseFloat(variables[1].valor); // Massa do Solvente (m_solvente)

    if (isNaN(massaSoluto) || isNaN(massaSolvente) || massaSolvente <= 0) {
        console.error("Valores inválidos para solubilidade.");
        exibirResultadoLatexQuimica(0, "g/100g");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (massaSoluto / massaSolvente) * 100;  // Fórmula: S = m_soluto / m_solvente
    exibirResultadoLatexQuimica(resultado, "g/100g");
    return resultado;
}

function calcularTensaoSuperficial(variables) {
    const forca = parseFloat(variables[0].valor); // Força (F)
    const comprimento = parseFloat(variables[1].valor); // Comprimento (L)

    if (isNaN(forca) || isNaN(comprimento) || comprimento <= 0) {
        console.error("Valores inválidos para tensão superficial.");
        exibirResultadoLatexQuimica(0, "N/m");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = forca / comprimento;  // Fórmula: γ = F / L (Tensão Superficial)
    exibirResultadoLatexQuimica(resultado, "N/m");
    return resultado;
}

function calcularEletrólise(variables) {
    const corrente = parseFloat(variables[0].valor); // Corrente Elétrica (I)
    const tempo = parseFloat(variables[1].valor); // Tempo (t)

    if (isNaN(corrente) || isNaN(tempo) || corrente <= 0 || tempo <= 0) {
        console.error("Valores inválidos para eletrólise.");
        exibirResultadoLatexQuimica(0, "C");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = corrente * tempo;  // Fórmula: Q = I * t (Lei da Eletrólise)
    exibirResultadoLatexQuimica(resultado, "C");
    return resultado;
}

function calcularLeiHess(variables) {
    const entalpia1 = parseFloat(variables[0].valor); // Entalpia 1 (ΔH1)
    const entalpia2 = parseFloat(variables[1].valor); // Entalpia 2 (ΔH2)
    
    if (isNaN(entalpia1) || isNaN(entalpia2)) {
        console.error("Valores inválidos para a Lei de Hess.");
        exibirResultadoLatexQuimica(0, "kJ/mol");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = entalpia1 + entalpia2;  // Fórmula: ΔH = ΔH1 + ΔH2 + ...
    exibirResultadoLatexQuimica(resultado, "kJ/mol");
    return resultado;
}

function calcularEquacaoNernst(variables) {
    const potencial = parseFloat(variables[0].valor); // Potencial de Eletrodo (E)
    const temperatura = parseFloat(variables[1].valor); // Temperatura (T)
    const numeroMols = parseFloat(variables[2].valor); // Número de Mols (n)
    const Q = parseFloat(variables[3].valor); // Q (Razão das concentrações)
    const R = CONSTANTES.R;  // Constante dos Gases
    const F = CONSTANTES.CARGA_ELETRICA;  // Constante de Faraday
    
    if (isNaN(potencial) || isNaN(temperatura) || isNaN(numeroMols) || isNaN(Q)) {
        console.error("Valores inválidos para a Equação de Nernst.");
        exibirResultadoLatexQuimica(0, "V");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = potencial - (R * temperatura / (numeroMols * F)) * Math.log(Q);  // Fórmula de Nernst: E = E^0 - (RT/nF) * ln(Q)
    exibirResultadoLatexQuimica(resultado, "V");
    return resultado;
}

function calcularLeiFick(variables) {
    const fluxoParticulas = parseFloat(variables[0].valor); // Fluxo de Partículas (J)
    const difusividade = parseFloat(variables[1].valor); // Difusividade (D)
    const variacaoConcentracao = parseFloat(variables[2].valor); // Variação de Concentração (ΔC)
    const distancia = parseFloat(variables[3].valor); // Distância (Δx)
    
    if (isNaN(fluxoParticulas) || isNaN(difusividade) || isNaN(variacaoConcentracao) || isNaN(distancia)) {
        console.error("Valores inválidos para a Lei de Fick.");
        exibirResultadoLatexQuimica(0, "mol/(m²·s)");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = fluxoParticulas === -difusividade * (variacaoConcentracao / distancia);  // Fórmula: J = -D * (ΔC/Δx) (Lei de Fick)
    exibirResultadoLatexQuimica(resultado, "mol/(m²·s)");
    return resultado;
}

function calcularEquacaoArrhenius(variables) {
    const energiaAtivacao = parseFloat(variables[0].valor); // Energia de Ativação (Ea)
    const constanteGases = CONSTANTES.R;  // Constante dos Gases (R)
    const temperatura = parseFloat(variables[1].valor); // Temperatura (T)
    const preFator = parseFloat(variables[2].valor); // Pre-fator (A)
    
    if (isNaN(energiaAtivacao) || isNaN(temperatura) || isNaN(preFator)) {
        console.error("Valores inválidos para a Equação de Arrhenius.");
        exibirResultadoLatexQuimica(0, "1/s");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = preFator * Math.exp(-energiaAtivacao / (constanteGases * temperatura));  // Fórmula: k = A * e^(-Ea / RT)
    exibirResultadoLatexQuimica(resultado, "1/s");
    return resultado;
}

function calcularVanDerWaals(variables) {
    const pressao = parseFloat(variables[0].valor); // Pressão (P)
    const volume = parseFloat(variables[1].valor); // Volume (V)
    const temperatura = parseFloat(variables[2].valor); // Temperatura (T)
    const constante = CONSTANTES.R;  // Constante dos Gases (R)
    const a = parseFloat(variables[3].valor); // Constante 'a' de Van der Waals
    const b = parseFloat(variables[4].valor); // Constante 'b' de Van der Waals
    
    if (isNaN(pressao) || isNaN(volume) || isNaN(temperatura) || isNaN(a) || isNaN(b)) {
        console.error("Valores inválidos para a Fórmula de Van der Waals.");
        exibirResultadoLatexQuimica(0, "Pa·m³/mol");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (pressao + (a / Math.pow(volume, 2))) * (volume - b) === temperatura * constante;  // Fórmula de Van der Waals
    exibirResultadoLatexQuimica(resultado, "Pa·m³/mol");
    return resultado;
}

function calcularLeiLenz(variables) {
    const femInduzida = parseFloat(variables[0].valor); // FEM Induzida (ε)
    const fluxoMagnetico = parseFloat(variables[1].valor); // Fluxo Magnético (ΦB)
    const tempo = parseFloat(variables[2].valor); // Tempo (dt)
    
    if (isNaN(femInduzida) || isNaN(fluxoMagnetico) || isNaN(tempo)) {
        console.error("Valores inválidos para a Lei de Lenz.");
        exibirResultadoLatexQuimica(0, "V·s");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = femInduzida === -fluxoMagnetico / tempo;  // Fórmula: ε = -dΦB/dt (Lei de Lenz)
    exibirResultadoLatexQuimica(resultado, "V·s");
    return resultado;
}

function calcularLeiAmpere(variables) {
    const forca = parseFloat(variables[0].valor); // Força (F)
    const campoMagnetico = parseFloat(variables[1].valor); // Campo Magnético (B)
    const corrente = parseFloat(variables[2].valor); // Corrente Elétrica (I)
    const comprimentoCondutor = parseFloat(variables[3].valor); // Comprimento do Condutor (L)
    const angulo = parseFloat(variables[4].valor); // Ângulo (θ)
    
    if (isNaN(forca) || isNaN(campoMagnetico) || isNaN(corrente) || isNaN(comprimentoCondutor) || isNaN(angulo)) {
        console.error("Valores inválidos para a Lei de Ampère.");
        exibirResultadoLatexQuimica(0, "N·s/C");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = forca === campoMagnetico * corrente * comprimentoCondutor * Math.sin(angulo);  // Fórmula: F = BIL * sin(θ)
    exibirResultadoLatexQuimica(resultado, "N·s/C");
    return resultado;
}

function calcularLeiFermi(variables) {
    const distribucaoFermi = parseFloat(variables[0].valor); // Distribuição de Fermi-Dirac (n(E))
    const energia = parseFloat(variables[1].valor); // Energia (E)
    const energiaFermi = parseFloat(variables[2].valor); // Energia de Fermi (Ef)
    const temperatura = parseFloat(variables[3].valor); // Temperatura (T)
    const constanteBoltzmann = CONSTANTES.KB;  // Constante de Boltzmann
    
    if (isNaN(distribucaoFermi) || isNaN(energia) || isNaN(energiaFermi) || isNaN(temperatura)) {
        console.error("Valores inválidos para a Lei de Fermi.");
        exibirResultadoLatexQuimica(0, "mol/L");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = distribucaoFermi === 1 / (Math.exp((energia - energiaFermi) / (constanteBoltzmann * temperatura)) + 1);  // Fórmula de Fermi-Dirac
    exibirResultadoLatexQuimica(resultado, "mol/L");
    return resultado;
}

function calcularLeiGraham(variables) {
    const velocidadeDifusao1 = parseFloat(variables[0].valor); // Velocidade de Difusão 1 (r1)
    const velocidadeDifusao2 = parseFloat(variables[1].valor); // Velocidade de Difusão 2 (r2)
    const massaMolar1 = parseFloat(variables[2].valor); // Massa Molar 1 (M1)
    const massaMolar2 = parseFloat(variables[3].valor); // Massa Molar 2 (M2)
    
    if (isNaN(velocidadeDifusao1) || isNaN(velocidadeDifusao2) || isNaN(massaMolar1) || isNaN(massaMolar2)) {
        console.error("Valores inválidos para a Lei de Graham.");
        exibirResultadoLatexQuimica(0, "mol/L");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (velocidadeDifusao1 / velocidadeDifusao2) === Math.sqrt(massaMolar2 / massaMolar1);  // Fórmula de Graham: r1/r2 = √(M2/M1)
    exibirResultadoLatexQuimica(resultado, "mol/L");
    return resultado;
}

function calcularBronstedLowry(variables) {
    const acido = parseFloat(variables[0].valor); // Ácido (HA)
    const base = parseFloat(variables[1].valor); // Base (A^-)
    const hidronio = parseFloat(variables[2].valor); // Hidrônio (H3O+)
    
    if (isNaN(acido) || isNaN(base) || isNaN(hidronio)) {
        console.error("Valores inválidos para a Teoria de Bronsted-Lowry.");
        exibirResultadoLatexQuimica(0, "mol/L");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = acido + base === hidronio;  // Fórmula de Bronsted-Lowry: H3O+ + A^- ⇌ HA + H2O
    exibirResultadoLatexQuimica(resultado, "mol/L");
    return resultado;
}

function calcularPH(variables) {
    const concentracaoHidrogenio = parseFloat(variables[0].valor); // Concentração de Íons Hidrogênio [H+]
    
    if (isNaN(concentracaoHidrogenio)) {
        console.error("Valor inválido para a Concentração de H+.");
        exibirResultadoLatexQuimica(0, "pH");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = -Math.log10(concentracaoHidrogenio);  // Fórmula: pH = -log[H+]
    exibirResultadoLatexQuimica(resultado, "pH");
    return resultado;
}

function calcularPOH(variables) {
    const concentracaoHidroxila = parseFloat(variables[0].valor); // Concentração de Íons Hidroxila [OH-]
    
    if (isNaN(concentracaoHidroxila)) {
        console.error("Valor inválido para a Concentração de OH-.");
        exibirResultadoLatexQuimica(0, "pOH");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = -Math.log10(concentracaoHidroxila);  // Fórmula: pOH = -log[OH-]
    exibirResultadoLatexQuimica(resultado, "pOH");
    return resultado;
}

function calcularLeiHessEntalpia(variables) {
    const entalpia1 = parseFloat(variables[0].valor); // ΔH1
    const entalpia2 = parseFloat(variables[1].valor); // ΔH2
    
    if (isNaN(entalpia1) || isNaN(entalpia2)) {
        console.error("Valores inválidos para a Lei de Hess.");
        exibirResultadoLatexQuimica(0, "kJ/mol");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = entalpia1 + entalpia2;
    exibirResultadoLatexQuimica(resultado, "kJ/mol");
    return resultado;
}

function calcularEnergiaLigacao(variables) {
    const energiaTotal = parseFloat(variables[0].valor); // Energia Total (E)
    const energiaLigações = parseFloat(variables[1].valor); // Energia das Ligações (E_ligacao)
    
    if (isNaN(energiaTotal) || isNaN(energiaLigações)) {
        console.error("Valores inválidos para a Energia de Ligação.");
        exibirResultadoLatexQuimica(0, "kJ/mol");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = energiaTotal - energiaLigações;
    exibirResultadoLatexQuimica(resultado, "kJ/mol");
    return resultado;
}

function calcularVolumeMolarGas(variables) {
    const volume = parseFloat(variables[0].valor); // Volume (V)
    const numeroMols = parseFloat(variables[1].valor); // Número de Mols (n)
    
    if (isNaN(volume) || isNaN(numeroMols)) {
        console.error("Valores inválidos para o Volume Molar do Gás.");
        exibirResultadoLatexQuimica(0, "L/mol");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = volume / numeroMols;  // Fórmula: Vm = V / n
    exibirResultadoLatexQuimica(resultado, "L/mol");
    return resultado;
}

function calcularCalorReacao(variables) {
    const entalpiaProdutos = parseFloat(variables[0].valor); // Entalpia dos Produtos
    const entalpiaReagentes = parseFloat(variables[1].valor); // Entalpia dos Reagentes
    
    if (isNaN(entalpiaProdutos) || isNaN(entalpiaReagentes)) {
        console.error("Valores inválidos para o Calor de Reação.");
        exibirResultadoLatexQuimica(0, "kJ/mol");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = entalpiaProdutos - entalpiaReagentes;  // ΔH = ΣH(produtos) - ΣH(reagentes)
    exibirResultadoLatexQuimica(resultado, "kJ/mol");
    return resultado;
}

function calcularConstanteAvogadro(variables) {
    const numeroMols = parseFloat(variables[0].valor); // Número de Mols (n)
    const numeroParticulas = parseFloat(variables[1].valor); // Número de Partículas (N)
    
    if (isNaN(numeroMols) || isNaN(numeroParticulas)) {
        console.error("Valores inválidos para a Constante de Avogadro.");
        exibirResultadoLatexQuimica(0, "mol^-1");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = numeroParticulas / numeroMols;  // Constante de Avogadro: N_A = N / n
    exibirResultadoLatexQuimica(resultado, "mol^-1");
    return resultado;
}

function calcularLeiProust(variables) {
    const massa1 = parseFloat(variables[0].valor); // Massa 1 (m1)
    const massa2 = parseFloat(variables[1].valor); // Massa 2 (m2)
    const massaMolar1 = parseFloat(variables[2].valor); // Massa Molar 1 (M1)
    const massaMolar2 = parseFloat(variables[3].valor); // Massa Molar 2 (M2)
    
    if (isNaN(massa1) || isNaN(massa2) || isNaN(massaMolar1) || isNaN(massaMolar2)) {
        console.error("Valores inválidos para a Lei de Proust.");
        exibirResultadoLatexQuimica(0, "mol/L");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = (massa1 / massa2) === (massaMolar1 / massaMolar2);  // Lei de Proust: (m1/m2) = (M1/M2)
    exibirResultadoLatexQuimica(resultado, "mol/L");
    return resultado;
}

function calcularCapacidadeCalorifica(variables) {
    const capacidadeCalorifica = parseFloat(variables[0].valor); // Capacidade Calorífica (C)
    const massa = parseFloat(variables[1].valor); // Massa (m)
    
    if (isNaN(capacidadeCalorifica) || isNaN(massa)) {
        console.error("Valores inválidos para a Capacidade Calorífica.");
        exibirResultadoLatexQuimica(0, "J/K");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = capacidadeCalorifica * massa;  // Fórmula: C = m * c
    exibirResultadoLatexQuimica(resultado, "J/K");
    return resultado;
}

function calcularOxidacaoReducao(variables) {
    const potencialEletrodo = parseFloat(variables[0].valor); // Potencial Eletrodo (E)
    const numeroMols = parseFloat(variables[1].valor); // Número de Mols (n)
    const q = parseFloat(variables[2].valor); // Q
    
    if (isNaN(potencialEletrodo) || isNaN(numeroMols) || isNaN(q)) {
        console.error("Valores inválidos para a Oxidação-Redução.");
        exibirResultadoLatexQuimica(0, "V");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = potencialEletrodo - (0.0592 / numeroMols) * Math.log(q);  // Fórmula de Oxidação-Redução: E = E0 - (0.0592 / n) * log Q
    exibirResultadoLatexQuimica(resultado, "V");
    return resultado;
}

function calcularEntropia(variables) {
    const calor = parseFloat(variables[0].valor); // Calor (Q)
    const temperatura = parseFloat(variables[1].valor); // Temperatura (T)
    
    if (isNaN(calor) || isNaN(temperatura)) {
        console.error("Valores inválidos para a Entropia.");
        exibirResultadoLatexQuimica(0, "J/K");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = calor / temperatura;  // Fórmula de Entropia: ΔS = Q / T
    exibirResultadoLatexQuimica(resultado, "J/K");
    return resultado;
}

function calcularPressaoOsmotica(variables) {
    const concentracao = parseFloat(variables[0].valor); // Concentração (C)
    const temperatura = parseFloat(variables[1].valor); // Temperatura (T)
    const constanteGas = CONSTANTES.R;  // Constante dos Gases (R)
    
    if (isNaN(concentracao) || isNaN(temperatura)) {
        console.error("Valores inválidos para a Pressão Osmótica.");
        exibirResultadoLatexQuimica(0, "Pa");
        return 0; // Retorna 0 em caso de erro
    }

    const resultado = concentracao * constanteGas * temperatura;  // Fórmula da Pressão Osmótica: Π = C * R * T
    exibirResultadoLatexQuimica(resultado, "Pa");
    return resultado;
}

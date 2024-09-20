const formulas = {
  quimica: {
      'numero-mols': { vars: ['massa (g)', 'massaMolar (g/mol)'], text: 'Informe a massa e a massa molar.' },
      'massa-molar': { vars: ['massa (g)', 'numeroMols (mol)'], text: 'Informe a massa e o número de mols.' },
      'densidade': { vars: ['massa (g)', 'volume (mL)'], text: 'Informe a massa e o volume.' },
      'concentracao-molar': { vars: ['numeroMols (mol)', 'volume (L)'], text: 'Informe o número de mols e o volume da solução.' },
      'concentracao-comum': { vars: ['massaSoluto (g)', 'volume (mL)'], text: 'Informe a massa do soluto e o volume da solução.' },
      'mistura-solucoes': { vars: ['C1 (M)', 'V1 (L)', 'C2 (M)', 'V2 (L)'], text: 'Informe as concentrações e volumes das duas soluções.' },
      'diluicao': { vars: ['C1 (M)', 'V1 (L)', 'C2 (M)'], text: 'Informe a concentração inicial, o volume inicial e a concentração final.' },
      'massa-soluto': { vars: ['concentracaoMolar (M)', 'volume (L)'], text: 'Informe a concentração molar e o volume da solução.' },
      'percentagem-massa': { vars: ['massaSoluto (g)', 'massaSolução (g)'], text: 'Informe a massa do soluto e a massa da solução.' },
      'constante-equilibrio': { vars: ['concentracaoProdutos (M)', 'concentracaoReagentes (M)'], text: 'Informe as concentrações dos produtos e reagentes.' },
      'calor-sensivel': { vars: ['massa (g)', 'calorEspecifico (J/g°C)', 'variacaoTemperatura (°C)'], text: 'Informe a massa, o calor específico e a variação de temperatura.' },
      'calor-latente': { vars: ['massa (g)', 'calorLatente (J/g)'], text: 'Informe a massa e o calor latente.' },
      'lei-raoult': { vars: ['pressaoVaporSolvente (Pa)', 'fraçaoMolar (mol/mol)'], text: 'Informe a pressão de vapor do solvente e a fração molar do soluto.' },
      'lei-ideal-gases': { vars: ['pressao (Pa)', 'volume (m³)', 'temperatura (K)', 'numeroMols (mol)'], text: 'Informe a pressão, o volume, a temperatura e o número de mols.' },
      'velocidade-reacao': { vars: ['concentracao (M)', 'tempo (s)'], text: 'Informe a concentração e o tempo.' },
      'equacao-gases-ideais': { vars: ['pressao (Pa)', 'volume (m³)', 'temperatura (K)'], text: 'Informe a pressão, o volume e a temperatura.' },
      'lei-dalton': { vars: ['pressaoTotal (Pa)', 'pressaoParcial (Pa)'], text: 'Informe a pressão total e a pressão parcial.' },
      'lei-henry': { vars: ['pressao (Pa)', 'constanteHenry (Pa·m³/mol)'], text: 'Informe a pressão e a constante de Henry.' },
      'clausius-clapeyron': { vars: ['pressao1 (Pa)', 'pressao2 (Pa)', 'temperatura1 (K)', 'temperatura2 (K)'], text: 'Informe as pressões e temperaturas em dois estados.' },
      'concentracao-massa': { vars: ['massa (g)', 'volume (mL)'], text: 'Informe a massa e o volume da solução.' }
  },
  fisica: {
      'velocidade': { vars: ['distancia (m)', 'tempo (s)'], text: 'Informe a distância e o tempo.' },
      'trabalho': { vars: ['forca (N)', 'distancia (m)'], text: 'Informe a força e a distância.' },
      'forca': { vars: ['massa (kg)', 'aceleracao (m/s²)'], text: 'Informe a massa e a aceleração.' },
      'energia-cinetica': { vars: ['massa (kg)', 'velocidade (m/s)'], text: 'Informe a massa e a velocidade.' },
      'impulso': { vars: ['forca (N)', 'tempo (s)'], text: 'Informe a força e o tempo.' },
      'potencia': { vars: ['trabalho (J)', 'tempo (s)'], text: 'Informe o trabalho e o tempo.' },
      'aceleracao': { vars: ['variacaoVelocidade (m/s)', 'tempo (s)'], text: 'Informe a variação de velocidade e o tempo.' },
      'momento-linear': { vars: ['massa (kg)', 'velocidade (m/s)'], text: 'Informe a massa e a velocidade.' },
      'pressao': { vars: ['forca (N)', 'area (m²)'], text: 'Informe a força e a área.' },
      'frequencia-ondas': { vars: ['velocidade (m/s)', 'comprimentoOnda (m)'], text: 'Informe a velocidade e o comprimento de onda.' },
      'lei-hooke': { vars: ['forca (N)', 'constante (N/m)'], text: 'Informe a força e a constante elástica.' },
      'resistencia-eletrica': { vars: ['tensao (V)', 'corrente (A)'], text: 'Informe a tensão e a corrente.' },
      'energia-mecanica': { vars: ['energiaCinetica (J)', 'energiaPotencial (J)'], text: 'Informe a energia cinética e a energia potencial.' },
      'lei-gravitacao': { vars: ['massa1 (kg)', 'massa2 (kg)', 'distancia (m)'], text: 'Informe as massas dos corpos e a distância entre eles.' },
      'energia-potencial-gravitacional': { vars: ['massa (kg)', 'gravidade (m/s²)', 'altura (m)'], text: 'Informe a massa, a gravidade e a altura.' },
      'energia-potencial-elastica': { vars: ['constante (N/m)', 'deformacao (m)'], text: 'Informe a constante elástica e a deformação.' },
      'capacitancia': { vars: ['carga (C)', 'tensao (V)'], text: 'Informe a carga e a tensão.' },
      'einstein-energia': { vars: ['massa (kg)'], text: 'Informe a massa.' },
      'velocidade-onda': { vars: ['frequencia (Hz)', 'comprimentoOnda (m)'], text: 'Informe a frequência e o comprimento de onda.' }
  },
  matematica: {
      'baskara': { vars: ['a', 'b', 'c'], text: 'Informe os valores de a, b e c.' },
      'espiral-arquimedes': { vars: ['a', 'b'], text: 'Informe os parâmetros a e b.' },
      'area-circulo': { vars: ['raio (m)'], text: 'Informe o raio do círculo.' },
      'area-retangulo': { vars: ['base (m)', 'altura (m)'], text: 'Informe a base e a altura do retângulo.' },
      'area-triangulo': { vars: ['base (m)', 'altura (m)'], text: 'Informe a base e a altura do triângulo.' },
      'volume-prisma': { vars: ['areaBase (m²)', 'altura (m)'], text: 'Informe a área da base e a altura do prisma.' },
      'volume-piramide': { vars: ['areaBase (m²)', 'altura (m)'], text: 'Informe a área da base e a altura da pirâmide.' },
      'volume-tronco-piramide': { vars: ['areaBaseMenor (m²)', 'areaBaseMaior (m²)', 'altura (m)'], text: 'Informe a área da base menor, a base maior e a altura.' },
      'volume-cilindro': { vars: ['raio (m)', 'altura (m)'], text: 'Informe o raio e a altura do cilindro.' },
      'volume-esfera': { vars: ['raio (m)'], text: 'Informe o raio da esfera.' },
      'teorema-pitagoras': { vars: ['cateto1 (m)', 'cateto2 (m)'], text: 'Informe os comprimentos dos dois catetos.' },
      'progressao-aritmetica': { vars: ['primeiroTermo', 'razão', 'n'], text: 'Informe o primeiro termo, a razão e o número de termos.' },
      'progressao-geometrica': { vars: ['primeiroTermo', 'razão', 'n'], text: 'Informe o primeiro termo, a razão e o número de termos.' },
      'permutacao': { vars: ['n', 'r'], text: 'Informe o total de itens (n) e o número de itens a serem escolhidos (r).' },
      'combinacao': { vars: ['n', 'r'], text: 'Informe o total de itens (n) e o número de itens a serem escolhidos (r).' },
      'lei-dos-senos': { vars: ['angulo1 (°)', 'angulo2 (°)', 'lado1 (m)'], text: 'Informe dois ângulos e o lado oposto a um deles.' },
      'lei-dos-cossenos': { vars: ['lado1 (m)', 'lado2 (m)', 'angulo (°)'], text: 'Informe dois lados e o ângulo entre eles.' },
      'area-trapezio': { vars: ['baseMaior (m)', 'baseMenor (m)', 'altura (m)'], text: 'Informe a base maior, a base menor e a altura do trapézio.' },
      'volume-cone': { vars: ['raio (m)', 'altura (m)'], text: 'Informe o raio e a altura do cone.' }
  },
  matriz: {
      'determinante-2x2': { vars: ['a', 'b', 'c', 'd'], text: 'Informe os valores a, b, c e d da matriz 2x2.' },
      'determinante-3x3': { vars: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], text: 'Informe os valores a, b, c, d, e, f, g, h e i da matriz 3x3.' },
      'inversa-2x2': { vars: ['a', 'b', 'c', 'd'], text: 'Informe os valores a, b, c e d da matriz 2x2.' },
      'inversa-3x3': { vars: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], text: 'Informe os valores a, b, c, d, e, f, g, h e i da matriz 3x3.' },
      'produto-matricial': { vars: ['A', 'B'], text: 'Informe as duas matrizes para o produto.' },
      'soma-matricial': { vars: ['A', 'B'], text: 'Informe as duas matrizes para a soma.' },
      'transposta': { vars: ['A'], text: 'Informe a matriz para obter a transposta.' }
  }
};

// Função para atualizar as instruções com base na fórmula e categoria
function updateInstructions(category, formula, instructionsDiv) {
  const selectedFormula = formulas[category] ? formulas[category][formula] : null;

  if (selectedFormula) {
      instructionsDiv.textContent = selectedFormula.text;
      displayVariables(selectedFormula.vars);
  } else {
      instructionsDiv.textContent = 'Selecione uma fórmula para ver as instruções.';
      displayVariables([]);
  }
}


// Função para exibir as variáveis na interface
function displayVariables(variables) {
  const variablesContainer = document.getElementById('variables-container');
  variablesContainer.innerHTML = '';
  variables.forEach(variable => {
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = variable;
      variablesContainer.appendChild(input);
  });
}

// Adicione um evento de clique às abas
const tabs = document.querySelectorAll('.tab-button');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
      const category = tab.id.replace('tab-', ''); // Remove 'tab-' para obter a categoria
      const instructionsDiv = document.getElementById(`instructions-${category}`);
      updateInstructions(category, '', instructionsDiv); // Inicializa sem fórmula selecionada
  });
});

// Adicione um evento de mudança às seleções de fórmula
const formulaSelects = document.querySelectorAll('select');
formulaSelects.forEach(select => {
  select.addEventListener('change', () => {
      const category = select.id.replace('formula_', ''); // Obtém a categoria a partir do id do select
      const formula = select.value;
      const instructionsDiv = document.getElementById(`instructions-${category}`);
      updateInstructions(category, formula, instructionsDiv); // Atualiza instruções e variáveis
  });
});

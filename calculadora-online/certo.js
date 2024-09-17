document.addEventListener('DOMContentLoaded', function () {
    showTab('quimica');
  
    document.getElementById('formula').addEventListener('change', function() { updateVariables('quimica'); });
    document.getElementById('formula_fisica').addEventListener('change', function() { updateVariables('fisica'); });
  });
  
  function showTab(tab) {
    document.getElementById('quimica-formulas').style.display = (tab === 'quimica') ? 'block' : 'none';
    document.getElementById('fisica-formulas').style.display = (tab === 'fisica') ? 'block' : 'none';
  
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.add('active');
  }
  
  function updateVariables(tab) {
    const formula = (tab === 'quimica') ? document.getElementById('formula').value : document.getElementById('formula_fisica').value;
    const variablesContainer = (tab === 'quimica') ? 'variables-container' : 'variables-container_fisica';
    const container = document.getElementById(variablesContainer);
    container.innerHTML = '';
    let variablesHtml = '';
  
    switch (formula) {
      case 'massa-molar':
        variablesHtml = 'Massa (g), Mol (mol)';
        break;
      case 'numero-mols':
        variablesHtml = 'Massa (g), Massa Molar (g/mol)';
        break;
      case 'densidade':
        variablesHtml = 'Massa (g), Volume (L)';
        break;
      case 'concentracao-molar':
        variablesHtml = 'Mol (mol), Volume (L)';
        break;
      case 'concentracao-comum':
        variablesHtml = 'Massa (g), Volume (L)';
        break;
      case 'mistura-solucoes':
        variablesHtml = 'Concentração1 (mol/L), Volume1 (L), Concentração2 (mol/L), Volume2 (L)';
        break;
      case 'diluicao':
        variablesHtml = 'Concentração inicial (mol/L), Volume inicial (L), Volume final (L)';
        break;
      case 'ph':
        variablesHtml = 'Concentração H+ (mol/L)';
        break;
      case 'poh':
        variablesHtml = 'Concentração OH- (mol/L)';
        break;
      case 'velocidade':
        variablesHtml = 'Distância (m), Tempo (s)';
        break;
      case 'trabalho':
        variablesHtml = 'Força (N), Distância (m)';
        break;
      case 'massa-buraco':
        variablesHtml = 'Raio Schwarzschild (m)';
        break;
      case 'forca':
        variablesHtml = 'Massa (kg), Aceleração (m/s²)';
        break;
      case 'energia-cinetica':
        variablesHtml = 'Massa (kg), Velocidade (m/s)';
        break;
      case 'impulso':
        variablesHtml = 'Força (N), Tempo (s)';
        break;
      case 'potencia':
        variablesHtml = 'Trabalho (J), Tempo (s)';
        break;
      case 'aceleracao':
        variablesHtml = 'Velocidade final (m/s), Velocidade inicial (m/s), Tempo (s)';
        break;
      case 'momento-linear':
        variablesHtml = 'Massa (kg), Velocidade (m/s)';
        break;
    }
  
    container.innerHTML = `<input type="text" id="variables_${tab}" placeholder="Insira as variáveis: ${variablesHtml}">`;
  }
  
  function calcular(tab) {
      const formula = (tab === 'quimica') ? document.getElementById('formula').value : document.getElementById('formula_fisica').value;
      const variables = document.getElementById(`variables_${tab}`).value.split(',').map(v => v.trim());
      let resultado;
    
      if (!validateInputs(variables)) {
        alert('Entradas inválidas! Verifique suas variáveis.');
        return;
      }
  
    switch (formula) {
      case 'massa-molar':
        resultado = calcularMassaMolar(variables);
        break;
      case 'numero-mols':
        resultado = calcularNumeroMols(variables);
        break;
      case 'densidade':
        resultado = calcularDensidade(variables);
        break;
        case 'concentracao-molar':
          resultado = calcularConcentracaoMolar(variables);
          break;
        case 'concentracao-comum':
          resultado = calcularConcentracaoComum(variables);
          break;
        case 'mistura-solucoes':
          resultado = calcularMisturaSolucoes(variables);
          break;
        case 'diluicao':
          resultado = calcularDiluicao(variables);
          break;
        case 'ph':
          resultado = calcularPh(variables);
          break;
        case 'poh':
          resultado = calcularPoh(variables);
          break;
        case 'velocidade':
          resultado = calcularVelocidadeMedia(variables);
          break;
        case 'trabalho':
          resultado = calcularTrabalho(variables);
          break;
        case 'massa-buraco':
          resultado = calcularMassaBuracoNegro(variables);
          break;
        case 'forca':
          resultado = calcularForca(variables);
          break;
        case 'energia-cinetica':
          resultado = calcularEnergiaCinetica(variables);
          break;
        case 'impulso':
          resultado = calcularImpulso(variables);
          break;
        case 'potencia':
          resultado = calcularPotencia(variables);
          break;
        case 'aceleracao':
          resultado = calcularAceleracao(variables);
          break;
        case 'momento-linear':
          resultado = calcularMomentoLinear(variables);
          break;
      }
      
      if (tab === 'quimica') {
          document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
        } else if (tab === 'fisica') {
          document.getElementById('resultado-fisica').innerHTML = 'Resultado: ' + resultado;
        }
    }
    
    function validateInputs(variables) {
      for (const variable of variables) {
        if (isNaN(variable) && variable.indexOf('.') === -1) {
          return false;
        }
      }
      return true;
    }
    
    // Funções de cálculo para cada fórmula
    function calcularMassaMolar(vars) {
      const [massa, mol] = vars.map(parseFloat);
      return massa / mol;
    }
    
    function calcularNumeroMols(vars) {
      const [massa, massaMolar] = vars.map(parseFloat);
      return massa / massaMolar;
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
      return ((c1 * v1) + (c2 * v2)) / (v1 + v2);
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
    
    function calcularVelocidadeMedia(vars) {
      const [distancia, tempo] = vars.map(parseFloat);
      return distancia / tempo;
    }
    
    function calcularTrabalho(vars) {
      const [forca, distancia] = vars.map(parseFloat);
      return forca * distancia;
    }
    
    function calcularMassaBuracoNegro(vars) {
      const [raio] = vars.map(parseFloat);
      const G = 6.67430e-11;
      const c = 299792458;
      return (raio * c**2) / (2 * G);
    }
    
    function calcularForca(vars) {
      const [massa, aceleracao] = vars.map(parseFloat);
      return massa * aceleracao;
    }
    
    function calcularEnergiaCinetica(vars) {
      const [massa, velocidade] = vars.map(parseFloat);
      return 0.5 * massa * velocidade**2;
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
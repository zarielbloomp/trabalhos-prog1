document.addEventListener("DOMContentLoaded", function () {
    const formulaSelect = document.getElementById("formula-select");
    const simulationCanvas = document.getElementById("simulationCanvas");
    const ctx = simulationCanvas.getContext("2d");

    if (!formulaSelect || !simulationCanvas) {
        console.error("Elementos essenciais não foram encontrados na página.");
        return;
    }

    // Atualiza o fundo da simulação com base na fórmula selecionada
    formulaSelect.addEventListener("change", function () {
        const selectedFormula = formulaSelect.value;
        updateSimulationParameters(selectedFormula);
        drawBackground(selectedFormula);
    });

    // Função para desenhar o plano de fundo
    function drawBackground(formula) {
        // Limpa o canvas
        ctx.clearRect(0, 0, simulationCanvas.width, simulationCanvas.height);

        // Configurações diferentes para cada fórmula
        switch (formula) {
            case "velocidade":
                drawRoad(); // Estrada para velocidade
                break;
            case "energia-cinetica":
                drawStarrySky(); // Fundo estrelado para energia cinética
                break;
            case "forca":
                drawField(); // Campo verde para força
                break;
            case "impulso":
                drawCityScape(); // Cenário urbano para impulso
                break;
            case "potencia":
                drawLabBackground(); // Laboratório para potência
                break;
            default:
                drawGradientBackground('#000000', '#FFFFFF');
        }
    }

    // Desenha um fundo de gradiente simples
    function drawGradientBackground(color1, color2) {
        const gradient = ctx.createLinearGradient(0, 0, 0, simulationCanvas.height);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, simulationCanvas.width, simulationCanvas.height);
    }

    // Desenha um fundo de estrada para "velocidade"
    function drawRoad() {
        drawGradientBackground('#87CEEB', '#FFFFFF'); // Céu azul
        ctx.fillStyle = '#444'; // Estrada cinza
        ctx.fillRect(0, simulationCanvas.height / 2, simulationCanvas.width, simulationCanvas.height / 2); // Desenha a estrada
        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = 5;
        ctx.setLineDash([20, 20]); // Faixas tracejadas
        ctx.beginPath();
        ctx.moveTo(0, simulationCanvas.height * 3/4);
        ctx.lineTo(simulationCanvas.width, simulationCanvas.height * 3/4);
        ctx.stroke();
    }

    // Desenha um fundo de céu estrelado para "energia cinética"
    function drawStarrySky() {
        drawGradientBackground('#000000', '#001a33'); // Fundo escuro
        for (let i = 0; i < 100; i++) {
            const x = Math.random() * simulationCanvas.width;
            const y = Math.random() * simulationCanvas.height;
            const size = Math.random() * 2;
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Desenha um fundo de campo verde para "força"
    function drawField() {
        drawGradientBackground('#87CEEB', '#FFFFFF'); // Céu azul
        ctx.fillStyle = '#228B22'; // Cor de grama verde
        ctx.fillRect(0, simulationCanvas.height / 2, simulationCanvas.width, simulationCanvas.height / 2); // Desenha o chão de grama
    }

    // Desenha um cenário urbano para "impulso"
    function drawCityScape() {
        drawGradientBackground('#2c3e50', '#34495e'); // Fundo azul escuro
        ctx.fillStyle = '#2c3e50'; // Cor dos prédios
        const buildingWidth = 50;
        for (let i = 0; i < simulationCanvas.width; i += buildingWidth) {
            const buildingHeight = Math.random() * simulationCanvas.height / 2;
            ctx.fillRect(i, simulationCanvas.height - buildingHeight, buildingWidth, buildingHeight);
        }
    }

    // Desenha um cenário de laboratório para "potência"
    function drawLabBackground() {
        drawGradientBackground('#ddd', '#fff'); // Fundo branco claro
        ctx.fillStyle = '#ccc'; // Cor da mesa
        ctx.fillRect(100, simulationCanvas.height - 50, 200, 40); // Mesa de laboratório
        ctx.fillStyle = '#444'; // Cor de uma máquina simples
        ctx.fillRect(120, simulationCanvas.height - 90, 80, 40); // Máquina no laboratório
    }

    // Inicializa com a fórmula padrão selecionada
    drawBackground(formulaSelect.value);
});

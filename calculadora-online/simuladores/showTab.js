document.addEventListener("DOMContentLoaded", function () {
    let scene, camera, renderer, controls, clock;
    let object;
    let velocity = 0, acceleration = 0, position = 0;
    let objectMass = 1; // Massa do objeto para futuras simulações
    const simulationSpeed = 1; // Velocidade de execução da simulação
    const bounds = 25; // Limites para o movimento do objeto no plano
    let isPaused = false; // Variável para pausar/retomar a simulação

    function init() {
        setupScene();
        setupCamera();
        setupRenderer();
        setupLights();
        setupPlane();
        createSimulatedObject();
        setupSimulationControls();
        clock = new THREE.Clock();
        animate();
    }

    // Função para configurar a cena e adicionar ao DOM
    function setupScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222); // Fundo escuro para destaque
    }

    // Função para configurar a câmera
    function setupCamera() {
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 10);
        controls = new THREE.OrbitControls(camera, renderer?.domElement || document.body); // Garante que os controles sejam corretamente configurados
    }

    // Função para configurar o renderizador e anexá-lo ao DOM
    function setupRenderer() {
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true; // Habilitar sombras para realismo
        const simulationContainer = document.getElementById('simulation-container');
        if (simulationContainer) {
            simulationContainer.appendChild(renderer.domElement);
        } else {
            console.error("Elemento 'simulation-container' não encontrado.");
        }
    }

    // Função para configurar a iluminação
    function setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Luz ambiente
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1); // Luz direcional
        pointLight.position.set(10, 10, 10);
        pointLight.castShadow = true;
        scene.add(pointLight);
    }

    // Função para criar o plano onde o objeto se moverá
    function setupPlane() {
        const planeGeometry = new THREE.PlaneGeometry(50, 50);
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.receiveShadow = true;
        scene.add(plane);
    }

    // Função para criar o objeto simulado (cubo)
    function createSimulatedObject() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x8a2be2 });
        object = new THREE.Mesh(geometry, material);
        object.castShadow = true;
        object.position.y = 0.5; // Define a altura inicial do cubo
        scene.add(object);
    }

    // Função que controla a atualização da simulação
    function updateSimulation(delta) {
        if (isPaused) return; // Se pausado, não atualizar a simulação
        velocity += acceleration * delta * simulationSpeed;
        position += velocity * delta * simulationSpeed;
        object.position.x = position;

        if (Math.abs(object.position.x) > bounds) {
            object.position.x = -bounds; // Reseta para a borda
            velocity = 0; // Parar o movimento ao atingir o limite
        }
    }

    // Loop principal de animação
    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta(); // Tempo entre frames
        updateSimulation(delta); // Atualiza a física da simulação
        renderer.render(scene, camera); // Renderiza a cena
        controls.update(); // Atualiza controles da câmera
    }

    // Função para configurar controles de simulação
    function setupSimulationControls() {
        const accelerationInput = document.getElementById('input-acceleration');
        const velocityInput = document.getElementById('input-velocity');
        const objectMassInput = document.getElementById('input-mass');
        const resetButton = document.getElementById('reset-button');
        const pauseButton = document.getElementById('pause-button');

        // Evento para atualizar a aceleração
        if (accelerationInput) {
            accelerationInput.addEventListener('input', function () {
                acceleration = parseFloat(accelerationInput.value) || 0;
            });
        }

        // Evento para atualizar a velocidade
        if (velocityInput) {
            velocityInput.addEventListener('input', function () {
                velocity = parseFloat(velocityInput.value) || 0;
            });
        }

        // Evento para atualizar a massa do objeto (para futuras implementações)
        if (objectMassInput) {
            objectMassInput.addEventListener('input', function () {
                objectMass = parseFloat(objectMassInput.value) || 1;
            });
        }

        // Evento para resetar a simulação
        if (resetButton) {
            resetButton.addEventListener('click', resetSimulation);
        }

        // Evento para pausar/retomar a simulação
        if (pauseButton) {
            pauseButton.addEventListener('click', function () {
                isPaused = !isPaused;
                pauseButton.textContent = isPaused ? "Continuar" : "Pausar";
            });
        }
    }

    // Função para resetar a simulação
    function resetSimulation() {
        velocity = 0;
        acceleration = 0;
        position = 0;
        object.position.set(0, 0.5, 0); // Reseta o objeto ao ponto inicial
    }

    // Ajusta a simulação ao redimensionar a janela
    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Inicializar a simulação
    init();
});

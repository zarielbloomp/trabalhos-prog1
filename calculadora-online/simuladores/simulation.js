document.addEventListener("DOMContentLoaded", function () {
    let scene, camera, renderer, controls, clock;
    let object;
    let velocity = 0, acceleration = 0, position = 5;
    let gravity = -9.8; // Aceleração da gravidade em m/s²
    let objectMass = 1; // Massa do objeto
    let falling = true; // Estado de queda livre
    const bounds = 25; // Limites do plano

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

    function setupScene() {
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x222222);
    }

    function setupCamera() {
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 10, 20); // Ajuste da câmera para melhor visualização
        controls = new THREE.OrbitControls(camera);
    }

    function setupRenderer() {
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('simulacao-container').appendChild(renderer.domElement);
    }

    function setupLights() {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);
    }

    function setupPlane() {
        const planeGeometry = new THREE.PlaneGeometry(50, 50);
        const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.receiveShadow = true;
        scene.add(plane);
    }

    function createSimulatedObject() {
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0x8a2be2 });
        object = new THREE.Mesh(geometry, material);
        object.castShadow = true;
        object.position.set(0, 5, 0); // Inicialmente, posicionado acima do chão
        scene.add(object);
    }

    function updateSimulation(delta) {
        if (falling) {
            // Aplicar a física de queda livre
            acceleration = gravity; // A aceleração é definida pela gravidade
            velocity += acceleration * delta; // Atualiza a velocidade com base na aceleração
            position += velocity * delta; // Atualiza a posição

            // Atualizar a posição do objeto
            object.position.y = position;

            // Verifica se o objeto atingiu o chão (y = 0)
            if (object.position.y <= 0.5) { // Assume que o objeto tem altura de 1
                object.position.y = 0.5;
                velocity = 0;
                acceleration = 0;
                falling = false; // Para a simulação de queda
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        updateSimulation(delta);
        renderer.render(scene, camera);
        controls.update();
    }

    function setupSimulationControls() {
        const velocityInput = document.getElementById('input-velocity');
        const objectMassInput = document.getElementById('input-mass');
        const resetButton = document.getElementById('reset-button');
        const startButton = document.getElementById('start-button');

        velocityInput.addEventListener('input', function () {
            velocity = parseFloat(velocityInput.value) || 0;
        });

        objectMassInput.addEventListener('input', function () {
            objectMass = parseFloat(objectMassInput.value) || 1;
        });

        resetButton.addEventListener('click', resetSimulation);
        startButton.addEventListener('click', function () {
            falling = true; // Começar a queda quando o botão de start for clicado
        });
    }

    function resetSimulation() {
        velocity = 0;
        position = 5; // Reposiciona o objeto no ponto inicial
        object.position.set(0, position, 0);
        falling = true; // Habilita a queda novamente
    }

    window.addEventListener('resize', function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    init();
});

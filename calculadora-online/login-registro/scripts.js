const container = document.getElementById('container');
const toggleRegisterBtn = document.getElementById('toggle-register');
const toggleLoginBtn = document.getElementById('toggle-login');
const loginBtn = document.getElementById('login');

toggleRegisterBtn.addEventListener('click', () => {
    container.classList.add("active");
});

toggleLoginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const fixedUser = "admin@gmail.com";
    const fixedPassword = "1311021";

    const email = document.getElementById('usuario').value;
    const password = document.getElementById('senha').value;

    if (email === fixedUser && password === fixedPassword) {
        window.location.href = "../calculadora/certo.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
});

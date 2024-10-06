// Função para lidar com o envio de mensagens
async function sendMessage() {
    const userInput = document.getElementById("user_input").value;
    if (userInput.trim() === "") return; // Evita enviar mensagens vazias

    const messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML += `<div class="message user">Eu: ${userInput}</div>`;
    document.getElementById("user_input").value = ""; // Limpa o campo de entrada

    try {
        const response = await fetch("/send_message", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: userInput }) // Envia a mensagem do usuário para o servidor
        });

        // Verifica se a resposta é bem-sucedida
        if (!response.ok) {
            throw new Error('Erro na resposta do servidor');
        }

        const data = await response.json(); // Recebe a resposta do servidor
        messagesDiv.innerHTML += `<div class="message bot">CapimCognition: ${data.response}</div>`;
    } catch (error) {
        console.error("Erro ao enviar a mensagem:", error);
        messagesDiv.innerHTML += `<div class="message bot">CapimCognition: Ocorreu um erro ao enviar a mensagem.</div>`;
    }

    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Rolagem automática para a última mensagem
}

// Event listener para o botão de envio
document.getElementById("send_button").onclick = sendMessage;

// Event listener para a tecla Enter
document.getElementById("user_input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage(); // Chama a função sendMessage ao pressionar Enter
    }
});

// Dependências
const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const path = require('path');

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Configura o uso de JSON
app.use(express.json());

// Serve arquivos estáticos
app.use(express.static(path.join(__dirname, 'static')));

// Rota para servir o HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

// Configurações para geração de texto usando a API Gemini
const generationConfig = {
    temperature: 1.8,
    top_p: 0.95,
    top_k: 64,
    max_output_tokens: 8192,
};

// Variável para armazenar histórico
let history = [];

// Função para fazer a requisição à API Gemini
const sendToGemini = async (message, history) => {
    try {
        const response = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash:generateMessage',
            {
                prompt: {
                    messages: history.concat({ content: message, author: "user" }),
                },
                ...generationConfig,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
                },
            }
        );
        return response.data.candidates[0]?.content || 'Erro: Resposta vazia da API';
    } catch (error) {
        console.error('Erro ao fazer requisição à API Gemini:', error);
        throw error;
    }
};

// Rota para enviar mensagens
app.post('/send_message', async (req, res) => {
    const userMessage = req.body.message;

    if (!userMessage) {
        return res.status(400).json({ response: 'Mensagem vazia.' });
    }

    try {
        const modelResponse = await sendToGemini(userMessage, history);

        // Armazena no histórico
        history.push({ content: userMessage, author: 'user' });
        history.push({ content: modelResponse, author: 'model' });

        return res.json({ response: modelResponse });
    } catch (error) {
        return res.status(500).json({ response: `Erro ao gerar resposta: ${error.message}` });
    }
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

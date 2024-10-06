import os
import google.generativeai as genai
from dotenv import load_dotenv
from flask import Flask, render_template, request, jsonify

# Carrega as variáveis de ambiente do arquivo .env
load_dotenv()

# Configura o Flask
app = Flask(__name__)

# Configura a chave da API usando o valor carregado do .env
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

generation_config = {
    "temperature": 1.8,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config,
)

history = []

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/send_message", methods=["POST"])
def send_message():
    global history
    user_message = request.json.get("message")

    if not user_message:
        return jsonify({"response": "Mensagem vazia."}), 400  # Retorne um erro se a mensagem estiver vazia

    chat_session = model.start_chat(history=history)

    try:
        response = chat_session.send_message(user_message)
        model_response = response.text

        # Verifica se a resposta do modelo está vazia
        if not model_response:
            raise ValueError("Resposta do modelo está vazia.")

    except Exception as e:
        print(f"Erro ao gerar resposta: {e}")  # Log de erro
        return jsonify({"response": f"Erro ao gerar resposta: {str(e)}"}), 500  # Retorna erro se ocorrer

    # Armazena no histórico
    history.append({"role": "user", "parts": [user_message]})
    history.append({"role": "model", "parts": [model_response]})

    return jsonify({"response": model_response})

if __name__ == "__main__":
    app.run(debug=True)

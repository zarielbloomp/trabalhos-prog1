import sys
import termios
import tty
import turtle
import random
import time

# Captura de tecla
def capturar_tecla():
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(fd)
        ch = sys.stdin.read(1)
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
    return ch

# Tela Turtle
tela = turtle.Screen()
tela.setup(width=800, height=350)
tela.title("Pista de Corrida")

# Desenhar pista
def desenhar_pista():
    pista = turtle.Turtle()
    pista.speed(2)
    largura_pista = 600  
    altura_pista = 200  
    pista.penup()
    pista.goto(-largura_pista / 2, altura_pista / 2)
    pista.pendown()
    for _ in range(2):
        pista.forward(largura_pista)
        pista.right(90)
        pista.forward(altura_pista)
        pista.right(90)
    pista.penup()
    pista.goto(300, altura_pista / 2)
    pista.right(90)
    pista.pendown()
    pista.forward(altura_pista)
    pista.hideturtle()

desenhar_pista()

# Desenhar linha de chegada
linha_chegada = turtle.Turtle()
linha_chegada.penup()
linha_chegada.goto(290, 100)
linha_chegada.pendown()
linha_chegada.right(90)
linha_chegada.forward(200)
linha_chegada.hideturtle()

# Jogadores
jogador1 = turtle.Turtle()
jogador1.shape('turtle')
jogador1.color('red')
jogador1.penup()
jogador1.setx(-290)
jogador1.sety(50)

jogador2 = turtle.Turtle()
jogador2.shape('turtle')
jogador2.color('blue')
jogador2.penup()
jogador2.setx(-290)
jogador2.sety(-50)

incremento = 2.5
incremento1 = 5
incremento2 = -2.5

# Mecânica
num_tartarugas = turtle.textinput('Obstáculos', 'Quantas tartarugas você quer de obstáculo')
num_tartarugas = int(num_tartarugas)
tartarugas = []

def criar_tartarugas(num):
    for i in range(num):
        t = turtle.Turtle()
        t.shape("turtle")
        t.color(random.random(), random.random(), random.random())
        t.penup()
        x = random.randint(-290, 290)
        y = random.randint(-90, 90)
        t.goto(x, y)
        tartarugas.append(t)

criar_tartarugas(num_tartarugas)

def verificar_colisao(jogador):
    for t in tartarugas:
        if jogador.distance(t) < 15:
            jogador.goto(-290, jogador.ycor())
            return True
    return False

pontuacao_jogador1 = 0
pontuacao_jogador2 = 0

# Regras e Controles
def imprimir_regras():
    regras = """
    Regras do Jogo:
    - Cada jogador deve alcançar a linha de chegada.
    - O jogador que alcançar a linha de chegada primeiro ganha.
    - Movimentos são feitos usando as teclas correspondentes.
    - Evite os obstáculos no caminho.

    Controles:
    Jogador 1 (Vermelho):
    W: Move para frente com incremento padrão
    A: Vira à esquerda 90 graus e move para frente com incremento padrão
    S: Move para frente com decremento
    D: Vira à direita 90 graus e move para frente com incremento padrão
    Q: Move para frente com incremento maior

    Jogador 2 (Azul):
    I: Move para frente com incremento padrão
    J: Vira à esquerda 90 graus e move para frente com incremento padrão
    K: Move para frente com decremento
    L: Vira à direita 90 graus e move para frente com incremento padrão
    U: Move para frente com incremento maior
    """
    print(regras)

def rodada_jogo():
    global pontuacao_jogador1, pontuacao_jogador2
    while True:
        for jogador, cor_jogador, controles in [(jogador1, 'Vermelho', 'wasdqWASDQ'), (jogador2, 'Azul', 'ijklIJKLU')]:
            movimentos = 0
            start_time = time.time()
            print(f"Turno do jogador {cor_jogador}.")
            while movimentos < 20 and (time.time() - start_time) < 15:
                char = capturar_tecla()
                if char in controles:
                    movimentos += 1
                    if jogador == jogador1:
                        if char in 'wW':
                            jogador.forward(incremento)
                        elif char in 'dD':
                            jogador.right(90)
                            jogador.forward(incremento)
                        elif char in 'aA':
                            jogador.left(90)
                            jogador.forward(incremento)
                        elif char in 'qQ':
                            jogador.forward(incremento1)
                            movimentos = 20  # Movimento maior conta como todos os movimentos
                        elif char in 'sS':
                            jogador.forward(incremento2)
                    elif jogador == jogador2:
                        if char in 'iI':
                            jogador.forward(incremento)
                        elif char in 'lL':
                            jogador.right(90)
                            jogador.forward(incremento)
                        elif char in 'jJ':
                            jogador.left(90)
                            jogador.forward(incremento)
                        elif char in 'uU':
                            jogador.forward(incremento1)
                            movimentos = 20  # Movimento maior conta como todos os movimentos
                        elif char in 'kK':
                            jogador.forward(incremento2)

                    if verificar_colisao(jogador):
                        print(f"Jogador {cor_jogador} colidiu com um obstáculo! Retornando ao início.")

                    if jogador.xcor() >= 290:
                        if jogador == jogador1:
                            pontuacao_jogador1 += 10
                            print(f"Jogador 1 (Vermelho) vence o jogo com {pontuacao_jogador1} pontos!")
                        else:
                            pontuacao_jogador2 += 10
                            print(f"Jogador 2 (Azul) vence o jogo com {pontuacao_jogador2} pontos!")
                        jogador1.goto(-290, 50)
                        jogador2.goto(-290, -50)
                        return

# Sistema de Pontuação
imprimir_regras()
rodada_jogo()

tela.mainloop()

'''
Jogador 1 (jogador1):

W: Move para frente com incremento padrão
A: Vira à esquerda 90 graus e move para frente com incremento padrão
S: Move para frente com decremento
D: Vira à direita 90 graus e move para frente com incremento padrão
Q: Move para frente com incremento maior
Jogador 2 (jogador2):

I: Move para frente com incremento padrão
J: Vira à esquerda 90 graus e move para frente com incremento padrão
K: Move para frente com decremento
L: Vira à direita 90 graus e move para frente com incremento padrão
U: Move para frente com incremento maior
'''

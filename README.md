# 🃏 Jogo da Memória - 2 Jogadores

Projeto desenvolvido para a **2ª Avaliação Parcial (2026.2)** da disciplina de **Desenvolvimento Web Front-End** (Cursos de SI e ADS - Centro Universitário Paraíso / UniFAP), ministrada pelo Prof. Caetano Segundo.

---

## 📋 Visão Geral

O **Jogo da Memória para 2 Jogadores** é uma aplicação web interativa onde dois participantes disputam alternadamente no mesmo computador e na mesma tela. 

O foco do projeto é a aplicação prática dos fundamentos do desenvolvimento web, utilizando **apenas HTML, CSS e JavaScript puros (Vanilla JS)**, sem o uso de bibliotecas ou frameworks externos.

---

## 🎯 Objetivos e Requisitos Técnicos

* **Tecnologias:** HTML5, CSS3 e JavaScript puro (sem frameworks/bibliotecas).
* **Modo de Jogo:** Suporte para exatamente **2 jogadores** locais.
* **Interface Dinâmica:**
  * Indicação clara de quem é a vez de jogar durante toda a partida.
  * Placar individual atualizado em tempo real a cada par encontrado.
  * Exibição do resultado final (vencedor ou empate) ao término do jogo.
* **Experiência do Usuário (UX):**
  * Efeitos de transição suaves (ex: animação de virar cartas) para tornar a experiência visual mais agradável.
  * Reinício completo da partida através de um botão, sem a necessidade de recarregar a página (`F5`).

---

## ⚙️ Funcionamento e Regras do Jogo

### 1. O Tabuleiro
* Composto por **16 cartas** (formando **8 pares** idênticos), organizadas em uma grade de **4 colunas por 4 linhas (4x4)**.
* Cada par possui o mesmo símbolo (emojis, letras, números ou imagens).
* No início de cada partida, as cartas são **embaralhadas aleatoriamente** e posicionadas viradas para baixo.

### 2. Placar e Controle de Vez
* A partida sempre inicia com o **Jogador 1**.
* A interface exibe o placar de ambos os jogadores e destaca visualmente o jogador ativo (ex: borda/cor diferenciada no card do placar e mensagem *"Vez do Jogador 1"*).

### 3. Dinâmica da Jogada
1. O jogador da vez seleciona (clica) a **primeira carta**, revelando seu símbolo.
2. Em seguida, seleciona a **segunda carta**, também revelando seu símbolo.
3. O sistema realiza a verificação:
   * **Se as cartas forem iguais (Par encontrado):**
     * As cartas permanecem viradas para cima e são marcadas/bloqueadas como encontradas.
     * O jogador da vez ganha **+1 ponto** no placar.
     * O mesmo jogador **continua na vez** para realizar uma nova tentativa.
   * **Se as cartas forem diferentes:**
     * Ambas as cartas permanecem visíveis por aproximadamente **1 segundo** (para memorização).
     * Após esse tempo, voltam a ficar viradas para baixo.
     * A vez passa automaticamente para o **outro jogador**.

### 4. Fim de Partida
* O jogo se encerra quando todos os **8 pares** forem encontrados.
* É exibida uma mensagem na tela informando o desfecho e o placar final:
  * *"Jogador 1 venceu! (5 x 3)"*
  * *"Jogador 2 venceu! (2 x 6)"*
  * *"Empate! (4 x 4)"*

### 5. Nova Partida
* Ao finalizar o jogo, um botão **"Jogar novamente"** é disponibilizado.
* Ao acioná-lo, o sistema executa o reset completo do estado do jogo:
  * Zera a pontuação de ambos os jogadores (`0 x 0`).
  * Devolve a vez inicial para o **Jogador 1**.
  * Embaralha novamente todas as cartas e as vira para baixo.
  * Oculta a mensagem de resultado e o botão de reinício.

---

## 🚀 Como Executar o Projeto

Como o projeto utiliza apenas tecnologias nativas da web, não há necessidade de instalação de dependências:

1. Clone ou baixe este repositório:
   ```bash
   git clone <url-do-seu-repositorio>
   ```
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` diretamente em qualquer navegador web moderno (Chrome, Firefox, Edge, etc.).

---

## 📁 Estrutura Sugerida de Arquivos

```text
├── index.html      # Estrutura semântica do tabuleiro, placar e modais/mensagens
├── style.css       # Estilização da grade 4x4, destaques de turno e animações (flip)
├── script.js       # Lógica de embaralhamento, estado do jogo, eventos e regras
└── README.md       # Documentação do projeto
```

---

## 👥 Equipe

* **Integrante 1** - [Link do GitHub]
* **Integrante 2** - [Link do GitHub]
* **Integrante 3** - [Link do GitHub]
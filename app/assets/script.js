//array com os nomes exatos dos arquivos em app/assets/img/

const cartas = [
  'carta_bell.png', 
  'carta_candle.png',
  'carta_candy.png',
  'carta_gift.png',
  'carta_gingerbread.png',
  'carta_reindeer.png',
  'carta_santa.png',
  'carta_snowman.png',
];


//estado da partida Variaveis globais
let jogadorAtual = 1;
let pontosJogador1 = 0;
let pontosJogador2 = 0;
let primeiraCarta = null;
let segundaCarta = null;
let travarTabuleiro = false;



//cria cards e monta tabuleiro
function iniciarJogo() {
    //zera os pontos e reseta o jogo ao estado inicial
    jogadorAtual = 1;
    pontosJogador1 = 0;
    pontosJogador2 = 0;
    primeiraCarta = null;
    segundaCarta = null;
    travarTabuleiro = false;

    atualizarTela();

    // Esconde a tela de resultado final (se estiver aberta)
   var modalFim = document.getElementById('modal-fim');
   if(modalFim){
        modalFim.style.display = 'none';
   }

   // Junta a lista duas vezes para formar o baralho. cartas.length = 8 que e
   // a quantidade de cartas do array "cartas" se  i for < 8 i++ 
   var baralho = [];
   for (var i = 0; i < cartas.length; i++) {
        //a cada volta do laço salva 2 cartas em baralho[] a original e uma copia
       baralho.push(cartas[i]);
       baralho.push(cartas[i]);
   }

   //embaralha as cartas de trás pra frente
   //baralho.length = 16 ( var i = baralho.length - 1) então ele começa a contagem do 15
   for(var i = baralho.length - 1; i > 0; i--){
        //e sorteado uma posição aleatoria j, entre 0 e o valor atual de i
        //Math.random() gera um numero quebrado aleatorio entre 0 e 0.999.
        //* (i + 1)) multiplica esse numero pelo tamanho do trecho que ainda não foi embaralhado se i = 15 multiplica por 16
        // Math.floor tira as casas decimais e arrendonda pra baixo
        var j = Math.floor(Math.random() * (i + 1));
        var temp = baralho[i]; 
        baralho[i] = baralho[j]; 
        baralho[j] = temp; 

   }

   //pega minha div vazia com id(tabuleiro) e limpar qualquer carta anterior
   var tabuleiro = document.getElementById('tabuleiro');
   tabuleiro.innerHTML = '';

   //Como o baralho já foi duplicado e embaralhado, esse laço se repete 16 vezes 
   // (uma para cada posição do array)
   for(var i = 0; i < baralho.length; i++){
    //cria uma div nova e coloca a classe "carta" e adciona e ala um etiqueta invisivel 
    // "data-imagem" com o nome da figura sorteada para aquela posição.
    var carta = document.createElement('div');
    carta.className = 'carta';
    carta.setAttribute('data-imagem', baralho[i]);

    //Cria a tag <img> já apontando para a imagem da carta fechada (carta_virada_para_baixo.png).
    var imagem = document.createElement('img');
    imagem.src = 'app/assets/img/carta_virada_para_baixo.png';
    imagem.alt = 'Carta virada para baixo';

    //Coloca a <img> dentro da <div class="carta">, liga o evento de clique (clicarNaCarta) e insere essa carta pronta dentro do #tabuleiro na tela.
    carta.appendChild(imagem);
    carta.onclick = clickNaCarta;
    tabuleiro.appendChild(carta);
   }
}

// execulta ao clicar na carta
function clickNaCarta() {
    // Se o tabuleiro estiver travado ou a carta já estiver virada, não faz nada
    if(travarTabuleiro === true){
        return;
    }
    // Verifica se a carta que você clicou agora é a mesma que você já tinha clicado antes
    if(this === primeiraCarta){
        return;
    }
    //Olha para essa carta clicada e vê se ela já tem a classe CSS encontrada.
    if(this.classList.contains('encontrada')){
        return;
    }

    // Mostra a imagem da carta clicada
    var nomeImagem = this.getAttribute('data-imagem');
    var img = this.querySelector('img');
    img.src = 'app/assets/img/' + nomeImagem;
    this.classList.add('virada');

    // Verifica se é a primeira ou a segunda carta da jogada
    if(primeiraCarta === null){
        primeiraCarta = this;
    }else{
        segundaCarta = this;
        verificarPar()
    }
}

// 5. Função que compara as duas cartas viradas
function verificarPar(){
    var img1 = primeiraCarta.getAttribute('data-imagem')
    var img2 = segundaCarta.getAttribute('data-imagem');

    if (img1 === img2) {
        // ACERTOU O PAR
        primeiraCarta.classList.add('encontrada');
        segundaCarta.classList.add('encontrada');
    
        if (jogadorAtual === 1) {
            pontosJogador1 = pontosJogador1 + 1;
        } else {
            pontosJogador2 = pontosJogador2 + 1;
        }

    primeiraCarta = null;
    segundaCarta = null
    atualizarTela()

    // Verifica se todos os 8 pares foram encontrados
    if(pontosJogador1 + pontosJogador2 === 8){
        setTimeout(finalizarPartida,500);
    }
    }else{
        // Errou o par: trava o clique e espera 1 segundo para desvirar
        travarTabuleiro = true;
        setTimeout(desvirarCartas, 1000);
    }
}

//Função que desvira as cartas erradas e passa a vez 
function desvirarCartas(){
    //verifica se primeiraCarta && segundaCarta e diferente de null
    if(primeiraCarta !== null && segundaCarta !== null){
        primeiraCarta.querySelector('img').src = 'app/assets/img/carta_virada_para_baixo.png';
        segundaCarta.querySelector('img').src = 'app/assets/img/carta_virada_para_baixo.png'

        primeiraCarta.classList.remove('virada');
        segundaCarta.classList.remove('virada');
    }


    //ftroca o jogador
    if(jogadorAtual === 1){
        jogadorAtual = 2;
    }else{
        jogadorAtual = 1;
    }

    primeiraCarta = null
    segundaCarta = null
    travarTabuleiro = false;
    atualizarTela()
}

// função que atualiza placar e indicador de vez
function atualizarTela(){
    document.getElementById('pontos-j1').innerText = pontosJogador1;
    document.getElementById('pontos-j2').innerText = pontosJogador2;
    document.getElementById('indicador-vez').innerText = 'Vez do jogador ' + jogadorAtual;

    var cardJ1 = document.getElementById('card-j1');
    var cardJ2 = document.getElementById('card-j2');

    if(jogadorAtual == 1){
        cardJ1.classList.add('ativo');
        cardJ2.classList.remove('ativo');
    }else{
        cardJ2.classList.add('ativo');
        cardJ1.classList.remove('ativo');
    }
}

// mostra o resultado final da partida
function finalizarPartida(){
    var textoResultado = '';

    if(pontosJogador1  > pontosJogador2 ){
        textoResultado = 'Jogador 1 venceu! ' + pontosJogador1 + ' x ' + pontosJogador2;
    }else if(pontosJogador2 > pontosJogador1){
        textoResultado = 'Jogador 2 venceu! ' + pontosJogador1 + ' x ' + pontosJogador2;
    }else{
        textoResultado = 'Empate! ' + pontosJogador1 + ' x ' + pontosJogador2;
    }

    document.getElementById('mensagem-vencedor').innerText = textoResultado;
    document.getElementById('modal-fim').style.display = 'flex';

}

window.onload = iniciarJogo;
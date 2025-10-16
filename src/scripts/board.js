class BoardManager {
    // Dependências
    cardManager; // Objeto para manipular as cartas.

    // Elemento DOM
    node; // Elemento DOM referente ao tabuleiro.

    // Números
    numImgs; // Número de imagens diferentes na biblioteca
    curNumCards; // Número de cartas no tabuleiro na partida atual

    // Construtor
    constructor(id, numImgs, cardManager){
        this.node = document.getElementById(id);
        this.numImgs = numImgs;
        this.cardManager = cardManager;
    }

    clear(){
        this.node.innerHTML = "";
    }

    fill(numberCards){
        if(numberCards>2*this.numImgs){
            console.error(`Erro: Imagens insuficientes para ${numberCards} cartas.`);
            numberCards = 2*this.numImgs;
        }

        this.clear();
        this.addCard(this.cardManager.gen(1));
    }

    addCard(card){
        this.node.appendChild(card);
    }
}
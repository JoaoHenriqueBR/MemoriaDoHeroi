class cardManager{
    // Atributos
    flippedCards = new Set();
    urlFactory;

    // Construtor
    constructor(factory){
        this.urlFactory = factory;
    }

    // Gerar a nova carta com base no número do herói.
    gen(heroNumber){
        let template = document.getElementById("cardTemplate");
        let clone = template.content.cloneNode(true);

        return clone; // Retorna o clone modificado
    }
}

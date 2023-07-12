export class Negociacoes {
    constructor() {
        // ou Array<Negociacao>
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // ou ReadonlyArray<Negociacao>
    lista() {
        return this.negociacoes;
    }
}

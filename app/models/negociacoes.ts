import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // ou Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao ){
        this.negociacoes.push(negociacao);
    }

    // ou ReadonlyArray<Negociacao>
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    
}

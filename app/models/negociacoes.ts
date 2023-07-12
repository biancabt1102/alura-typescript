import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // ou Array<Negociacao>
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao ){
        this.negociacoes.push(negociacao);
    }

    // ou ReadonlyArray<Negociacao>
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    
}

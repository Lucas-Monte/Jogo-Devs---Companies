import { Personagem } from "./personagem.js";

export class Estagiario extends Personagem {
    static tipo = 'Estagiario'
    static descricao = 'Você tem o meu café!'
    
    constructor (nome, destreza) {
        super(nome)
        this.destreza = destreza
    }

    obterInsignia(){
        if(this.destreza >= 5){
            return `Efetivação próxima`
        }
        return super.obterInsignia()
    }
}
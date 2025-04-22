import { Estagiario } from "./estagiario.js";
import { Gerente } from "./gerente.js";
import { Personagem } from "./personagem.js";

export class Supervisor extends Personagem {
    ladoEstagiario
    ladoGerente
    static tipo = 'Supervisor'
    static descricao = 'Dominador de planilhas e apresentações mágicas!'

    constructor(nome, destreza, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.ladoEstagiario = new Estagiario(nome, destreza)
        this.ladoGerente = new Gerente(nome, elementoMagico, levelMagico, inteligencia)
    }

    obterInsignia(){
        return `${this.ladoEstagiario.obterInsignia()} e ${this.ladoGerente.obterInsignia()}`
    }
}
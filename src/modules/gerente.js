import { Personagem } from "./personagem.js"

export class Gerente extends Personagem{
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Gerente'
    static descricao = 'O gerente é implacável!'

    constructor (nome, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia(){
        if(this.levelMagico >= 5 && this.inteligencia >= 5){
            return `Mestre da ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
}
import { Personagem } from "./personagem.js";

export class DevSenior extends Personagem{
    static tipo = 'DevSenior'
    static descricao = 'Forjador de códigos lendários e destruidor de bugs ancestrais!'

    constructor(nome, forca){
        super(nome)
        this.forca = forca
    }

    obterInsignia(){
        if(this.level >= 7 && this.forca >= 5){
            return 'Senior furioso'
        }
        return super.obterInsignia()
    }
}
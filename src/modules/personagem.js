export class Personagem {
    nome
    vida = 100
    mana = 100
    #level
    tipo
    descricao

    //no constructor as propriedades dependem do this para funcionar e as que estão sendo declaradas fora nao dependem
    constructor(nome){
        this.nome = nome
        this.#level = 1
    }

    aumentarLevel(){
        this.level += 1
    }

    diminuirLevel(){
        this.level -= 1
    }

    get level(){
        return this.#level
    }

    set level(novoLevel){
        if(novoLevel >= 1 && novoLevel <=10){
            this.#level = novoLevel
        }
    }
    //this é algo que nao conheço, mas é gerado pela instancia e ela que é responsavel por alterar o estado interno da classe
    obterInsignia(){
        if(this.#level >= 5){
            return `${this.constructor.tipo} Implacavel`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2){
        if(personagem1.level === personagem2.level){
            return 'Empate!'
        }
        if(personagem1.level > personagem2.level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`
        }
        return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor!`
    }
}
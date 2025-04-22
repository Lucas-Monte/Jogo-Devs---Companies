import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js"
import { Gerente } from "./modules/gerente.js"
import { Estagiario } from "./modules/estagiario.js"
import { Supervisor } from "./modules/supervisor.js"
import { DevSenior } from "./modules/devsenior.js"

const gerenteAntonio = new Gerente('Antonio', 4, 'Experiencia', 4, 8)
const gerentePaula = new Gerente('Julia', 8, 'Negociação', 10, 15)
const estagiarioLucas = new Estagiario('Lucas', 5, 5)
const supervisorPedro = new Supervisor('Pedro', 7, 8, 'Comunicação', 8, 8)
const devSeniorJoao = new DevSenior('João', 10)

const personagens = [gerenteAntonio, gerentePaula, estagiarioLucas, supervisorPedro, devSeniorJoao]

new PersonagemView(personagens).render()

//console.log(Personagem.verificarVencedor(gerenteAntonio, estagiarioLucas))

/* class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar () {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar() */

function Pessoa1 (nome1) {
    let frase = `Meu nome é ${nome1}`

    this.nome = function (){
        console.log(frase)
    }
    this.getFrase = function () {
        return frase
    }
}

const joao = new Pessoa1('João')
joao.nome()

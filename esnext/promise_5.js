function funcionarOuNao (valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando...', 0.5)
.then(v => `Valor: ${v}`)
.then(
    v => consol.log(v),
    err => console.log(`Erro Esp.: ${err}`)
)
.then
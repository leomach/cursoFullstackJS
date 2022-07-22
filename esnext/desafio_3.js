const fs = require('fs')
const path = require('path')

const caminho = __dirname + '/dados.txt'
function desafio (lerArquivo) {
    return new Promise (resolve => {
    fs.readFile(lerArquivo, 'utf-8', (err, conteudo) => {
        if (err) throw err
        resolve(conteudo)
    })
})
}

desafio(caminho)
    .then(console.log)

// .................

//function lerArquivo()
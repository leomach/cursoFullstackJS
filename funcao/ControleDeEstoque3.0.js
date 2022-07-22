function Camiseta(estoque, adicao = 1) {
    let estoqueCamisetaMinima = 0

    this.compra = function () {
        if (estoqueCamisetaMinima + adicao <= estoque) {
            estoqueCamisetaMinima += adicao // Se tiver camiseta, ele diminui do estoque
        } else if (estoqueCamisetaMinima + adicao === estoque) {
            estoqueCamisetaMinima += adicao + ' *ESGOTADO*' // se for a ultima camiseta, ele avisa que esgotou
        } else if (estoqueCamisetaMinima === estoque)  {
            console.log('Compra inválida pelo estoque') // se não tiver mais como comprar camiseta, ele não diminui do estoque e avisa que a compra não é inválida
        } else {
            estoque = estoqueCamisetaMinima
        }   
    }
    
    this.getEstoqueCamisetaMinima = function () {
        return estoqueCamisetaMinima
    }
}
    
const CamisetaCruzBrancaP = new Camiseta(8)
CamisetaCruzBrancaP.compra(console.log('CamisetaCruzBranca Tam:P | Leandro Machado, Garanhuns-PE, 4IPG, 22 anos'))
CamisetaCruzBrancaP.compra(console.log('CamisetaCruzBranca Tam:P | Leandro Machado, Garanhuns-PE, 4IPG, 22 anos'))
console.log(CamisetaCruzBrancaP.getEstoqueCamisetaMinima(console.log(`De 8, foram compradas:`)))

console.log('******************************************************************************************************************************')

const CamisetaCruzBrancaM = new Camiseta(6)
CamisetaCruzBrancaP.compra(console.log('CamisetaCruzBranca Tam:M | Leandro Machado, Garanhuns-PE, 4IPG, 22 anos'))
CamisetaCruzBrancaP.compra(console.log('CamisetaCruzBranca Tam:M | Leandro Machado, Garanhuns-PE, 4IPG, 22 anos'))
console.log(CamisetaCruzBrancaP.getEstoqueCamisetaMinima(console.log(`De 6, foram compradas:`)))

/* Versão 3.0
- Adição de função construtora
- Todas os tamanhos de um modelo da camisa em um unico código
- Mais facilidade ao digitar uma nova compra
- Codigo mais limpo
*/
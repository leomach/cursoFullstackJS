const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }', 
]

// Retornar um array apenas com os preços
const tirarJSON = e => JSON.parse(e)
const acessoPreco = preco => preco.preco
let resultado = carrinho.map(tirarJSON).map(acessoPreco)
console.log(resultado)
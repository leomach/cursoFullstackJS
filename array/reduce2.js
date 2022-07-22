const alunos = [
    { nome: 'João', nota: 7.3, bolsista: true },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false },
]
// Desafio 1: Todos os alunos são bolsistas?
const todos = alunos.map(a => a.bolsista).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador && atual
})
console.log(todos)
console.log('---------------')
// Desafio 2: Algum aluno é bolsista?
const algum = alunos.map(a => a.bolsista).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador || atual
})
console.log(algum)
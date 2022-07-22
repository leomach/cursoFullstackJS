const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Tira o ultimo
console.log(pilotos)

pilotos.push('Verstappen') // adiciona por ultimo
console.log(pilotos)

pilotos.shift() // Tira o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona primeiro
console.log(pilotos)

// Splice pode adicionar e remover elementos
// (localização, quantidade removida, adicionar1, adicionar2, ...)

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // o 4 não entra
console.log(algunsPilotos2)
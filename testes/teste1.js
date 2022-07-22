function removeProperty(obj, prop) {
    // verificar se o obj contém prop como propriedade
    // obj.hasOwnProperty(prop)
    // se tiver, remover e return true
    if (obj.hasOwnProperty(prop) == true) {
        delete obj[prop]
        return true
    } else { return false }
    // senão return false
    
}

const obj = {
    nome: 'Leandro',
    idade: 22
}
const result = removeProperty(obj, 'idade')
console.log(result)
console.log(obj)

console.log('------')



const EXPECTED_MINUTES_IN_OVEN = 40

function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}
const resultado = remainingMinutesInOven(30)
console.log(resultado)
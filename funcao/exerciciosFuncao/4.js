function div(dividendo, divisor) {
    let resultado = Math.trunc(dividendo / divisor)
    let resto = (dividendo / divisor - resultado) * 2
    console.log('Resultado =', resultado)
    console.log('Resto =', resto)
    return resultado, resto
}

div(11, 2)
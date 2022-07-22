function real (valor) {
    let quantia = valor.toFixed(2)
    console.log('R$', quantia.replace('.', ','))
    return quantia
}

real(1.2)
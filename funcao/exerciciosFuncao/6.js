function jurossimples(capitalInicial, juros, tempo) {
    console.log((capitalInicial*juros*tempo)+capitalInicial)
    return
}
jurossimples(5000, 0.05, 12)

function juroscompostos(capitalInicial1, juros1, tempo1) {
    console.log((capitalInicial1 * Math.pow(1+juros1, tempo1)).toFixed(2))
    return
}
juroscompostos(5000, 0.05, 12)
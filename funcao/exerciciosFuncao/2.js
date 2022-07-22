function triangulo(x, y, z) {

    if (x == y && y == z ) {
            console.log('Equilátero!')
        } else if (x == y && y != z){
            console.log('Isóceles!')
        } else if (x != y && y == z){
            console.log('Isóceles!')
        } else if (x == z && y != z){
            console.log('Isóceles!')
        } else if (x != y && y != z && x != z){
            console.log('Escaleno!')
        } else () => console.log('Erro')
        return triangulo
}

triangulo(3, 4, 5)


/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]
*/

function repetir (elemento, repetição) {
    let newArray = []
    for (let i = 0; i < repetição; i++) {
        newArray.push(elemento)
    }
    console.log(newArray)
}
repetir("código", 2)
repetir(7, 3)
/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function simboloMais (numero) {
    let resultado = " "
    for (let i = 0; i < numero; i++) {
        resultado += "+"
    }
    console.log(resultado)
}
simboloMais(2)
simboloMais(4)

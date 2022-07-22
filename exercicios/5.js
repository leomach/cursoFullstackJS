/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará true
*/
function maiorOuIgual (num1, num2) {
    const operacao = num1 >= num2
    if (typeof num1 != 'string' && typeof num2 != 'string') {
        console.log(!!operacao)
    } else { console.log(!operacao) }
    
}
maiorOuIgual(5, 10)
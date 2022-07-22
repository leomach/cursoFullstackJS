/*
Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.
Exemplos:
nomeDoMes(1) // retornará "janeiro"
nomeDoMes(4) // retornará "abril"
*/
function nomeDoMes(mes) {
    if (mes == 1) {
        console.log('Janeiro')
    } if (mes == 2) {
        console.log('Fevereiro')
    } if (mes == 3) {
        console.log('Março')
    } if (mes == 4) {
        console.log('Abril')
    } if (mes == 5) {
        console.log('Maio')
    } if (mes == 6) {
        console.log('Junho')
    } if (mes == 7) {
        console.log('Julho')
    } if (mes == 8) {
        console.log('Agosto')
    } if (mes == 9) {
        console.log('Setembro')
    } if (mes == 10) {
        console.log('Outubro')
    } if (mes == 11) {
        console.log('Novembro')
    } if (mes == 12) {
        console.log('Dezembro')
    }
}
nomeDoMes(1)
nomeDoMes(4)

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
function nomeDoMes1(mes) {
    console.log(meses[(mes - 1)])
}
nomeDoMes1(1)
nomeDoMes1(4)
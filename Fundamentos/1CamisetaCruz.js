const prod = {
    nome: 'Camiseta Cruz Oversized',
    cores: 'Preta',
    estampa: 'Branca',

};
const { nome: n } = prod

let estoqueP = 5;
let estoqueM = 8;
let estoqueG = 8;
let estoqueGG = 5;

{
    console.log('-', n, '||', 'Nome do cliente: Leandro', '||', 'Local: GUS', '||', 'Idade: 22 ||', 'Igreja: 4IPG');
    console.log("Estoque ||", 'P:', estoqueP, 'M:', estoqueM, 'G:', --estoqueG, 'GG:', estoqueGG)
}
{
    console.log('-', n, '||', 'Nome do cliente: Jamine', '||', 'Local: GUS', '||', 'Idade: 19 ||', 'Igreja: 4IPG');
    console.log("Estoque ||", 'P:', estoqueP, 'M:', estoqueM, 'G:', --estoqueG, 'GG:', estoqueGG)
}
{
    console.log('-', n, '||', 'Nome do cliente: Jamine', '||', 'Local: GUS', '||', 'Idade: 19 ||', 'Igreja: 4IPG');
    console.log("Estoque ||", 'P:', estoqueP, 'M:', estoqueM, 'G:', --estoqueG, 'GG:', estoqueGG)
}
{
    console.log('-', n, '||', 'Nome do cliente: Jamine', '||', 'Local: GUS', '||', 'Idade: 19 ||', 'Igreja: 4IPG');
    console.log("Estoque ||", 'P:', estoqueP, 'M:', estoqueM, 'G:', --estoqueG, 'GG:', estoqueGG)
}
{
    console.log('-', n, '||', 'Nome do cliente: Jamine', '||', 'Local: GUS', '||', 'Idade: 19 ||', 'Igreja: 4IPG');
    console.log("Estoque ||", 'P:', estoqueP, 'M:', estoqueM, 'G:', --estoqueG, 'GG:', estoqueGG)
}
{
    console.log('-', n, '||', 'Nome do cliente: Jamine', '||', 'Local: GUS', '||', 'Idade: 19 ||', 'Igreja: 4IPG');
    console.log("Estoque ||", 'P:', estoqueP, 'M:', estoqueM, 'G:', --estoqueG, 'GG:', estoqueGG)
}
{
    console.log('-', n, '||', 'Nome do cliente: Jamine', '||', 'Local: GUS', '||', 'Idade: 19 ||', 'Igreja: 4IPG');
    console.log("Estoque ||", 'P:', estoqueP, 'M:', estoqueM, 'G:', --estoqueG, 'GG:', estoqueGG)
}
{
    console.log('-', n, '||', 'Nome do cliente: Jamine', '||', 'Local: GUS', '||', 'Idade: 19 ||', 'Igreja: 4IPG');
    console.log("Estoque ||", 'P:', estoqueP, 'M:', estoqueM, 'G:', --estoqueG, 'GG:', estoqueGG)
}

{
    if (estoqueP == 0) {
        console.log(' ')
        console.log(estoqueP = '************************************** Estoque P ESGOTADO')
    }
    if (estoqueM == 0) {
        console.log(' ')
        console.log(estoqueM = '************************************** Estoque M ESGOTADO')
    }
    if (estoqueG == 0) {
        console.log(' ')
        console.log(estoqueG= '************************************** Estoque G ESGOTADO')
    }
    if (estoqueGG == 0) {
        console.log(' ')
        console.log(estoqueGG = '************************************** Estoque GG ESGOTADO')
    }
}
    /*
* MELHORIAS DA VERSÃO 2.5:
* Aviso de estoque esgotado

           ****
           ****
           ****
**********************************
**********************************
           ****
           ****
           ****
           ****
           ****
           ****
           ****
           ****
           ****
           ****
           ****
*/
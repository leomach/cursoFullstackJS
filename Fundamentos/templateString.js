const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
const template = `
Olá
${nome}!` // os templates são iniciados e finalizados com a crase `
console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);
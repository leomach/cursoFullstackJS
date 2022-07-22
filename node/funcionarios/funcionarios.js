const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data


    const f = f => f.genero === 'F'
    const c = c => c.pais === 'China'
    const s = (acumulador, atual) => {
        return acumulador.salario < atual.salario ? acumulador : atual
    }

    const resultado = funcionarios.filter(f).filter(c).reduce(s, 0)
    console.log(resultado)
})

let menorValor = 1
let maiorValor = 1000
let numeroSecreto = gerarNumeroAleatorio()

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor
const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor





function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor + 1)
}

console.log(numeroSecreto)

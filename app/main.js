const menorValor = 1;
const maiorValor = 1000;
const numeroAleatorio = gerarNumAleatorio();

function gerarNumAleatorio() {
    return parseInt(Math.random() * (maiorValor + 1));
}

console.log('Número aleatório: ', numeroAleatorio);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

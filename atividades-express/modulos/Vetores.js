//Seção 1 VetorSomatoria (vetor de soma)
export function somarVetor(a, b, TAM) {
    let resultado = [];

    for (let i = 0; i < TAM; i++) {
        resultado[i] = a[i] + b[i];
    }

    return resultado;
}
//Seção 2 VetorPontuação (vetor de remoção)
export function removerPrimeiraUltimaPontuacao(pontuacoes) {
    let resultado = pontuacoes;

    resultado.shift();
    resultado.pop();

    return resultado;
}
//Seção 3 ValorProcurado (Vetor de busca)
export function encontrarValorVetor(numeros, valor) {
    let resultado = false;

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === valor) {
            resultado = true;
        }
    }

    return resultado;
}
//Seção 4 lucroVenda (vetor de acumulação)
export function calcularLucroVendaPorDia(lucroDia) {
    let resultado = 0;

    for (let i = 0; i < lucroDia.length; i++) {
        resultado += lucroDia[i];
    }

    return resultado;
}

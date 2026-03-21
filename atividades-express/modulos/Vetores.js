//Seção 1 VetorSomatoria (vetor de soma)
function somarVetor(a, b, TAM) {
    let resultado = []
    for (let i = 0; i < TAM; i++) {
        let soma = 0

        for (let j = i; j < TAM; j++) {
            soma += a[j]
        }

        b[i] = soma
    }

    for (let i = 0; i < TAM; i++) {
        resultado[i] = ("B[" + i + "] = " + b[i])
    }
    return resultado;
}

//Seção 2 VetorPontuação (vetor de remoção)
function removerPrimeiraUltimaPontuacao(pontuacoes) {
    let original = [...pontuacoes];
    pontuacoes.pop();
    pontuacoes.shift();
    return ("Original: " + original + " | Atualizado: " + pontuacoes);
}
//Seção 3 ValorProcurado (Vetor de busca)
function encontrarValorVetor(numeros, valor) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === valor) {
            return ("O valor " + valor + " foi encontrado na posição: " + i)
        }
        return ("O valor " + valor + " não foi encontrado na posição: " + i)
    }
}

//Seção 4 lucroVenda (vetor de acumulação)
function calcularLucroVendaPorDia(lucroDia) {
    let lucroTotal = []
    let soma = 0

    

    for (let i = 0; i < 5; i++) {
        soma += lucroDia[i]
        lucroTotal[i] = soma
    }

    return ("Lucro por cada dia:" + lucroDia + " | Lucro total de acordo com cada dia:" + lucroTotal)
}

export { somarVetor, removerPrimeiraUltimaPontuacao, encontrarValorVetor, calcularLucroVendaPorDia }
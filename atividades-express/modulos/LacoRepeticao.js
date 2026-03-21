// Seção 1 - ContagemCem (While)
function contagemCemWhile() {
    let i = 1
    let lista = []

    while (i <= 100) {
        lista.push(i)
        i++
    }
    return lista
};

// Seção 2 - SequenciaFibonacci (DoWhile)
function sequenciarFibonacci() {
    let j = 1
    let q = 10
    let t1 = 0
    let t2 = 1
    let prox = 0
    let listaFibonacci = []

    do {
        prox = t1 + t2
        t1 = t2
        t2 = prox
        listaFibonacci.push(prox)
        j++
    } while (j <= q)
    return listaFibonacci
}

// Seção 3 - ContagemCem (For) 
function contagemCemFor() {
    let k
    let l
    let x
    lista = []
    for (k = 1; k <= 10; k++) {
        for (l = 1; l <= 10; l++) {
            x = k * l
            lista.push(k + " x " + l + " = " + x);
        }
    }
    return lista;
}

// Seção 4 - (ForEach)
function exibirPessoas(pessoa1, pessoa2, pessoa3, pessoa4) {
    const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4]
    let listaPessoas = []

    pessoas.forEach(function (pessoa) {
        listaPessoas.push(pessoa)
    });
    return listaPessoas;
};

export { contagemCemWhile, sequenciarFibonacci, contagemCemFor, exibirPessoas }

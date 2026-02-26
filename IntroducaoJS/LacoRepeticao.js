// Seção 1 - ContagemCem (While)
let i = 1

while (i <= 100) {
    console.log(i)
    i++
}
console.log("--------------------------------------------------------")

// Seção 2 - SequenciaFibonacci (DoWhile)
let j = 1
let q = 10
let t1 = 0
let t2 = 1
let prox = 0

do {
    prox = t1 + t2
    t1 = t2
    t2 = prox
    console.log(prox)
    j++
} while (j <= q)

console.log("--------------------------------------------------------")

// Seção 3 - ContagemCem (For) 
let k
let l
let x
for (k = 1; k <= 10; k++) {
    for (l = 1; l <= 10; l++) {
        x = k * l;
        console.log(k + " x " + l + " = " + x)
    }
}

console.log("--------------------------------------------------------")

// Seção 4 - (ForEach)
const pessoa1 = "João"
const pessoa2 = "Maria"
const pessoa3 = "Carlos"
const pessoa4 = "Ana"

const pessoas = [pessoa1, pessoa2, pessoa3, pessoa4];

pessoas.forEach(function (pessoa) {
    console.log(pessoa)
});

console.log("--------------------------------------------------------")

// Seção 5 - (Map)

const numeros = [1, 2, 3, 4, 5]

const numerosMultiplicadosPorDois = numeros.map(function (numero) {
    return numero * 2
})

console.log(numerosMultiplicadosPorDois)

console.log("--------------------------------------------------------")
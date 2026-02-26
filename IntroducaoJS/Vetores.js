//Seção 1 - Busca (find)
let numeros = [10, 20, 30, 40]

let busca = numeros.find(function(n){
    return n === 30
})

console.log(busca)

console.log("--------------------------------------------------------")

//Seção 2 - Adição (push)
numeros = [10, 20, 30]

numeros.push(40)

console.log(numeros)

console.log("--------------------------------------------------------")

//Seção 3 - Remoção (filter)
numeros = [10, 20, 30, 40]

let novoNumeros = numeros.filter(function(n){
    return n !== 20
})

console.log(novoNumeros)

console.log("--------------------------------------------------------")

//Seção 4 - Acumulação (reduce)
const idades = [8, 27, 30, 60, 43, 22, 34]

const somaIdades = idades.reduce(function(idade, acumulador){
    return idade + acumulador
}, 0 )

console.log(somaIdades)

console.log("--------------------------------------------------------")
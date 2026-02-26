// Seção 1 - MultiploDeCinco (If Simples)
let numero

numero = 25

if (numero % 5 === 0) {
    console.log("O número é múltiplo de 5")
}

console.log("--------------------------------------------------------")

//Seção 2 - VerificacaoIdade (If Tradicional)
let idade = 16

if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

console.log("--------------------------------------------------------")

//Seção 3 - SinalNumero (If Composto)
let numInt = 15

if (numInt > 0) {
    console.log("positivo")
} else if (numInt < 0) {
    console.log("negativo")
} else {
    console.log("neutro")
}

console.log("--------------------------------------------------------")

//Seção 4 - ImparPar (Ternário)
let num = 10

res = (!(num % 2) ? "Par" : "Impar")
console.log('O número é ' + res)

console.log("--------------------------------------------------------")

//Seção 5 - TerminoMes (Switch)
let mes = 10

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
        console.log("O mês termina com 31")
        break
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
        console.log("O mês termina com 30")
        break
    case 2:
        console.log("O mês termina com 28")
        break
    default:
        console.log("Inválido")
}

console.log("--------------------------------------------------------")
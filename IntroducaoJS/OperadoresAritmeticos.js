//Seção 1 - CalculoCompra (Operação com "+")
let tomate, alface, carne, total

tomate = 12.00
alface = 18.00
carne = 40.59

total = tomate + alface + carne

console.log("Sua compra deu um total de " + total)

console.log("--------------------------------------------------------")

//Seção 2 - CalculoIdade (Operação com "-")
let anoNasc, anoAtual, idade

anoNasc = 2008
anoAtual = 2025
idade = anoAtual - anoNasc

console.log("Sua idade é " + idade)

console.log("--------------------------------------------------------")

//Seção 3 - VolumeLata (Operação com "*")
let pi, r, v, h

r = 5
h = 15
pi = 3.14

v = pi * (r * r) * h

console.log("O volume da lata é: " + v)

console.log("--------------------------------------------------------")

//Seção 4 - CalculoRaiz (operação com Raiz "Math.sqrt()") 
let raiz

raiz = Math.sqrt(49)

console.log("A raiz de 49 é " + raiz)

console.log("--------------------------------------------------------")

//Seção 5 - ConversaoDias (Calculo com divisão "/")
let dias, mes, ano

dias = 1800
mes = dias / 30
ano = mes / 12

console.log("Meses totais:" + mes)
console.log("Anos:" + ano)

console.log("--------------------------------------------------------")

//Seção 6- NumeroExpoente (calculo com potenciação)
let base = 5
let expoente = 5
let resultado = 1
let i = 0

do {
    resultado *= base
    i++;
} while (i < expoente)

console.log(base + " elevado a " + expoente + " é: " + resultado)

console.log("--------------------------------------------------------")

//Seção 7- AnoBissextos (Calculo com "%")
let anoInicial = 2015
let anoAlvo = 2026
let anoContemporaneo = anoInicial

while (anoContemporaneo <= anoAlvo) {
    if (anoContemporaneo % 4 == 0) {
        console.log(anoContemporaneo)
    }
    anoContemporaneo++
}

console.log("Anos bissextos entre " + anoInicial + " e " + anoAlvo)

console.log("--------------------------------------------------------")

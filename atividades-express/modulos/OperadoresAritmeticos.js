//Seção 1 - CalculoCompra (Operação com "+")
function calcularCompra(tomate, alface, carne) {

    let total = tomate + alface + carne

    return ("Sua compra deu um total de " + total)
}

//Seção 2 - CalculoIdade (Operação com "-")
function calcularIdade(anoNasc, anoAtual) {
    let idade = anoAtual - anoNasc
    return ("Sua idade é " + idade)
}

//Seção 3 - VolumeLata (Operação com "*")
function calcularVolumeLata(r, h) {
    let pi = 3.14
    let v = pi * (r * r) * h
    return ("O volume da lata é: " + v)
}
//Seção 4 - CalculoRaiz (operação com Raiz "Math.sqrt()") 
function calcularRaiz(numero) {
    let raiz = Math.sqrt(numero)
    return ("A raiz de " + numero + " é " + raiz)
}

//Seção 5 - ConversaoDias (Calculo com divisão "/")
function converterDias(dias) {
    let mes = dias / 30
    let ano = mes / 12
    return ("Meses totais:" + mes + ", Anos:" + ano)
}

//Seção 6- NumeroExpoente (calculo com potenciação)
function calcularPotencia(base, expoente) {
    let resultado = 1
    let i = 0

    do {
        resultado *= base
        i++;
    } while (i < expoente)

    return (base + " elevado a " + expoente + " é: " + resultado)
}

//Seção 7- AnoBissextos (Calculo com "%")
function calcularAnoBissexto(anoInicial, anoAlvo) {
    let anoContemporaneo = anoInicial
    let listaBissextos = []

    while (anoContemporaneo <= anoAlvo) {
        if (anoContemporaneo % 4 == 0) {
            listaBissextos.push(anoContemporaneo)
        }
        anoContemporaneo++
    }

    return ("Anos bissextos entre " + anoInicial + " e " + anoAlvo + ": " + listaBissextos.join(", "))
}

export { calcularCompra, calcularIdade, calcularVolumeLata, calcularRaiz, converterDias, calcularPotencia, calcularAnoBissexto }

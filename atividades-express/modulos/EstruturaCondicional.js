// Seção 1 - MultiploDeCinco (If Simples)
function verificarMultiploDeCinco(numero) {

    if (numero % 5 === 0) {
        return "O número é múltiplo de 5"
    }
}

//Seção 2 - VerificacaoIdade (If Tradicional)
function verificarIdadeMaisDezoito(idade) {

    if (idade >= 18) {
        return "Maior de idade"
    } else {
        return "Menor de idade"
    }
}

//Seção 3 - SinalNumero (If Composto)

function verificarSinalNumero(numInt) {

    if (numInt > 0) {
        return "positivo"
    } else if (numInt < 0) {
        return "negativo"
    } else {
        return "neutro"
    }
}

//Seção 4 - ImparPar (Ternário)
function verificarImparOuPar(num) {
    let res = (!(num % 2) ? "Par" : "Impar")
    return res
}


//Seção 5 - TerminoMes (Switch)
function verificarTerminoMes(mes) {
    switch (mes) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
            return "O mês termina com 31";
            break
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
            return "O mês termina com 30"
            break
        case 2:
            return "O mês termina com 28"
            break
        default:
            return "Inválido"
    }
}

export {verificarMultiploDeCinco, verificarIdadeMaisDezoito, verificarSinalNumero, verificarImparOuPar, verificarTerminoMes}
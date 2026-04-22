// Seção 1 - MultiploDeCinco (If Simples)
function verificarMultiploDeCinco(numero) {

    if (Number(numero) % 5 === 0) {
        return true
    }
    return false
}

//Seção 2 - VerificacaoIdade (If Tradicional)
function verificarIdadeMaisDezoito(idade) {

    if (Number(idade) >= 18) {
        return true
    } else {
        return false
    }
}

//Seção 3 - SinalNumero (If Composto)

function verificarSinalNumero(numInt) {
    if (Number(numInt) > 0) {
        return "+"
    } else if (Number(numInt) < 0) {
        return "-"
    } else {
        return 0
    }
}

//Seção 4 - ImparPar (Ternário)
function verificarImparOuPar(num) {
    let res = (!(Number(num) % 2) ? "Par" : "Impar")
    return res
}


//Seção 5 - TerminoMes (Switch)
function verificarTerminoMes(mes) {
    switch (Number(mes)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 11:
            return 31;
            break
        case 4:
        case 6:
        case 8:
        case 10:
        case 12:
            return 30;
            break
        case 2:
            return 28;
            break
        default:
            return null
    }
}

export {verificarMultiploDeCinco, verificarIdadeMaisDezoito, verificarSinalNumero, verificarImparOuPar, verificarTerminoMes}

//Seção 1 - CalculoCompra (Operação com "+")
function calcularCompra(tomate, alface, carne) {

    let total = Number(tomate) + Number(alface) + Number(carne);

    return total
}

//Seção 2 - CalculoIdade (Operação com "-")
function calcularIdade(anoNasc, anoAtual) {
    let idade = Number(anoAtual) - Number(anoNasc);
    return idade
}

//Seção 3 - VolumeLata (Operação com "*")
function calcularVolumeLata(r, h) {
    let pi = 3.14
    let v = pi * (Number(r) * Number(r)) * Number(h)
    return v
}
//Seção 4 - CalculoRaiz (operação com Raiz "Math.sqrt()") 
function calcularRaiz(numero) {
    let raiz = Math.sqrt(Number(numero))
    return raiz
}

//Seção 5 - ConversaoDias (Calculo com divisão "/")
function converterDias(dias) {
    let mes = Number(dias) / 30
    let ano = Number(mes) / 12
    return {"mes": mes, "ano": ano}
}

//Seção 6- NumeroExpoente (calculo com potenciação)
function calcularPotencia(base, expoente) {
    let resultado = 1
    let i = 0

    do {
        resultado *= Number(base)
        i++;
    } while (i < Number(expoente))

    return resultado
}

//Seção 7- AnoBissextos (Calculo com "%")
function calcularAnoBissexto(anoInicial, anoAlvo) {
    let anoContemporaneo = Number(anoInicial)
    let listaBissextos = []

    while (anoContemporaneo <= Number(anoAlvo)) {
        if (anoContemporaneo % 4 == 0) {
            listaBissextos.push(anoContemporaneo)
        }
        anoContemporaneo++
    }

    return listaBissextos
}

export { calcularCompra, calcularIdade, calcularVolumeLata, calcularRaiz, converterDias, calcularPotencia, calcularAnoBissexto }

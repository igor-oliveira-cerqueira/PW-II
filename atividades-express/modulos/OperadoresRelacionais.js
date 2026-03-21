// Seção 1 - Maior (>)
function maiorQueDez(num1) {
    if (num1 > 10) {
        return "O número é maior que 10"
    }
}

//Seção 2 - Menor (<)
function menorQueCinco(num2) {
    if (num2 < 5) {
        return "O número é menor que 5"
    }
}

// Seção 3 - Maior ou Igual (>=)
function maiorOuIgualSete(nota) {
    if (nota >= 7) {
        return "Aluno aprovado"
    }
}

// Seção 4 - Menor ou Igual (<=)
function menorOuIgualVinte(temperatura) {
    if (temperatura <= 20) {
        return "Temperatura baixa"
    }
}

// Seção 5 - Igual (== ou ===)
function verificarSenha(senha) {
    if (senha === 1234) {
        return "Senha correta"
    }
}

// Seção 6 - Diferente (!= ou !==)
function verificarNumeroDiferenteZero(numero) {
    if (numero !== 0) {
        return "O número é diferente de zero"
    }
}

export { maiorQueDez, menorQueCinco, maiorOuIgualSete, menorOuIgualVinte, verificarSenha, verificarNumeroDiferenteZero }
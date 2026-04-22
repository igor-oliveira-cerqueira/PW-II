// Seção 1 - Maior (>)
export function maiorQueDez(num) {
    let resultado;

    if (Number(num) > 10) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}
//Seção 2 - Menor (<)
export function menorQueCinco(num) {
    let resultado;

    if (Number(num) < 5) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}
// Seção 3 - Maior ou Igual (>=)
export function maiorOuIgualSete(nota) {
    let resultado;

    if (Number(nota) >= 7) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}
// Seção 4 - Menor ou Igual (<=)
export function menorOuIgualVinte(temperatura) {
    let resultado;

    if (Number(temperatura) <= 20) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}
// Seção 5 - Igual (== ou ===)
export function verificarSenha(senha) {
    let resultado;
    let senhaCorreta = 1234;

    if (senha === senhaCorreta) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}
// Seção 6 - Diferente (!= ou !==)
export function verificarNumeroDiferenteZero(num) {
    let resultado;

    if (Number(num) !== 0) {
        resultado = true;
    } else {
        resultado = false;
    }

    return resultado;
}

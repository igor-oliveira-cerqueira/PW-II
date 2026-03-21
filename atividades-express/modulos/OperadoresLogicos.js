// Seção 1 - Operador "E" (&&)
function aprovarNota2(nota, frequencia) {
  if (nota >= 7 && frequencia >= 75) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

// Seção 2 - Operador "Ou" (||)
function verificarEntrada(vip, ingresso) {
  if (vip || ingresso) {
    return "Entrada liberada";
  } else {
    return "Entrada negada";
  }
}

// Seção 3 - Operador "Not" (!)
function verificarBloqueio(estaBloqueado) {
  if (!estaBloqueado) {
    return "Acesso permitido";
  } else {
    return "Acesso negado";
  }
}

export { aprovarNota2, verificarEntrada, verificarBloqueio };
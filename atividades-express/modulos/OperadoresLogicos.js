// Seção 1 - Operador "E" (&&)
function aprovarNota2(nota, frequencia) {
  if (nota >= 7 && frequencia >= 75) {
    return true;
  } else {
    return false;
  }
}

// Seção 2 - Operador "Ou" (||)
function verificarEntrada(vip, ingresso) {
  if (vip || ingresso) {
    return true;
  } else {
    return false;
  }
}

// Seção 3 - Operador "Not" (!)
function verificarBloqueio(estaBloqueado) {
  if (!estaBloqueado) {
    return true;
  } else {
    return false;
  }
}

export { aprovarNota2, verificarEntrada, verificarBloqueio };

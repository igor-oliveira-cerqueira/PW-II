// Seção 1 - Operador "E" (&&)
let nota = 8;
let frequencia = 80;

if (nota >= 7 && frequencia >= 75) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

console.log("--------------------------------------------------------")

// Seção 2 - Operador "Ou" (||)
let vip = false;
let ingresso = true;

if (vip || ingresso) {
  console.log("Entrada liberada");
} else {
  console.log("Entrada negada");
}

console.log("--------------------------------------------------------")

// Seção 3 - Operador "Not" (!)
let estaBloqueado = false;

if (!estaBloqueado) {
  console.log("Acesso permitido");
} else {
  console.log("Acesso negado");
}

console.log("--------------------------------------------------------")
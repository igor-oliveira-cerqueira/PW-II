import express from 'express'

// imports
import { calcularMedia, calcularVolumeCubo, aprovarNota } from "./Modulos/DeclararVariavel.js";
import { verificarMultiploDeCinco, verificarIdadeMaisDezoito, verificarSinalNumero, verificarImparOuPar, verificarTerminoMes } from "./Modulos/EstruturaCondicional.js";
import { contagemCemWhile, sequenciarFibonacci, contagemCemFor, exibirPessoas } from "./modulos/LacoRepeticao.js";
import { calcularCompra, calcularIdade, calcularVolumeLata, calcularRaiz, converterDias, calcularPotencia, calcularAnoBissexto } from "./modulos/OperadoresAritmeticos.js";
import { aprovarNota2, verificarEntrada, verificarBloqueio } from "./modulos/OperadoresLogicos.js";
import { maiorQueDez, menorQueCinco, maiorOuIgualSete, menorOuIgualVinte, verificarSenha, verificarNumeroDiferenteZero } from "./modulos/OperadoresRelacionais.js";
import { somarVetor, removerPrimeiraUltimaPontuacao, encontrarValorVetor, calcularLucroVendaPorDia } from "./modulos/Vetores.js";

const app = express();

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});

// Seção 1 - Declarar Variável
// Calculo da nota
app.get('/declarar-variavel/calculo-nota', (req, res) => {
    let nota1 = 8;
    let nota2 = 6;
    let res1 = calcularMedia(nota1, nota2);

    res.send("Calculo da nota " + "Notas informadas: " + nota1 + " e " + nota2 + " " + "A média do aluno é " + res1);
});

// Calcular Volume do Cubo
app.get('/declarar-variavel/calculo-volume-cubo', (req, res) => {
    let l = 7;
    let res2 = calcularVolumeCubo(l);

    res.send("Calcular Volume do Cubo " + "Lado do cubo informado: " + l + " " + "O volume do cubo é " + res2);
});

// Aprovação nota
app.get('/declarar-variavel/aprovacao-nota', (req, res) => {
    let nota = 8;
    let aprovar = aprovarNota(nota);

    res.send("Aprovação nota " + "Nota informada: " + nota + " " + aprovar);
});

//Seção 2 - Estruturas Condicionais
// Verificar se o numero é multiplo de cinco
app.get('/estrutura-condicional/multiplo-de-cinco', (req, res) => {
    let numero = 25;
    let verificador = verificarMultiploDeCinco(numero);

    res.send("Verificar se o numero é multiplo de cinco " + "Número informado: " + numero + " " + verificador);
});

// verificar se é maior ou menor de idade
app.get('/estrutura-condicional/idade', (req, res) => {
    let idade = 16;
    let verifica = verificarIdadeMaisDezoito(idade);

    res.send("Verificar se é maior ou menor de idade " + "Idade informada: " + idade + " " + verifica);
});

//Verificar se um numero é positivo negativo ou neutro
app.get('/estrutura-condicional/sinal-numero', (req, res) => {
    let numInt = 15;
    let verficadorSinal = verificarSinalNumero(numInt);

    res.send("Verificar se um numero é positivo negativo ou neutro " + "Número informado: " + numInt + " " + verficadorSinal);
});

// verificar se o numero é impar ou par
app.get('/estrutura-condicional/impar-ou-par', (req, res) => {
    let num = 10;
    let resposta = verificarImparOuPar(num);

    res.send("Verificar se o numero é impar ou par " + "Número informado: " + num + " " + resposta);
});

// verificar em qual numero do dia termina o mês
app.get('/estrutura-condicional/termino-mes', (req, res) => {
    let mes = 10;
    let resMes = verificarTerminoMes(mes);

    res.send("Verificar em qual numero do dia termina o mês " + "Número do mês informado: " + mes + " " + resMes);
});

//Seção 3 - Laços de Repetição
// Contar de 1 a 100 usando while
app.get('/laco-repeticao/contagem-cem-while', (req, res) => {
    let resultado = contagemCemWhile();

    res.send("Contar de 1 a 100 usando while " + "Resultados: " + resultado.join(", "));
});

// Sequencia de Fibonacci usando Do While
app.get('/laco-repeticao/sequencia-fibonacci', (req, res) => {
    let resultado = sequenciarFibonacci();

    res.send("Sequência de Fibonacci usando Do While " + "Resultados: " + resultado.join(", "));
});

// Contar de 1 a 100 usando For
app.get('/laco-repeticao/contagem-cem-for', (req, res) => {
    let resultado = contagemCemFor();

    res.send("Contar de 1 a 100 usando For " + "Resultados: " + resultado.join(", "));
});

// Exibir pessoas usando ForEach
app.get('/laco-repeticao/exibir-pessoas', (req, res) => {
    const pessoa1 = "João"
    const pessoa2 = "Maria"
    const pessoa3 = "Carlos"
    const pessoa4 = "Ana"
    let resultado = exibirPessoas(pessoa1, pessoa2, pessoa3, pessoa4);

    res.send("Exibir pessoas usando ForEach " + "Resultados: " + resultado.join(", "));
});

// Seção 4 - Operadores Aritméticos
// Calculo da compra usando operador de adição "+"
app.get('/operadores-aritmeticos/calculo-compra', (req, res) => {
    let tomate = 12.00
    let alface = 18.00
    let carne = 40.59
    let resultado = calcularCompra(tomate, alface, carne);

    res.send("Calculo da compra usando operador de adição \"+\" " + "Valores informados - Tomate: " + tomate + ", Alface: " + alface + ", Carne: " + carne + " " + resultado);
});

// Calculo da idade usando operador de subtração "-"
app.get('/operadores-aritmeticos/calculo-idade', (req, res) => {
    let anoNasc = 1990
    let anoAtual = 2024
    let resultado = calcularIdade(anoNasc, anoAtual);

    res.send("Calculo da idade usando operador de subtração \"-\" " + "Valores informados - Ano de nascimento: " + anoNasc + ", Ano atual: " + anoAtual + " " + resultado);
});

// Calculo do volume da lata usando operador de multiplicação "*"
app.get('/operadores-aritmeticos/calculo-volume-lata', (req, res) => {
    let r = 5
    let h = 10
    let resultado = calcularVolumeLata(r, h);

    res.send("Calculo do volume da lata usando operador de multiplicação \"*\" " + "Valores informados - Raio: " + r + ", Altura: " + h + " " + resultado);
});

// Calculo da raiz usando operador de raiz "Math.sqrt()"
app.get('/operadores-aritmeticos/calculo-raiz', (req, res) => {
    let num2 = 25
    let resultado = calcularRaiz(num2);

    res.send("Calculo da raiz usando operador de raiz \"Math.sqrt()\" " + "Número informado: " + num2 + " " + resultado);
});

// Calculo de conversão de dias usando operador de divisão "/"
app.get('/operadores-aritmeticos/conversao-dias', (req, res) => {
    let dias = 365
    let resultado = converterDias(dias);

    res.send("Calculo de conversão de dias usando operador de divisão \"/\" " + "Número de dias informado: " + dias + " " + resultado);
});

// Calculo de potenciação usando operador de potenciação "**"
app.get('/operadores-aritmeticos/calculo-potencia', (req, res) => {
    let base = 2
    let expoente = 3
    let resultado = calcularPotencia(base, expoente);

    res.send("Calculo de potenciação usando operador de potenciação \"**\" " + "Valores informados - Base: " + base + ", Expoente: " + expoente + " " + resultado);
});

// Calculo de anos bissextos usando operador de resto "%"
app.get('/operadores-aritmeticos/calculo-ano-bissexto', (req, res) => {
    let anoInicial = 2015
    let anoAlvo = 2026
    let resultado = calcularAnoBissexto(anoInicial, anoAlvo);

    res.send("Calculo de anos bissextos usando operador de resto \"%\" " + "Valores informados - Ano inicial: " + anoInicial + ", Ano alvo: " + anoAlvo + " " + resultado);
});

// Seção 5 - Operadores Lógicos
// Verificar aprovação usando operador lógico "E" (&&)
app.get('/operadores-logicos/aprovacao-nota', (req, res) => {
    let nota3 = 8;
    let frequencia = 80;
    let resultado = aprovarNota2(nota3, frequencia);

    res.send("Verificar aprovação usando operador lógico \"E\" (&&) " + "Valores informados - Nota: " + nota3 + ", Frequência: " + frequencia + " " + resultado);
});

// Verificar entrada usando operador lógico "Ou" (||)
app.get('/operadores-logicos/verificar-entrada', (req, res) => {
    let vip = false;
    let ingresso = true;
    let resultado = verificarEntrada(vip, ingresso);

    res.send("Verificar entrada usando operador lógico \"Ou\" (||) " + "Valores informados - VIP: " + vip + ", Ingresso: " + ingresso + " " + resultado);
});

// Verificar bloqueio usando operador lógico "Not" (!)
app.get('/operadores-logicos/verificar-bloqueio', (req, res) => {
    let estaBloqueado = false;
    let resultado = verificarBloqueio(estaBloqueado);

    res.send("Verificar bloqueio usando operador lógico \"Not\" (!) " + "Valores informados - Está bloqueado: " + estaBloqueado + " " + resultado);
});

// Seção 6 - Operadores Relacionais
// Verificar se um numero é maior dez usando operador ">"
app.get('/operadores-relacionais/maior-que-dez', (req, res) => {
    let num3 = 15
    let resultado = maiorQueDez(num3);

    res.send("Verificar se um numero é maior dez usando operador \">\" " + "Valores informados - Número: " + num3 + " " + resultado);
});

// Verificar se um numero é menor cinco usando operador "<"
app.get('/operadores-relacionais/menor-que-cinco', (req, res) => {
    let num4 = 3
    let resultado = menorQueCinco(num4);

    res.send("Verificar se um numero é menor cinco usando operador \"<\" " + "Valores informados - Número: " + num4 + " " + resultado);
});

// Verificar se uma nota é maior ou igual a sete usando operador ">="
app.get('/operadores-relacionais/maior-ou-igual-sete', (req, res) => {
    let nota4 = 7
    let resultado = maiorOuIgualSete(nota4);

    res.send("Verificar se uma nota é maior ou igual a sete usando operador \">=\" " + "Valores informados - Nota: " + nota4 + " " + resultado);
});

// Verificar se uma temperatura é menor ou igual a vinte usando operador "<="
app.get('/operadores-relacionais/menor-ou-igual-vinte', (req, res) => {
    let temperatura = 18
    let resultado = menorOuIgualVinte(temperatura);

    res.send("Verificar se uma temperatura é menor ou igual a vinte usando operador \"<=\" " + "Valores informados - Temperatura: " + temperatura + " " + resultado);
});

// Verificar se uma senha está correta usando operador "=="
app.get('/operadores-relacionais/verificar-senha', (req, res) => {
    let senha = 1234
    let resultado = verificarSenha(senha);

    res.send("Verificar se uma senha está correta usando operador \"==\" " + "Valores informados - Senha: " + senha + " " + resultado);
});

// Verificar se um numero é diferente de zero usando operador "!=="
app.get('/operadores-relacionais/verificar-numero-diferente-zero', (req, res) => {
    let num5 = 5
    let resultado = verificarNumeroDiferenteZero(num5);

    res.send("Verificar se um numero é diferente de zero usando operador \"!==\" " + "Valores informados - Número: " + num5 + " " + resultado);
});

// Seção 7 - Vetores
// Somar os elementos de um vetor usando operador de soma "+"
app.get('/vetores/somar-vetor', (req, res) => {
    let TAM = 10
    let a = [1,2,3,4,5,6,7,8,9,10]
    let b = [2,3,4,5,6,7,8,9,10,11]
    let resultado = somarVetor(a, b, TAM);

    res.send("Somar os elementos de um vetor usando operador de soma \"+\" " + "Valores informados - Vetor A: " + a + ", Vetor B: " + b + " " + resultado);
});

// Remover a primeira e última pontuação de um vetor usando "shift()" e "pop()"
app.get('/vetores/remover-pontuacao', (req, res) => {
    let pontuacoes = [10, 8, 9, 7, 6]
    let resultado = removerPrimeiraUltimaPontuacao(pontuacoes);

    res.send("Remover a primeira e última pontuação de um vetor usando \"shift()\" e \"pop()\" " + "Valores informados - Pontuações: " + pontuacoes + " " + resultado);
});

// Encontrar um valor em um vetor usando
app.get('/vetores/encontrar-valor', (req, res) => {
    let numeros = [1, 2, 3, 4, 5]
    let valor = 3
    let resultado = encontrarValorVetor(numeros, valor);

    res.send("Encontrar um valor em um vetor usando operador \"===\" " + "Valores informados - Vetor: " + numeros + ", Valor: " + valor + " " + resultado);
});

// Calcular o lucro acumulado de vendas por dia
app.get('/vetores/calcular-lucro-venda', (req, res) => {
    let lucroDia = [10, 20, 15, 5, 25]
    let resultado = calcularLucroVendaPorDia(lucroDia);

    res.send("Calcular o lucro acumulado de vendas por dia usando operador de soma \"+\" " + "Valores informados - Lucro por dia: " + lucroDia + " " + resultado);
});

// logs
console.log("Rotas disponíveis:");

console.log("http://localhost:4000/declarar-variavel/calculo-nota");
console.log("http://localhost:4000/declarar-variavel/calculo-volume-cubo");
console.log("http://localhost:4000/declarar-variavel/aprovacao-nota");

console.log("http://localhost:4000/estrutura-condicional/multiplo-de-cinco");
console.log("http://localhost:4000/estrutura-condicional/idade");
console.log("http://localhost:4000/estrutura-condicional/sinal-numero");
console.log("http://localhost:4000/estrutura-condicional/impar-ou-par");
console.log("http://localhost:4000/estrutura-condicional/termino-mes");

console.log("http://localhost:4000/laco-repeticao/contagem-cem-while");
console.log("http://localhost:4000/laco-repeticao/sequencia-fibonacci");
console.log("http://localhost:4000/laco-repeticao/contagem-cem-for");
console.log("http://localhost:4000/laco-repeticao/exibir-pessoas");

console.log("http://localhost:4000/operadores-aritmeticos/calculo-compra");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-idade");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-volume-lata");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-raiz");
console.log("http://localhost:4000/operadores-aritmeticos/conversao-dias");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-potencia");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-ano-bissexto");

console.log("http://localhost:4000/operadores-logicos/aprovacao-nota");
console.log("http://localhost:4000/operadores-logicos/verificar-entrada");
console.log("http://localhost:4000/operadores-logicos/verificar-bloqueio");

console.log("http://localhost:4000/operadores-relacionais/maior-que-dez");
console.log("http://localhost:4000/operadores-relacionais/menor-que-cinco");
console.log("http://localhost:4000/operadores-relacionais/maior-ou-igual-sete");
console.log("http://localhost:4000/operadores-relacionais/menor-ou-igual-vinte");
console.log("http://localhost:4000/operadores-relacionais/verificar-senha");
console.log("http://localhost:4000/operadores-relacionais/verificar-numero-diferente-zero");

console.log("http://localhost:4000/vetores/somar-vetor");
console.log("http://localhost:4000/vetores/remover-pontuacao");
console.log("http://localhost:4000/vetores/encontrar-valor");
console.log("http://localhost:4000/vetores/calcular-lucro-venda");

let dados = {
    'nome' : 'Everson',
    'sobrenome' : 'Bacelli',
    'profissao' : 'Professor'
}

console.log(dados);

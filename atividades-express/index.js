import express from 'express'

// imports
import { calcularMedia, calcularVolumeCubo, aprovarNota } from "./Modulos/DeclararVariavel.js";
import { verificarMultiploDeCinco, verificarIdadeMaisDezoito, verificarSinalNumero, verificarImparOuPar, verificarTerminoMes } from "./Modulos/EstruturaCondicional.js";
import { contagemCemWhile, sequenciarFibonacci, contagemCemFor, exibirPessoas } from "./modulos/LacoRepeticao.js";
import { calcularCompra, calcularIdade, calcularVolumeLata, calcularRaiz, converterDias, calcularPotencia, calcularAnoBissexto } from "./modulos/OperadoresAritmeticos.js";
import { aprovarNota2, verificarEntrada, verificarBloqueio } from "./modulos/OperadoresLogicos.js";
import { maiorQueDez, menorQueCinco, maiorOuIgualSete, menorOuIgualVinte, verificarSenha, verificarNumeroDiferenteZero } from "./modulos/OperadoresRelacionais.js";
import { somarVetor, removerPrimeiraUltimaPontuacao, encontrarValorVetor, calcularLucroVendaPorDia } from "./modulos/Vetores.js";
import { paraBoolean } from "./modulos/paraBoolean.js";

const app = express();

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});

app.use(express.json());

// Seção 1 - Declarar Variável
// Calculo da nota
app.get('/declarar-variavel/calculo-nota/:nota1/:nota2', (req, res) => {
    let {nota1, nota2} = req.params;
    let res1 = calcularMedia(nota1, nota2);

    let exibirMedia = {
        'media' : res1
    };

    res.json(exibirMedia);
});

// Calcular Volume do Cubo
app.get('/declarar-variavel/calculo-volume-cubo', (req, res) => {
    let l = req.query;
    let res2 = calcularVolumeCubo(l);

    let exibirVolumeCubo = {
        'volume' : res2
    }

    res.json(exibirVolumeCubo);
});

// Aprovação nota
app.get('/declarar-variavel/aprovacao-nota/:nota', (req, res) => {
    let nota = req.params;
    let aprovar = aprovarNota(nota);

    let exibirAprovacao = {
        'aprovado' : aprovar
    }

    res.json(exibirAprovacao);
});

//Seção 2 - Estruturas Condicionais
// Verificar se o numero é multiplo de cinco
app.get('/estrutura-condicional/multiplo-de-cinco', (req, res) => {
    let numero = req.query;
    let resp = verificarMultiploDeCinco(numero);

    let exibirSeMultiploDeCinco = {
        'multiplo' : resp
    }

    res.json(exibirSeMultiploDeCinco);
});

// verificar se é maior ou menor de idade
app.get('/estrutura-condicional/idade/:idade', (req, res) => {
    let idade = req.params;
    let resp = verificarIdadeMaisDezoito(idade);

    let exibirCondicao = {
        'maior_de_idade' : resp
    }

    res.json(exibirCondicao);
});

//Verificar se um numero é positivo negativo ou neutro
app.get('/estrutura-condicional/sinal-numero', (req, res) => {
    let numInt = req.query;
    let resp = verificarSinalNumero(numInt);

    let exibirSinalNumero = {
        'sinal' : resp
    }

    res.json(exibirSinalNumero);
});

// verificar se o numero é impar ou par
app.get('/estrutura-condicional/impar-ou-par/:num', (req, res) => {
    let num = req.params;
    let resposta = verificarImparOuPar(num);

    let exibirImparOuPar = {
        'tipo' : resposta
    }

    res.json(exibirImparOuPar);
});

// verificar em qual numero do dia termina o mês
app.get('/estrutura-condicional/termino-mes', (req, res) => {
    let mes = req.query;
    let resMes = verificarTerminoMes(mes);

    let exibirTerminoMes = {
        'termino' : resMes
    }

    res.json(exibirTerminoMes);
});

//Seção 3 - Laços de Repetição
// Contar de 1 a 100 usando while
app.get('/laco-repeticao/contagem-cem-while', (req, res) => {
    let resultado = contagemCemWhile();

    let exibirContagem = {
        'contagem' : resultado
    }

    res.json(exibirContagem);
});

// Sequencia de Fibonacci usando Do While
app.get('/laco-repeticao/sequencia-fibonacci', (req, res) => {
    let resultado = sequenciarFibonacci();

    let exibirFibonacci = {
        'sequencia' : resultado
    }

    res.json(exibirFibonacci);
});

// Contar de 1 a 100 usando For
app.get('/laco-repeticao/contagem-cem-for', (req, res) => {
    let resultado = contagemCemFor();

    let exibirContagemCem = {
        'contagem' : resultado
    }

    res.json(exibirContagemCem);
});

// Exibir pessoas usando ForEach
app.get('/laco-repeticao/exibir-pessoas/:pessoa1/:pessoa2/:pessoa3/:pessoa4', (req, res) => {
    let {pessoa1, pessoa2, pessoa3, pessoa4} = req.params;
    let resultado = exibirPessoas(pessoa1, pessoa2, pessoa3, pessoa4);

    let exibirListaPessoas = {
        'lista' : resultado
    }

    res.json(exibirListaPessoas);
});

// Seção 4 - Operadores Aritméticos
// Calculo da compra usando operador de adição "+"
app.get('/operadores-aritmeticos/calculo-compra', (req, res) => {
    let {tomate, alface, carne} = req.query;
    let resultado = calcularCompra(tomate, alface, carne);

    let exibirCompra = {
        'compra' : resultado
    }

    res.json(exibirCompra);
});

// Calculo da idade usando operador de subtração "-"
app.get('/operadores-aritmeticos/calculo-idade/:anoNasc/:anoAtual', (req, res) => {
    let {anoNasc, anoAtual} = req.params;
    let resultado = calcularIdade(anoNasc, anoAtual);

    let exibirIdade = {
        'idade' : resultado
    }

    res.json(exibirIdade);
});

// Calculo do volume da lata usando operador de multiplicação "*"
app.get('/operadores-aritmeticos/calculo-volume-lata', (req, res) => {
    let {raio, altura} = req.query;
    let resultado = calcularVolumeLata(raio, altura);

    let exibirVolumeLata = {
        'volume' : resultado
    }

    res.json(exibirVolumeLata);
});

// Calculo da raiz usando operador de raiz "Math.sqrt()"
app.get('/operadores-aritmeticos/calculo-raiz/:num2', (req, res) => {
    let num2 = req.params;
    let resultado = calcularRaiz(num2);

    let exibirRaiz = {
        'raiz' : resultado
    }

    res.json(exibirRaiz);
});

// Calculo de conversão de dias usando operador de divisão "/"
app.get('/operadores-aritmeticos/conversao-dias', (req, res) => {
    let dias = req.query;
    let resultado = converterDias(dias);

    res.json(resultado);
});

// Calculo de potenciação usando operador de potenciação "**"
app.get('/operadores-aritmeticos/calculo-potencia/:base/:expoente', (req, res) => {
    let {base, expoente} = req.params;
    let resultado = calcularPotencia(base, expoente);
    
    let exibirPotencia = {
        'potencia' : resultado
    }

    res.json(exibirPotencia);
});

// Calculo de anos bissextos usando operador de resto "%"
app.get('/operadores-aritmeticos/calculo-ano-bissexto', (req, res) => {
    let {anoInicial, anoAlvo} = req.query;
    let resultado = calcularAnoBissexto(anoInicial, anoAlvo);

    let exibirAnosBissextos = {
        'resultado' : resultado
    }

    res.json(exibirAnosBissextos);
});

// Seção 5 - Operadores Lógicos
// Verificar aprovação usando operador lógico "E" (&&)
app.get('/operadores-logicos/aprovacao-nota/:nota3/:frequencia', (req, res) => {
    let {nota3, frequencia} = req.params;
    let resultado = aprovarNota2(nota3, frequencia);

    let exibirAprovacaoNota = {
        'aprovado' : resultado 
    }

    res.json(exibirAprovacaoNota);
});

// Verificar entrada usando operador lógico "Ou" (||)
app.get('/operadores-logicos/verificar-entrada', (req, res) => {
    let {vip, ingresso} = req.query;
    vip = paraBoolean(vip);
    ingresso = paraBoolean(ingresso);
    let resultado = verificarEntrada(vip, ingresso);

    let exibirEntrada = {
        'entrada' : resultado
    }

    res.json(exibirEntrada);
});

// Verificar bloqueio usando operador lógico "Not" (!)
app.get('/operadores-logicos/verificar-bloqueio/:estaBloqueado', (req, res) => {
    let estaBloqueado = paraBoolean(req.params);
    let resultado = verificarBloqueio(estaBloqueado);

    let exibirBloqueio = {
        'status' : resultado
    }

    res.json(exibirBloqueio);
});

// Seção 6 - Operadores Relacionais
// Verificar se um numero é maior dez usando operador ">"
app.get('/operadores-relacionais/maior-que-dez', (req, res) => {
    let num3 = req.query;
    let resultado = maiorQueDez(num3);

    let exibirMaiorQueDez = {
        'maior que dez' : resultado
    }

    res.json(exibirMaiorQueDez);
});

// Verificar se um numero é menor cinco usando operador "<"
app.get('/operadores-relacionais/menor-que-cinco/:num4', (req, res) => {
    let num4 = req.params;
    let resultado = menorQueCinco(num4);

    let exibirMenorQueCinco = {
        'menor que cinco' : resultado
    }
    res.json(exibirMenorQueCinco);
});

// Verificar se uma nota é maior ou igual a sete usando operador ">="
app.get('/operadores-relacionais/maior-ou-igual-sete', (req, res) => {
    let nota4 = req.query;
    let resultado = maiorOuIgualSete(nota4);

    let exibirMaiorOuIgualSete = {
        'maior ou igual a sete' : resultado
    }

    res.json(exibirMaiorOuIgualSete);
});

// Verificar se uma temperatura é menor ou igual a vinte usando operador "<="
app.get('/operadores-relacionais/menor-ou-igual-vinte/:temperatura', (req, res) => {
    let temperatura = req.params;
    let resultado = menorOuIgualVinte(temperatura);

    let exibirMenorOuIgualVinte = {
        'menor ou igual a vinte' : resultado
    }

    res.json(exibirMenorOuIgualVinte);
});

// Verificar se uma senha está correta usando operador "=="
app.get('/operadores-relacionais/verificar-senha', (req, res) => {
    let senha = req.query;
    let resultado = verificarSenha(senha);

    let validarSenha = {
        'validação' : resultado 
    }

    res.json(validarSenha);
});

// Verificar se um numero é diferente de zero usando operador "!=="
app.get('/operadores-relacionais/verificar-numero-diferente-zero/:num5', (req, res) => {
    let num5 = req.params
    let resultado = verificarNumeroDiferenteZero(num5);

    let exibirNumeroDiferenteZero = {
        'numero' : resultado
    }

    res.json(exibirNumeroDiferenteZero);
});

// Seção 7 - Vetores
// Somar os elementos de um vetor usando operador de soma "+"
app.get('/vetores/somar-vetor', (req, res) => {
    let {a, b, TAM} = req.query;
    let vetorA = a.split(',').map(Number);
    let vetorB = b.split(',').map(Number);
    let tamanho = Number(TAM);
    let resultado = somarVetor(vetorA, vetorB, tamanho);

    let realizarSomatoria = {
        'a' : a,
        'b' : b,
        'somatoria' : resultado
    }

    res.json(realizarSomatoria);
});

// Remover a primeira e última pontuação de um vetor usando "shift()" e "pop()"
app.get('/vetores/remover-pontuacao/:pontuacoes', (req, res) => {
    let pontuacoes = req.params;
    let pts = pontuacoes.split(',').map(Number);
    let resultado = removerPrimeiraUltimaPontuacao(pts);

    let retirarPontuacao = {
        'ptsOriginal' : pts,
        'ptsRemocao' : resultado
    }

    res.json(retirarPontuacao);
});

// Encontrar um valor em um vetor
app.get('/vetores/encontrar-valor', (req, res) => {
    let {numeros, valor} = req.query;
    let vetorNumeros = numeros.split(',').map(Number);
    let valorNumerico = Number(valor);
    let resultado = encontrarValorVetor(vetorNumeros, valorNumerico);

    let procurarValor = {
        'valor encontrado' : resultado
    }

    res.json(procurarValor);
});

// Calcular o lucro acumulado de vendas por dia
app.get('/vetores/calcular-lucro-venda/:lucroDia', (req, res) => {
    let {lucroDia} = req.params;
    let vetorLucroDia = lucroDia.split(',').map(Number);
    let resultado = calcularLucroVendaPorDia(vetorLucroDia);

    let exibirLucro = {
        'lucro por dia' : vetorLucroDia,
        'lucro total' : resultado
    }

    res.json(exibirLucro);
});

// logs
console.log("--- ROTAS DISPONÍVEIS ---");

// Rotas que usam PARAMS (Valores direto na URL: /valor1/valor2)
console.log("\n[ TIPO PARAMS ]");
console.log("http://localhost:4000/declarar-variavel/calculo-nota/:nota1/:nota2");
console.log("http://localhost:4000/declarar-variavel/aprovacao-nota/:nota");
console.log("http://localhost:4000/estrutura-condicional/idade/:idade");
console.log("http://localhost:4000/estrutura-condicional/impar-ou-par/:num");
console.log("http://localhost:4000/laco-repeticao/exibir-pessoas/:pessoa1/:pessoa2/:pessoa3/:pessoa4");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-idade/:anoNasc/:anoAtual");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-raiz/:num2");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-potencia/:base/:expoente");
console.log("http://localhost:4000/operadores-logicos/aprovacao-nota/:nota3/:frequencia");
console.log("http://localhost:4000/operadores-logicos/verificar-bloqueio/:estaBloqueado");
console.log("http://localhost:4000/operadores-relacionais/menor-que-cinco/:num4");
console.log("http://localhost:4000/operadores-relacionais/menor-ou-igual-vinte/:temperatura");
console.log("http://localhost:4000/operadores-relacionais/verificar-numero-diferente-zero/:num5");
console.log("http://localhost:4000/vetores/remover-pontuacao/:pontuacoes");
console.log("http://localhost:4000/vetores/calcular-lucro-venda/:lucroDia");

// Rotas que usam QUERY (Filtros após a interrogação: ?chave=valor)
console.log("\n[ TIPO QUERY ]");
console.log("http://localhost:4000/declarar-variavel/calculo-volume-cubo");
console.log("http://localhost:4000/estrutura-condicional/multiplo-de-cinco");
console.log("http://localhost:4000/estrutura-condicional/sinal-numero");
console.log("http://localhost:4000/estrutura-condicional/termino-mes");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-compra");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-volume-lata");
console.log("http://localhost:4000/operadores-aritmeticos/conversao-dias");
console.log("http://localhost:4000/operadores-aritmeticos/calculo-ano-bissexto");
console.log("http://localhost:4000/operadores-logicos/verificar-entrada");
console.log("http://localhost:4000/operadores-relacionais/maior-que-dez");
console.log("http://localhost:4000/operadores-relacionais/maior-ou-igual-sete");
console.log("http://localhost:4000/operadores-relacionais/verificar-senha");
console.log("http://localhost:4000/vetores/somar-vetor");
console.log("http://localhost:4000/vetores/encontrar-valor");

// Rotas sem parâmetros (Estáticas)
console.log("\n[ SEM PARÂMETROS ]");
console.log("http://localhost:4000/laco-repeticao/contagem-cem-while");
console.log("http://localhost:4000/laco-repeticao/sequencia-fibonacci");
console.log("http://localhost:4000/laco-repeticao/contagem-cem-for");

// modulos externos
import express from 'express';

// modulos internos
import { times } from './bd.js';
import { pesquisar, definirMelhoresTimesPorPontos, definirTimesPorGols, definirTimesProximaFase, calcularAproveitamento } from './opc.js';

const app = express()

app.get('/times/por-gols', (req, res) => {
  const melhoresTimesPorGols = definirTimesPorGols();
  res.json(melhoresTimesPorGols);
})

app.get('/times/oito-melhores', (req, res) => {
  const melhoresTimes = definirMelhoresTimesPorPontos();
  res.json(melhoresTimes.slice(0, 8));
})

app.get('/times/proxima-fase', (req, res) => {
  const melhoresTimes = definirTimesProximaFase();
  res.json(melhoresTimes.slice(0, 8));
});

app.get('/times/aproveitamento', (req, res) => {
  const timesComAproveitamento = calcularAproveitamento();
  res.json(timesComAproveitamento);
})

app.get('/times/melhores', (req, res) => {
  const melhoresTimes = definirMelhoresTimesPorPontos();
  res.json(melhoresTimes);
})

app.get('/times/:quantidade', (req, res) => {
  let quantidade = parseInt(req.params.quantidade);
  if (quantidade > times.length) {
    quantidade = times.length;
  }
  const timesSelecionados = times.slice(0, quantidade);
  res.json(timesSelecionados);
})

app.get('/times/:timePesquisado', (req, res) => {
  let timePesquisado = req.params.timePesquisado;
  const resultado = pesquisar(timePesquisado);
  res.json(resultado);
})

app.get('/', (req, res) => {
  res.send('Hello World')
}) 

app.get('/times', (req, res) => {
  res.json(times)
}) 

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
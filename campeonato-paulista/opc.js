import { times } from './bd.js'

function pesquisar(timePesquisado) {
    let pesquisa = timePesquisado.toLowerCase();

    let timeEncontrado = null;
    times.forEach(function(time, index) {
        let timeBd = time.time.toLowerCase();
        if (pesquisa == timeBd) {
            timeEncontrado = time;
        };
    });
    return timeEncontrado;
}

function definirMelhoresTimesPorPontos() {
    let timesOrdenados = times.map(function(time) {
        time.pts = parseInt(time.pts);
        return time;
    });

    timesOrdenados.sort(function(a, b) {
            return b.pts - a.pts;
        });

        return timesOrdenados;
}

function definirTimesPorGols() {
    let timersOrdenados = times.map(function(time) {
        time.sg = parseInt(time.sg);
        return time;
    });

    timersOrdenados.sort(function(a, b) {
        return b.sg - a.sg;
    });

    let melhoresTimesPorGols = timersOrdenados.slice(0, 4);
    return melhoresTimesPorGols;
}

function definirMelhoresTimesPorVitorias() {
    let timesOrdenados = times.map(function(time) {
        time.v = parseInt(time.v);
        return time;
    })
    return timesOrdenados.sort(function(a, b) {
        return b.v - a.v;
    });
}

function definirTimesProximaFase() {
    let melhoresTimes = definirMelhoresTimesPorPontos();
    let melhoresTimesPorVitorias = definirMelhoresTimesPorVitorias();
    let melhoresTimesPorGols = definirTimesPorGols();

    let timesProximaFase = melhoresTimes.concat(melhoresTimesPorGols, melhoresTimesPorVitorias);
    timesProximaFase.sort(function(a, b) {
        return b.pts - a.pts || b.v - a.v || b.sg - a.sg;
    });

    return timesProximaFase;
}

function calcularAproveitamento() {
    let timesOrdenados = times.map(function(time) {
        time.pts = parseInt(time.pts);
        time.v = parseInt(time.v);
        time.sg = parseInt(time.sg);
        time.j = parseInt(time.j);

        let pontosPossiveis = time.j * 3;
        time.aproveitamento = ((time.pts / pontosPossiveis) * 100).toFixed(2) + '%';
        return time;
    });

    timesOrdenados.sort(function(a, b) {
        return (b.pts - a.pts) || (b.v - a.v) || (b.sg - a.sg);
    });

    return timesOrdenados;
}
export { pesquisar, definirMelhoresTimesPorPontos, definirTimesPorGols, definirTimesProximaFase, calcularAproveitamento };
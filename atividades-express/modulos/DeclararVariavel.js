//Seção 1 - CalculaMedia (let)
function calcularMedia(nota1, nota2) {
    let media = (Number(nota1) + Number(nota2)) / 2;

    return media;
}

//Seção 2 - VolumeCubo (const)
function calcularVolumeCubo(l) {
    const v = Number(l) * Number(l) * Number(l);

    return v;
}

//Seção 3 -  NotaAprovacao (var)

function aprovarNota(nota) {

    if (Number(nota) >= 7) {
        return true
    }
    return false
}
export{calcularMedia, calcularVolumeCubo, aprovarNota};

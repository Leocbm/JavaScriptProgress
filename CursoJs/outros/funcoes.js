function soma(operadorA, operadorB) {
    var resultadoC = operadorA + operadorB;
    return resultadoC;
}

function olaGama(nome) {
    console.log("ola gama! voce é o " + nome);
}

var resultadoDaSoma = soma(1, 2);
var novo = soma(4, 54);

console.log(resultadoDaSoma);
console.log(novo);

olaGama ('leo')
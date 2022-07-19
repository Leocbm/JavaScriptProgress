var numero = 10;
var tabuada = 6;
var achou = false;
var valor = 0;
var sorteado = 10;

for (var i = 0; i < 10; i++) {

    console.log(tabuada + " x " + i + " = " + (tabuada * i));

}

while (!achou) {
    valor += 1;
    if (sorteado === valor) {
        console.log("parabens voce encontrou o valor " + valor)
        achou = true;
    } else {
        console.log("não encontrado " + valor)
    }
}
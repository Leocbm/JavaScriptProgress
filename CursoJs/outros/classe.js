class matematica {

    soma(A, B) {
        return A + B
    }
    sub(A, B) {
        return A - B
    }
}
// new = criando um objeto em memória
var instanciamat = new matematica;

var result = instanciamat.soma(4,7);
console.log(result);
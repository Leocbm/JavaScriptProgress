// criando as variaveis e inserindo valores
var valor1 = 20;
var valor2 = 10;
var nome = 'leo';

var soma = valor1 + valor2;
if (soma < 50) {
    console.log("O valor " + soma + " é menor que 50");
} else if (soma === 50) {
    console.log("o valor " + soma + " é igual 50");
} else {
    console.log("o valor " + soma + " é maior que 50");
}

switch (nome) {
    case 'leo':
        console.log("seu nome é leo");
        break;
    case 'lucas':
        console.log("seu nome é lucas");
            break;
    default:
        console.log("n te conheço");
}
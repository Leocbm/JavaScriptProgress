//sem arrow function
function soma(x, y) {
    return x + y;
};

console.log(soma(3, 5));

const multiplicacao = function(x, y) {
    return x * y;
};

console.log(multiplicacao(5, 5))

//com arrow function

const dividir = (x, y) => {
    return x/y;
};

const objeto = () => ({ nome: 'leo', sobrenome: 'cunha'});

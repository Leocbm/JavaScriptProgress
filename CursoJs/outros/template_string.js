// sem template string
let nome = 'leo';
let sobrenome = 'cunha';
let profissao = 'blockchain developer';

console.log(
    'Olá, eu sou ' +
    nome +
    ' ' +
    sobrenome +
    ' minha profissão é: ' +
    profissao
)

//com template string

console.log(`Olá, meu nome é ${nome} ${sobrenome} e minha profissão é: ${profissao}`);
console.log(`o resultado da soma de 1 + 1 = ${1 + 1}`);
console.log(`o objeto json ${{chave: 'valor'}}`);

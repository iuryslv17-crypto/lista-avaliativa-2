const input = require('prompt-sync')();
let numero = Number(input('Digite um número: '));
if (numero > 0) {
    console.log('O número é positivo.');
} else {
    console.log('O número não é positivo.');
}
if (numero % 2 === 0) {
    console.log('O número é par.');
} else {
    console.log('O número é ímpar.');
}